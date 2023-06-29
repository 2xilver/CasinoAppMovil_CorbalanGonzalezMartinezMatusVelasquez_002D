import { Component, OnInit, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Food } from '../home/home.page';
import { CarritoService } from '../../services/carrito.service';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { HistorialService, Pedido } from '../../services/historial.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  carrito: Food[] = [];
  hayProductos = false;
  private _storage: any;
  usuario = Storage;

  constructor(
    private navController: NavController,
    private navCtrl: NavController,
    private toastController: ToastController,
    private carritoService: CarritoService,
    private changeDetectorRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private menuController: MenuController,
    public appRef: ApplicationRef,
    private historialService: HistorialService,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.carrito = this.carritoService.obtenerCarrito();
    this.hayProductos = this.carrito.length > 0;
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

  agregarAlCarrito(producto: Food): void {
    const productoNuevo = Object.assign({}, producto);
    productoNuevo.cantidad = producto.cantidad;

    this.carritoService.agregarProducto(productoNuevo, producto.cantidad);
    this.carrito = this.carritoService.obtenerCarrito();
    this.changeDetectorRef.detectChanges();
  }

  incrementarCantidad(producto: Food): void {
    if (producto.stock > producto.cantidad) {
      producto.cantidad++;
    }
    this.carritoService.guardarCarritoEnAlmacenamiento();
  }

  decrementarCantidad(producto: Food): void {
    if (producto.cantidad > 1) {
      producto.cantidad--;
    }
    this.carritoService.guardarCarritoEnAlmacenamiento();
  }

  eliminarDelCarrito(producto: Food): void {
    this.carritoService.eliminarProducto(producto);
    this.carrito = this.carritoService.obtenerCarrito();

    if (this.carrito.length === 0) {
      this.hayProductos = false;
    }
    this.carritoService.guardarCarritoEnAlmacenamiento();
    this.navCtrl.navigateRoot('/carrito');
  }

  calcularTotal(): number {
    let total = 0;
    for (const producto of this.carrito) {
      const precio = parseFloat(producto.precio);
      total += precio * producto.cantidad;
    }
    return total;
  }

  async realizarPago(): Promise<void> {
    // Obtener el carrito del LocalStorage
    const carritoLocalStorage = localStorage.getItem('carrito');
    if (carritoLocalStorage) {
      const carrito: Food[] = JSON.parse(carritoLocalStorage);
  
      // Obtener el correo del usuario del LocalStorage
      const usuarioLocalStorage = localStorage.getItem('usuario');
      const usuario = usuarioLocalStorage? JSON.parse(usuarioLocalStorage) : null;

      console.log(localStorage.getItem('usuario'),' deberia tener correo',usuario.correo, 'esto es usuario');
      const correo = usuario || '';

  
      // Crear el pedido con el carrito y el correo del usuario
      const idp= (Math.floor(Math.random() * 5000));
      const pedido: Pedido = {
        id: idp,
        fecha: new Date().toISOString(),
        correo: correo,
        productos: carrito.map((producto: Food) => ({
          title: producto.title,
          precio: parseFloat(producto.precio),
          cantidad: producto.cantidad,
        })),
      };

      // Guardar el pedido en el Storage utilizando una clave diferente
      await this.historialService.addPedido(pedido);

      // Vaciar el carrito del LocalStorage
      localStorage.removeItem('carrito');

      // Actualizar el carrito en el componente
      this.carrito = [];
      this.hayProductos = false;

      // Mostrar un mensaje de éxito
      const toast = await this.toastController.create({
        message: '¡Pago exitoso!',
        duration: 2000,
        color: 'success',
      });
      toast.present();

      // Navegar de regreso a la página de inicio
      this.navCtrl.navigateRoot('/pagof');
    }
    console.log(localStorage.getItem('usuario'))
  }

  actualizar() {
    this.appRef.tick();
  }
}