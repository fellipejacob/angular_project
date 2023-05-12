import { Component } from '@angular/core';
import { MeuServicoService } from '../resources/services/meubanco.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

	title = 'my-app';

	dados: any = [];

	constructor(private meuServico: MeuServicoService) { }

	buscarDadosDoBackend() {
		this.meuServico.buscarDadosDoBackend().subscribe((dados) => { console.log(dados); });
	}
	ngOnInit() {
		this.meuServico.buscarDadosDoBackend().subscribe((dados) => {
			this.dados = dados;
		});
	}
}
