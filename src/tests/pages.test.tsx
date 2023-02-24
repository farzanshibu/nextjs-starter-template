import { render, screen } from '@testing-library/react';
import React from 'react';

import Home from '@/app/page';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Home page', () => {
  describe('Render method', () => {
    it('should have p tag', () => {
      render(<Home />);

      expect(screen.getByText(/Next.js 13/i)).toBeInTheDocument();
    });
  });
});
