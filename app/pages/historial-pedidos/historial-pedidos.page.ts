import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { HistorialService, Pedido } from '../../services/historial.service';

@Component({
  selector: 'app-historial-pedidos',
  templateUrl: './historial-pedidos.page.html',
  styleUrls: ['./historial-pedidos.page.scss'],
})
export class HistorialPedidosPage implements OnInit {
  pedidos: Pedido[] = [];
  correo: string = '';
  hayPedidos = false;

  constructor(
    private navController: NavController,
    private menuController: MenuController,
    private historialService: HistorialService
  ) {}

  ngOnInit() {
    this.obtenerPedidosPorCorreo();
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

  async obtenerPedidosPorCorreo() {
    const usuarioLocalStorage = localStorage.getItem('usuario');
    const usuario = usuarioLocalStorage ? JSON.parse(usuarioLocalStorage) : null;
    const correo = usuario || '';
    console.log(correo, 'correo guardado')
    const todosLosPedidos = await this.historialService.getPedidos();
    this.pedidos = todosLosPedidos.filter((pedido) => pedido.correo === correo);
    this.hayPedidos = this.pedidos.length > 0;
    this.pedidos.reverse(); // Invertir el orden de los pedidos (más recientes primero)
  }

  calcularTotal(productos: any[]) {
    let total = 0;
    for (const producto of productos) {
      total += producto.precio * producto.cantidad;
    }
    return total;
  }
}
