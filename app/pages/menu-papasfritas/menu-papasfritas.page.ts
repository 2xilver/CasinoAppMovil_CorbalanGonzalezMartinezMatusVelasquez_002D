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
  selector: 'app-menu-papasfritas',
  templateUrl: './menu-papasfritas.page.html',
  styleUrls: ['./menu-papasfritas.page.scss'],
})
export class MenuPapasfritasPage implements OnInit {

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
      id: 9,
      image: '/assets/Food/papas1.png',
      title: 'Papas Fritas',
      precio: '1500',
      redirecTo: '/menu',
      cantidad: 0,
      stock: 20,
      des: 'Papas Fritas',
      icono: 'leaf-outline',
    },
    {
      id: 10,
      image: '/assets/Food/papas2.png',
      title: 'Salchipapa',
      precio: '1500',
      redirecTo: '',
      cantidad: 0,
      stock: 20,
      des: 'Salchicha cortada en rodajas, Papas fritas, ketchup, mayonesa',
      icono: 'fish-outline',
    },
    {
      id: 11,
      image: '/assets/Food/papas3.png',
      title: 'Papas Fritas con queso Vegano',
      precio: '1500',
      redirecTo: '',
      cantidad: 0,
      stock: 20,
      des: 'Papas fritas, Queso NotCo, Cilantro',
      icono: 'leaf-outline',
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
