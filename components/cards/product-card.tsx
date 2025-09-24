import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import { Icon } from '../ui/icon';
import { Check, Cross, Star, X } from 'lucide-react-native';
import { ShoppingCartAdd } from '../ui/icon-custom';
import { Button } from '../ui/button';
import { Image } from 'expo-image';
import { SelectProducts } from './product-data';
import { euro } from '@/lib/utils';

export default function ProductCard({ data }: { data: SelectProducts }) {
  // prettier-ignore
  const {image, currSign, delivery, id, p1, pickup, sameDay, title, unitLabel, unitsPerPack, url, p2, p3, p4, q1, q2, q3, brand, image2, rating} = data
  return (
    <View className="items-start p-1">
      <Image
        source={{ uri: image }}
        style={{ width: '100%', aspectRatio: 1, borderRadius: 4 }}
        contentFit="cover"
        cachePolicy="none"
      />
      <View className="mt-1 flex-row items-center">
        <Icon as={Star} size={20} color={'#F7A309'} fill={'#F7A309'} />
        <Icon as={Star} size={20} color={'#F7A309'} fill={'#F7A309'} />
        <Icon as={Star} size={20} color={'#F7A309'} fill={'#F7A309'} />
        <Icon as={Star} size={20} color={'#F7A309'} fill={'#F7A309'} />
        <Icon as={Star} size={20} color={'#F7A309'} fill={'#F7A309'} />
      </View>
      <Text className="text-sm text-muted-foreground" ellipsizeMode="middle" numberOfLines={3}>
        {title}
      </Text>
      <Text className="my-0.5 text-lg font-semibold">
        {p1} {currSign}
        <Text className="text-muted-foreground">/ </Text>
        {euro(p1)} €
      </Text>
      {/* <Text className="text-sm text-muted-foreground">(0.65 {currSign} / 0.32 € {unitLabel})</Text> */}
      {p2 && q1 && (
        <View className="gap-1">
          <QuantityDiscount
            basePrice={p1}
            currSign={currSign}
            price={p2}
            qStart={q1}
            unitLabel={unitLabel}
            unitsPerPack={unitsPerPack}
            qEnd={q2}
          />
          {p3 && q2 && (
            <QuantityDiscount
              basePrice={p1}
              currSign={currSign}
              price={p3}
              qStart={q2}
              unitLabel={unitLabel}
              unitsPerPack={unitsPerPack}
              qEnd={q3}
            />
          )}
          {p4 && q3 && (
            <QuantityDiscount
              basePrice={p1}
              currSign={currSign}
              price={p4}
              qStart={q3}
              unitLabel={unitLabel}
              unitsPerPack={unitsPerPack}
            />
          )}
        </View>
      )}
      <View className="mt-2">
        <View className="shrink flex-row items-center gap-0.5">
          {pickup ? (
            <Icon as={Check} className="text-brand-green-foreground" size={16} />
          ) : (
            <Icon as={X} className="text-destructive" size={16} />
          )}
          {pickup ? (
            <Text className="text-sm text-brand-green-foreground">Вземане от магазин</Text>
          ) : (
            <Text className="text-sm text-destructive">Вземане от магазин</Text>
          )}
        </View>
        <View className="shrink flex-row items-center gap-0.5">
          {sameDay ? (
            <Icon as={Check} className="text-brand-green-foreground" size={16} />
          ) : (
            <Icon as={X} className="text-destructive" size={16} />
          )}
          {sameDay ? (
            <Text className="text-sm text-brand-green-foreground">Доставка същия ден</Text>
          ) : (
            <Text className="text-sm text-destructive">Доставка същия ден</Text>
          )}
        </View>
        <View className="shrink flex-row items-center gap-0.5">
          {delivery ? (
            <Icon as={Check} className="text-brand-green-foreground" size={16} />
          ) : (
            <Icon as={X} className="text-destructive" size={16} />
          )}
          {delivery ? (
            <Text className="text-sm text-brand-green-foreground">Доставка</Text>
          ) : (
            <Text className="text-sm text-destructive">Доставка</Text>
          )}
        </View>
      </View>
      <View className="self-end" style={{ paddingRight: 8 }}>
        <Button size={'icon'} variant={'outline'} className="border-foreground">
          <ShoppingCartAdd style={{ marginRight: 4 }} />
        </Button>
      </View>
    </View>
  );
}

function QuantityDiscount({
  price,
  basePrice,
  qStart,
  qEnd,
  currSign,
  unitsPerPack,
  unitLabel,
}: {
  price: number;
  basePrice: number;
  qStart: number;
  qEnd?: number;
  currSign: string;
  unitsPerPack: number;
  unitLabel: string;
}) {
  const qStr = (qStart: number, qEnd?: number): string =>
    qEnd ? `${qStart}-${qEnd} ${unitLabel}` : `${qStart} ${unitLabel} +`;
  return (
    <View className="w-full flex-row items-start justify-between">
      <View className="">
        <Text className="text-sm font-semibold text-brand-blue-foreground">
          {price} {currSign} <Text className="font-normal text-muted-foreground">/</Text> {euro(price)} €
        </Text>
        {/* <Text className="text-sm font-semibold text-abrand-blue-foreground">
              ({Math.round(((basePrice - price) / basePrice) * 100)} %)
            </Text> 
        */}
        <Text className="text-sm font-light text-brand-blue-foreground">
          {(price / unitsPerPack).toFixed(2)} {currSign} <Text className="font-normal text-muted-foreground">/</Text>{' '}
          {(0.7 / unitsPerPack).toFixed(2)} € {unitLabel}
        </Text>
      </View>
      <Text className="shrink text-sm text-brand-blue-foreground">{qStr(qStart, qEnd)}</Text>
    </View>
  );
}
