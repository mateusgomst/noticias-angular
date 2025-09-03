import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agendamento } from '../models/agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8080/api/agendamentos";

  getAgendamentos(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(this.baseUrl);
  }

  enviarConfirmacao(agendamentoId: number): Observable<HttpResponse<any>> {
    const url = `${this.baseUrl}/${agendamentoId}/enviar-confirmacao`;
    return this.http.post(url, {}, { observe: 'response' }); // observe: 'response' retorna status + body
  }
}
