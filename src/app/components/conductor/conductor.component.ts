import { Component, Input } from '@angular/core';
import { Conductor } from '../../models/Conductor';

@Component({
  selector: 'app-conductor',
  standalone: true,
  imports: [],
  templateUrl: './conductor.component.html',
  styleUrl: './conductor.component.css'
})
export class ConductorComponent {
  @Input() driver: Conductor = new Conductor()
}
