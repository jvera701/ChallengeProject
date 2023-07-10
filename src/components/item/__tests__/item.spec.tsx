import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Item from '../item';
import { ImageList } from '../../../core/constants';
import { ReactTestInstance } from 'react-test-renderer';

describe('Item', () => {
  it('Should show 2 and call function onPress', () => {
    const mockFN = jest.fn();
    const { queryByText, queryByTestId } = render(
      <Item name={ImageList.Alqueria} quantity={2} onPress={mockFN} />,
    );
    expect(queryByText('2')).not.toBeNull();
    expect(mockFN).toHaveBeenCalledTimes(0);
    const cardButton = queryByTestId('press-container');
    expect(cardButton).not.toBeNull();
    fireEvent.press(cardButton as ReactTestInstance);
    expect(mockFN).toHaveBeenCalledTimes(1);
  });

  it('Should not show number', () => {
    const mockFN = jest.fn();
    const { queryByText } = render(
      <Item name={ImageList.Alqueria} quantity={0} onPress={mockFN} />,
    );
    expect(queryByText('0')).toBeNull();
  });
});
