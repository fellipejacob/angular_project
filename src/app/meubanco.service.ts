import { HttpClient } from '@angular/common/http';

export class MeuServicoService {
	constructor(private http: HttpClient) {}
	
	buscarDadosDoBackend() {
		return this.http.get('http:localhost:7000/redoc');
	}
}
