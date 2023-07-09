import { ImageList } from '../core/constants';
export const initialList = [
  {
    id: 1,
    name: ImageList.Alqueria,
    price: 10,
    quantity: 1,
    description: 'Cualquier alqueria',
  },
  {
    id: 2,
    name: ImageList.DeTodito,
    price: 20,
    quantity: 0,
    description: 'Cualquier de todito',
  },
  {
    id: 3,
    name: ImageList.Milo,
    price: 30,
    quantity: 0,
    description: 'Cualquier milo',
  },
  {
    id: 4,
    name: ImageList.Alqueria,
    price: 40,
    quantity: 0,
    description: 'Cualquier alqueria2',
  },
  {
    id: 5,
    name: ImageList.DeTodito,
    price: 100,
    quantity: 2,
    description: 'Cualquier de todito2',
  },
  {
    id: 6,
    name: ImageList.Milo,
    price: 0,
    quantity: 0,
    description: 'Cualquier milo2',
  },
  {
    id: 7,
    name: ImageList.Milo,
    price: 40,
    quantity: 4,
    description: 'Cualquier de todito2',
  },
];

export type itemType = {
  id: number;
  name: ImageList;
  price: number;
  quantity: number;
  description: string;
};

export type listType = itemType[];
