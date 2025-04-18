import { render } from '@testing-library/react';

import Sidebar from './sidebar';
import React from 'react';

describe('Sidebar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Sidebar />);
    expect(baseElement).toBeTruthy();
  });
});
