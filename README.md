# UCEVA Pipelines - Catálogo Multimedia

Aplicación Angular desarrollada para el laboratorio de **Pipelines** de la asignatura
Arquitectura de Software. Este proyecto implementa **Hash Location Strategy**, por lo
que todas las rutas de navegación incluyen el carácter `#`.

## Vistas

| Vista          | Ruta                                   | Contenido                                      |
| -------------- | -------------------------------------- | ---------------------------------------------- |
| Cine Ghibli    | `/#/movielist/list-movielist`          | Películas de Studio Ghibli (Ghibli API)        |
| Pokémon        | `/#/pokelist/list-pokelist`            | Pokémones obtenidos desde PokéAPI              |
| Libros         | `/#/libros/list-libros`                | Catálogo de libros de ejemplo                  |

Cada sección está implementada como un módulo con carga diferida (_lazy loading_) y
se navega desde el menú superior. La ruta raíz redirige automáticamente a
`#/movielist/list-movielist`.

## Tecnologías

- Angular 20 con NgModule
- TypeScript
- Bootstrap 5 y Bootstrap Icons (CDN)
- Jest para pruebas unitarias
- GitHub Actions para CI/CD
- GitHub Pages para el despliegue

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm start

# Pruebas unitarias
npm test

# Build de producción
npm run build -- --base-href /Taller-8-Uceva-Pipelines-Movies/
```

## Despliegue

El pipeline está definido en `.github/workflows/deploy-github-pages.yml`. En cada
_push_ a la rama `main` se ejecutan las pruebas, se genera el build de producción y
se publica automáticamente en GitHub Pages.

- Repositorio: <https://github.com/YermanAndress/Taller-8-Uceva-Pipelines-Movies>
- Aplicación desplegada: <https://yermanandress.github.io/Taller-8-Uceva-Pipelines-Movies/>

## Convención de commits

El proyecto utiliza **Conventional Commits** (`feat`, `fix`, `docs`, `refactor`,
`chore`, `ci`, entre otros).
