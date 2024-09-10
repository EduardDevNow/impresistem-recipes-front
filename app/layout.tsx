import React from 'react';
import type { ILayoutProps } from '@/utils/models/Layout';
import './globals.css'

const RootLayout: React.FC<ILayoutProps> = ({ children }): JSX.Element => {
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