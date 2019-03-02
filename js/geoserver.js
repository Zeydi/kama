//URL Geoserver
var url_geoserver = "http://localhost:8080/geoserver/wms";
//url des couches

var access_layer_adm1 = "formation_gs:tun_gouvernorats_utm";
var access_layer_adm2 = "formation_gs:clients_utm";
var access_layer_adm3 = "formation_gs:pdv";
var access_layer_adm4 = "formation_gs:roads_utm";
var access_layer_adm5 = "formation_gs:tunis_phr_8bits";

//déclaration des couches openlayers
//déclaration de couche 1 openlayers
var lyr_adm1 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: url_geoserver,
    params: { LAYERS: access_layer_adm1, TILED: "true" }
  }),
  title: "Gouvernorats"
});
lyr_adm1.setVisible(true);

//déclaration de couche 2 openlayers
var lyr_adm2 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: url_geoserver,
    params: { LAYERS: access_layer_adm2, TILED: "true" }
  }),
  title: "clients_utm"
});
lyr_adm2.setVisible(true);

//déclaration de couche 3 openlayers
var lyr_adm3 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: url_geoserver,
    params: { LAYERS: access_layer_adm3, TILED: "true" }
  }),
  title: "pdv"
});
lyr_adm3.setVisible(true);

//déclaration de couche 4 openlayers
var lyr_adm4 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: url_geoserver,
    params: { LAYERS: access_layer_adm4, TILED: "true" }
  }),
  title: "roads_utm"
});
lyr_adm4.setVisible(true);

//déclaration de couche 5 openlayers
var lyr_adm5 = new ol.layer.Tile({
  source: new ol.source.TileWMS({
    url: url_geoserver,
    params: { LAYERS: access_layer_adm5, TILED: "true" }
  }),
  title: "tunis_phr_8bits"
});
lyr_adm5.setVisible(true);

//déclaration de la liste des couches à afficher
var layersList = [lyr_adm1, lyr_adm2, lyr_adm3, lyr_adm4, lyr_adm5];

var map = new ol.Map({
  controls: ol.control.defaults().extend([
    new ol.control.LayerSwitcher({ tipLabel: "Layers" }),
    new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: "EPSG:3857"
    }),
    new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: "EPSG:4326"
    })
  ]),
  target: "map",
  layers: layersList,
  view: new ol.View({
    projection: "EPSG:4326",
    center: [9.37884, 34.240721],
    zoom: 7
  })
});
