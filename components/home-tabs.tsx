import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import { Grid2X2, Home, LucideIcon, ShoppingCart, User } from 'lucide-react-native';
import { Link, usePathname } from 'expo-router';
import { Button } from './ui/button';
import { Icon } from './ui/icon';

export default function HomeTabs() {
  const pathname = usePathname();
  const navItems: { icon: LucideIcon; label: string; url: string }[] = [
    { icon: Home, label: 'Начало', url: '/' },
    { icon: Grid2X2, label: 'Категории', url: '/categories' },
    { icon: ShoppingCart, label: 'Количка', url: '/checkout' },
    { icon: User, label: 'Профил', url: '/account' },
  ];
  return (
    <View className="flex-row justify-between px-4">
      {navItems.map(item => (
        <Link href={item.url} asChild key={item.label} className="items-center">
          <Button variant={'ghost'} className="h-fit flex-col">
            <Icon as={item.icon} className={pathname === item.url ? 'text-foreground' : 'text-muted-foreground'} />
            <Text className={pathname === item.url ? 'text-foreground' : 'text-muted-foreground'}>{item.label}</Text>
          </Button>
        </Link>
      ))}
    </View>
  );
}
