
import compression from 'compression';
import express, { Request, Response } from 'express';
import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';
import helmet from 'helmet';

import nextI18next from '../i18n';
import { localeMiddleware } from './middlewares';

// Server Config
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();


app.prepare().then(async () => {
  const server = express();

  await nextI18next.initPromise;
  server.use(helmet({
    dnsPrefetchControl: { allow: true },
    frameguard: { action: 'deny' },
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
    xssFilter: false,
  }));
  server.use(compression());

  server.use(localeMiddleware);
  server.use(nextI18NextMiddleware(nextI18next as any));

  // Default nextjs page
  server.get('*', (req: Request, res: Response) => handle(req, res));


}).catch(err => console.log(err));