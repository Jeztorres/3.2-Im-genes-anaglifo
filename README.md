# 🎨 Visor Estereoscópico 3D

Una aplicación web moderna y elegante para visualizar y analizar imágenes estereoscópicas organizadas por categorías.

## ✨ Características

- � **4 Categorías organizadas**: Positiva, Negativa, Nula y Side by Side
- 🖼️ **20 imágenes en total**: 5 imágenes por cada categoría
- �🔵 **Visualización Anaglifo**: Para categorías Positiva, Negativa y Nula
- � **Visualización Side by Side**: Categoría separada para dispositivos VR
- 💎 **Diseño Liquid Glass**: Efectos modernos de glassmorfismo
- 🎨 **Colores identificativos**: Cada categoría con su propio color
- 🎭 **Animaciones Suaves**: Transiciones y efectos fluidos
- 📱 **Responsive**: Adaptado para todos los dispositivos
- ⌨️ **Navegación por teclado**: Usa las flechas para navegar
- 👆 **Soporte táctil**: Desliza para cambiar de imagen
- 🎨 **Bootstrap 5**: Framework moderno y robusto

## 🚀 Cómo usar

1. Abre el archivo `index.html` en tu navegador
2. Navega por las 4 secciones diferentes:
   - **Positiva** (verde): 5 imágenes con efecto anaglifo
   - **Negativa** (rojo): 5 imágenes con efecto anaglifo
   - **Nula** (amarillo): 5 imágenes con efecto anaglifo
   - **Side by Side** (azul): 5 imágenes para VR
3. Haz clic en cualquier imagen para abrirla en el visor modal
4. Usa los controles de navegación o las flechas del teclado
5. Las imágenes anaglifo requieren lentes 3D rojo-cyan
6. Las imágenes Side by Side son para visualización VR

## 📁 Estructura del proyecto

```
PAGINAWEBsidebyside/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos personalizados
├── js/
│   └── main.js            # Lógica JavaScript
├── assets/
│   ├── favicon.png        # Icono de la aplicación
│   └── images/            # Carpeta principal de imágenes
│       ├── positiva/      # 5 imágenes positivas (anaglifo)
│       │   ├── image1.jpg
│       │   ├── image2.jpg
│       │   ├── image3.jpg
│       │   ├── image4.jpg
│       │   └── image5.jpg
│       ├── negativa/      # 5 imágenes negativas (anaglifo)
│       │   ├── image1.jpg
│       │   ├── image2.jpg
│       │   ├── image3.jpg
│       │   ├── image4.jpg
│       │   └── image5.jpg
│       ├── nula/          # 5 imágenes nulas (anaglifo)
│       │   ├── image1.jpg
│       │   ├── image2.jpg
│       │   ├── image3.jpg
│       │   ├── image4.jpg
│       │   └── image5.jpg
│       └── sidebyside/    # 5 imágenes side by side (VR)
│           ├── image1.jpg
│           ├── image2.jpg
│           ├── image3.jpg
│           ├── image4.jpg
│           └── image5.jpg
└── README.md
```

## 📸 Agregar tus imágenes

Coloca tus imágenes en las carpetas correspondientes:

### Categoría Positiva (5 imágenes)
`assets/images/positiva/image1.jpg` hasta `image5.jpg`

### Categoría Negativa (5 imágenes)
`assets/images/negativa/image1.jpg` hasta `image5.jpg`

### Categoría Nula (5 imágenes)
`assets/images/nula/image1.jpg` hasta `image5.jpg`

### Categoría Side by Side (5 imágenes)
`assets/images/sidebyside/image1.jpg` hasta `image5.jpg`

**Nota importante**: 
- Las imágenes para Positiva, Negativa y Nula se visualizarán con efecto anaglifo
- Las imágenes de Side by Side deben estar en formato estereoscópico lado a lado

## 🎨 Tecnologías utilizadas

- HTML5
- CSS3 (Glassmorphism, Animations)
- JavaScript (Vanilla)
- Bootstrap 5
- Bootstrap Icons
- Google Fonts (Inter)

## 👨‍💻 Desarrollador

**Jez**
- © 2025 - Todos los derechos reservados

## 📝 Notas

- Para el mejor efecto anaglifo, usa lentes 3D rojo-cyan
- Para el modo side-by-side, usa un visor VR o enfoca los ojos adecuadamente
- Las imágenes se pueden navegar con el teclado (flechas izquierda/derecha)
- El diseño es completamente responsive y funciona en móviles, tablets y escritorio

## 🌟 Características destacadas

### Efectos visuales
- Fondo oscuro elegante con gradientes
- Efecto parallax con el movimiento del mouse
- Transiciones suaves entre imágenes
- Animaciones de entrada al hacer scroll
- Badges de categoría con colores identificativos

### Organización
- **🟢 Categoría Positiva**: Color verde, 5 imágenes anaglifo
- **🔴 Categoría Negativa**: Color rojo, 5 imágenes anaglifo
- **🟡 Categoría Nula**: Color amarillo, 5 imágenes anaglifo
- **🔵 Categoría Side by Side**: Color azul, 5 imágenes VR

### Funcionalidades
- Navegación por teclado y táctil
- Modal de pantalla completa para visualización
- Indicador de imagen actual por categoría
- Botones de navegación (anterior/siguiente)
- Numeración visible en cada imagen
- Sistema de categorías independientes

### Visualización
- **Anaglifo**: Efecto 3D con superposición de capas (rojo-cyan)
- **Side by Side**: Formato estereoscópico para visores VR

---

¡Disfruta de la experiencia 3D organizada por categorías! 👓✨
