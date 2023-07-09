import { ImageList } from '../core/constants';
export const initialList = [
  {
    name: ImageList.Alqueria,
    price: 10,
    quantity: 1,
    description: 'Cualquier alqueria',
  },
  {
    name: ImageList.DeTodito,
    price: 20,
    quantity: 0,
    description: 'Cualquier de todito',
  },
  {
    name: ImageList.Milo,
    price: 30,
    quantity: 0,
    description: 'Cualquier milo',
  },
  {
    name: ImageList.Alqueria,
    price: 40,
    quantity: 0,
    description: 'Cualquier alqueria2',
  },
  {
    name: ImageList.DeTodito,
    price: 100,
    quantity: 2,
    description: 'Cualquier de todito2',
  },
  {
    name: ImageList.Milo,
    price: 0,
    quantity: 0,
    description: 'Cualquier milo2',
  },
  {
    name: ImageList.Milo,
    price: 40,
    quantity: 4,
    description: 'Cualquier de todito2',
  },
];

export type itemType = {
  name: ImageList;
  price: number;
  quantity: number;
  description: string;
};

export type listType = itemType[];
