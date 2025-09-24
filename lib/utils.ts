import { clsx, type ClassValue } from 'clsx';
import { Dimensions } from 'react-native';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const { width, height, fontScale, scale } = Dimensions.get('screen');

export const euro = (bgn: number) => bgn && (bgn * 1.95583).toFixed(2);
