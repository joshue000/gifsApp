import { screen, render, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import MyCounterApp from './MyCounterApp';

describe('MyCounterApp', () => {

  test('should render the MyCounterApp component', () => {
    render(<MyCounterApp />);

    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(`Counter 0`);

    expect(screen.getByRole('button', {name: '+1'})).toBeDefined();
    expect(screen.getByRole('button', {name: '-1'})).toBeDefined();
    expect(screen.getByRole('button', {name: 'Reset'})).toBeDefined();
  });

  test('should increment the counter', () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole('heading', {level: 1});
    const buttonAdd = screen.getByRole('button', {name: '+1'});

    fireEvent.click(buttonAdd);

    expect(labelH1.innerHTML).toContain(`Counter 1`);
  });

  test('should decrement the counter', () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole('heading', {level: 1});
    const buttonSubtract = screen.getByRole('button', {name: '-1'});

    fireEvent.click(buttonSubtract);

    expect(labelH1.innerHTML).toContain(`Counter 0`);
  });

  test('should reset the counter', () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole('heading', {level: 1});

    const buttonAdd = screen.getByRole('button', {name: '+1'});
    fireEvent.click(buttonAdd);
    expect(labelH1.innerHTML).toContain(`Counter 1`);
    
    const buttonReset = screen.getByRole('button', {name: 'Reset'});
    fireEvent.click(buttonReset);
    expect(labelH1.innerHTML).toContain(`Counter 0`);
  });

});