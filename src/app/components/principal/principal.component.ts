import { Component } from '@angular/core';
import { CamionComponent } from '../camion/camion.component';
import { ConductorComponent } from '../conductor/conductor.component';
import { ProductosComponent } from '../productos/productos.component';
import { RemitenteComponent } from '../remitente/remitente.component';
import { Principal } from '../../models/Principal';
import { PrincipalService } from '../../services/principal.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CamionComponent, ConductorComponent, ProductosComponent, RemitenteComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  principal!: Principal

  constructor(private service: PrincipalService) {}
  
  ngOnInit(): void {
    this.principal = this.service.getPrincipal();
  }
}
