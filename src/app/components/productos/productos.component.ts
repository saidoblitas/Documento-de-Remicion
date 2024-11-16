import { Component, Input } from '@angular/core';
import { Producto } from '../../models/Producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  @Input() products: Producto[] = []
}
