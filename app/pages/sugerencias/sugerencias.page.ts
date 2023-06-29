import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Platform} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Comentario, ServicescomentariosService } from '../../services/servicescomentarios.service';
import { AlertController } from '@ionic/angular';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.page.html',
  styleUrls: ['./sugerencias.page.scss'],
})
export class SugerenciasPage implements OnInit {

  formularioComentario: FormGroup;
  newComentario: Comentario = <Comentario>{};

  constructor(private navController: NavController,
              private toastController: ToastController,
              private menuController: MenuController,
              private alertController: AlertController,
              private serviceComentario: ServicescomentariosService,
              private fb: FormBuilder) {
                this.formularioComentario = this.fb.group({
                  'id_comentario':new FormControl (Number, [Validators.required]),
                  'usuario': new FormControl(""),
                  'tipo_comentario': new FormControl ("",[Validators.required]),
                  'comentario': new FormControl ("", [Validators.required, Validators.minLength(5)])
                })
               }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async CrearComentario(){
    var form= this.formularioComentario.value;
    if (this.formularioComentario.invalid){
      this.alertError();
    }
    else {
      const usuarioLocalStorage = localStorage.getItem('usuario');
      const usuario = usuarioLocalStorage? JSON.parse(usuarioLocalStorage) : null;

      console.log(localStorage.getItem('usuario'),' deberia tener correo',usuario.correo, 'esto es usuario');
      const correo = usuario || '';

      this.newComentario.usuario=correo;
      this.newComentario.id_comentario = Math.floor(Math.random() * 5000);
      this.newComentario.tipo_comentario = form.tipo_comentario;
      this.newComentario.comentario = form.comentario;

      this.serviceComentario.crearComentario(this.newComentario).then(dato => {
        this.newComentario = <Comentario>{};
        this.formularioComentario.reset(); 
        this.newComentario.id_comentario = 0;
      })
      this.enviarSugReclamo();
      
    }
  }

  async enviarSugReclamo(){
    const alert = await this.alertController.create({ 
      header: 'Sugerencia/Reclamo realizado!',
      message: 'Muchas gracias por darnos tu opinión ^^',
      buttons: [{
        text: 'Aceptar',
        role: 'confirm',
        handler: () => {
          this.navController.navigateRoot('home')
        }
      }],
      
      
    })
    await alert.present();
    
  }


  async alertError(){
    const alert = await this.alertController.create({ 
      header: 'Error..',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async showToast(msg:string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    })
    await toast.present();
  }


}
