# HW 12 - React-Redux | Ejercicios

## Duración estimada 🕒

x minutos

---

## Intro

En esta homework desarrollarás una aplicación que permita al usuario agregar y eliminar uno o varios items de una lista de compras.

---

## Consigna de la homework

- Crear una lista de compras.
- Eliminar un o varios items de la lista de compras.

---

## Pasos básicos para realizar la homework

🔹 Para poder ejecutar los `test` de esta homework, es necesario que abramos la terminal ubicados dentro de la carpeta `01 - Exercises`.

- Cuando te encuentres en esta carpeta, debes ejecutar el comando

```bash
npm install
```

- Listo!! Ya puedes correr los test:

```bash
npm test
```

Si deseas correr por test, puedes utilizar:

```bash
npm run test:01
```

🔹 Para poder correr la aplicación de forma local, sólo debes ejecutar el comando

```bash
npm start
```

- Ingresando a <http://localhost:3000> desde el navegador, podremos ir viendo en tiempo real el resultado de nuestro trabajo.

---

## Conociendo la estructura

🔹 Dentro de la carpeta `01 - Exercises`, vas a encontrar la siguiente estructura:

- Una carpeta llamada **_mocks_**
- Una carpeta llamada **img**
- Una carpeta llamada **public**
- Una carpeta llamada `src` (Es la carpeta en donde trabajaremos)
- Una carpeta llamada **tests**
- Un archivo **package.json**
- Y el archivo `README.md` que ahora mismo estás leyendo. 🧐

Además:

🔹 Dentro de la carpeta `src` encontrarás el esqueleto del proyecto React, estructurado de la siguiente manera:

- Una carpeta llamada `actions`
- Una carpeta llamada `assets`
- Una carpeta llamada `reducer`
- Una carpeta llamada `store`
- Un archivo llamado `App.js`
- Un archivo **index.css**
- Un archivo `index.js`

🔹 Estarás trabajando en las carpetas actions, reducer, store y el archivo App.js.

🔹 Da un vistazo al archivo `index` dentro de la carpeta **store** para que veas cómo se configura la store.

## 👩‍💻 Ejercicio 1

### Actions

🔹 Dentro de la carpeta **actions**, encontrarás dos archivos:

- `index.js`en el que harás las respectivas funciones para la lista de compras.
- `types.js` en el que guardarás las constantes de los types.

🔹 Lo que hay que hacer:

1. En el archivo **types.js**, crea y exporta las siguientes constantes:

- ADD_ITEM, en el que su valor sea 'ADD_ITEM'
- EDIT_ITEM, en el que su valor sea 'EDIT_ITEM'
- DELETE_ITEM, en el que su valor sea 'DELETE_ITEM'

2. En el archivo **actions.js**, importa las constantes que están en el archivo **types.js**

> Hint: Puedes utilizar destructuring para importar los types.

3. Define y exporta una función llamada addItem que recibe como parámetro `payload`, esta función debe retornar la propiedad type con su valor: **ADD_ITEM** y la propiedad payload con el valor que recibe por parámetro la función.

4. Define y exporta una función llamada editItem que recibe como parámetro `id`, esta función debe retornar la propiedad type con su valor: **EDIT_ITEM** y la propiedad payload con el valor que recibe por parámetro la función.

5. Define y exporta una función llamada deleteItem que recibe como parámetro `id`, esta función debe retornar la propiedad type con su valor: **DELETE_ITEM** y la propiedad payload con el valor que recibe por parámetro la función.

mapDispatchToProps
mapStateToProps

### Reducer

la lista debería ser un obj.

### Componente

1. Crea una etiqueta form.
2. Dentro de la etiqueta form, crear:

- Una etiqueta label y su texto sea **'Nombre:'**
- Una etiqueta input con los siguiente atributos:
  - `name` y su valor sea **name**.
  - `placeholder`y su valor sea **"Escribe tu nombre..."**
  - `type` y su valor sea **text**
- Una etiqueta label y su texto sea **'Correo Electrónico:'**
- Otra etiqueta input con los siguiente atributos:
  - `name` y su valor sea **email**.
  - `placeholder`y su valor sea **"Escribe tu email..."**
  - `type` y su valor sea **text**
- Una etiqueta label y su texto sea **'Teléfono:'**
- Otra etiqueta input con los siguiente atributos:
  - `name` y su valor sea **phone**.
  - `placeholder`y su valor sea **"Escribe un teléfono..."**
  - `type` y su valor sea **number**
- Una etiqueta label y su texto sea **'Asunto:'**
- Otra etiqueta input con los siguiente atributos:
  - `name` y su valor sea **subject**.
  - `placeholder`y su valor sea **"Escribe el asunto..."**
  - `type` y su valor sea **text**
- Una etiqueta label y su texto sea **'Mensaje:'**
- Una etiqueta textarea con los siguiente atributos:
  - `name` y su valor sea **message**.
  - `placeholder`y su valor sea **"Escribe tu mensaje..."**
  - `type` y su valor sea **text**
- Una etiqueta botón con el atributo `type` donde su valor sea **submit** y el texto del botón sea **enviar**

---

## 👩‍💻 Ejercicio 2

### Estados

🔹 Ahora agrega estados al componente Contact, estos estados estarán conectados con los inputs que creaste en el ejercicio anterior.

🔹 Lo que hay que hacer:

> **Hint**: Correr los tests una vez hayan terminado de configurar su estado local, ya los tests validan los cambios del estado al escribir sobre los inputs.

1. Crea un estado llamado `inputs` , el estado debe iniciar en un objeto con las siguientes propiedades:

- name, su valor debe ser un string vacío
- email, su valor debe ser un string vacío,
- phone, su valor debe ser 0,
- subject, su valor debe ser un string vacío,
- message, su valor debe ser un string vacío

Ejemplo:

```jsx
const [inputs, setInputs] = React.useState({
  inputs: {
    name: "",
  },
});
```

2. Crea un segundo estado llamado `errors` el estado debe iniciar en un objeto con las siguientes propiedades:

- name, su valor debe ser un string vacío
- email, su valor debe ser un string vacío,
- phone, su valor debe ser un string vacío,
- subject, su valor debe ser un string vacío,
- message, su valor debe ser un string vacío.

3. Conecta el estado con el formulario, para ello, crea el atributo **value** en cada input y/o textarea asignándole el estado correspondiente. Ejemplo:

```jsx
<input name="name" value={inputs.name} />
```

4. Crea la función **handleChange** antes del return, esta función recibe un `evento` como parámetro y dentro de ella haz lo siguiente:

- Setea el estado **inputs**
- Usa el spread operator para copiar el estado anterior
- El evento que recibimos como parámetro en la función, utilizando ES6, haz que las propiedades y valores del estado sean dinámicas. Ejemplo:

```jsx
[evento.target.name]: evento.target.value
```

5. Crea el atributo `onChange` a los inputs del formulario y asígnale la función **handleChange** previamente creada.

---

## 👩‍💻 Ejercicio 3

### Manejo de errores

🔹 En este ejercicio validarás cada input del formulario, cada vez que se actualice el estado, controlando que cumpla con las condiciones requeridas.

🔹 Lo que hay que hacer:

1. Define una función llamada `validate` fuera del componente Contact, que reciba como parámetro el objeto **inputs**, esta función debe ser exportada para que funcionen los tests. Ejemplo:

```jsx
export function validate() {}
```

Dentro de la función debes hacer lo siguiente:

a) Declara una variable llamada `errors` y que su valor sea un objeto vacío.
b) Valida cada input del formulario que viene del objeto **inputs** que se está recibiendo como parámetro en la función, para que se cumplan las siguientes condiciones:

- En el input **name**, si este campo está vacío, agrega la propiedad name al objeto **errors** en donde su valor sea "Se requiere un nombre".
- En el input **email**, valida si el email que ingresa el usuario coincide con el regex de la constante `regexEmail`, aplicándole el método `test()` y dentro de sus paréntesis coloca `input.email`; agrega la propiedad email al objeto **errors** en donde su valor sea "Debe ser un correo electrónico".
- En el input **phone**, valida si el phone que ingresa el usuario es un número positivo; agrega la propiedad phone al objeto **errors** en donde su valor sea "Sólo números positivos".
- En el input **subject**, si este campo está vacío, agrega la propiedad subject al objeto **errors** en donde su valor sea "Se requiere un asunto".
- En el input **message**, si este campo está vacío, agrega la propiedad message al objeto **errors** en donde su valor sea "Se requiere un mensaje".

Ejemplo:

```jsx
if (!inputs.name) {
  errors.name = "Se requiere un nombre";
} else if (!regexEmail.test(inputs.email)) {
  errors.email = "Se requiere un email";
}
```

c) La función debe retornar el objeto errors.

d) En la función **handleChange**:

- Setea el estado **errors** y que éste reciba la función `validate`
- Usa el spread operator para copiar el estado anterior
- El evento que recibimos como parámetro en la función, utilizando ES6, haz que las propiedades y valores del estado sean dinámicas.

Ejemplo:

```jsx
setErrors(
  validate({
    ...inputs,
    [e.target.name]: e.target.value,
  })
);
```

e) Debes informar a los usuarios que tiene errores en los inputs, para ello, haz lo siguiente:

- Crea una hoja de estilos llamada `Contact.modules.css`
- Crea una clase llamada `.warning` con la propiedad **border** y que su valor sea **solid**, **red** y 1 px.
- Crea otra clase llamada `danger` con la propiedades:
  - font-size: 10px
  - color: red
  - margin-left: 10em
- Importa en el componente **Contact.jsx** los estilos.
- En cada input crea el atributo **className** y asigna condicionalmente la propiedad del estado errors de acuerdo al input en el que te encuentres.
  Ejemplo:

```jsx
<input className={errors.name && 'warning'}>
```

- Debajo de cada input, si existe un error, agrega una etiqueta `p` debajo del mismo, en el que su texto sea la propiedad del objeto errors de acuerdo al input que te encuentres validando.
- Crea a la etiqueta **p** el atributo className y asígnale la clase `'danger'`.

Ejemplo:

```jsx
<p className="danger">{errors.name}</p>
```

---

### ...Estamos llegando a la última parte de la homework ⭐

## 👩‍💻 Ejercicio 4

### Envío de formulario

🔹 Ahora solo nos falta "enviar" el formulario.

🔹 Lo que hay que hacer:

1. Define una función llamada `handleSubmit`, que reciba un **evento** como parámetro, en ella realizarás la lógica que ejecutará el formulario cuando el usuario de click en el botón **Enviar**.
2. Dentro de la función:

- Utiliza el método `preventDefault()` al parámetro **evento** para prevenir que el formulario se envíe por defecto.
- Setea el estado **errors** y que éste reciba la función `validate` sin olvidar que la función **validate** recibe como argumento `errors`.
- Convierte el estado **errors** en un array para medir su longitud, si es igual a 0, muestra un alert con un mensaje, por ejemplo, "Datos completos" y setea los estados **inputs** y **errors** en su estado original (recuerda que `errors` tiene la función validate); en caso contrario, muestra un alert con otro mensaje, por ejemplo, "Debe llenar todos los campos".

3. Crea el atributo `onSubmit` a la etiqueta **form** y asígnale la función **handleSubmit**.

🔹 Resultado esperado:

<p align="center"><img src="./img/img.gif" height="300px" /></p>

---

## Recordemos que...

- Un formulario controlado es cuando el estado maneja los valores de los inputs y lo actualiza de acuerdo a los eventos del mismo usando setState.
- El evento.preventDefault() permite prevenir el comportamiento predeterminado de un submit.😃
- Con la propiedad target del evento, puedes setear las propiedades de un estado dinámicamente el name y value de cada input del formulario.
- Formula siempre qué datos quieres recibir y qué experiencia quieres dar al usuario, en el momento que definas las funciones handleChange y handleSubmit.

---

## Recursos adicionales

- Documentación **"Formularios"** <https://es.reactjs.org/docs/forms.html>
- Documentación **"Regular Expressions"** <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions>

---

Listo!!
Aprendiste cómo funcionan las rutas en React!! ✨🚀
Dirígete a la carpeta 📂 [**"02 - Integration"**](../02%20-%20Integration/README.md) y continúa desarrollando la app de Rick & Morty 🤩 ---