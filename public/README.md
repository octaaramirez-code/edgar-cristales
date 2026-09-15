[README.md](https://github.com/user-attachments/files/32243260/README.md)
# Fotos de trabajos realizados

Subí acá las fotos (formato .jpg o .png, ideal que no pesen más de 1–2 MB cada una).

Después, en `app/content.ts`, agregá cada foto dentro del array `imagenes` del
servicio que corresponda, por ejemplo:

```ts
imagenes: [
  { src: '/mampara-1.jpg', alt: 'Mampara de baño instalada en departamento en MDP' },
  { src: '/mampara-2.jpg', alt: 'Detalle de herraje en acero' },
],
```

El `src` tiene que empezar con `/` y coincidir exactamente con el nombre del
archivo que subiste acá.
