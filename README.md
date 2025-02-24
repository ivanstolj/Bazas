¡Claro! Aquí tienes un archivo `README.md` completo para tu proyecto de Bazas. Este archivo proporciona una descripción general del proyecto, cómo configurarlo, cómo ejecutarlo y cualquier otra información relevante.

---

# **Bazas - Juego de Cartas**

Bazas es un juego de cartas en el que los jugadores compiten para cumplir con las cartas que han pedido en cada mano. Este proyecto es una implementación digital del juego, desarrollada en **React** con **TypeScript**.

---

## **Tabla de Contenidos**

1. [Descripción del Juego](#descripción-del-juego)
2. [Características](#características)
3. [Requisitos](#requisitos)
4. [Instalación](#instalación)
5. [Ejecución](#ejecución)
6. [Estructura del Proyecto](#estructura-del-proyecto)
7. [Contribución](#contribución)
8. [Licencia](#licencia)

---

## **Descripción del Juego**

En Bazas, los jugadores deben predecir cuántas cartas podrán ganar en cada mano. El juego sigue un patrón de manos crecientes y decrecientes, donde la cantidad de cartas repartidas aumenta hasta la mitad del juego y luego disminuye. El objetivo es acumular la mayor cantidad de puntos posible cumpliendo con las predicciones.

---

## **Características**

- **Interfaz de usuario intuitiva**: Diseño moderno y responsive para jugar en dispositivos móviles y de escritorio.
- **Lógica de juego completa**:
  - Asignación de nombres a los jugadores.
  - Selección de la cantidad de jugadores (de 3 a 7).
  - Pedido de cartas en cada mano.
  - Verificación de cumplimiento de predicciones.
  - Cálculo automático de puntuaciones.
- **Restricciones inteligentes**:
  - El último jugador no puede elegir un número que haga que la suma total sea igual a la cantidad de cartas en la mano.

---

## **Requisitos**

- **Node.js**: Versión 16 o superior.
- **npm**: Gestor de paquetes de Node.js.

---

## **Instalación**

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/bazas.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd bazas
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

---

## **Ejecución**

1. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

2. Abre tu navegador y visita:

   ```
   http://localhost:5173
   ```

---

## **Estructura del Proyecto**

```
bazas/
├── src/
│   ├── components/
│   │   ├── Inicio.tsx
│   │   ├── SeleccionarJugadores.tsx
│   │   ├── AsignarNombreJugador.tsx
│   │   ├── Tabla.tsx
│   │   ├── Pedir.tsx
│   │   └── Cumplio.tsx
│   ├── types.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── public/
├── package.json
├── vite.config.ts
└── README.md
```

---

## **Contribución**

¡Las contribuciones son bienvenidas! Si deseas mejorar el proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama:

   ```bash
   git checkout -b nombre-de-tu-rama
   ```

3. Realiza tus cambios y haz commit:

   ```bash
   git commit -m "Descripción de tus cambios"
   ```

4. Sube tus cambios:

   ```bash
   git push origin nombre-de-tu-rama
   ```

5. Abre un Pull Request en GitHub.

---

## **Licencia**

Este proyecto está bajo la licencia **MIT**. Para más detalles, consulta el archivo [LICENSE](LICENSE).

---

¡Gracias por usar Bazas! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue en el repositorio. 😊

---

### **Notas Adicionales**

- Este proyecto fue desarrollado como una práctica de React y TypeScript.
- Si encuentras algún error o tienes ideas para mejorar el juego, ¡no dudes en contribuir!

---

¡Diviértete jugando Bazas! 🃏
