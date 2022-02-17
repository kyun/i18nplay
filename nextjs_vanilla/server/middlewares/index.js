
export const localeMiddleware = (req, _, next) => {
  const locale = req.query['locale'];

  if (locale) {
    //req.query['locale'] = (locale).replace('_', '-');
    req.query['locale'] = locale.split('-')[0];
  }

  next();
};
