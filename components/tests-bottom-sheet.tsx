import { useThemeColors } from '@/lib/theme';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { FlashList } from '@shopify/flash-list';
import { RefObject, useRef, useEffect, useState, useReducer } from 'react';
import { View, Pressable } from 'react-native';
import { Text } from './ui/text';
import { Button } from './ui/button';
import { Input } from './ui/input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { ThemeToggle } from './theme-toggle';

type LinkItem = { id: string; route: string };
type Props = {
  sheetRef?: RefObject<BottomSheetModal | null> | null;
  initialRoutes?: string[];
};

const STORAGE_KEY = '@tests_bottom_sheet_routes';

type State = LinkItem[];
type Action = { type: 'set'; items: LinkItem[] } | { type: 'add'; route: string } | { type: 'delete'; id: string };

const reducer = (state: State, action: Action): State => {
  let newState: State;
  switch (action.type) {
    case 'set':
      newState = action.items;
      break;
    case 'add':
      newState = [{ id: `${Date.now()}`, route: action.route }, ...state];
      break;
    case 'delete':
      newState = state.filter(r => r.id !== action.id);
      break;
    default:
      return state;
  }
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  return newState;
};

export const TestsBottomSheet = ({ sheetRef, initialRoutes = [] }: Props) => {
  const internalRef = useRef<BottomSheetModal>(null);
  if (!sheetRef) sheetRef = internalRef;
  const { background, muted } = useThemeColors();
  const router = useRouter();

  const [routes, dispatch] = useReducer(
    reducer,
    initialRoutes.map((r, i) => ({ id: `${Date.now()}-${i}`, route: r.trim() })),
  );
  const [newRoute, setNewRoute] = useState('');

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then(raw => {
        if (raw) {
          const arr = JSON.parse(raw) as LinkItem[];
          if (Array.isArray(arr)) dispatch({ type: 'set', items: arr });
        }
      })
      .catch(() => {});
  }, []);

  const addRoute = () => {
    const v = newRoute.trim();
    if (v) {
      dispatch({ type: 'add', route: v });
      setNewRoute('');
    }
  };

  if (!__DEV__) return null;

  return (
    <>
      <BottomSheetModal
        ref={sheetRef}
        backdropComponent={props => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />}
        snapPoints={['80%']}
        enableDynamicSizing={false}
        backgroundStyle={{ backgroundColor: background }}
        handleIndicatorStyle={{ backgroundColor: muted }}
      >
        <FlashList
          data={routes}
          keyExtractor={item => item.id}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 24 }}
          ListHeaderComponent={
            <View className="px-4 pb-3 pt-2" style={{ backgroundColor: background }}>
              <View className="mb-3 items-center">
                <View className="w-full flex-row items-center">
                  <ThemeToggle />
                  <View className="w-10" />
                  <Text variant="h3" className="flex-1 text-center">
                    Manage link buttons
                  </Text>
                  <Button variant="ghost" onPress={() => sheetRef?.current?.dismiss()} hitSlop={8}>
                    <Text className="text-2xl">✕</Text>
                  </Button>
                </View>
              </View>
              <View className="mt-2 flex-row items-center gap-2">
                <Input
                  value={newRoute}
                  onChangeText={setNewRoute}
                  className="h-12 flex-1"
                  placeholder="/new-route"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="done"
                  onSubmitEditing={addRoute}
                  selectTextOnFocus
                />
                <Button variant="default" size="lg" onPress={addRoute} disabled={!newRoute.trim()}>
                  <Text>Add</Text>
                </Button>
              </View>
            </View>
          }
          ListHeaderComponentStyle={{ backgroundColor: background }}
          renderItem={({ item }) => (
            <View className="flex-row items-center justify-between border-b border-border px-4 py-3">
              <Pressable
                onPress={() => {
                  router.push(item.route);
                  sheetRef?.current?.dismiss();
                }}
                className="flex-1"
              >
                <View className="flex-row items-center gap-2">
                  <Text variant="large">{item.route}</Text>
                  <Text className="text-xl">↗</Text>
                </View>
              </Pressable>
              <Button variant="ghost" onPress={() => dispatch({ type: 'delete', id: item.id })}>
                <Text className="text-xl text-destructive">✕</Text>
              </Button>
            </View>
          )}
        />
      </BottomSheetModal>

      {/* Floating trigger FAB */}
      <Button
        size="fab"
        onPress={() => sheetRef?.current?.present()}
        className="absolute bottom-40 right-8 z-50"
        accessibilityLabel="Open tests bottom sheet"
      >
        <Text className="text-2xl">+</Text>
      </Button>
    </>
  );
};
