import { Button, ButtonProps } from './button';
import { router, useNavigation } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { Icon } from './icon';

export default function BackButton(props: Omit<ButtonProps, 'onPress'>) {
  const { canGoBack, goBack } = useNavigation();

  return (
    <Button size={'icon'} variant={'ghost'} onPress={() => (canGoBack() ? goBack() : router.replace('/'))} {...props}>
      <Icon as={ChevronLeft} />
    </Button>
  );
}
