import { createBrowserRouter } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { MainApp } from './MainApp';

export const router = createBrowserRouter([
  {
    path: '/', //Path del navegador
    element: <MainApp />, // Componente al que redirige
    children: [ //Según qué ruta haya en el navegador pinta mainApp y el componente por ruta en el Outlet de MainApp
      { path: '', element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: '*', element: <AboutPage /> },
    ]
  },
  
])