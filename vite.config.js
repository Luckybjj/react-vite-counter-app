import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})


// Nos sirve para hacer configuraciones propias de vite

// El index.html se encuentra en la raíz del proyecto, al contrario en CRA que se encuentra en una carpeta pública.


// En vite por defecto el proyecto es más crudo, lo que significa que tiene menos configuraciones automáticas.
