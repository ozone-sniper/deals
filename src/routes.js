import Icon from "@mui/material/Icon";
import OzoneSniper from "layouts/pages/landing-pages/ozone-sniper";

const CATEGORIES = {
  BOOKS: {
    url: "/category/books",
    title: "Книги и учебници",
    itemKey: "knijarnica",
  },
  PUZZLES: {
    url: "/category/books",
    title: "Настолни игри и пъзели",
    itemKey: "pazeli-2d-3d",
  },
  GIFTS: {
    url: "/category/gifts",
    title: "Пособия и подаръци",
    itemKey: "posobiya-i-podaratsi",
  },
  PC: {
    url: "/category/pc",
    title: "Лаптопи, РС и монитори",
    itemKey: "laptopi-monitori-i-kompyutri",
  },
  GAMING: {
    url: "/category/gaming",
    title: "Гейминг",
    itemKey: "gaming",
  },
  PHONES: {
    url: "/category/phones",
    title: "Смартфони и смарт устройства",
    itemKey: "mobilni-ustroistva",
  },
  APPLIANCES: {
    url: "/category/appliances",
    title: "Малки електроуреди",
    itemKey: "malki-elektrouredi",
  },
  TV: {
    url: "/category/tv",
    title: "ТВ, Фото и видео",
    itemKey: "tv-foto-i-video",
  },
  BABY: {
    url: "/category/baby",
    title: "Майка и бебе",
    itemKey: "mama-i-bebe",
  },
  TOYS: {
    url: "/category/toys",
    title: "Играчки",
    itemKey: "igrachki-i-pazeli",
  },
  LIFESTYLE: {
    url: "/category/lifestyle",
    title: "Лайфстайл и фитнес",
    itemKey: "layfstayl",
  },
  HOME: {
    url: "/category/home",
    title: "За дома и офиса",
    itemKey: "sport-i-autdor",
  },
  PHARMACY: {
    url: "/category/pharmacy",
    title: "Аптека и хранителни добавки",
    itemKey: "apteka-i-hranitelni-dobavki",
  },
  PARFUMES: {
    url: "/category/parfumes",
    title: "Козметика и парфюми",
    itemKey: "kozmetika",
  },
};

const routes = [
  {
    name: "Категории",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Категории",
        collapse: [
          {
            name: CATEGORIES.BOOKS.title,
            route: CATEGORIES.BOOKS.url,
            component: <OzoneSniper category={CATEGORIES.BOOKS} />,
          },
          {
            name: "Настолни игри и пъзели",
            route: "/category/puzzels",

            component: <OzoneSniper category={CATEGORIES.PUZZLES} />,
          },
          {
            name: "Пособия и подаръци",
            route: "/category/presents",

            component: <OzoneSniper category={CATEGORIES.GIFTS} />,
          },
          {
            name: CATEGORIES.PC.title,
            route: CATEGORIES.PC.url,

            component: <OzoneSniper category={CATEGORIES.PC} />,
          },
          {
            name: "Гейминг",
            route: "/category/gaming",

            component: <OzoneSniper category={CATEGORIES.GAMING} />,
          },
          {
            name: "Смартфони и смарт устройства",
            route: "/category/smartphones",

            component: <OzoneSniper category={CATEGORIES.PHONES} />,
          },
          {
            name: "Малки електроуреди",
            route: "/category/appliances",

            component: <OzoneSniper category={CATEGORIES.APPLIANCES} />,
          },
          {
            name: "ТВ, Фото и видео",
            route: "/category/tv",

            component: <OzoneSniper category={CATEGORIES.TV} />,
          },
          {
            name: "Майка и бебе",
            route: "/category/baby",

            component: <OzoneSniper category={CATEGORIES.BABY} />,
          },
          {
            name: "Играчки",
            route: "/category/toys",

            component: <OzoneSniper category={CATEGORIES.TOYS} />,
          },
          {
            name: "Лайфстайл и фитнес",
            route: "/category/lifestyle",

            component: <OzoneSniper category={CATEGORIES.LIFESTYLE} />,
          },
          // {
          //   name: "Спорт и къмпинг",
          //   route: "/category/sport",

          //   component: <OzoneSniper category={CATEGORIES.} />,
          // },
          {
            name: "За дома и офиса",
            route: "/category/home",

            component: <OzoneSniper category={CATEGORIES.HOME} />,
          },
          {
            name: "Аптека и хранителни добавки",
            route: "/category/pharmacy",

            component: <OzoneSniper category={CATEGORIES.PHARMACY} />,
          },
          {
            name: "Козметика и парфюми",
            route: "/category/cosmetics",

            component: <OzoneSniper category={CATEGORIES.PARFUMES} />,
          },
        ],
      },
    ],
  },
];

export default routes;
