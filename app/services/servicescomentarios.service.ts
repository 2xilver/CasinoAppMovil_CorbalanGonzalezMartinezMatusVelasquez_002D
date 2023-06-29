import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

export interface Comentario{
  id_comentario: number;
  usuario: string;
  tipo_comentario: string;
  comentario: string;
}

const USERS_KEY =  'my-comentarios';


@Injectable({
  providedIn: 'root'
})
export class ServicescomentariosService {

  private _storage: Storage = new Storage();
  newComentario: Comentario = <Comentario>{};
  comentarios: Storage = new Storage();

  constructor(private storage: Storage,
              private alertController: AlertController,
              private toastController: ToastController,
              private navController: NavController) { 
  this.init();              
  }

  async init(){
    const storage = await this.storage.create();
    this._storage=storage;
  }

  async crearComentario(dato : Comentario):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos : Comentario[])=>{
      if (datos){

      datos.push(dato);
      this.showToast('Comentario creado!')
      return this._storage.set(USERS_KEY, datos);
      } 

      else{
        return this.storage.set(USERS_KEY, [dato]);
      }
    })
  }

  async getComentario(): Promise<Comentario[]>{
    return this.storage.get(USERS_KEY);
  }

 


  async showToast(msg:string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    })
    await toast.present();
  }
              


}
