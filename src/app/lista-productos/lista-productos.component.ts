import { Component } from '@angular/core';
import { Producto } from '../data/producto.model';
import {FormsModule}from '@angular/forms'
import { FormularioProductoComponent } from "../formulario-producto/formulario-producto.component";

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [FormsModule, FormularioProductoComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

  Descripcion : string = '';
  Precio : number |null = null;

  ListaProductos: Producto[] = [
    {descripcion : 'Pantalón', precio : 130},
    {descripcion : 'Camisa', precio : 80},
    {descripcion : 'Playera', precio : 50}
  ];

  AgregarProductoAlista(productAdd : Producto ):void{
    if(productAdd.descripcion.trim() === '' || productAdd.precio == null || productAdd.precio <= 0)
    {
      console.log("Error");
      return;
    }
    this.ListaProductos.push(productAdd);
    this.Descripcion ='';
    this.Precio = null;
  };

}
