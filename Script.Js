const blurPointer = document.getElementById("blurPointer");

// Función para hacer que el puntero siga el mouse
document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Coloca el div del puntero en la posición del mouse
  blurPointer.style.left = `${mouseX - blurPointer.offsetWidth / 2}px`;
  blurPointer.style.top = `${mouseY - blurPointer.offsetHeight / 2}px`;
});

// Cuando el puntero deja la página, restablecer el blur
document.addEventListener("mouseleave", () => {
  blurPointer.style.filter = "blur(5px)";
  blurPointer.style.width = "20px";
  blurPointer.style.height = "20px";
});
