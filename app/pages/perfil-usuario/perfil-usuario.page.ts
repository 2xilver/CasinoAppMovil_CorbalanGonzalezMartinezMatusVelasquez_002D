import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
  providers: [LoginPage]
})
export class PerfilUsuarioPage implements OnInit {

  usuario: Usuario[] = [];
  ingresadoN: Usuario[] = [];
  clave: any;
  correo: any;

  constructor(private menuController: MenuController,
              private navController: NavController,
              private router: Router,
              private registroService: RegistroserviceService,
              private plt:Platform) { 
                this.plt.ready().then(()=>{
                  this.ingresado();
                })
              }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }



  ingresado(){
    this.registroService.getUsuarios().then(usuario => {
      this.usuario = usuario;

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key === 'usuario') {
        this.clave = localStorage.key(i);
        this.correo= JSON.parse(localStorage.getItem(this.clave)!);
      }
      console.log(this.usuario.length)
      for (let i = 0; i < this.usuario.length; i++){
        if (this.usuario[i].correoUsuario === this.correo){
          const b=i;
          this.ingresadoN.push(this.usuario[b]);
        }
      }
    }
    console.log('ingresado:',this.ingresadoN);
    return this.ingresadoN;
  })
  
  }
}