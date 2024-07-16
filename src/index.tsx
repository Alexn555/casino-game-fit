import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.scss';
import { LCRoutes } from './routes/Routes';
import App from './app/App';
import PageNotFound from './common/notFound/notFound';
import Login from './auth/Login';
import GamesControl from './games/GamesControl';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={LCRoutes.Home} element={<App />} />
        <Route path={LCRoutes.Index} element={<App />} />
        <Route path={LCRoutes.Login} element={<Login />} />
        <Route path={LCRoutes.Games} element={<GamesControl />} />
        <Route path={LCRoutes.NotFound} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
reportWebVitals();
