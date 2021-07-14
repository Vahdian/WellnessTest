# Wellness Test

Repositorio de la prueba tecnica.

[Testeo de la API con Postman](https://www.postman.com/collections/4bba4209389da8d17a50)

## Tabla de contenido

* [Uso](#uso)
  * [Model](#model)
  * [Rutas](#rutas)
* [Neas](#neas)
  * [Model](#model)
  * [Rutas](#rutas)


## Uso

Clonar el repositorio.
`git clone repo`


Instalar dependencias (frontend y backend)
`cd frontend`
`npm install`
`cd backend`
`npm install`


Iniciar el proyecto.

Para el backend podemos iniciarlo en ambos modos:

Producción: `npm run start`

Desarrollo: `npm run dev`

El servidor backend esta por defecto en el puerto http://localhost/5555

Frontend:

`npm start`

El servidor frontend se ejecutara en el puerto por defecto de React http://localhost/3000 (Las cors estan habilitadas para 3000 y 3001 solamente)

### Model

## data

### Model

Atributos:

* fecha
* hora
* consumo
* coste
* precio

### Rutas

* Ver todas las entradas de datos: GET /data
* Ver una factura por id: GET /data/:id
* Crear nueva entrada: POST /data/:id
* Actualizar datos: PUT /data/:id
* Borrar una entrada por id: DELETE /data/:id
