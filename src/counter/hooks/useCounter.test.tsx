import { act, renderHook } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import useCounter from './useCounter';

describe('useCounter hook', () => {
  
  test('should initialize with default value of 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(0);
  });

  test('should initialize with value 20', () => {
    const initialValue = 20;
    const { result } = renderHook(() => useCounter(initialValue));
    expect(result.current.counter).toBe(initialValue);
  });

  test('should increment the counter when handleAdd is called', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.handleAdd();
    });
    expect(result.current.counter).toBe(1);
  });

  test('should decrement the counter when handleSubtract is called', () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.handleSubtract();
    });
    expect(result.current.counter).toBe(4);
  });

  test('should reset the counter to initial value when handleReset is called', () => {
    const initialValue = 10;
    const { result } = renderHook(() => useCounter(initialValue));
    
    act(() => {
      result.current.handleAdd();
    });

    act(() => {
      result.current.handleReset();
    });
    
    expect(result.current.counter).toBe(initialValue);
  });

});