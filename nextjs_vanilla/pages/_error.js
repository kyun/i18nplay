import React from 'react';

const ErrorPage = ({ statusCode }) => {
  return (
    <div>
      {statusCode && <h2>ERROR {statusCode}</h2>}
    </div>
  );
};

ErrorPage.getInitialProps = async ({ res, err }) => {
  return {
    statusCode: (res && res.statusCode) || (err && err.statusCode) || null,
    namespacesRequired: ['strings']
  };
};

export default ErrorPage;