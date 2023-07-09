import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const WINDOW_DEVICE_WIDTH = width;
export const WINDOW_DEVICE_HEIGHT = height;

const GUIDELINE_BASE_WIDTH = 375;
export const scaleSize = (size: number) =>
  (WINDOW_DEVICE_WIDTH / GUIDELINE_BASE_WIDTH) * size;

export enum ImageList {
  DeTodito = 'DeTodito',
  Alqueria = 'Alqueria',
  Milo = 'Milo',
}

export const images = [
  {
    name: ImageList.DeTodito,
    source: require('../core/assets/de-todito.jpeg'),
  },
  {
    name: ImageList.Alqueria,
    source: require('../core/assets/leche.jpg'),
  },
  {
    name: ImageList.Milo,
    source: require('../core/assets/milo.jpeg'),
  },
];

export const ImageListData = [
  ImageList.DeTodito,
  ImageList.Milo,
  ImageList.DeTodito,
  ImageList.Alqueria,
  ImageList.Milo,
  ImageList.Alqueria,
  ImageList.Alqueria,
  ImageList.DeTodito,
];
