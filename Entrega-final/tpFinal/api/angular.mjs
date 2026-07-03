import { AngularNodeAppEngine, createNodeRequestHandler, isMainModule, writeResponseToNodeResponse } from '@angular/ssr/node';
import express from 'express';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distFolder = join(__dirname, '../browser');
const app = express();

// Create the Angular app engine
const angularApp = new AngularNodeAppEngine();

// Serve static files
app.use(
  express.static(distFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

// Handle all other requests
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next()
    )
    .catch(next);
});

// Export handler for Vercel
export default app;
export const config = {
  runtime: 'nodejs20.x',
};
