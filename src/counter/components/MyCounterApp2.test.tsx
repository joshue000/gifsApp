import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import MyCounterApp from './MyCounterApp';

const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

vi.mock('../hooks/useCounter', () => ({
  default: () => ({
    counter: 20,
    handleAdd: handleAddMock,
    handleSubtract: handleSubtractMock,
    handleReset: handleResetMock,
  })
}));

describe('MyCounterApp', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should render the MyCounterApp component', () => {
    render(<MyCounterApp />);

    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(`Counter 20`);

    expect(screen.getByRole('button', {name: '+1'})).toBeDefined();
    expect(screen.getByRole('button', {name: '-1'})).toBeDefined();
    expect(screen.getByRole('button', {name: 'Reset'})).toBeDefined();
  });

  test('should call handleAdd if button is clicked', () => {
    render(<MyCounterApp />);

    const buttonAdd = screen.getByRole('button', {name: '+1'});
    buttonAdd.click();

    expect(handleAddMock).toHaveBeenCalled();
    expect(handleSubtractMock).not.toHaveBeenCalled();
    expect(handleResetMock).not.toHaveBeenCalled();
  });

  test('should call handleSubtract if button is clicked', () => {
    render(<MyCounterApp />);

    const buttonSubtract = screen.getByRole('button', {name: '-1'});
    buttonSubtract.click();

    expect(handleSubtractMock).toHaveBeenCalled();
    expect(handleAddMock).not.toHaveBeenCalled();
    expect(handleResetMock).not.toHaveBeenCalled();
  });

  test('should call handleReset if button is clicked', () => {
    render(<MyCounterApp />);

    const buttonReset = screen.getByRole('button', {name: 'Reset'});
    buttonReset.click();

    expect(handleResetMock).toHaveBeenCalled();
    expect(handleAddMock).not.toHaveBeenCalled();
    expect(handleSubtractMock).not.toHaveBeenCalled();
  });
});