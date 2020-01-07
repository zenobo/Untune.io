/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import Body from './index';
import { store } from '__mocks__/reduxMock.js';

const component = <Provider store={store}><Body /></Provider>;

describe('Body', () => {
  it('Header container loads', () => {
    const { container } = render(component);
    const getContainer = container.querySelector('.header-container');
    expect(getContainer).not.toBeNull();
  })
  it('Entries container loads', () => {
    const { container } = render(component);
    const getContainer = container.querySelector('.entries-container');
    expect(getContainer).not.toBeNull();
  })
})
