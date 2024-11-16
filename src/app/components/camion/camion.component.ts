import { Component, Input } from '@angular/core';
import { Camion } from '../../models/Camion';

@Component({
  selector: 'app-camion',
  standalone: true,
  imports: [],
  templateUrl: './camion.component.html',
  styleUrl: './camion.component.css'
})
export class CamionComponent {
  @Input() truck: Camion = new Camion()
}
