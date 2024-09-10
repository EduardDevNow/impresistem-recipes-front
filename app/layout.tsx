import React from 'react';
import type { ILayoutProps } from '@/utils/models/Layout';
import './globals.css'
import axios from 'axios';

const RootLayout: React.FC<ILayoutProps> = ({ children }): JSX.Element => {
  axios.defaults.baseURL = process.env.NEXT_APP_API_URL;

  return (
    <html lang='es'>
      <head>
        <title>Impresistem Recipes</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout