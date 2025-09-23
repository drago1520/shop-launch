import { useThemeColors } from '@/lib/theme';
import { BottomSheetBackdrop, BottomSheetFlatList, BottomSheetModal } from '@gorhom/bottom-sheet';
import { RefObject, useRef } from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '@/components/ui/text';

export const QuantityBottomSheetWrapper = ({ sheetRef }: { sheetRef: RefObject<BottomSheetModal | null> | null }) => {
  const ref = useRef<BottomSheetModal>(null);
  if (!sheetRef) sheetRef = ref;
  const { background, muted } = useThemeColors();
  return (
    <BottomSheetModal ref={sheetRef} backdropComponent={props => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />} snapPoints={['72%']} enableDynamicSizing={false} backgroundStyle={{ backgroundColor: background }} handleIndicatorStyle={{ backgroundColor: muted }}>
      <BottomSheetFlatList<number>
        data={Array.from({ length: 200 }, (_, i) => i + 1)}
        keyExtractor={(n: number) => String(n)}
        ListHeaderComponent={<View style={{ backgroundColor: background }}></View>}
        ListHeaderComponentStyle={{ backgroundColor: background }}
        renderItem={({ item }: { item: number }) => (
          <Pressable
            onPress={() => {
              sheetRef?.current?.dismiss();
            }}
          >
            <View className="flex-row items-center justify-between border-b border-border px-4 py-4">
              <Text variant={'large'}>{item}</Text>
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
