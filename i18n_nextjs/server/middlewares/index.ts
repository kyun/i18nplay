
import { Request, Response } from 'express';

export const localeMiddleware = (req: Request, _: Response, next: (error?: any) => void) => {
  const locale = req.query['locale'];

  if (locale) {
    req.query['locale'] = (locale as string).replace('_', '-');
  }

  next();
};
