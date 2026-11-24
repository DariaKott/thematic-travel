import type { StaticImageData } from "next/image";
import eagleEyePhoto from "@/public/images/eagle_eye_villa_images/3.webp";
import eagleEyePhoto2 from "@/public/images/eagle_eye_villa_images/2.webp";
import eagleEyePhoto4 from "@/public/images/eagle_eye_villa_images/4.webp";
import eagleEyePhoto7 from "@/public/images/eagle_eye_villa_images/7.webp";
import eagleEyePhoto11 from "@/public/images/eagle_eye_villa_images/11.webp";
import eagleEyePhoto14 from "@/public/images/eagle_eye_villa_images/14.webp";
import eagleEyePhoto15 from "@/public/images/eagle_eye_villa_images/15.webp";
import eagleEyePhoto21 from "@/public/images/eagle_eye_villa_images/21.webp";
import eagleEyePhoto22 from "@/public/images/eagle_eye_villa_images/22.webp";
import eagleEyePhoto23 from "@/public/images/eagle_eye_villa_images/23.webp";
import eagleEyePhoto1 from "@/public/images/eagle_eye_villa_images/1.webp";
import eagleEyePhoto8 from "@/public/images/eagle_eye_villa_images/8.webp";
import eagleEyePhoto9 from "@/public/images/eagle_eye_villa_images/9.webp";
import eagleEyePhoto10 from "@/public/images/eagle_eye_villa_images/10.webp";
import eagleEyePhoto12 from "@/public/images/eagle_eye_villa_images/12.webp";
import eagleEyePhoto13 from "@/public/images/eagle_eye_villa_images/13.webp";
import eagleEyePhoto6 from "@/public/images/eagle_eye_villa_images/6.webp";
import eagleEyePhoto19 from "@/public/images/eagle_eye_villa_images/19.webp";
import eagleEyePhoto20 from "@/public/images/eagle_eye_villa_images/20.webp";

export type VenuePhoto = {
  src: StaticImageData;
  alt: string;
};

type VenueSection = {
  heading?: string;
  paragraphs: readonly string[];
  photos?: readonly VenuePhoto[];
};

export type VenueDetails = {
  introduction: string;
  propertyName?: string;
  openingParagraphs?: readonly string[];
  roomCountLabel?: string;
  coverPhoto?: VenuePhoto;
  formats?: VenueSection & { items?: readonly string[] };
  accommodation?: VenueSection & {
    roomTypes?: readonly {
      name: string;
      roomCount?: number;
      beds?: string;
      sleepingPlaces?: number;
    }[];
  };
  spaces?: VenueSection;
  dining?: VenueSection;
  amenities?: VenueSection;
  planning?: VenueSection;
  contact?: { href: string; label?: string };
};

export type Venue = {
  slug: string;
  title: string;
  location?: string;
  capacityLabel?: string;
  cardDescription: string;
  mainPhoto?: VenuePhoto;
  minimumGroupSize?: number;
  roomCount?: number;
  restaurantCapacity?: number;
  overnightCapacity?: number;
  areaHectares?: number;
  details?: VenueDetails;
};

const eagleEyeFacts = {
  minimumGroupSize: 15,
  roomCount: 17,
  restaurantCapacity: 65,
  overnightCapacity: 48,
  areaHectares: 1.3,
};

export const venues: readonly Venue[] = [
  {
    slug: "eagle-eye",
    title: "Вилла Eagle Eye",
    cardDescription: "Площадка для ретритов и командных выездов с рестораном и пространствами для дневного коворкинга",
    mainPhoto: {
      src: eagleEyePhoto,
      alt: "Территория виллы Eagle Eye на склоне с видом на Которский залив",
    },
    ...eagleEyeFacts,
    details: {
      propertyName: "Eagle Eye Villa & Resort",
      introduction: "Вилла с видом на Которский залив для ретритов, тренингов и тематических лагерей",
      roomCountLabel: `${eagleEyeFacts.roomCount} номеров и апартаментов`,
      openingParagraphs: [
        "Утром — практика на открытой площадке над заливом. Днём — воркшоп в каминном зале или несколько часов работы над проектом в коворкинге. Вечером — ужин всей группой, хамам или кино для тех, кому ещё не хочется расходиться.",
        "На Eagle Eye всё это можно устроить на одной территории. Участники живут рядом с местом занятий, встречаются за завтраком и могут продолжить разговор после программы. А у организатора есть выбор, где провести каждый блок: в зале с большим экраном, на газоне или на площадке с видом на залив.",
      ],
      spaces: {
        heading: "Пространства для вашей программы",
        paragraphs: [
          "Вилла Eagle Eye расположена на горе, вдали от суеты. Здесь хочется замедлиться, выдохнуть и задержать взгляд на пейзаже. Тишина и близость к природе помогают отложить повседневные заботы, отдохнуть и прислушаться к себе. В такой обстановке легче переключиться с привычного ритма на то, ради чего вы приехали: глубже погрузиться в практики ретрита, сосредоточиться на работе с командой или просто побыть вместе без спешки.",
          "На территории виллы несколько открытых площадок. На панорамной площадке площадью около **200 м²** можно провести утреннюю практику, часть тренинга или встречу всей группы на свежем воздухе. С неё открывается вид на Которский залив.",
          "Для лекций, семинаров и командных сессий есть **каминный зал площадью 70 м²**. В нём — большой экран, звуковая система, два больших стола и мягкая зона с диванами. Здесь можно разобрать материалы на экране, поработать за столами, а затем собраться у камина для обсуждения. Для просмотра фильма или разбора видеоматериалов в небольшой группе есть отдельный **кинозал на 11 кресел, которые можно убрать и задействовать все пространство пола**.",
        ],
        photos: [
          { src: eagleEyePhoto1, alt: "Газон и крытая площадка на территории виллы" },
          { src: eagleEyePhoto8, alt: "Светлый зал с длинным столом и люстрой" },
          { src: eagleEyePhoto9, alt: "Открытая терраса с видом на Которский залив" },
          { src: eagleEyePhoto10, alt: "Крытая летняя кухня у газона" },
          { src: eagleEyePhoto12, alt: "Дорожки и лестницы между зданиями виллы" },
          { src: eagleEyePhoto13, alt: "Кинозал с экраном и рядами кресел" },
          { src: eagleEyePhoto6, alt: "Хамам с синей подсветкой потолка" },
          { src: eagleEyePhoto19, alt: "Площадка рядом с панорамными окнами и видом на залив" },
          { src: eagleEyePhoto20, alt: "Обеденный зал с накрытыми столами и большими окнами" },
        ],
      },
      formats: {
        heading: "Коворкинг для IT-кэмпов и профессиональных выездов",
        paragraphs: [
          "Днём в ресторане и других помещениях виллы можно организовать **коворкинг**. Это удобно для IT-кэмпов, проектных школ и профессиональных лагерей, где в расписании есть время и для общих занятий, и для работы за ноутбуком.",
          "Например, утром участники собираются на лекцию в каминном зале, после неё расходятся по небольшим командам и работают над своими проектами, а к вечеру встречаются снова, чтобы показать результаты. Рабочие места и время использования помещений можно согласовать заранее, чтобы коворкинг удобно вписался в программу и расписание питания.",
        ],
      },
      accommodation: {
        heading: "Проживание на вилле",
        paragraphs: [
          `В комплексе **${eagleEyeFacts.roomCount} номеров и апартаментов** — от двухместных номеров и студий с кухонной зоной до просторных апартаментов с гостиной и семейной студии. В ряде номеров есть балконы или террасы с видом на залив и горы. Зимой номера отапливаются.`,
          `На основных кроватях предусмотрено **36 мест**, а с учётом раскладных диванов вилла может разместить **до ${eagleEyeFacts.overnightCapacity} гостей**. В семи номерах двуспальные кровати можно разделить на две односпальные, а в семейной студии — на четыре. Схему расселения можно подобрать под состав группы и заранее учесть, кому нужна отдельная кровать.`,
        ],
        photos: [
          { src: eagleEyePhoto2, alt: "Кровать с фигурным изголовьем в светлой спальне" },
          { src: eagleEyePhoto4, alt: "Номер с белой кроватью и видом на залив из окна" },
          { src: eagleEyePhoto7, alt: "Кровать с белым изголовьем и картиной на стене" },
          { src: eagleEyePhoto11, alt: "Кровать с белым покрывалом рядом с большим окном" },
          { src: eagleEyePhoto14, alt: "Гостиная с бирюзовым диваном и кухонной зоной" },
          { src: eagleEyePhoto15, alt: "Студия с кроватью и кухонной зоной" },
          { src: eagleEyePhoto21, alt: "Две односпальные кровати с синими покрывалами" },
          { src: eagleEyePhoto22, alt: "Номер с двумя кроватями и светло-зелёными стенами" },
          { src: eagleEyePhoto23, alt: "Светлый номер с двуспальной кроватью и выходом на балкон" },
        ],
      },
      dining: {
        heading: "Завтраки, общие ужины и барбекю",
        paragraphs: [
          `В крытом ресторане **до ${eagleEyeFacts.restaurantCapacity} посадочных мест**. Здесь можно организовать завтраки для участников, обеды между занятиями и общий ужин в завершение выезда. В тёплый вечер можно собраться на летней кухне с барбекю.`,
        ],
      },
      amenities: {
        heading: "Бассейн и хамамы после занятий",
        paragraphs: [
          "Для выездов в любое время года на вилле есть **крытый бассейн и два хамама**. В тёплый сезон можно отдохнуть и у открытого бассейна с видом на залив. Если хочется оставить в расписании время для плавания или хамама, доступ к ним можно согласовать на даты выезда. Он может оплачиваться отдельно.",
        ],
      },
      planning: {
        heading: "Спланируйте свой выезд в Eagle Eye",
        paragraphs: [
          `Вилла принимает группы **от ${eagleEyeFacts.minimumGroupSize} участников**. Стоимость рассчитывается индивидуально и зависит от дат, количества гостей, размещения, питания и того, какие пространства и услуги понадобятся вашей группе.`,
          "Напишите нам в мессенджере и расскажите, что вы планируете: ретрит, тренинг, IT-кэмп или командный выезд. Для первого сообщения достаточно примерных дат и размера группы. Мы уточним доступность виллы, обсудим размещение и пространства для вашей программы и подготовим расчёт.",
        ],
      },
    },
  },
  // Демонстрационные локации и вместимость условные: заменить перед публикацией.
  { slug: "coastal-venue", title: "Площадка у моря", location: "Котор, Черногория", capacityLabel: "До 18 участников", cardDescription: "Зал для занятий и терраса" },
  { slug: "mountain-venue", title: "Площадка в горах", location: "Колашин, Черногория", capacityLabel: "До 30 участников", cardDescription: "Пространство для групп и прогулок" },
];

export function venueHref(slug: string) {
  return `/venues/${slug}` as const;
}
