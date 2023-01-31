import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import MainPage from '@/pages/MainPage';

const router = (
  <Route>
    <Route index element={<MainPage />} />
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
