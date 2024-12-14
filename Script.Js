function showDiv(divId) {
  // Ocultar todos los divs
  var contentDivs = document.getElementsByClassName("content-div");
  for (var i = 0; i < contentDivs.length; i++) {
    contentDivs[i].style.display = "none";
  }
  // Mostrar el div seleccionado
  document.getElementById(divId).style.display = "block";
}
