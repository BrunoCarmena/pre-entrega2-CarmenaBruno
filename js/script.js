let nombreUsuario = prompt("Hola, ¿cuál es tu nombre?");
let edadUsuario = parseInt(prompt(`Hola ${nombreUsuario}, ¿cuántos años tienes?`));
let saldoCuenta = parseFloat(prompt(`Hola ${nombreUsuario}, ¿cuánto dinero tienes en tu cuenta?`));

let producto1 = {
    nombre: "Camisetas",
    precio: 30,
    categoria: "Camisetas",
};

let producto2 = {
    nombre: "Pantalón",
    precio: 40,
    categoria: "Pantalones",
};

let producto3 = {
    nombre: "Zapatillas  Running",
    precio: 80,
    categoria: "Zapatillas",
};

let producto4 = {
    nombre: "Shorts",
    precio: 25,
    categoria: "Pantalones",
};

let producto5 = {
    nombre: "Camperas",
    precio: 60,
    categoria: "Camperas",
};

let producto6 = {
    nombre: "Medias",
    precio: 10,
    categoria: "Medias",
};

let productos = [producto1, producto2, producto3, producto4, producto5, producto6];

function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";
    productos.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });
    alert(mensaje);
}

function filtrarPorCategoria(categoria) {
    return productos.filter(producto => producto.categoria.toLowerCase() === categoria);
}

function buscarProducto(nombre) {
    return productos.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
}

mostrarProductos();

let categoriaElegida = prompt("Ingresa la categoría que deseas ver:");
let productosFiltrados = filtrarPorCategoria(categoriaElegida);

if (productosFiltrados.length > 0) {
    let mensaje = `Productos en la categoría ${categoriaElegida}:\n`;
    productosFiltrados.forEach(producto => {
        mensaje += `${producto.nombre} - $${producto.precio}\n`;
    });
    alert(mensaje);
} else {
    alert(`No hay productos en la categoría ${categoriaElegida}`);
}

let nombreBuscado = prompt("Ingresa el nombre del producto que deseas buscar:");
let productoEncontrado = buscarProducto(nombreBuscado);

if (productoEncontrado) {
    let confirmarCompra = confirm(`Se encontró el producto ${productoEncontrado.nombre} - $${productoEncontrado.precio}.\n¿Deseas comprarlo?`);
    if (confirmarCompra) {
        if (saldoCuenta >= productoEncontrado.precio) {
            saldoCuenta -= productoEncontrado.precio;
            alert(`¡Compra realizada con éxito!\nNuevo saldo: $${saldoCuenta}`);
        } else {
            alert("Saldo insuficiente para realizar la compra");
        }
    } else {
        alert("Gracias por visitarnos. ¡Hasta luego!");
    }
} else {
    alert(`No se encontró el producto ${nombreBuscado}`);
}

