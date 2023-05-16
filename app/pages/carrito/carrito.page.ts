import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

interface Componente{
  image: string;
  name: string;
  redirecTo:string;
}

interface Food{
  image: string;
  title: string;
  precio: string;
  redirecTo:string;
}

interface Producto{
  image: string;
  title: string;
  precio: string;
  des: string;
  icono: string;
  redirecTo:string;
}


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  productos : Producto[] = [
    {
      image: '/assets/Food/almuerzo1.png',
      title: 'Arroz con pollo',
      precio: '$3.500',
      des: 'pollo a la plancha, verduras salteadas y arroz',
      icono: 'fish-outline',
      redirecTo: '/menu',
    },
    {
      image: '/assets/Food/almuerzo2.png',
      title: 'Lasaña vegana',
      precio: '$3.500',
      des: 'salsa de tomate, carne de soya, cebolla, zanahoria, ajo,champiñon, queso vegano, laminas de lasaña',
      icono: 'leaf-outline',
      redirecTo: '',
    },
    {
      image: '/assets/Food/almuerzo3.png',
      title: 'Lentejas rojas al curry con arroz',
      precio: '$3.500',
      des: 'lentejas rojas, verduras salteadas, crema de coco, especias, espinaca y arroz',
      icono: 'leaf-outline',
      redirecTo: '',
    },
    {
      image: '/assets/Food/almuerzo4.png',
      title: 'Spaghetti con salsa boloñesa vegana',
      precio: '$3.500',
      des: 'carne de soya, salsa de tomate, cebolla, zanahoria, ajo, especias, spaghetti',
      icono: 'leaf-outline',
      redirecTo: '',
    },
    {
      image: '/assets/Food/almuerzo5.png',
      title: 'Spaghetti con salsa boloñesa',
      precio: '$3.500',
      des: 'carne molida, salsa de tomate, cebolla, zanahoria, ajo, especias, spaghetti',
      icono: 'fish-outline',
      redirecTo: '',
    },
  ];

  

  constructor(private alertController : AlertController,
              private menuController: MenuController,
              private navController: NavController) { }

  ngOnInit() {
  }

  async presentPagar() {
    const alert = await this.alertController.create({
      header: 'Pago realizado!',
      subHeader: 'Su pedido se está preparando',
      message: 'Gracias por su compra ( ͡° ͜ʖ ͡°)',
      buttons: ['OK'],
    })
    this.navController.navigateRoot('home');;
    

    await alert.present();
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  
}
