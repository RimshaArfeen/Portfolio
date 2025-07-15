/////
import Clothing from "../../assets/Images/Portfolio/Clothing.png"
import Collections from "../../assets/Images/Portfolio/Collections.png"
import BestSellers from "../../assets/Images/Portfolio/BestSellers.png"
//////
import TwiiterClone from "../../assets/Images/Portfolio/TwiiterClone.png"
import LandingPgPNG from "../../assets/Images/Portfolio/LandingPgPNG.png"
import Weather from "../../assets/Images/Portfolio/Weather.png"
/////
import Ecom from "../../assets/Images/Portfolio/Ecom-dashboard.png"
import addProd from "../../assets/Images/Portfolio/addProd.png"
///
import crudApp from "../../assets/Images/Portfolio/CrudApp.png"
import viewUser from "../../assets/Images/Portfolio/viewUser.png"
///
import NestaCoffee from "../../assets/Images/Portfolio/NestaCoffee.png"
import Varieties from "../../assets/Images/Portfolio/Varieties.png"
import Freshness from "../../assets/Images/Portfolio/Freshness.png"
////

const portfolio = [
  {
    title: "E-Commerce Dashboard",
    imgUrl: Ecom,
    img2 : addProd ,
    link: "",
    description: "A comprehensive E-commerce dashboar built with the MERN stack (MongoDB, Express, React, Node.js). It includes features such as product management, order tracking, user authentication, and real-time sales analytics. The dashboard provides an intuitive UI for managing inventory, processing transactions, and monitoring business performance efficiently."
  },
  {
    title: "CRUD App",
    imgUrl: crudApp,
    img2 : viewUser,
    link: "https://github.com/RimshaArfeen/CrudApp-RTK",
    description: "A full-featured CRUD (Create, Read, Update, Delete application designed to manage data effectively. Built using Redux Toolkit for state management, this app ensures optimal performance and scalability. It includes user authentication, form validation, and seamless data manipulation, making it ideal for data-driven applications."
  },
  {
    title: "Clothing Web",
    imgUrl: Clothing,
    img2 : Collections ,
    link: "",
    description: "A modern and visually appealing Clothing E-commerce Websit developed using React and Tailwind CSS. It features a dynamic product catalog, responsive design, and a user-friendly shopping experience. The website integrates filtering options, product search functionality, and an interactive shopping cart for a seamless online shopping experience."
  },
  {
    title: "Weather App",
    imgUrl: Weather,
    link: "",
    description: "A fully functional Weather Application that allows users to check real-time weather forecasts for any location. Built using React, it integrates with a weather API to provide accurate temperature, humidity, wind speed, and weather condition updates. The app includes a sleek UI, search functionality, and dynamic background changes based on weather conditions."
  },
  {
    title: "Twitter Clone",
    imgUrl: TwiiterClone,
    link: "",
    description: "A Twitter clone built using React and Tailwind CSS, featuring a fully responsive design and interactive UI. Users can post tweets, like posts, and view a live feed of content. The project showcases key social media functionalities, including user authentication, posting capabilities, and real-time updates."
  },
  {
    title: "Nesta Coffee",
    imgUrl: NestaCoffee,
    img2 : Varieties,
    link: "https://github.com/RimshaArfeen/ProductLandingPage/tree/main",
    description: "A fully functional coffee website designed using React and Tailwind CSS. This project includes features such as order placement, order confirmation, cart management, location services, and user profile authentication. All user data is stored in local storage for a seamless experience. The website also follows modern UI/UX design principles, offering a responsive layout, smooth animations, and optimized performance and accessibility."
  }
  // {
  //   title: "Landing Page",
  //   imgUrl: LandingPgPNG,
  // img2 : ,
  // link: "",  
  // description: "A high-converting landing page designed using React and Tailwind CSS. This project focuses on modern UI/UX design principles, featuring an eye-catching hero section, responsive layout, call-to-action buttons, and smooth animations. The landing page is optimized for performance and accessibility, making it ideal for marketing campaigns and product promotions."
  // }
];



export default portfolio;
