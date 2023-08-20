import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.scss';
import App from './App';
import { ModalState } from './appcontext/modalcontext';
import { GameState } from './appcontext/gamecontext';

const rootElement = (
  <React.StrictMode>
    <ModalState>
      <GameState>
        <App />
      </GameState>
    </ModalState>
  </React.StrictMode>
);

const root = document.getElementById('root');

const rootApp = ReactDOM.createRoot(root);
rootApp.render(rootElement);

