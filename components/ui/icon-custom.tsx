import { useThemeColors } from '@/lib/theme';
import Svg, { Path, SvgProps } from 'react-native-svg';
/* https://thenounproject.com/icon/add-to-cart-1861899/ */

export function ShoppingCartAdd({ width, height, ...props }: SvgProps) {
  const { foreground } = useThemeColors();
  // Keep it simple: square canvas and size; let props override
  const size = 24;
  const w = (width as number) ?? size;
  const h = (height as number) ?? size;

  return (
    <Svg width={w} height={h} viewBox="0 0 22 22" accessibilityRole="image" {...props}>
      <Path
        d="M20.981,6.6377l-1.58545,5.5498A2.5118,2.5118,0,0,1,16.99121,14H8.39l.216.86426A1.49816,1.49816,0,0,0,10.06152,16H17.5a.5.5,0,0,1,0,1H10.06152a2.49628,2.49628,0,0,1-2.42529-1.89355L5.394,6.13574A1.49816,1.49816,0,0,0,3.93848,5H2.5a.5.5,0,0,1,0-1H3.93848A2.49628,2.49628,0,0,1,6.36377,5.89355L8.14,13h8.8512a1.50762,1.50762,0,0,0,1.44287-1.08789L20.019,6.3623a.50028.50028,0,0,1,.96192.2754ZM17.5,18A1.5,1.5,0,1,0,19,19.5,1.5,1.5,0,0,0,17.5,18Zm-9,0A1.5,1.5,0,1,0,10,19.5,1.5,1.5,0,0,0,8.5,18ZM16.25,6.75h-2v-2a.75.75,0,0,0-1.5,0v2h-2a.75.75,0,0,0,0,1.5h2v2a.75.75,0,0,0,1.5,0v-2h2a.75.75,0,0,0,0-1.5Z"
        fill={foreground}
      />
    </Svg>
  );
}
