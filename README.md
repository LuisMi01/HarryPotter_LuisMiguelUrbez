# Proyecto Harry Potter para la asignatura Informatica 2 por Luis Miguel Urbez.

## Repositorio_ https://github.com/LuisMi01/HarryPotter_LuisMiguelUrbez_Informatica2

## 1 Introducction<br>
El alumno implementará un API REST con Node.JS que complete la especificación indicada en el presente documento.
<br>
## 2 Base de datos<br>
El API almacenará los datos persistentes en una base de datos MySQL o MariaDB (a elección del alumno) y se usarán las siguientes tablas:
<ul>
<li>Películas</li>
<li>Personajes</li>
</ul>
<br>

### 2.1 Colecciones 
  De cara a poder definir las columnas a usar en las tablas, es necesario conocer las colecciones de datos.
  Destacar que si el alumno necesita almacenar datos extra, podrá hacerlo sin problema alguno, la siguiente lista de columnas es meramente orientativa:<br>
__2.1.1. Película__<br>
  id - Identificador único (autoincremental) <br>
  title - Título de la película<br>
  length - Longitud en minutos de la película <br>
  sinopsis - Resumen de la película<br>
  year - Año de emisión<br>
  __2.1.2. Personaje__<br>
  id - Identificador único (autoincremental) <br>
  name - Nombre del personaje<br>
  desc - Descripción del personaje<br>
  
### 2.2 pelicula_personajes
  Esta tabla se usará para cruzar datos entre las dos anteriores
  <br>idPelicula - Identificador de película
  <br>idPersonaje - Identificador de personaje<br>

## 3 API REST<br>
 El API debe ofrecer un CRUD 1 completo sobre las colecciones: <br>
  /peliculas<br>
  /personajes<br>
 
 __Los métodos HTTP a utilizar deberán ser los adecuados para cada operación__<br>
  Además, se ofrecerá la consulta en las colecciones: <br>
  /peliculas/:idPelicula/personajes - Mostrar los personajes de la película<br>
  /personajes/:idPersonajes/peliculas - Mostrar las películas dónde sale el personaje<br>
### 3.1 API Combate
  Finalmente, implementar una serie de recursos virtuales que nos permitan simular combates entre los personajes.<br>
Los combates serán definidos por el alumno (juego de Rol), y cada perso- naje almacenará una serie de atributos (magia, fuerza, poder, ...) a elección del alumno.<br>
Cada combate aplicará un factor aleatorio además de varias iteracciones de combate.<br>
__Devolverá el estado final de cada personaje tras el combate.__<br>
  -GET /combate/:idPersonaje - Obtener los atributos del personaje ac- tuales<br>
  -POST /combate?p1=idPersonaje1&p2=idPersonaje2 - Realizar un nue- vo combate entre ambos personajes<br>
  -PUT /combate/:idPersonaje - Poder cambiar atributos al personaje (curación); en el cuerpo del mensaje se enviarán los nuevos atributos<br>
Obviamente, tras un combate, al volver a consultar el GET, obtendremos el estado del personaje tras el combate.<br>

## 4 Autenticacion y control de acceso
  El API para consultas será de libre acceso, pero para añadir o modificar datos así como realizar combates, el usuario deberá estar autenticado.<br>
<br>A modo de guía, se recomienda:<br>
  <br>-Crear una tabla de usuarios con login y password en la base de datos. La contraseña debería estar cifrada con un HASH (SHA1)<br>
  -Agregar una ruta al API: POST /login que reciba en el cuerpo el lo- gin y la password, valide contra la BBDD y devuelva un TOKEN (se
recomienda utilizar JWT)2<br>
  -El resto de peticiones enviarán en la cabecera ‘Authorization’ el valor ‘Bearer TokenRecibidoTrasElLogin’, para lo que se recomienda utili- zar la librería ‘express-bearer-token’3 que nos añadirá a req.token este identificador y con JWT podremos validar si es correcto y dar acceso a los elementos de edición del API<br>

## 5 WEB de pruebas
  Implementar una sencilla web para probar el API, no es necesario que sea ‘bonita’, simplemente que ofrezca una serie de botones y formularios para poder probar el API cómodamente.









