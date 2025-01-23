# Juego de Memoria con Pokémon

¡Bienvenido al Juego de Memoria con Pokémon! Este es un proyecto desarrollado con React y la API de [PokeAPI](https://pokeapi.co/). El objetivo del juego es hacer clic en tantos Pokémon únicos como sea posible sin repetir ninguno. Cada vez que haces clic en un Pokémon nuevo, tu puntuación aumenta y las cartas se barajan. Si haces clic en un Pokémon que ya habías seleccionado, el juego termina y tu puntuación se reinicia. ¡Intenta superar tu mejor puntuación!

## Características

- **Tablero de 8 cartas**: Cada carta muestra un Pokémon diferente.
- **Contador de puntuación**: Muestra tu puntuación actual en la ronda.
- **Mejor puntuación**: Registra la puntuación más alta que hayas alcanzado.
- **Barajado de cartas**: Las cartas se barajan después de cada clic.
- **Fin del juego**: El juego termina si haces clic en un Pokémon repetido.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local.

### Prerrequisitos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) (v6 o superior)

### Pasos

1. **Clona el repositorio**:
  
  ```bash
   git clone https://github.com/misafxd/memoryCard.git
   ```

2. **Navega al directorio del proyecto**:

   ```bash
     cd memoryCard
   ```

4. **Instala las dependencias**:
  
  ```bash
   npm install
   ```

4. **Inicia el servidor**:

  ```bash
   npm run dev
   ```

5. **Abre el proyecto en tu navegador**
El proyecto estará disponible en http://localhost:5173

## Cómo jugar

1. **Inicia el juego**: Al abrir la aplicación, verás un tablero con 8 cartas de Pokémon.
2. **Haz clic en un Pokémon**: Cada vez que hagas clic en un Pokémon único, tu puntuación aumentará en 1.
3. **Barajado de cartas**: Después de cada clic, las cartas se barajarán y cambiarán de lugar.
4. **Evita repetir**: Si haces clic en un Pokémon que ya habías seleccionado, el juego terminará.
5. **Mejor puntuación**: Si superas tu mejor puntuación, esta se actualizará automáticamente.

---

## Estructura del Proyecto

- `src/`: Contiene el código fuente del proyecto.
  - `components/`: Componentes de React utilizados en el proyecto.
  - `App.js`: Componente principal de la aplicación.
  - `index.js`: Punto de entrada de la aplicación.
- `public/`: Contiene archivos estáticos como `index.html`.

---

## Tecnologías Utilizadas

- [React](https://reactjs.org/): Biblioteca de JavaScript para construir interfaces de usuario.
- [PokeAPI](https://pokeapi.co/): API utilizada para obtener datos de Pokémon.
- [CSS](https://developer.mozilla.org/es/docs/Web/CSS): Para estilizar la aplicación.

---

¡Diviértete jugando y atrapando a todos los Pokémon que puedas! 🎮
