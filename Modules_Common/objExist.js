
function objExist(obj) {

  if(obj == null || obj == undefined) {
    return(false);
  }
  else {
    return(true);
  }
}


function pathExist(path) {
  var http = new XMLHttpRequest();
  http.open('HEAD', path, false);
  http.send();
  return ( http.status != 404 )
}
