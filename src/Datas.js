import userProfile from "./assets/imgs/profile.jpg";

const newMembers = [
  {
    id: 1,
    userName: "Ali Moradi",
    title: "hacker",
    img: userProfile,
  },
  {
    id: 2,
    userName: "Masoud Ahmadi",
    title: "Kotlin Programer",
    img: userProfile,
  },
  {
    id: 3,
    userName: "Bardia Sharifi",
    title: "Web Deveploper",
    img: userProfile,
  },
  {
    id: 4,
    userName: "Simin Motaghi",
    title: "Programmer",
    img: userProfile,
  },
];

const latestTransactions = [
  {
    id: 1,
    name: "Qadir Yolme",
    email: "ghadir@gmail.com",
    date: "22 jan 2026",
    price: 22.9,
    status: "Approved",
    img: userProfile,
  },
  {
    id: 2,
    name: "Alex Morgan",
    email: "alex@example.com",
    date: "1 May 2022",
    price: 459.0,
    status: "Pending",
    img: userProfile,
  },
  {
    id: 3,
    name: "John Doe",
    email: "john@example.com",
    date: "29 Apr 2022",
    price: 89.99,
    status: "Declined",
    img: userProfile,
  },
  {
    id: 4,
    name: "sara Taban",
    email: "saraa@gmail.com",
    date: "22 Apr 2026",
    price: 23_900,
    status: "Approved",
    img: userProfile,
  },
];

const homeChartDatas = [
  { name: "January", sale: 2400 },
  { name: "February", sale: 4567 },
  { name: "March", sale: 1398 },
  { name: "April", sale: 9800 },
  { name: "May", sale: 3908 },
  { name: "June", sale: 4800 },
  { name: "July", sale: 9000 },
  { name: "August", sale: 4800 },
  { name: "September", sale: 4800 },
  { name: "October", sale: 3200 },
  { name: "November", sale: 1500 },
  { name: "December", sale: 1000 },
];

const productChartData = [
  { name: "March", sale: 1398 },
  { name: "April", sale: 9800 },
  { name: "May", sale: 3908 },
];

export { newMembers, latestTransactions, homeChartDatas, productChartData };
