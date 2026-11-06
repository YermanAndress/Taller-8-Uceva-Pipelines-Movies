import { Component, inject } from '@angular/core';
import { Libros } from '../../interfaces/libros.interfaces';
import { LibrosService } from '../../services/libros.service';

/**
 * Componente contenedor de libros
 * Se utiliza para gestionar y mostrar un listado de libros utilizando
 * el componenente 'TableLibrosComponent
 *
 * @remarks
 * Este componente se encarga de consumir el servicio 'LibrosService'
 * para obtener los libros y pasarlo al componente de tabla
 */
@Component({
  selector: 'app-list-libros.component',
  standalone: false,
  template: `
    <div class="container py-4">
      <header class="mb-4">
        <h2 class="mb-1">Libros</h2>
        <p class="text-muted mb-0">
          Una selección de obras literarias organizadas por categoría.
        </p>
      </header>
      <app-table-libros [libros]="libros"></app-table-libros>
    </div>
  `,
})
export class ListLibrosComponent {
  /**
   * Listado de libros obtenidos desde el servicio
   * @type {Libros[]}
   */
  libros: Libros[] = [];
  /**
   * Servicio para obtener libros
   * @remarks
   * Se inyecta la funcion 'inject()' de Angular
   */
  private librosService = inject(LibrosService);
  /**
   * Inicializa el componente y carga los libros
   */
  ngOnInit(): void {
    this.librosService.getLibros().subscribe({
      next: (libros) => (this.libros = libros),
      error: (error) => console.error(error),
    });
  }
}
