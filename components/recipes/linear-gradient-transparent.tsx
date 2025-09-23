import { useThemeColors } from '@/lib/theme';
import { LinearGradient } from 'expo-linear-gradient';

export default function NeverUseTransparent() {
  const { background } = useThemeColors();

  return (
    <LinearGradient
      colors={['rgba(255, 255, 255, 0)', background]} //NEVER use 'transparent'
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 40, pointerEvents: 'none' }}
    />
  );
}
