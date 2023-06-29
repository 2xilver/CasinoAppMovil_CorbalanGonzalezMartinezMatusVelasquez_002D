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
  selector: 'app-menu-complet',
  templateUrl: './menu-complet.page.html',
  styleUrls: ['./menu-complet.page.scss'],
})
export class MenuCompletPage implements OnInit {

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
      id: 13,
      image: '/assets/Food/completo1.png',
      title: 'Completo Alemán',
      precio: '3100',
      redirecTo: '/menu',
      cantidad: 0,
      stock: 20,
      des: 'Tomate, Chucrut, Mayonesa, Salchicha, Pan de Completo',
      icono: 'fish-outline',
    },
    {
      id: 14,
      image: '/assets/Food/completo2.png',
      title: 'Completo Chacarero',
      precio: '3050',
      redirecTo: '',
      cantidad: 0,
      stock: 20,
      des: 'Poroto verde, Ají Verde, Tomate, NotMayo, Salchicha Vegana, Pan de Completo APV',
      icono: 'leaf-outline',
    },
    {
      id: 15,
      image: '/assets/Food/completo3.png',
      title: 'Completo Dinámico',
      precio: '3350',
      redirecTo: '',
      cantidad: 0,
      stock: 20,
      des: 'Palta, Americana, Salsa verde, Tomate, Mayonesa, Salchicha, Pan de Completo',
      icono: 'fish-outline',
    },
    {
      id: 16,
      image: '/assets/Food/completo4.png',
      title: 'Completo Italiano',
      precio: '3250',
      redirecTo: '',
      cantidad: 0,
      stock: 20,
      des: 'Palta, Tomate, NotMayo, Salchicha Vegano, Pan de Completo APV',
      icono: 'leaf-outline',
    },
  ];

  constructor(private router: Router, private carritoService: CarritoService) { }
  verDetalleProducto(producto: Food): void {
    const cantidadInicial = this.carritoService.getCantidadInicial(producto.id);
    producto.cantidad = cantidadInicial !== undefined ? cantidadInicial : 0;
    this.router.navigate(['/detalle-producto'], { state: { producto } });
}
  ngOnInit() {}

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
