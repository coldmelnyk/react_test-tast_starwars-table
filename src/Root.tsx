import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { Paths } from './enums';
import { App } from './App';
import { PeopleTable } from './components';

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.HOME} element={<App />}>
          <Route index element={<PeopleTable />} />
        </Route>
        <Route path={Paths.NOT_FOUND} element={<Navigate to={Paths.HOME} />} />
      </Routes>
    </BrowserRouter>
  );
};
