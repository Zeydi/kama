var features;
$.getJSON("data/sites2g.geojson", function(data) {
  features = data;
});
console.log(features);
var input = document.getElementById("capitals");
var awesomplete = new Awesomplete(input, {
  minChars: 1,
  maxItems: 20,
  autoFirst: true
});
var list;
for (x in features) {
  var props = features[x].getProperties();
  list.append({
    label: props["SITE_NAME"] + "-" + props["N_SEC"],
    value: props["SI"]
  });
}
awesomplete.list = list;
