import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  getTransferencias() {
    return this.listaTransferencia;
  }

  add(transferencia: any) {
    this.hidrate(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private hidrate(transferencia: any) {
    transferencia.data = new Date();
  }
}
