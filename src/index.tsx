import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'assets/styles/tailwind.css';
import UseMouse from './components/useMouse';
import App from 'useCounter';
import Render from 'useRenderCount';
import App1 from 'usePrevious';

const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <div className=" ">
      <Render />
      <UseMouse />
      <App />
      <App1/>
    </div>
  </BrowserRouter>
);
