import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { Paths } from './enums';
import { App } from './App';
import { NotFound, PeopleTable, Planet } from './components';

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.HOME} element={<App />}>
          <Route index element={<PeopleTable />} />
          <Route path={Paths.PLANETS} element={<Navigate to={Paths.HOME} />} />
          <Route path={Paths.PLANET} element={
            <>
              <PeopleTable />
              <Planet />
            </>
          } />
        </Route>
        <Route path={Paths.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
