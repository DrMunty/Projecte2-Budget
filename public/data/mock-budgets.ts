import type { FinalBudget } from '../../src/app/models/finalBudget';

export const INITIAL_BUDGETS: FinalBudget[] = [
  {
    id: "1721548800000",
    client: {
      name: "Maria Garcia",
      email: "maria.garcia@techcorp.com",
      phone: 612345678
    },
    services: [
      { title: "Seo", cost: 300},
      { title: "Web", cost: 650, pages: 3, languages: 2 }
    ],
    totalPrice: 920,
    date: new Date('2026-07-15T10:30:00')
  },
  {
    id: "1721635200000",
    client: {
      name: "Jordi Pujol",
      email: "jordi@designstudio.cat",
      phone: 688990011
    },
    services: [
      { title: "Web", cost: 560, pages: 1, languages: 1 }
    ],
    totalPrice: 500,
    date: new Date('2026-07-18T14:15:00')
  },
  {
    id: "1721721600000",
    client: {
      name: "Laura Martínez",
      email: "l.martinez@innovate.es",
      phone: 655443322 
    },
    services: [
      { title: "Ads", cost: 400 },
      { title: "Seo", cost: 300 }
    ],
    totalPrice: 700,
    date: new Date('2026-07-19T09:45:00')
  },
  {
    id: "1721808000000",
    client: {
      name: "Carlos Serra",
      email: "carlos@restauranteserra.com",
      phone: 633221100
    },
    services: [
      { title: "Ads", cost: 400 }
    ],
    totalPrice: 400,
    date: new Date('2026-07-20T11:20:00')
  },
  {
    id: "1721894400000",
    client: {
      name: "Anna Soler",
      email: "anna@solermarketing.cat",
      phone: 677889900
    },
    services: [
      { title: "Seo", cost: 300 },
      { title: "Ads", cost: 400 },
      { title: "Web", cost: 680, pages: 4, languages: 2 }
    ],
    totalPrice: 1380,
    date: new Date('2026-07-21T08:00:00')
  }
];