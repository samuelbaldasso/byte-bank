import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-novatransferencia',
  templateUrl: './novatransferencia.component.html',
  styleUrls: ['./novatransferencia.component.scss'],
})
export class NovatransferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('Nova transferencia');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.add(valorEmitir).subscribe(
      (res) => {
        console.log(res);
        this.limparCampos();
        this.router.navigateByUrl('/extrato');
      },
      (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = null;
    this.destino = null;
  }
  ngOnInit(): void {}
}
