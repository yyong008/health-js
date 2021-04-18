import React from 'react';
import { mount } from '@cypress/react';
import Badge from './index';

it('renders badge init div', () => {
  mount(<Badge />);
  cy.get('div').contains('badge');
});
