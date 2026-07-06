Asignatura-> PROGRAMACIÓN VISUAL TRABAJO PRÁCTICO INTEGRAL - GRUPO 6

CRUZ Jonatan Anibal https://github.com/Jonatan27C

JUAREZ David https://github.com/davidjuharez

VENENCIA Shashiquen Brenda Mailén https://github.com/shashiquen-b-m-venencia

Nuestro repositorio: https://github.com/davidjuharez/pv_tp_integrador_grupo6

Descripción del Proyecto:

Esta aplicación web funciona como un Panel de Control de Clientes que gestiona información mediante el consumo asincrónico de la FakeStore API. El sistema implementa autenticación con persistencia en LocalStorage y asegura la protección de todas las vistas mediante rutas restringidas, redirigiendo automáticamente al usuario al Login si intenta ingresar sin sesión activa. El proyecto utiliza una arquitectura modular con React y Vite, empleando componentes jerárquicos, funciones flecha y el manejo de estados globales mediante Context API. La lógica se sustenta en el uso de hooks como useState, useEffect y useAdmin para la gestión de estados mientras que la obtención de datos se realiza mediante peticiones asincrónicas con async/await y fetch. Los administradores pueden registrar nuevos clientes, realizar búsquedas dinámicas y acceder a fichas detalladas mediante rutas con parámetros. La interfaz del Dashboard renderiza los datos dinámicamente en componentes tipo Card y utiliza MUI para asegurar un acabado profesional, además de definir permisos específicos por sector que restringen la eliminación de registros exclusivamente al rol de Gerencia.

GRUPO 6

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
