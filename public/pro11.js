import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Pro1 from './Pro1';

const rootElement = document.getElementById('G-Demo');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Pro1 />
  </StrictMode>
);
