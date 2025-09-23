import { useThemeColors } from '@/lib/theme';
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { FlashList } from '@shopify/flash-list';
import { RefObject, useRef, useReducer, useEffect } from 'react';
import { Platform, View, Pressable } from 'react-native';
import { Text } from './ui/text';
import { Button } from './ui/button';
import { Input } from './ui/input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

type LinkItem = { id: string; route: string };
type Props = {
  sheetRef?: RefObject<BottomSheetModal | null> | null;
  initialRoutes?: string[];
};

// Move to module scope to avoid unnecessary effect deps
const STORAGE_KEY = '@tests_bottom_sheet_routes';
const normalizeRoute = (s: string) => {
  const r = s.trim().replace(/\s+/g, '-');
  return r ? (r.startsWith('/') ? r : `/${r}`) : '';
};

// reducer state and actions
type State = { routes: LinkItem[]; newRoute: string };
type Action = { type: 'hydrate'; items: LinkItem[] } | { type: 'setNewRoute'; value: string } | { type: 'add' };

const reducer = (state: State, action: Action): State => {
  if (action.type === 'hydrate') {
    const ns = { ...state, routes: action.items, newRoute: '' };
    void AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(ns.routes));
    return ns;
  }
  if (action.type === 'setNewRoute') {
    return { ...state, newRoute: action.value };
  }
  if (action.type === 'add') {
    const v = normalizeRoute(state.newRoute);
    const routes = v ? [{ id: `${Date.now()}`, route: v }, ...state.routes] : state.routes;
    const ns = { routes, newRoute: '' };
    void AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(ns.routes));
    return ns;
  }
  return state;
};

export const TestsBottomSheet = ({ sheetRef, initialRoutes = [] }: Props) => {
  const internalRef = useRef<BottomSheetModal>(null);
  if (!sheetRef) sheetRef = internalRef;
  const { background, muted } = useThemeColors();
  const router = useRouter();

  const [state, dispatch] = useReducer(
    reducer,
    initialRoutes,
    (arr): State => ({
      routes: arr.map((r, i) => ({ id: `${Date.now()}-${i}`, route: normalizeRoute(r) })),
      newRoute: '',
    }),
  );
  const { routes, newRoute } = state;

  // hydrate from storage once
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (!alive || !raw) return;
        const arr = JSON.parse(raw) as LinkItem[];
        dispatch({ type: 'hydrate', items: Array.isArray(arr) ? arr : [] });
      } catch {}
    })();
    return () => {
      alive = false;
    };
  }, []);

  const canAdd = !!normalizeRoute(newRoute);

  if (!__DEV__) return null;

  return (
    <>
      <BottomSheetModal ref={sheetRef} backdropComponent={props => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />} snapPoints={['80%']} enableDynamicSizing={false} backgroundStyle={{ backgroundColor: background }} handleIndicatorStyle={{ backgroundColor: muted }}>
        <FlashList
          data={routes}
          keyExtractor={item => item.id}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 24 }}
          ListHeaderComponent={
            <View className="px-4 pb-3 pt-2" style={{ backgroundColor: background }}>
              <View className="mb-3 items-center">
                <View className="w-full flex-row items-center">
                  <View className="w-10" />
                  <Text variant="h3" className="flex-1 text-center">
                    Manage link buttons
                  </Text>
                  <Button variant="ghost" onPress={() => sheetRef?.current?.dismiss()} hitSlop={8}>
                    <Text className="text-2xl">✕</Text>
                  </Button>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <Input value={newRoute} onChangeText={t => dispatch({ type: 'setNewRoute', value: t })} className="h-12 flex-1" placeholder="/new-route" autoCapitalize="none" autoCorrect={false} returnKeyType="done" onSubmitEditing={() => dispatch({ type: 'add' })} selectTextOnFocus />
                <Button variant="default" size="lg" onPress={() => dispatch({ type: 'add' })} disabled={!canAdd}>
                  <Text>Add</Text>
                </Button>
              </View>
            </View>
          }
          ListHeaderComponentStyle={{ backgroundColor: background }}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                router.push(item.route);
                sheetRef?.current?.dismiss();
              }}
            >
              <View className="flex-row items-center justify-between border-b border-border px-4 py-3">
                <Text variant="large">{item.route}</Text>
                <Text className="text-xl">↗</Text>
              </View>
            </Pressable>
          )}
        />
      </BottomSheetModal>

      {/* Floating trigger FAB */}
      <Button size="fab" onPress={() => sheetRef?.current?.present()} className="absolute bottom-40 right-8 z-50" accessibilityLabel="Open tests bottom sheet">
        <Text className="text-2xl">+</Text>
      </Button>
    </>
  );
};
