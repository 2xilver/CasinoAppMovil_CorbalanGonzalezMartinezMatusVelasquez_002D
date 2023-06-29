import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { Food } from '../home/home.page';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  producto!: Food;

  constructor(
    private route: ActivatedRoute,
    private navController: NavController,
    private carritoService: CarritoService,
    private changeDetectorRef: ChangeDetectorRef,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.producto = history.state.producto;
    const cantidadInicial = this.carritoService.getCantidadInicial(this.producto.id);
    this.producto.cantidad = cantidadInicial !== undefined ? cantidadInicial : 1;
  }

  verDetalleProducto(producto: Food): void {
    this.carritoService.setCantidadInicial(producto.id, producto.cantidad); // Guardar la cantidad inicial
    this.navController.navigateForward(['/detalle-producto'], { state: { producto } });
  }

  cantidadmas(): void {
    if (this.producto.stock > this.producto.cantidad) {
      this.producto.cantidad++;
    }
    this.carritoService.guardarCarritoEnAlmacenamiento();
    console.log('mas')
  }

  cantidadmenos(): void {
    if (this.producto.cantidad > 1) {
      this.producto.cantidad--;
    }
    this.carritoService.guardarCarritoEnAlmacenamiento();
    console.log('mmenos')
  }

  goBack(): void {
    this.navCtrl.back();
  }

  agregarAlCarrito(producto: Food): void {
    console.log('Producto seleccionado:', producto);

    if (producto.cantidad === 0) {
      // Si la cantidad es 0, no se agrega al carrito
      return;
    }

    this.alertController
      .create({
        header: 'Seleccione una opcion',
        message: '¿Desea seguir comprando o ir al carrito de compras?',
        backdropDismiss: false,
        buttons: [
          {
            text: 'Seguir comprando',
            handler: () => {
              console.log('Seguir comprando');
              this.carritoService.agregarProducto(producto, producto.cantidad);
              console.log('mas',this.carritoService.obtenerCarrito());
              this.navController.navigateRoot('/home', { state: { producto } });
            },
          },
          {
            text: 'Ir al carrito',
            handler: () => {
              console.log('Ir al carrito');
              this.carritoService.agregarProducto(producto, producto.cantidad);
              this.navController.navigateRoot('/carrito', { state: { producto } });
              this.navController.navigateRoot('/carrito', { state: { producto } });
            },
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }
}
