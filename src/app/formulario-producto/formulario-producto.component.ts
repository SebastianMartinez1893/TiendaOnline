import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../data/producto.model';

@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css',
})
export class FormularioProductoComponent {
  @Output() respuestaProducto = new EventEmitter<Producto>();
  productoAdd: Producto | any;
  @ViewChild('InputDescripcion') inputDescripcion!: ElementRef;
  @ViewChild('InputPrecio') inputPrecio!: ElementRef;

  AgregarProductoAlista(evento: Event) {
    evento.preventDefault();
    this.productoAdd = new Producto(
      this.inputDescripcion.nativeElement.value,
      parseInt(this.inputPrecio.nativeElement.value)
    );

    this.respuestaProducto.emit(this.productoAdd);
    this.inputDescripcion.nativeElement.value = '';
    this.inputPrecio.nativeElement.value = '';
  }
}
