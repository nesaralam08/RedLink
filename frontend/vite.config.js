import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173, // Or any port you're using
    strictPort: true,
    allowedHosts: ["adee-103-46-203-154.ngrok-free.app"],
  },
  
})

// export default defineConfig({
//   server: {
//     host: "0.0.0.0",
//     port: 5173, // Or any port you're using
//     strictPort: true,
//     allowedHosts: ["adee-103-46-203-154.ngrok-free.app"],
//   },
// });
