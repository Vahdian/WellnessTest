# Wellness Test

Repositorio de la prueba tecnica.

Para llevar a cabo la prueba he usado el stack MERN; He cargado los datos proporcionados en .CSV en una base de datos en la nube (Mongo Atlas) y he creado una API con Node y expressJs que
interactua con un front de React.

<h3>El front consta de:</h3>
</br>
-Pagina de inicio desde donde acceder a los datos pulsando un botón.
</br>
-Pagina con la tabla de los datos que muestra un loader mientras cargan los datos de la API.
</br>
-Pagina para editar los datos, donde también he incluido una representación grafica simple comparando el precio.
</br>
-Pagina para crear una nueva entrada

<h3>Packages que he usado en Node:</h3>
</br>
-Express
</br>
-Nodemon
</br>
-Cors
</br>
-Dotenv
</br>
-Mongoose

<h3>Packages que he usado en React:</h3>
-Axios
</br>
-React-router-dom
</br>
-node-sass (para poder usar SASS en el CSS)
</br>
-bootstrap
</br>
-ChartsJs (Para representacion grafica de datos)
</br>

Aqui tambien dejo el [link de los test de endpoints de la API con Postman](https://www.postman.com/collections/4bba4209389da8d17a50)

## Tabla de contenido

- [Uso](#uso)
- [Facturas](#facturas)
  - [Model](#model)
  - [Rutas](#rutas)

## Uso

Clonar el repositorio.
`git clone repo`

Instalar dependencias (frontend y backend)
`cd frontend`
`npm install`
`cd backend`
`npm install`

(Se que los archivos .env que he usado no se deberian subir al repo, pero no los he metido en el gitignore asi os facilito la comprobacion del funcionamiento)

Iniciar el proyecto.

Para el backend podemos iniciarlo en ambos modos:

Producción: `npm run start`

Desarrollo: `npm run dev`

El servidor backend esta por defecto en el puerto http://localhost/5555 (definido en el .env de back)

Frontend:

`npm start`

El servidor frontend se ejecutara en el puerto por defecto de React http://localhost/3000 (Las cors estan habilitadas para 3000 y 3001 solamente)

## Facturas

### Modelo

Atributos incluidos en el modelo:

- fecha
- hora
- consumo
- coste
- precio

### Rutas

- Ver todas las entradas de datos: GET /data
- Ver una factura por id: GET /data/:id
- Crear nueva entrada: POST /data
- Actualizar datos: PUT /data/:id
- Borrar una entrada por id: DELETE /data/:id
