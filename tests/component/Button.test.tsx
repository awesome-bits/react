import React from 'react';
import { expect, test, it } from 'vitest';
import { render, screen } from '@testing-library/react'
import Button from '../../src/components/ui/Button';

test('Button', () => {
  it('should render a button', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('should render a button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDefined();
  });
});

