import { clsx, type ClassValue } from 'clsx';
import { Dimensions } from 'react-native';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const { width, height, fontScale, scale } = Dimensions.get('screen');
