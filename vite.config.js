import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  
})



// server: {
//     host: true, // 👈 allows access from local network (e.g., 192.168.x.x)
//     port: 5173, // or any port you want
//   },
