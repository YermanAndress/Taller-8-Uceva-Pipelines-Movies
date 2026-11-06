import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movielist',
    pathMatch: 'full',
  },
  {
    path: 'movielist',
    loadChildren: () =>
      import('./modules/movielist/movielist-module').then((m) => m.MovielistModule),
  },
  {
    path: 'pokelist',
    loadChildren: () => import('./modules/pokelist/pokelist-module').then((m) => m.PokelistModule),
  },
  {
    path: 'libros',
    loadChildren: () => import('./modules/libros/libros.module').then((m) => m.LibrosModule),
  },
  {
    path: '**',
    redirectTo: 'movielist',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
