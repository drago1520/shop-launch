import React, { useMemo, useRef, useState } from 'react';
import { View, Pressable, Platform, TextInput as RNTextInput } from 'react-native';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { BottomSheetModal, BottomSheetBackdrop, BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { Input } from '@/components/ui/input';
import { useThemeColors } from '@/lib/theme';

const QUANTITY_DATA = Array.from({ length: 200 }, (_, i) => i + 1);
const snapPoints = ['72%'];
export const QuantityPicker = () => {
  const sheetRef = useRef<BottomSheetModal>(null);
  const [selected, setSelected] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const { background, muted } = useThemeColors();
  const inputRef = useRef<RNTextInput>(null);

  const filteredData = useMemo(() => {
    const normalized = query.replace(/[^\d]/g, '');
    if (!normalized) return QUANTITY_DATA;
    return QUANTITY_DATA.filter(v => String(v).startsWith(normalized));
  }, [query]);

  return (
    <View className="flex-row items-center">
      <Button variant="outline" className="flex-1" onPress={() => sheetRef.current?.present()}>
        <Text>Open sheet</Text>
      </Button>
      {/* prettier-ignore */}
      <BottomSheetModal 
        ref={sheetRef} 
        backdropComponent={props =>
          <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />} 
        snapPoints={snapPoints} 
        enableDynamicSizing={false} 
        onChange={(index) => {
          if (index !== undefined && index >= 0) {
            // Focus after sheet opens to ensure keyboard shows reliably
            setTimeout(() => inputRef.current?.focus(), 60);
          }
        }}
        backgroundStyle={{ backgroundColor: background }} handleIndicatorStyle={{ backgroundColor: muted }}>
        <BottomSheetFlatList<number>
          data={filteredData}
          keyExtractor={(n: number) => String(n)}
          ListHeaderComponent={
            <View className="px-4 pb-4 pt-2" style={{ backgroundColor: background }}>
              <View className="mb-3 items-center">
                <View className="flex-row w-full items-center">
                  {/* left spacer to balance the right close button width */}
                  <View className="w-10" />
                  <Text variant="h3" className="flex-1 text-center">Изберете количество</Text>
                  <Pressable onPress={() => sheetRef.current?.dismiss()} className="w-10 items-end p-2" hitSlop={8}>
                    <Text className="text-2xl">✕</Text>
                  </Pressable>
                </View>
              </View>
              <Input
                value={query}
                onChangeText={setQuery}
                className='h-12'
                keyboardType={Platform.select({ ios: 'number-pad', android: 'numeric', default: 'numeric' })}
                placeholder="Въведете количество"
                autoFocus
                selectTextOnFocus
                ref={inputRef}
              />
            </View>
          }
          ListHeaderComponentStyle={{ backgroundColor: background }}
          renderItem={({ item }: { item: number }) => (
            <Pressable onPress={() => setSelected(item)}>
              <View className="flex-row items-center justify-between border-b border-border px-4 py-4">
                <Text variant={'large'}>{item}</Text>
                {selected === item ? <Text className="text-xl">✓</Text> : null}
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
    </View>
  );
};
