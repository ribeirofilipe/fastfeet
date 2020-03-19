import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Delivery from '~/pages/Delivery';
import DeliverySave from '~/pages/Delivery/Save';
import Deliveryman from '~/pages/Deliveryman';
import DeliverymanSave from '~/pages/Deliveryman/Save';
import Recipient from '~/pages/Recipient';
import RecipientSave from '~/pages/Recipient/Save';
import Problem from '~/pages/Problem';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/delivery" component={Delivery} isPrivate />
      <Route path="/delivery-save" component={DeliverySave} isPrivate />
      <Route path="/deliveryman" component={Deliveryman} isPrivate />
      <Route path="/deliveryman-save" component={DeliverymanSave} isPrivate />
      <Route path="/recipient" component={Recipient} isPrivate />
      <Route path="/recipient-save" component={RecipientSave} isPrivate />
      <Route path="/problem" component={Problem} isPrivate />
    </Switch>
  );
}
