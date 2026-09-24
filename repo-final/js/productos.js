
function formatearPrecio(numero) {
  return "$" + numero.toLocaleString("es-CL");
}

function cargarProductos(idContenedor, productos) {
  const contenedor = document.getElementById(idContenedor);
  if (!contenedor) return;

  contenedor.innerHTML = ""; // limpia contenido previo antes de renderizar

  productos.forEach((producto) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-producto");

    tarjeta.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p class="precio">${formatearPrecio(producto.precio)}</p>
      <button type="button" onclick="agregarAlCarrito(${producto.id})">
        Añadir al carrito
      </button>
    `;

    contenedor.appendChild(tarjeta);
  });
}
