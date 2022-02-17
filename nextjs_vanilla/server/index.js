
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';

import nextI18next from '../i18n';
import { localeMiddleware } from './middlewares';

// Server Config
const port = parseInt(process.env.PORT || '8000', 10);
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();

  await nextI18next.initPromise;

  server.use(helmet({
    dnsPrefetchControl: { allow: true },
    frameguard: { action: 'deny' },
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
    xssFilter: true,
  }));
  server.use(compression());

  server.use(localeMiddleware);
  server.use(nextI18NextMiddleware(nextI18next));

  // Default nextjs page
  server.get('*', (req, res) => handle(req, res));


  server.listen(port, () => {
    console.log(`[23123] Listening on port: ${port}`);
  });

}).catch(err => console.log(err));