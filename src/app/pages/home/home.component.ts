import { Component, OnInit } from '@angular/core'; // ← Adicionar OnInit
import { CardComponent } from "../../shared/components/card/card.component";
import { CommonModule } from '@angular/common';
import { Agendamento } from '../../models/agendamento';
import { AgendamentoService } from '../../services/agendamento.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private agendamentoService: AgendamentoService) { }

  agendamentos: Agendamento[] = [];

  ngOnInit() {
    this.agendamentoService.getAgendamentos().subscribe((data: Agendamento[]) => {
      this.agendamentos = data;
      console.log(data);
    });
  }


}


