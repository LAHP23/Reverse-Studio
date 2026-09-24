// uwu

let carrito = [];

function actualizarContadorCarrito() {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = carrito.length;
  }
}

function agregarAlCarrito(idProducto) {

  const producto = typeof listaProductos !== "undefined"
    ? listaProductos.find((p) => p.id === idProducto)
    : null;

  if (!producto) return;

  carrito.push(producto);
  actualizarContadorCarrito();
}

document.addEventListener("DOMContentLoaded", actualizarContadorCarrito);
