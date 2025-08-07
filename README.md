¿ Por que  Donate APP?

Porque facilita la solidaridad digital y mejora la experiencia 
de los usuarios conectando necesidades reales con quienes pueden ayudar
Porque permite que la app funcione sin servidor y usa almacenamiento
local para guardar datos. Porque agrega interacciones con animaciones y validaciones
Porque es fácil de mantener y escalar con APIS en el futuro
 
El diseño sigue el enfoque de una estructura clara con navegación intuitiva
lo cual mejora la experiencia del usuario 
Usa almacenamiento local (LocalStorage) para guardar datos
Agrega interacciones con animaciones y validaciones también el
contenido visual y la preparación de los estilos los cuáles generan
interacciones dinámicas ya que el usuario al instante que ingresa
sabe por los colores y por el contador de impacto real que es una pagina de donaciones

Explicación general del HTML
Este archivo es la página de inicio de la aplicación de donaciones Donatte App. 
Muestra la bienvenida, novedades, el impacto generado (con contadores dinámicos),
y enlaces a otras secciones del sitio.
Está dividido en secciones claras para mejorar la experiencia del usuario y
facilitarle la navegación. Utilice atributos que permiten a mi página tener una estructura accesible y que se vea bien con todas sus funcionalidades en todos los dispositivos con adaptabilidad al tamaño del ancho de las pantallas, siendo asi que 
veriamos en los móviles los textos más chicos y las cajas más angostas

 Explicación de cada etiqueta principal:
<!DOCTYPE html> → Define que el documento es HTML5.
<html lang="es"> → El idioma del sitio es español.
<head> → Contiene metadatos, título y enlace al CSS.
<meta charset="UTF-8"> → Asegura que los caracteres especiales se vean bien.
<meta name="viewport"...> → Permite diseño adaptable a móviles.
<title> → Título que aparece en la pestaña del navegador.
<link rel="stylesheet"> → Enlaza el archivo de estilos CSS.
<body> → Contiene todo el contenido visible de la página.
<div class="header"> → Muestra una imagen en el encabezado.
<div class="menu"> → Incluye el menú de navegación.
<nav> → Agrupa los enlaces a otras páginas.
<section class="hero"> → Sección principal con título, texto y formulario.
<form> → Contiene los campos para que el usuario se registre.
<label> y <input> → Etiquetas y campos para completar datos personales.
<button> → Botón para enviar el formulario.
<div class="footer"> → Pie de página con redes sociales y contacto.
<script src="main.js"> → Enlaza un archivo JavaScript externo.


El archivo estilos.css define el diseño visual completo de la aplicación:
sus colores, la tipografía, la organización, formularios, responsividad 
y estilos para cada sección (header, menu, body, footer)
También me permite que mi página sea moderna, clara, agil y útil 

Explicación breve:
body, .formulario, .formulario *
Define fuente general del sitio.

body
Establece fondo, color de texto y estructura base vertical.

.header img
Estilo para la imagen superior: tamaño y borde.

.nav-menu, .nav-menu a
Menú horizontal: fondo verde claro, enlaces con hover.

.hero
Sección principal con imagen de fondo centrada.

.hero-texto, .card-box, .registro
Contenedores centrales con fondo verde oscuro, texto blanco, sombra y borde redondeado.

.hero-texto.quienes-texto p
Solo aplica alineación a izquierda para la página “¿Quiénes somos?”.

Títulos y párrafos (h1, h2, p)
Tamaño grande, márgenes claros, buena legibilidad.

.boton
Botón verde con efecto hover.

.novedades, .slider, .slide
Caja de novedades: diseño tipo cards con imágenes y textos.

.impacto, .stats, .stat
Estilo para los números de impacto (donaciones, voluntarios): bloques centrados y con sombra.

.equipo-img
Imagen con borde redondeado y centrada.

.formulario, inputs, labels, textarea, button
Estilo claro y organizado del formulario de registro: campos grandes, legibles y botón verde.

.footer, .contacto, .item
Pie de página con íconos y contactos alineados.

html, body, .cuerpo
Estructura general para que el contenido ocupe toda la altura de la pantalla.

 @media (max-width: 768px)
Adaptación para móviles: texto más chico, cajas más angostas.

El código JavaScript le da interactividad a la página.
Muestra y anima los contadores de impacto
Validad los formularios de registro y donación
Guarda datos en el navegador usando LocalStorage

Explicación breve:

DOMContentLoaded
Espera que se cargue el HTML antes de ejecutar el script.

Contadores (donaciones, voluntarios, personasAyudadas)
Muestra y guarda las cantidades en pantalla y en localStorage.

animateCounters()
Anima los contadores cuando entran en pantalla al hacer scroll.

isInViewport(el)
Verifica si un elemento está visible en la ventana.

Formulario de registro (#formRegistro)
Valida nombre, email, teléfono, provincia y localidad. Si es correcto, suma un voluntario y guarda el dato localmente.

Formulario de donación (#formDonacion)
Valida email, categoría y descripción. Si todo está bien, suma una donación y muestra un mensaje de agradecimiento.


El archivo main.js controla los contadores, los formularios y datos locales
Se activa luego de que termina de cargar la página
Mejora la experiencia del usuario
Permite que la APP funcione sin servidor 

