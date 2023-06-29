import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = {} as Usuario;
  usuarios: Usuario[] = [];

  constructor(
    private alertController: AlertController,
    private registroService: RegistroserviceService,
    private navController: NavController,
    private toast: ToastController,
    private fb: FormBuilder
  ) {
    this.formularioRegistro = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '[A-Za-z0-9._%+-]{2,}@(duocuc\.cl|profesor\.duoc\.cl)'
          ),
        ],
      ],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirmaPass: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit() {}

  async alertError() {
    const alert = await this.alertController.create({
      header: 'Error...',
      message: 'Incorrecto',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  async CrearUsuario() {
    if (this.formularioRegistro.invalid) {
      this.alertError();
    } else {
      var form = this.formularioRegistro.value;
      this.newUsuario.nomUsuario = form.nombre;
      this.newUsuario.correoUsuario = form.correo;
      this.newUsuario.passUsuario = form.password;
      this.newUsuario.repassUsuario = form.confirmaPass;

      this.registroService.getUsuarios().then((datos) => {
        this.usuarios = datos;
        if (!datos || datos.length == 0) {
          this.registroService.addDatos(this.newUsuario).then((dato) => {
            this.newUsuario = {} as Usuario;
            this.showToast('Usuario Creado satisfactoriamente');

            // Verificar los datos guardados
            this.registroService.getUsuarios().then((datos) => {
              console.log('Datos almacenados:', datos);
            });
          });
          this.formularioRegistro.reset();
          this.navController.navigateRoot('login');
        } else {
          var existe = this.usuarios.some(obj => obj.correoUsuario === this.newUsuario.correoUsuario);
          if (existe) {
            this.CorreoExistente();
            this.formularioRegistro.reset();
          } else {
            this.registroService.addDatos(this.newUsuario).then((dato) => {
              this.newUsuario = {} as Usuario;
              this.showToast('Usuario Creado satisfactoriamente');

              // Verificar los datos guardados
              this.registroService.getUsuarios().then((datos) => {
                console.log('Datos almacenados:', datos);
              });
            });
            this.formularioRegistro.reset();
            this.navController.navigateRoot('login');
          }
        }
      });
    }
  }

  async showToast(msg: string) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
    });
    await toast.present();
  }

  async CorreoExistente() {
    const alert = await this.alertController.create({
      header: '¡Error!',
      message: 'El correo ingresado ya existe',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  async Volver(){
    this.navController.navigateRoot('/login');
  }

  // Función para validar que las contraseñas sean iguales
  passwordMatchValidator(form: FormGroup) {
    const passwordControl = form.get('password');
    const confirmaPassControl = form.get('confirmaPass');
  
    if (passwordControl && confirmaPassControl) {
      const password = passwordControl.value;
      const confirmaPass = confirmaPassControl.value;
      
      if (password !== confirmaPass) {
        confirmaPassControl.setErrors({ passwordMismatch: true });
      } else {
        confirmaPassControl.setErrors(null);
      }
    }
  }
  
}
