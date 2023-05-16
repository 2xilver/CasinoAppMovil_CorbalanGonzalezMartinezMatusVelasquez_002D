import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService } from 'src/app/services/registroservice.service';
import { MenuController } from '@ionic/angular';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin : FormGroup;

  constructor(private menuController: MenuController,
              private alertController : AlertController,
              private navController : NavController,
              private registroService : RegistroserviceService,
              private fb: FormBuilder) {
                this.formularioLogin = this.fb.group({
                  'correo': new FormControl("", Validators.required),
                  'password': new FormControl("",Validators.required),
                })
               }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Has iniciado sesion correctamente!',
      buttons: ['OK'] ,
      
    });
    this.navController.navigateRoot('home');

    await alert.present();
  }

}