import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import GifsApp from './GifsApp';

describe('GifsApp component', () => {
  test('should render the GifsApp component', () => {
    const { container } = render(<GifsApp />);
    expect(container).toMatchSnapshot();
  });
});