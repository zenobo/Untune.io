/* eslint-env jest */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

import Body from 'components/body';
import { store } from '__mocks__/reduxMock.js';

const component = <Provider store={store}><Body /></Provider>;

describe('Body', () => {
  it('Entries load', () => {
    const { container } = render(component);
    const getContainer = container.querySelector('.header-hamburger');
    fireEvent.click(getContainer);
    expect(container.querySelector('.sidebar-container').classList.contains('sidebar-disabled')).toBe(true);
  })
})
