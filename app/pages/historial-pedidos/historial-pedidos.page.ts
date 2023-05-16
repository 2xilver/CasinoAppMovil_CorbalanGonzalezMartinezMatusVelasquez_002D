import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historial-pedidos',
  templateUrl: './historial-pedidos.page.html',
  styleUrls: ['./historial-pedidos.page.scss'],
})
export class HistorialPedidosPage implements OnInit {

  constructor(private navController: NavController,
    private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
}
