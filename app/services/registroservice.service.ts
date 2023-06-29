import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Usuario {
  nomUsuario: string;
  correoUsuario: string;
  passUsuario: string;
  repassUsuario: string;
}

const USERS_KEY = 'my-usuarios';

@Injectable({
  providedIn: 'root',
})
export class RegistroserviceService {
  private _storage: any;
  usuario= Storage;

  constructor(private storage: Storage) {
              this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  async addDatos(dato: Usuario): Promise<any> {
    return this._storage.get(USERS_KEY).then((datos: Usuario[]) => {
      if (datos) {
        datos.push(dato);
        return this._storage.set(USERS_KEY, datos);
      } else {
        return this._storage.set(USERS_KEY, [dato]);
      }
    });
  }

  async getIngresado(){
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key === 'usuario') {
        const correo = this.getUsuario
      }
    }
  }
  async getUsuarios(): Promise<Usuario[]> {
    return this._storage.get(USERS_KEY) || [];
  }

  //linea de codigo para obtener el user junto a la contraseña
  async getUsuario(correo: string, password: string): Promise<Usuario | null> {
    const usuarios = await this.getUsuarios();
    return usuarios.find(
      (usuario) =>
        usuario.correoUsuario === correo && usuario.passUsuario === password
    ) || null;
  }
}
