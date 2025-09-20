import { useThemeColors } from '@/lib/theme';
import { BottomSheetBackdrop, BottomSheetFlatList, BottomSheetModal } from '@gorhom/bottom-sheet';
import { RefObject, useReducer, useRef } from 'react';
import { z } from 'zod';
import { Platform, Pressable, View } from 'react-native';
import { Text } from './ui/text';
import { Button } from './ui/button';
import { Input } from './ui/input';

type Props = {
  onSelect: (e: string) => void;
  initQuantity: number;
  sheetRef: RefObject<BottomSheetModal | null> | null;
};
const quantityParser = z.preprocess(p => {
  const digits = String(p ?? '').replace(/\D/g, '');
  return digits.length ? Number(digits) : 0;
}, z.number().int().nonnegative());

export const QuantityBottomSheetWrapper = ({ sheetRef, initQuantity, onSelect }: Props) => {
  const ref = useRef<BottomSheetModal>(null);
  if (!sheetRef) sheetRef = ref;
  const [value, setValue] = useReducer((_: number, p: string | number) => {
    const next = quantityParser.parse(p);
    onSelect(String(next));
    return next;
  }, initQuantity);
  const { background, muted } = useThemeColors();
  return (
    <BottomSheetModal ref={sheetRef} backdropComponent={props => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />} snapPoints={['72%']} enableDynamicSizing={false} backgroundStyle={{ backgroundColor: background }} handleIndicatorStyle={{ backgroundColor: muted }}>
      <BottomSheetFlatList<number>
        data={Array.from({ length: 200 }, (_, i) => i + 1)}
        keyExtractor={(n: number) => String(n)}
        ListHeaderComponent={
          <View className="px-4 pb-4 pt-2" style={{ backgroundColor: background }}>
            <View className="mb-3 items-center">
              <View className="w-full flex-row items-center">
                <View className="w-10" />
                <Text variant="h3" className="flex-1 text-center">
                  Изберете количество
                </Text>
                <Button variant={'ghost'} onPress={() => sheetRef.current?.dismiss()} hitSlop={8}>
                  <Text className="text-2xl">✕</Text>
                </Button>
              </View>
            </View>
            <Input onChangeText={setValue} className="h-12" keyboardType={Platform.select({ ios: 'number-pad', android: 'numeric', default: 'numeric' })} placeholder="Въведете количество" autoFocus selectTextOnFocus />
          </View>
        }
        ListHeaderComponentStyle={{ backgroundColor: background }}
        renderItem={({ item }: { item: number }) => (
          <Pressable
            onPress={() => {
              setValue(item);
              sheetRef?.current?.dismiss();
            }}
          >
            <View className="flex-row items-center justify-between border-b border-border px-4 py-4">
              <Text variant={'large'}>{item}</Text>
              {value === item ? <Text className="text-xl">✓</Text> : null}
            </View>
          </Pressable>
        )}
        nestedScrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        keyboardShouldPersistTaps="handled"
        stickyHeaderIndices={[0]}
      />
    </BottomSheetModal>
  );
};
