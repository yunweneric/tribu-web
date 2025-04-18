import { render } from '@testing-library/react';

import React from 'react';
import Header from './header';

describe('Sidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });
});
