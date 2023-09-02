import { Route, Routes } from 'react-router-dom';

import { BillingView } from '../view/billing';

export const BillingRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<BillingView />} />
    </Routes>
  );
};
