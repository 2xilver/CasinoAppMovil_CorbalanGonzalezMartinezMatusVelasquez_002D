import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Platform} from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.page.html',
  styleUrls: ['./sugerencias.page.scss'],
})
export class SugerenciasPage implements OnInit {

  constructor(private navController: NavController,
              private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async enviarSugReclamo(){
    const alert = await this.alertController.create({ 
      header: 'Sugerencia/Reclamo realizado!',
      message: 'Muchas gracias por darnos tu opinión ^^',
      buttons: ['Aceptar']
    })
    await alert.present();
  }
}
