"use strict";
exports.__esModule = true;
exports.Producto = void 0;
var Producto = /** @class */ (function () {
    function Producto(descripcion, precio, cantidad) {
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    return Producto;
}());
exports.Producto = Producto;
var productos = [];
cargaMasivaProductos();
console.log("--------------------------------------------------------");
console.log("---------- BIENVENIDO AL CATALOGO DE VEHICULOS ---------");
console.log("------------LOS VEHICULOS SON LOS SIGUIENTES------------");
console.log("--------------------------------------------------------");
listarProductos();
function cargaMasivaProductos() {
    productos.push({ descripcion: "CHEVROLET DIMAX ", precio: 20034340, cantidad: 5 });
    productos.push({ descripcion: "TOYOTA YARIS ", precio: 203400, cantidad: 5 });
    productos.push({ descripcion: "TOYOTA COROLLA ", precio: 205400, cantidad: 5 });
    productos.push({ descripcion: "SUSUKI VITARA ", precio: 203400, cantidad: 5 });
    productos.push({ descripcion: "NISSAN NAVARA ", precio: 2023200, cantidad: 5 });
}
function listarProductos() {
    productos.forEach(function (data) {
        console.log("DESCRIPCION: " + data.descripcion + " | PRECIO: " + data.precio + " | CANTIDAD: " + data.cantidad);
    });
}
