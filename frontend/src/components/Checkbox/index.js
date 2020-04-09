import React from 'react';

import { CheckboxStyle } from './styles';

const Checkbox = ({ execute }) => (
  <>
    <CheckboxStyle onChange={execute} type="checkbox" />
    <label>Encomendas com problemas</label>
  </>
);

export default Checkbox;
