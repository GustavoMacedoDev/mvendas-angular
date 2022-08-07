import { Component, OnInit } from '@angular/core';
import { ListaPedidos } from 'src/app/shared/interfaces/ListaPedidos.dto';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {

  listaPedidos: ListaPedidos[];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.listaPedidos().subscribe(res => this.listaPedidos = res);
  }

}
