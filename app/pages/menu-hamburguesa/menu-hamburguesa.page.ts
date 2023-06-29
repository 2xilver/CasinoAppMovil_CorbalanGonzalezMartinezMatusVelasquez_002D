import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CarritoService} from '../../services/carrito.service';
interface Componente{
  image: string;
  name: string;
  redirecTo:string;
}

interface Food{
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
      id: 17,
      image: '/assets/Food/hamburguesa1.png',
      title: 'Hamburguesa',
      precio: '2000',
      redirecTo: '',
      cantidad: 0,
      stock: 20,
      des: 'Pan, Tomate, Palta, Mayonesa, Rúcula, Hamburguesa de Vacuno',
      icono: 'fish-outline',
    },
    {
      id: 18,
      image: '/assets/Food/hamburguesa2.png',
      title: 'Hamburguesa Vegana',
      precio: '2000',
      redirecTo: '',
      cantidad: 0,
      stock: 20,
      des: 'Pan, Lechuga, Tomate, Ketchup, Hamburguesa NotCo',
      icono: 'leaf-outline',
    },
    {
      id: 19,
      image: '/assets/Food/hamburguesa3.png',
      title: 'Hamburguesa Vegana',
      precio: '2000',
      redirecTo: '',
      cantidad: 0,
      stock: 20,
      des: 'Pan, Lechuga, Cebolla, Queso Vegano, Hamburguesa NotCo',
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