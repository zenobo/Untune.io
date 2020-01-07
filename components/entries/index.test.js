/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import Entries from './index';
import { store } from '__mocks__/reduxMock.js';

const component = <Provider store={store}><Entries /></Provider>;

describe('Entries', () => {
  it('Entries load', () => {
    const { container } = render(component);
    const getContainer = container.querySelector('.entries-item');
    expect(getContainer).not.toBeNull();
  })
  it('Entries renders with 1 mock entry', () => {
    const { getByText } = render(component);
    const title = store.getState().reddit.entries[0].title;
    expect(getByText(title)).not.toBeNull();
  })
})
