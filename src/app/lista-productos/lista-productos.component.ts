import { Component } from '@angular/core';
import { Producto } from '../data/producto.model';
import {FormsModule}from '@angular/forms'

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [FormsModule],
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

  AgregarProductoAlista():void{
    if(this.Descripcion.trim() === '' || this.Precio == null || this.Precio <= 0)
    {
      console.log("Error");
      return;
    }
    this.ListaProductos.push({descripcion: this.Descripcion, precio: this.Precio});
    this.Descripcion ='';
    this.Precio = null;
  };

}
