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
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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
      image: '/assets/Food/almuerzo1.png',
      title: 'Arroz con pollo',
      precio: '$3.500',
      redirecTo: '/menu',
    },
    {
      image: '/assets/Food/almuerzo2.png',
      title: 'Lasaña vegana',
      precio: '$3.500',
      redirecTo: '',
    },
    {
      image: '/assets/Food/almuerzo3.png',
      title: 'Lentejas rojas al curry con arroz',
      precio: '$3.500',
      redirecTo: '',
    },
  ];

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
      redirecTo: '/menu',
    },
    {
      image: '/assets/Food/almuerzo3.png',
      title: 'Lentejas rojas al curry con arroz',
      precio: '$3.500',
      des: 'lentejas rojas, verduras salteadas, crema de coco, especias, espinaca y arroz',
      icono: 'leaf-outline',
      redirecTo: '/menu',
    },
    {
      image: '/assets/Food/almuerzo4.png',
      title: 'Spaghetti con salsa boloñesa vegana',
      precio: '$3.500',
      des: 'carne de soya, salsa de tomate, cebolla, zanahoria, ajo, especias, spaghetti',
      icono: 'leaf-outline',
      redirecTo: '/menu',
    },
    {
      image: '/assets/Food/almuerzo5.png',
      title: 'Spaghetti con salsa boloñesa',
      precio: '$3.500',
      des: 'carne molida, salsa de tomate, cebolla, zanahoria, ajo, especias, spaghetti',
      icono: 'fish-outline',
      redirecTo: '/menu',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

