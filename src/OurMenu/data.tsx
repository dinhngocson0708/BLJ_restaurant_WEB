export const data: MenuItem[] = [
    {
        id: 1,
        img: "https://res.ringameal.com/Uploads/1070/baaacfdd-d845-4998-ac28-296169eac3b0.png",
        title: 'Grilled Chicken Leg Quarter 1, 2, 3 or 4 pcs.',
        category:"Gà",
        desc: 'The meat is marinated with spices from some species of roots, leaves, honey and Kon Tum forest trees, so grilled chicken has a special flavor.',
        price: 46,
        
      },
      {
        id: 2,
        img: "https://res.ringameal.com/Uploads/1070/34779487-d2ed-4fca-9391-e59e4a402d29.png",
        title: 'Grilled Chicken Half',
        desc: 'The meat is marinated with spices from some species of roots, leaves, honey and Kon Tum forest trees, so grilled chicken has a special flavor.',
        price: 56,
        category:"Gà",
      },
      {
        id: 3,
        img: "https://res.ringameal.com/Uploads/1070/34779487-d2ed-4fca-9391-e59e4a402d29.png",
        title: 'Grilled Chicken Half',
        desc: 'The meat is marinated with spices from some species of roots, leaves, honey and Kon Tum forest trees, so grilled chicken has a special flavor.',
        price: 56,
        category:"Gà",
      },
      {
        id: 4,
        img: "https://res.ringameal.com/Uploads/1070/4d4c628a-1b20-4623-9b7d-c7dadffa2f8a.png",
        title: 'Vietnamese Beef Stew Rice',
        desc: 'Tender pieces of beef are cooked with a delicious and sweet sauce',
        price: 46,
        category:"Cơm",
      },
      {
        id: 5,
        img: "https://res.ringameal.com/Uploads/1070/2f56c0d7-9f1d-4093-b65c-2cd748769b6f.png",
        title: 'Combo Rice Plate',
        desc: 'Tender pieces of beef are cooked with a delicious and sweet sauce',
        price: 56,
        category:"Cơm",
      },
      {
        id: 6,
        img: "https://res.ringameal.com/Uploads/1070/a776518c-e26b-4e59-b873-214ecf52eadc.png",
        title: 'Vietnamese Chicken Curry Rice',
        desc: 'Tender pieces of beef are cooked with a delicious and sweet sauce',
        price: 66,
        category:"Cơm",
    },
    {
        id: 7,
        img: "https://res.ringameal.com/Uploads/1070/d41f02e8-57ad-4ed9-a229-ccb03d33efc7.png",
        title: '#1 Family Meal (2-3 persons)',
        category:"family",
        desc: '4 grilled chicken leg quarters, chicken vegetable soup 32 oz., 4 chicken fried taro rolls and chicken broth rice 32 oz.',
        price: 46,
        
      },
      {
        id: 8,
        img: "https://res.ringameal.com/Uploads/1070/7e77426b-8807-4904-a393-b75dc2785ff6.png",
        title: '#2 Family Meals (2-3 persons)',
        desc: '4 grilled chicken leg quarters, chicken vegetable soup 32 oz., 4 chicken fried taro rolls and chicken broth rice 32 oz.',
        price: 56,
        category:"family",
      },
      {
        id: 9,
        img: "https://res.ringameal.com/Uploads/1070/f4225dc4-dc17-41a9-9d2f-805c02b3ce17.png",
        title: '#3 Family Meals (2-3 persons)',
        desc: '4 grilled chicken leg quarters, chicken vegetable soup 32 oz., 4 chicken fried taro rolls and chicken broth rice 32 oz.',
        price: 56,
        category:"family",
      },
      {
        id: 10,
        img: "https://th.bing.com/th?id=OIP.CqCR2F90jcepFpmrfW5w3wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        title: 'Coke 16.9 oz',
        desc: 'great refreshment',
        price: 46,
        category:"nước",
      },
      {
        id: 11,
        img: "https://th.bing.com/th?id=OIP.CqCR2F90jcepFpmrfW5w3wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        title: 'Coke 16.9 oz',
        desc: 'great refreshment',
        price: 56,
        category:"nước",
      },
      {
        id: 12,
        img: "https://th.bing.com/th?id=OIP.KPnH5s9IrZRy9MGbugSBGgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        title: 'Sprite 16.9 oz',
        desc: 'great refreshment',
        price: 66,
        category:"nước",
    },
];
interface MenuItem {
    id: number;
    img: string;
    title: string;
    desc: string;
    price: number;
    category: string;
  }
