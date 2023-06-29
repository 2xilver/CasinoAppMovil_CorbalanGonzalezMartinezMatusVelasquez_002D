import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CarritoService} from '../../services/carrito.service';


interface Componente{
  image: string;
  name: string;
  redirecTo:string;
}

export interface Food{
  id: number;
  image: string;
  title: string;
  precio: string;
  redirecTo:string;
  cantidad: number;
  stock: number;
  des: string;
  icono: string;
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
      redirecTo: '/home',
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
      id: 1,
      image: '/assets/Food/almuerzo1.png',
      title: 'Arroz con Pollo',
      precio: '3500',
      redirecTo: '/menu',
      cantidad: 0,
      stock: 20,
      des: 'Pollo a la plancha, Verduras salteadas y Arroz',
      icono: 'fish-outline',
    },
    {
      id: 2,
      image: '/assets/Food/almuerzo2.png',
      title: 'Lasaña Vegana',
      precio: '4590',
      redirecTo: '',
      cantidad: 0,
      stock: 20,
      des: 'Salsa de tomate, Carne de soya, Cebolla, Zanahoria, Ajo, Champiñon, Queso Vegano, Láminas de Lasaña',
      icono: 'leaf-outline',
    },
    {
      id: 3,
      image: '/assets/Food/almuerzo3.png',
      title: 'Lentejas Rojas al Curry con Arroz',
      precio: '3750',
      redirecTo: '',
      cantidad: 0,
      stock: 20,
      des: 'Lentejas rojas, Verduras salteadas, Crema de coco, Especias, Espinaca y Arroz',
      icono: 'leaf-outline',
    },
    {
      id: 4,
      image: '/assets/Food/almuerzo4.png',
      title: 'Spaghetti con Salsa boloñesa Vegana',
      precio: '3890',
      redirecTo: '',
      cantidad: 0,
      stock: 20,
      des: 'Carne de soya, Salsa de tomate, Cebolla, Zanahoria, Ajo, Especias, Spaghetti',
      icono: 'leaf-outline',
    },
    {
      id: 5,
      image: '/assets/Food/almuerzo5.png',
      title: 'Spaghetti con Salsa boloñesa',
      precio: '3150',
      redirecTo: '',
      cantidad: 0,
      stock: 20,
      des: 'Carne Molida, Salsa de Tomate, Cebolla, Zanahoria, Ajo, Especias, Spaghetti',
      icono: 'fish-outline',
    },
  ];

  constructor(private router: Router, private carritoService: CarritoService) { }

  verDetalleProducto(producto: Food): void {
    const cantidadInicial = this.carritoService.getCantidadInicial(producto.id);
    producto.cantidad = cantidadInicial !== undefined ? cantidadInicial : 0;
    this.router.navigate(['/detalle-producto'], { state: { producto } });
}

  ngOnInit() {
  }
  
  cantidadmas(food : Food): void{
    if(food.stock > food.cantidad){
      food.cantidad ++;
    }
    
  }
  cantidadmenos(food : Food): void{
    if(food.cantidad > 0){
      food.cantidad --;
    }
  }

}

