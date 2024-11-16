import { Component, Input } from '@angular/core';
import { Remitente } from '../../models/Remitente';

@Component({
  selector: 'app-remitente',
  standalone: true,
  imports: [],
  templateUrl: './remitente.component.html',
  styleUrl: './remitente.component.css'
})
export class RemitenteComponent {
  @Input() remitter: Remitente = new Remitente()
}
