import { Component, OnInit } from '@angular/core';
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
  selector: 'app-menu-hamburguesa',
  templateUrl: './menu-hamburguesa.page.html',
  styleUrls: ['./menu-hamburguesa.page.scss'],
})
export class MenuHamburguesaPage implements OnInit {

  componentes : Componente[] = [
    {
      image: 'assets/iconos/1.png',
      name: 'Almuerzo',
      redirecTo: '/menu-almuerzo',
    },
    {
      image: 'assets/iconos/3.png',
      name: 'Hambuerguesa',
      redirecTo: '/menu-hamburguesa',
    },
    {
      image: 'assets/iconos/5.png',
      name: 'Papas Fritas',
      redirecTo: '/menu-papasfritas',
    },
    {
      image: 'assets/iconos/7.png',
      name: 'Completo',
      redirecTo: '/menu-complet',
    },
  ];

  foods : Food[] = [
    {
      image: '/assets/Food/hamburguesa1.png',
      title: 'Hamburguesa',
      precio: '$2.000',
      redirecTo: '',
    },
    {
      image: '/assets/Food/hamburguesa2.png',
      title: 'Hamburguesa Vegana',
      precio: '$2.000',
      redirecTo: '',
    },
    {
      image: '/assets/Food/hamburguesa3.png',
      title: 'Hamburguesa Vegana',
      precio: '$2.000',
      redirecTo: '',
    },
  ];

  productos : Producto[] = [
    {
      image: '/assets/Food/hamburguesa1.png',
      title: 'Hamburguesa',
      precio: '$2.000',
      des: 'pan, tomate, palta, mayonesa, rucula, hamburguesa de vacuno',
      icono: 'fish-outline',
      redirecTo: '/menu',
    },
    {
      image: '/assets/Food/hamburguesa2.png',
      title: 'Hamburguesa Vegana',
      precio: '$2.000',
      des: 'pan, lechuga, tomate, ketchup, hamburguesa notco',
      icono: 'leaf-outline',
      redirecTo: '',
    },
    {
      image: '/assets/Food/hamburguesa3.png',
      title: 'Hamburguesa Vegana',
      precio: '$2.000',
      des: 'pan, lechuga, cebolla, queso veganom hamburguesa notco',
      icono: 'leaf-outline',
      redirecTo: '',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
