import React from 'react';
import { View } from 'react-native';
import { Image } from 'expo-image';
import { Text } from '@/components/ui/text';
import { THEME } from '@/lib/theme';
// A minimal, prop-less version with fixed text
export function LightRedRibbon() {
  return (
    <View
      style={{
        width: 172,
        aspectRatio: 153 / 36,
        alignSelf: 'center',
        marginBottom: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 4,
        overflow: 'hidden',
      }}
      accessibilityRole="text"
      accessibilityLabel="Отстъпки"
    >
      <Image source={{ uri: 'https://images.emart.eu/cite/light_red_ribbon.png' }} style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }} contentFit="cover" />
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 12, lineHeight: 14, color: THEME.light.background, textTransform: 'uppercase', fontWeight: '700', textAlign: 'center' }} numberOfLines={1}>
          ОТСТЪПКИ
        </Text>
        <Text style={{ fontSize: 11, lineHeight: 12, color: THEME.light.background, textTransform: 'uppercase', textAlign: 'center' }} numberOfLines={1}>
          ЗА КОЛИЧЕСТВО
        </Text>
      </View>
    </View>
  );
}

export default LightRedRibbon;
