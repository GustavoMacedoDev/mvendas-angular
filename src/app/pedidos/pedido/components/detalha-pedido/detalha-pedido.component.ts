import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalhaPedido } from 'src/app/shared/interfaces/DetalhaPedido.dto';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-detalha-pedido',
  templateUrl: './detalha-pedido.component.html',
  styleUrls: ['./detalha-pedido.component.css']
})
export class DetalhaPedidoComponent implements OnInit {

  pedido: DetalhaPedido;

  constructor(
    private pedidoService: PedidoService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.pedidoService.detalhaPedidoPorId(this.route.snapshot.params['idPedido']).subscribe(res => this.pedido = res);
  }

}
