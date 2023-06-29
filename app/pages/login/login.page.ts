import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService } from '../../services/registroservice.service';
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

  formularioLogin: FormGroup;

  constructor(
    private menuController: MenuController,
    private alertController: AlertController,
    private navController: NavController,
    private registroService: RegistroserviceService,
    private fb: FormBuilder
  ) {
    this.formularioLogin = this.fb.group({
      'correo': ['', [
        Validators.required,
        Validators.pattern(/.*@(duocuc|profesor\.duoc)\.cl$/)
      ]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit() {
    
      localStorage.clear();
      sessionStorage.clear();
      console.log(localStorage.length,'al retornar al login desde fuera, no deberia tener informacion, solo mostrar este mensaje')
  }

  mostrarMenu() {
    this.menuController.open('first');
    
  }

  async presentAlert() {
    if (this.formularioLogin.valid) {
      const correo = this.formularioLogin.value.correo;
      const password = this.formularioLogin.value.password;
  
      const usuarioEncontrado = await this.registroService.getUsuario(
        correo,
        password
      );
  
      if (usuarioEncontrado) {
        // El usuario ha sido encontrado
        localStorage.setItem('ingreso', 'true');
        this.navController.navigateRoot('home');
        localStorage.setItem('usuario',JSON.stringify(correo));
      } else {
        // Los datos del usuario son incorrectos
        const alert = await this.alertController.create({
          message: 'Nombre de usuario o contraseña incorrectos.',
          buttons: ['OK'],
        });
        await alert.present();
      }
      // El correo es invalido XD
    } else {
      const alert = await this.alertController.create({
        message:
          'Correo electrónico inválido. Debe ser una dirección de correo de duocuc.cl o profesor.duoc.cl',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
  //ir a la pagina de registro
  async Registrar() {
    this.navController.navigateRoot('registro');
  }
}