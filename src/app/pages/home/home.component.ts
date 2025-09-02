import { Component } from '@angular/core';
import { CardComponent } from "../../shared/components/card/card.component";
import { Noticia } from '../../models/noticia';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardComponent], // ← ADICIONAR CommonModule
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  noticias: Noticia[] = [
    {
      title: 'Nova versão do Angular',
      subtitle: 'Recursos e melhorias',
      text: 'O Angular 19 trouxe melhorias de performance e novos recursos...',
      links: [
        { label: 'Saiba mais', url: 'https://angular.io' },
        { label: 'Documentação', url: 'https://angular.io/docs' }
      ]
    },
    {
      title: 'Eventos de tecnologia 2025',
      text: 'Confira os principais eventos de tecnologia deste ano...',
      links: [
        { label: 'Inscreva-se', url: '#' }
      ]
    }
  ];
}