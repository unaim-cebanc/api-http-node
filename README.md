# API HTTP Node

## Descripción

Este proyecto es una pequeña aplicación web de tipo servidor HTTP desarrollado en Node.js. Su objetivo es servir páginas HTML estáticas y simular una API de ejemplo para mostrar información sobre clientes y pedidos de una empresa o negocio de vidrio/cristalería.

No utiliza una base de datos ni frameworks adicionales; toda la lógica se implementa con módulos nativos de Node y archivos HTML estáticos.

## Estructura del proyecto

- `server.js`: archivo principal que crea el servidor y gestiona las peticiones HTTP.
- `colores.js`: módulo para dar formato de color a los mensajes de consola.
- `html/`: carpeta con las páginas que se devuelven al cliente.
  - `index.html`: página de inicio.
  - `api.html`: menú de endpoints.
  - `clientes.html`: muestra una lista de clientes.
  - `pedidos.html`: muestra una lista de pedidos.
  - `notFound.html`: página de error 404.

## Cómo funciona

### 1. Gestión de rutas

La función `verificarUrl(url)` comprueba la URL solicitada y devuelve el archivo HTML correspondiente.

Las rutas soportadas son:

- `/` -> `html/index.html`
- `/api` -> `html/api.html`
- `/clientes` -> `html/clientes.html`
- `/pedidos` -> `html/pedidos.html`

Si la URL no coincide con ninguna de las anteriores, se responde con `404` y se sirve `html/notFound.html`.

### 2. Procesamiento de cada petición

La función `processRequest(req, res)` hace lo siguiente:

1. Registra la URL y el método HTTP mediante `logRequest(req)`.
2. Llama a `verificarUrl(req.url)` para decidir qué recurso devolver.
3. Establece el código de estado HTTP (`200` o `404`).
4. Lee el archivo correspondiente con `fs.readFile()`.
5. Envía el contenido al cliente con `res.end(data)`.
6. Registra el resultado de la respuesta con `logResponse(res)`.

### 3. Registro de logs

El módulo `colores.js` usa `picocolors` para imprimir mensajes de consola con colores y estilo:

- amarillo para información de la petición
- verde para respuestas correctas
- rojo para errores 404

## Rutas principales

### Inicio

- URL: `/`
- Muestra una pantalla de bienvenida con un enlace que lleva a la sección API.
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/a54fe244-9151-4c1c-ba4b-6d1b9b6e686b" />


### API

- URL: `/api`
- Muestra un menú con enlaces a:
  - `/clientes`
  - `/pedidos`
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/f71f5afa-ec90-42af-ad9c-8137baf06815" />


### Clientes

- URL: `/clientes`
- Devuelve un bloque con una lista de clientes:

```json
[{ id: 1, nombre: "Ana López" }, { id: 2, nombre: "Vidrios Norte S.L." }, { id: 3, nombre: "Cristalería Sur" }]
```
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/a57ea559-d9b6-4587-8f98-ca334460c0b4" />


### Pedidos

- URL: `/pedidos`
- Devuelve un bloque con pedidos:

```json
[{ id: 1, clienteId: 1, producto: "Vidrio templado 6mm", cantidad: 10 }, { id: 2, clienteId: 2, producto: "Espejo 80x120", cantidad: 2 }]
```
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/999c3698-28b6-45a9-be67-ddd1c6341dcc" />


### 404

Para una URL no válida, el servidor devuelve la página `notFound.html` con el mensaje `Error 404 - Page not found`.
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/537a1b0c-67b7-412b-afed-526824ad75b1" />
