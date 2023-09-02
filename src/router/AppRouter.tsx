import { Route, Routes } from 'react-router-dom';

import { BillingRouter } from '../billing';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<BillingRouter />} />
    </Routes>
  );
};
