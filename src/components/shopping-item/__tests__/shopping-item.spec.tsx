import React from 'react';
import { ImageList } from '../../../core/constants';
import ShoppingItem from '../shopping-item';
import { render } from '@testing-library/react-native';

describe('Shopping item', () => {
  it('Renders numbers correctly', () => {
    const { queryByText } = render(
      <ShoppingItem name={ImageList.Alqueria} quantity={2} />,
    );
    expect(queryByText('2')).not.toBeNull();
  });
});
