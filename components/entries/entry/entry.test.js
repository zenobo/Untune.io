/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';

import Entry from './index.js';

const entry = {
  title: "test title",
  permalink: "test link",
};

describe('Single entry', () => {
  it('Shows the passed title', () => {
    const { getByText } = render(<Entry entry={entry} />);
    expect(getByText(entry.title)).not.toBeNull();
  });
  it('Shows the passed permalink', () => {
    const { getByText } = render(<Entry entry={entry} />);
    expect(getByText(entry.title).getAttribute("href")).toBe(`https://reddit.com${entry.permalink}`);
  });
})
