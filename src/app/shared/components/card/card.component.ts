import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Agendamento } from '../../../models/agendamento';
import { AgendamentoService } from '../../../services/agendamento.service';

@Component({
  selector: 'app-card-agendamento',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() agendamento!: Agendamento;
  @Input() width: string = '18rem';

  constructor(private agendamentoService: AgendamentoService) { }

  enviarConfirmacao(){
    this.agendamentoService.enviarConfirmacao(this.agendamento.id).subscribe(response => {
      if (response.status === 200) {
        console.log('Confirmação enviada com sucesso:', response.body);
      } else {
        console.error('Erro ao enviar confirmação:', response);
      }
    });
  }
}
