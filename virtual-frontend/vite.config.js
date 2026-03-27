import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const serveStaticPortfolios = () => ({
  name: 'serve-static-portfolios',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url.startsWith('/Portfolios/')) {
        let filePath = path.join(__dirname, 'public', req.url.split('?')[0]);
        if (fs.existsSync(filePath)) {
          if (fs.statSync(filePath).isDirectory()) {
            filePath = path.join(filePath, 'index.html');
          }
          if (fs.existsSync(filePath)) {
            const ext = path.extname(filePath);
            const mimeTypes = {
              '.html': 'text/html',
              '.css': 'text/css',
              '.js': 'text/javascript',
              '.png': 'image/png',
              '.jpg': 'image/jpeg',
              '.svg': 'image/svg+xml'
            };
            if (mimeTypes[ext]) res.setHeader('Content-Type', mimeTypes[ext]);
            res.end(fs.readFileSync(filePath));
            return;
          }
        }
      }
      next();
    });
  }
});

export default defineConfig({
  plugins: [react(), serveStaticPortfolios()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
