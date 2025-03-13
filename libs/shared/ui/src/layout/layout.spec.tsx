import { render } from '@testing-library/react';

import Layout from './layout';
import React from 'react';

describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Layout children={undefined} />);
    expect(baseElement).toBeTruthy();
  });
});
