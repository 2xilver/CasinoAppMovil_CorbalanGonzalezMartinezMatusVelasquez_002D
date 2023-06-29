import { Injectable } from '@angular/core';
import { Food } from '../pages/home/home.page';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private carrito: Food[] = [];
  private carritoKey = 'carrito';
  private cantidadesIniciales: { [id: number]: number } = {};

  constructor(private platform: Platform) {
    this.carritoKey = 'carrito';
    this.cargarCarritoDesdeAlmacenamiento();
  }

  agregarProducto(producto: Food, cantidad: number): void {
    const productoExistente = this.carrito.find((p) => p.id === producto.id);

    if (productoExistente) {
      this.actualizarCantidadProductoExistente(productoExistente, cantidad);
    } else {
      this.agregarNuevoProducto(producto, cantidad);
    }
    this.guardarCarritoEnAlmacenamiento();
  }

  private agregarNuevoProducto(producto: Food, cantidad: number): void {
    const productoNuevo: Food = { ...producto, cantidad };
    this.carrito.push(productoNuevo);
  }

  private actualizarCantidadProductoExistente(productoExistente: Food, cantidad: number): void {
    productoExistente.cantidad += cantidad;
    console.log('actualizar',this.carrito)
  }

  eliminarProducto(producto: Food): void {
    const index = this.carrito.findIndex((p) => p.id === producto.id);
    if (index > -1) {
      this.carrito.splice(index, 1);
    }
    this.setCantidadInicial(index, 0);
    this.guardarCarritoEnAlmacenamiento();
    console.log('eliminar',this.carrito)
  }

  vaciarCarrito(): void {
    console.log('vaciar',this.carrito)
    this.carrito = [];
    this.guardarCarritoEnAlmacenamiento();
  }

 

  guardarCarritoEnAlmacenamiento(): void {
    if (this.platform.is('cordova') || this.platform.is('capacitor')) {
      // Almacenamiento local en dispositivos móviles
      this.platform.ready().then(() => {
        localStorage.setItem(this.carritoKey, JSON.stringify(this.carrito));
      });
    } else {
      // Almacenamiento local en el navegador web
      localStorage.setItem(this.carritoKey, JSON.stringify(this.carrito));
      console.log('guardar',this.carrito)
    }
  }

  cargarCarritoDesdeAlmacenamiento(): void {
    const carritoString = localStorage.getItem(this.carritoKey);
    console.log(localStorage.getItem(this.carritoKey))
    if (carritoString) {
      this.carrito = JSON.parse(carritoString);
      console.log('cargarif',this.carrito)
    } else {
      this.carrito = [];
      console.log('cargarelse',this.carrito)
    }
  }

  obtenerCarrito(): Food[] {
    this.cargarCarritoDesdeAlmacenamiento();
    console.log('obtener',this.carrito)
    return this.carrito;
    
  }

  calcularTotal(): number {
    let total = 0;
    for (const producto of this.carrito) {
      total += parseFloat(producto.precio) * producto.cantidad;
    }
    return total;
  }

  setCantidadInicial(id: number, cantidad: number): void {
    console.log('setear',this.carrito)
    this.cantidadesIniciales[id] = cantidad;
  }

  getCantidadInicial(id: number): number {
    this.carrito = this.obtenerCarrito();
    console.log('cantidad',this.carrito)
    return this.cantidadesIniciales[id];
  }
}
