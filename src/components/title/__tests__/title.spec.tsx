import React from 'react';
import Title from '../title';
import { render, fireEvent } from '@testing-library/react-native';
import { ReactTestInstance } from 'react-test-renderer';

describe('Title tests', () => {
  it('Renders correctly with cost', () => {
    const mockFN = jest.fn();
    const { queryByText, queryByTestId } = render(
      <Title name="hello" totalCost={2} onPress={mockFN} />,
    );
    expect(queryByText('hello')).not.toBeNull();
    expect(queryByText('$2')).not.toBeNull();
    expect(mockFN).toHaveBeenCalledTimes(0);
    const cardButton = queryByTestId('cost-button');
    expect(cardButton).not.toBeNull();
    fireEvent.press(cardButton as ReactTestInstance);
    expect(mockFN).toHaveBeenCalledTimes(1);
  });
  it('Renders correctly without cost', () => {
    const { queryByText, queryByTestId } = render(<Title name="hello" />);
    expect(queryByText('hello')).not.toBeNull();
    expect(queryByTestId('cost-button')).toBeNull();
  });
});
