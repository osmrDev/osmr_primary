
function clearLayer(layer) {

  for (var i = layer.children.length - 1; i >= 0; i--) {	layer.removeChild(layer.children[i]);};

}
