export type SelectProducts = {
  id: string; //cat_no
  url: string;
  rating?: number;
  image: string;
  image2?: string;
  title: string;
  p1: number; //price
  p2?: number;
  p3?: number;
  p4?: number;
  q1?: number; //quantity
  q2?: number;
  q3?: number;
  unitLabel: 'бр.' | 'пак.' | 'бр.' | string; //мярка - бр. пак. каш.
  brand?: string;
  currSign: string; //лв. $
  pickup: boolean;
  sameDay: boolean; //delivery
  delivery: boolean;
  unitsPerPack: number;
};

export const sampleProducts: SelectProducts[] = [
  {
    id: '117477',
    url: 'https://www.emart.bg/p/manisto-antik-basketbolno-topche-11x11-mm-dupka-35-mm-kafjavo-50-grama-65-broja-117477',
    rating: 5,
    image: 'https://images.emart.eu/pic/big/117477.jpg',
    title: 'Мънисто Антик баскетболно топче 11x11 мм дупка 3.5 мм кафяво -50 грама ~65 бр.',
    p1: 1.96,
    p2: 1.57,
    p3: 1.37,
    q1: 5,
    q2: 10,
    unitLabel: 'бр.',
    brand: 'ЕМ АРТ',
    currSign: 'лв.',
    delivery: true,
    pickup: false,
    sameDay: true,
    unitsPerPack: 65,
  },
  {
    id: '315099',
    url: 'https://www.emart.bg/p/tabelka-za-masa-teibul-kartichka-ot-karton-8x5x3-5-sm-bjala-315099',
    image: 'https://images.emart.eu/pic/smal/315099.jpg',
    title: 'Табелка за маса/тейбъл картичка от картон 8x5x3.5 см бяла',
    p1: 0.88, // 1+ пак.
    unitLabel: 'пак.',
    brand: 'ЕМ АРТ',
    currSign: 'лв.',
    delivery: true,
    pickup: true,
    sameDay: false,
    unitsPerPack: 1,
  },

  {
    id: '121325',
    url: 'https://www.emart.bg/p/darvena-figurka-za-dekoracija-elha-28x30x2-mm-cvjat-darvo-10-broja-121325',
    image: 'https://images.emart.eu/pic/big/121325.jpg',
    title: 'Дървена фигурка за декорация елха 28x30x2 мм цвят дърво -10 бр.',
    p1: 1.17, // 1-9 пак.
    p2: 0.94, // 10-19 пак.
    p3: 0.82, // 20+ пак.
    q1: 10, // first discount threshold
    q2: 20, // second discount threshold
    unitLabel: 'бр.',
    brand: 'ЕМ АРТ',
    currSign: 'лв.',
    delivery: false,
    pickup: true,
    sameDay: false,
    unitsPerPack: 10,
  },
  {
    id: '844671',
    url: 'https://www.emart.bg/p/akrilni-boi-mont-marte-acrylic-paints-12-cvjata-x12ml-844671',
    image: 'https://images.emart.eu/pic/smal/844671_1.jpg',
    title: 'Акрилни бои Mont Marte Acrylic Paints 12 цвята x12 мл',
    p1: 13.89, // 1-2 packs
    p2: 11.11, // 3+ packs
    q1: 3, // discount threshold
    unitLabel: 'пак.',
    brand: 'Mont Marte',
    currSign: 'лв.',
    delivery: true,
    pickup: false,
    sameDay: false,
    unitsPerPack: 12,
  },
  {
    id: '612128',
    url: 'https://www.emart.bg/p/ursus-magnitni-hartieni-elementi-rockstar-6-dizajna-35-75x3-85-sm-6-broja-612128',
    image: 'https://images.emart.eu/pic/big/612128.jpg',
    title: 'URSUS магнитни хартиени елементи ROCKSTAR 6 дизайна 3.5-7.5x3-8.5 см -6 бр.',
    p1: 6.36, // 1 пак.
    p2: 5.72, // 2 пак.
    p3: 5.41, // 3+ пак.
    q1: 2,
    q2: 3,
    unitLabel: 'бр.',
    brand: 'URSUS',
    currSign: 'лв.',
    delivery: false,
    pickup: true,
    sameDay: true,
    unitsPerPack: 6,
  },
  {
    id: '591010',
    url: 'https://www.emart.bg/p/plastmasovi-tik-tak-kopcheta-105-mm-t3-cvjat-bjal-20-broja-591010',
    image: 'https://images.emart.eu/pic/smal/591010.jpg',
    title: 'Пластмасови тик-так копчета 10.5 мм T3 цвят бял -20 бр.',
    p1: 0.59, // 1-9 пак.
    p2: 0.53, // 10-19 пак.
    p3: 0.47, // 20+ пак.
    q1: 10,
    q2: 20,
    unitLabel: 'бр.',
    brand: 'ЕМ АРТ',
    currSign: 'лв.',
    delivery: true,
    pickup: true,
    sameDay: true,
    unitsPerPack: 20,
  },
  {
    id: '591006',
    url: 'https://www.emart.bg/p/plastmasovi-tik-tak-kopcheta-12-mm-t5-cvjat-zhalt-20-broja-591006',
    image: 'https://images.emart.eu/pic/smal/591006.jpg',
    title: 'Пластмасови тик-так копчета 12 мм T5 цвят жълт -20 бр.',
    p1: 1.76, // 1-2 пак.
    p2: 1.58, // 3-4 пак.
    p3: 1.41, // 5+ пак.
    q1: 3,
    q2: 5,
    unitLabel: 'бр.',
    brand: 'ЕМ АРТ',
    currSign: 'лв.',
    delivery: false,
    pickup: false,
    sameDay: false,
    unitsPerPack: 20,
  },
  {
    id: '500538',
    url: 'https://www.emart.bg/p/sindzhir-topche-i-nakrajnik-118x25-mm-metal-cvjat-miks-10-broja-500538',
    image: 'https://images.emart.eu/pic/big/500538.jpg',
    title: 'Синджир топче и накрайник 118x2.5 мм метал цвят микс -10 бр.',
    rating: 5,
    p1: 1.17, // 1-9 пак.
    p2: 0.82, // 10+ пак.
    q1: 10, // discount threshold
    unitLabel: 'бр.',
    brand: 'ЕМ АРТ',
    currSign: 'лв.',
    delivery: true,
    pickup: false,
    sameDay: false,
    unitsPerPack: 10,
  },
  {
    id: '591008',
    url: 'https://www.emart.bg/p/plastmasovi-tik-tak-kopcheta-12-mm-t5-cvjat-zhalt-elektrik-20-broja-591008',
    image: 'https://images.emart.eu/pic/smal/591008.jpg',
    title: 'Пластмасови тик-так копчета 12 мм T5 цвят жълт електрик -20 бр.',
    p1: 1.76, // 1-2 пак.
    p2: 1.58, // 3-4 пак.
    p3: 1.41, // 5+ пак.
    q1: 3,
    q2: 5,
    unitLabel: 'бр.',
    brand: 'ЕМ АРТ',
    currSign: 'лв.',
    delivery: true,
    pickup: true,
    sameDay: false,
    unitsPerPack: 20,
  },
  {
    id: '823374',
    url: 'https://www.emart.bg/p/dzhob-plik-paus-za-kartichka-115x167-sm-s-lista-823374',
    image: 'https://images.emart.eu/pic/smal/823374.jpg',
    title: 'Джоб/плик паус за картичка 11.5x16.7 см с листа',
    p1: 0.59, // 1+ пак.
    unitLabel: 'пак.',
    brand: 'ЕМ АРТ',
    currSign: 'лв.',
    delivery: false,
    pickup: false,
    sameDay: false,
    unitsPerPack: 1,
  },
  {
    id: '844492',
    url: 'https://www.emart.bg/p/komplekt-akrilna-boja-glanc-mont-marte-24-cvjata-x12ml-844492',
    image: 'https://images.emart.eu/pic/smal/844492_1.jpg',
    title: 'Комплект акрилна боя гланц Mont Marte 24 цвята x 12 мл',
    p1: 23.47, // single pack price
    unitLabel: 'пак.',
    brand: 'Mont Marte',
    currSign: 'лв.',
    delivery: true,
    pickup: false,
    sameDay: false,
    unitsPerPack: 24,
  },
  {
    id: '591005',
    url: 'https://www.emart.bg/p/plastmasovi-tik-tak-kopcheta-14-mm-t8-cvjat-cherven-20-broja-591005',
    image: 'https://images.emart.eu/pic/smal/591005.jpg',
    title: 'Пластмасови тик-так копчета 14 мм T8 цвят червен -20 бр.',
    p1: 1.76, // 1-2 пак.
    p2: 1.58, // 3-4 пак.
    p3: 1.41, // 5+ пак.
    q1: 3,
    q2: 5,
    unitLabel: 'бр.',
    brand: 'ЕМ АРТ',
    currSign: 'лв.',
    delivery: false,
    pickup: false,
    sameDay: true,
    unitsPerPack: 20,
  },
  {
    id: '833565',
    url: 'https://www.emart.bg/p/komplekt-pozdravitelni-kartichki-5-broja-s-schipki-10-broja-i-konopeno-vazhe-833565',
    image: 'https://images.emart.eu/pic/smal/833565.jpg',
    title: 'Комплект поздравителни картички 5 бр. с щипки 10 бр. и конопено въже',
    p1: 3.32, // 1-9 пак.
    p2: 2.66, // 10+ пак.
    q1: 10,
    unitLabel: 'пак.',
    brand: 'ЕМ АРТ',
    currSign: 'лв.',
    delivery: true,
    pickup: false,
    sameDay: true,
    unitsPerPack: 5,
  },
  {
    id: '304779',
    url: 'https://www.emart.bg/p/plik-za-kartichka-perlen-s-relef-145x205-mm-cvjat-zhalt-10-broja-304779',
    image: 'https://images.emart.eu/pic/smal/304779.jpg',
    title: 'Плик за картичка перлен с релеф 145x205 мм цвят жълт -10 бр.',
    p1: 4.89, // 1-4 пак.
    p2: 3.91, // 5-14 пак.
    p3: 2.93, // 15+ пак.
    q1: 5,
    q2: 15,
    unitLabel: 'пак.',
    brand: 'ЕМ АРТ',
    currSign: 'лв.',
    delivery: false,
    pickup: true,
    sameDay: false,
    unitsPerPack: 10,
  },

  // Added from user-provided image (assumed details)
  {
    id: '846297',
    url: 'https://www.emart.bg/p/akrilna-boja-glanc-mont-marte-dimension-acrylic-75mls-terre-verte-846297',
    image: 'https://images.emart.eu/pic/smal/846297.jpg',
    title: 'Акрилна боя гланц Mont Marte Dimension Acrylic 75mls - Terre Verte',
    p1: 5.67, // single price
    unitLabel: 'бр.',
    brand: 'Mont Marte',
    currSign: 'лв.',
    delivery: true,
    pickup: true,
    sameDay: false,
    unitsPerPack: 1,
  },
  {
    id: '846298',
    url: 'https://www.emart.bg/p/akrilna-boja-glanc-mont-marte-dimension-acrylic-75mls-sap-green-846298',
    image: 'https://images.emart.eu/pic/smal/846298.jpg',
    title: 'Акрилна боя гланц Mont Marte Dimension Acrylic 75mls - Sap Green',
    p1: 5.67,
    unitLabel: 'бр.',
    brand: 'Mont Marte',
    currSign: 'лв.',
    delivery: true,
    pickup: true,
    sameDay: false,
    unitsPerPack: 1,
  },
];
