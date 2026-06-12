import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import SearcherBar from "./SearcherBar";


describe('SearcherBar component', () => {
  
  test('should render the SearcherBar component', () => {
    const { container } = render(<SearcherBar onQuery={() => {}} />);
    expect(container).toMatchSnapshot();

    expect(screen.getByRole('textbox')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
  });

  test('should call onQuery with the correct value after 700ms', async () => {
    const onQueryMock = vi.fn();
    render(<SearcherBar onQuery={onQueryMock} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    await waitFor(() => {
      expect(onQueryMock).toHaveBeenCalled();
      expect(onQueryMock).toHaveBeenCalledWith('test');
    });

  });

  test('should call only once with the last value (debounce)', async () => {
    const onQueryMock = vi.fn();
    render(<SearcherBar onQuery={onQueryMock} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 't' } });
    fireEvent.change(input, { target: { value: 'te' } });
    fireEvent.change(input, { target: { value: 'tes' } });
    fireEvent.change(input, { target: { value: 'test' } });

    await waitFor(() => {
      expect(onQueryMock).toHaveBeenCalledTimes(1);
      expect(onQueryMock).toHaveBeenCalledWith('test');
    });

  });

  test('should call onQuery when buttoin clicked with the input value', async () => {
    const onQueryMock = vi.fn();
    render(<SearcherBar onQuery={onQueryMock} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      expect(onQueryMock).toHaveBeenCalled();
      expect(onQueryMock).toHaveBeenCalledWith('test');
    });

  });

  test('should the input has the correct placeholder value', () => {
    const placeholder = 'Search...';
    render(<SearcherBar onQuery={() => {}} placeholder={placeholder} />);

    expect(screen.getByPlaceholderText(placeholder)).toBeDefined();
  });

});