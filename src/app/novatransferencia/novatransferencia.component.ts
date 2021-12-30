import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-novatransferencia',
  templateUrl: './novatransferencia.component.html',
  styleUrls: ['./novatransferencia.component.scss'],
})
export class NovatransferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  constructor() {}
  valor: number;
  destino: number;

  transferir() {
    console.log('Nova transferencia');
    this.aoTransferir.emit({ valor: this.valor, destino: this.destino });
    this.limparCampos()
  }

limparCampos() {
  this.valor = null
  this.destino = null
}
  ngOnInit(): void {}
}
