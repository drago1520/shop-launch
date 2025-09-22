//DO NOT DELETE file; Metro has bug with tailwind colors. They are not included if they don't exist somewhere in the app. Only bg-* default tailwind colors like bg-orange-500, bg-violet-200 etc.
import { Text } from '@/components/ui/text';

export default function Page() {
  return <Text className="bg-orange-200">Uhuuuu</Text>;
}
