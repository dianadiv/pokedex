import ReactDOM from 'react-dom/client';
import './index.css';
import 'bulma/css/bulma.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Context } from './context/PokemonsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context>
    <App />
  </Context>
);

reportWebVitals();
