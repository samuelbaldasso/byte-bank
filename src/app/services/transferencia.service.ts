import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';
  constructor(private http: HttpClient) {
    this.listaTransferencia = [];
  }

  getTransferencias() {
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(this.url);
  }

  add(transferencia: Transferencia): Observable<Transferencia> {
    this.hidrate(transferencia);
    return this.http.post<Transferencia>(this.url, transferencia);
  }

  private hidrate(transferencia: any) {
    transferencia.data = new Date();
  }
}
