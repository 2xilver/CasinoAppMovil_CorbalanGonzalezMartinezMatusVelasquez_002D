// servicio.ts
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Pedido {
  id: number;
  fecha: string;
  correo: string;
  productos: { title: string; precio: number; cantidad: number; }[];
}

const PEDIDOS_KEY = 'my-pedidos';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async addPedido(pedido: Pedido): Promise<any> {
    return this.storage.get(PEDIDOS_KEY).then((pedidos: Pedido[]) => {
      if (pedidos) {
        pedidos.push(pedido);
        return this.storage.set(PEDIDOS_KEY, pedidos);
      } else {
        return this.storage.set(PEDIDOS_KEY, [pedido]);
      }
    });
  }
  
  async getPedidos(): Promise<Pedido[]> {
    return this.storage.get(PEDIDOS_KEY) || [];
  }
}
