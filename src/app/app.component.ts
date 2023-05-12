import { Component } from '@angular/core';
import { MeuServicoService } from './meubanco.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 	title = 'my-app';
	
	dados: any;

 	constructor(private meuServico: MeuServicoService){}
  
 	buscarDadosDoBackend() {
  		this.meuServico.buscarDadosDoBackend().subscribe((dados) => {console.log(dados);});
	}
	ngOnInit(){
		this.meuServico.buscarDadosDoBackend().subscribe((dados) => {
			this.dados = dados;
		});
	}
  }
  