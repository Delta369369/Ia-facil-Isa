import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';
import './styles/brand.css';
import './styles/neon.css';
const node = document.getElementById('root')!;
const app = <BrowserRouter basename={import.meta.env.BASE_URL}><App/></BrowserRouter>;
if(node.hasChildNodes() && node.querySelector('header'))hydrateRoot(node,app);else createRoot(node).render(app);
