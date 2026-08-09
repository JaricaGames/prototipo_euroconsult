# ECPI — Euroconsult Proyectos de Ingeniería · Sitio institucional

Sitio web estático del grupo ECPI. Sin dependencias ni proceso de compilación: HTML + CSS + JavaScript planos, listo para GitHub Pages.

## Estructura

```
euroconsult_web2/
├── index.html              Página principal (contenido en español por defecto)
├── grupo.html              El grupo: historia, trayectoria, misión y visión
├── areas.html              Áreas de actuación con detalle por disciplina
├── presencia.html          Presencia internacional: sedes y cifras
├── proyectos.html          Cuadrícula de proyectos del grupo
├── proyecto.html           Detalle de proyecto (proyecto.html?id=<id>)
├── compromiso.html         Compromiso y principios del grupo
├── contacto.html           Contacto institucional
├── .nojekyll               Evita el procesado Jekyll en GitHub Pages
└── assets/
    ├── css/main.css        Paleta corporativa, rejillas y estilos compartidos
    ├── js/main.js          Cambio de idioma (ES/EN/FR/PT) y animaciones de entrada
    ├── js/projects-data.js Datos de proyectos (4 idiomas); alimenta cuadrícula y detalle
    └── img/
        ├── grupo-bg.webp       Fondo de la sección «El grupo» (puente)
        └── proj-popayan.webp   Foto del proyecto Torre de Control Popayán
```

## Ver en local

Basta con abrir `index.html` en el navegador (doble clic). Opcionalmente, con un servidor local:

```
cd "E:\Trabajo Manolo\Web\euroconsult_web2"
python -m http.server 8080
```

y abrir http://localhost:8080

## Publicar en GitHub Pages

1. Crear un repositorio nuevo en GitHub (por ejemplo `euroconsult-web`).
2. Desde esta carpeta:

   ```
   git init
   git add .
   git commit -m "Sitio institucional ECPI"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/euroconsult-web.git
   git push -u origin main
   ```

3. En GitHub: **Settings → Pages → Build and deployment**
   - Source: *Deploy from a branch*
   - Branch: `main` / carpeta `/ (root)` → **Save**
4. En uno o dos minutos el sitio quedará publicado en
   `https://TU_USUARIO.github.io/euroconsult-web/`

Todas las rutas del sitio son relativas, así que funciona igual en un subdirectorio de GitHub Pages que con dominio propio (para dominio propio, añadir el archivo `CNAME` y configurar el DNS).

## Notas de edición

- **Idiomas**: los textos de los cuatro idiomas están en `assets/js/main.js` (objeto `dicts`). El HTML contiene la versión en español como contenido por defecto (visible también sin JavaScript). Si se cambia un texto, conviene cambiarlo en ambos sitios para el español.
- **Logos**: los logotipos actuales son una recreación tipográfica provisional. Los puntos a sustituir por el SVG oficial están marcados con comentarios `<!-- LOGO ECPI -->` y `<!-- LOGO FILIAL -->` en `index.html`.
- **Datos editables** (ciudades, cifras, correo de contacto): marcados con `<!-- dato editable -->` en `index.html`.
- **Proyectos**: para añadir un proyecto basta con añadir una entrada en `assets/js/projects-data.js` (con sus cuatro idiomas y, opcionalmente, `img`); aparecerá automáticamente en `proyectos.html` y tendrá su página de detalle en `proyecto.html?id=<id>`. Los proyectos sin `img` muestran un marcador de posición hexagonal.
- **Navegación móvil**: por diseño, el menú de enlaces se oculta por debajo de 1024 px (la navegación se hace por scroll); el selector de idioma sigue visible.
