import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'assets/styles/tailwind.css';
import UseMouse from './components/useMouse';
import App from 'useCounter';
import Render from 'useRenderCount';
import App1 from 'usePrevious';
import App5 from 'useHover';

const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <div className=" ">
      <App5/>
      <Render />
      <UseMouse />
      <App />
      <App1/>
    </div>
  </BrowserRouter>
);
