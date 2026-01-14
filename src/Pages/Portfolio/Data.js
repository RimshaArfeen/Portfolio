/////
import BlogWeb from "../../assets/Images/Portfolio/BlogWeb.png"
import EcommerceWeb from "../../assets/Images/Portfolio/EcommerceWeb.png"
import Clothing from "../../assets/Images/Portfolio/Clothing.png"
import Collections from "../../assets/Images/Portfolio/Collections.png"
import BestSellers from "../../assets/Images/Portfolio/BestSellers.png"
//////
import TwiiterClone from "../../assets/Images/Portfolio/TwiiterClone.png"
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

/// Graphic Designing
import PP from "../../assets/Images/Portfolio/pp.jpeg"
import Calligraphy from "../../assets/Images/Portfolio/Calligraphy.jpeg"
import Kaaba from "../../assets/Images/Portfolio/Kaaba.jpeg"
import Illustration from "../../assets/Images/Portfolio/Illustration.jpeg"
import Ramadan from "../../assets/Images/Portfolio/Ramadan.jpg"
import Logo from "../../assets/Images/Portfolio/logo.jpg"
import Poster from "../../assets/Images/Portfolio/poster.jpg"
import GISP from "../../assets/Images/Portfolio/GISP.png"
import AboutGISP from "../../assets/Images/Portfolio/AboutGISP.png"

export const portfolio = [
  {
    title: "Full Stack Blog Website - Echo Journal",
    imgUrl: BlogWeb,
    link: "https://blog-app-puce-eight.vercel.app/",
    description: "Echo Journal is a modern platform where technology, career growth, and innovation come together. Built with the latest web technologies, it offers a smooth, interactive experience for readers and writers alike.\nKey Features:\nDynamic blog pages with real-time updates\nRich text editing powered by TipTap\nCategorized content for easy navigation\nUser comments and author profiles\nAutomatic date formatting and view counter.\nDark mode for a comfortable reading experience\nTech Stack: Next.js | MongoDB | Prisma | Vercel\nExplore, learn, and share ideas with Echo Journal — where every line of code echoes innovation."

  },
  {
    title: "Scholarship Management System",
    imgUrl: GISP,
    img2: AboutGISP,
    link: "#",
    description: "The Abroad Scholarship Management System is a FULL-STACK web application designed to streamline the process of applying for international IT scholarships. Built using the Full Stack (MongoDB, Express.js, React, and Node.js), this system allows students to submit their applications and academic records for evaluation.\nFUNCTIONS:\n ----------\n STUDENT APPLICATION FORM: Collects personal and academic details, validates eligibility (≥85% marks, age ≥19).\n\nSELECTION OPTIONS:\n----------\n  University-first: Faculty assigned based on chosen university and academic record.\n  Faculty-first: Checks available seats for chosen faculty across universities.\n\nDatabase Management: Stores applications, updates seat availability dynamically.\n\nAuthentication: Secure admin login with JWT, protected routes for data management.\n\nAdmin Dashboard: View, filter, and manage applications; monitor seat availability.\n\nPages\nHome – Overview of scholarships.\nApply – Scholarship application form.\nAdmin Dashboard – Manage applications, view seat availability.\nLogin – Admin authentication page.\n\nTech Stack\nFrontend: React.js, Tailwind CSS\nBackend: Node.js, Express.js\nDatabase: MongoDB (Mongoose)\nAuth: JWT"

  },
  {
    title: "Full Stack Ecommerce Website - SpicyBazaar (In progress)",
    imgUrl: EcommerceWeb,
    img2: EcommerceWeb,
    link: "https://ecommerce-website-black-mu.vercel.app/",
    description: "Spicy Bazaar – Your Ultimate Online Food Marketplace\nSpicy Bazaar is a modern, full-stack e-commerce food delivery platform designed to bring your favorite meals and local restaurants right to your door. Built with Next.js (App Router), React, and TailwindCSS, it delivers a fast, seamless, and mobile-first experience that feels as flavorful as its name.\nKey Features\n*User Authentication & Profiles – Secure signup/login, saved addresses, and complete order history\n*Restaurant & Vendor Listings – Explore nearby restaurants with menus, ratings, and location info\n*Dynamic Menu Catalogue – Filter dishes by cuisine, price, or rating to find exactly what you crave\n*Smart Cart System – Add, remove, or edit quantities easily with real-time updates.\n*Smooth Checkout Flow – Choose addresses, apply promo codes, and complete payments effortlessly.\n*Integrated Payments – Supports card and wallet payments for quick, safe transactions.\n*Order Tracking – View live order status from “preparing” to “delivered” with real-time map updates.\n*Admin & Vendor Dashboard – Manage restaurants, menus, visuals, and orders through a powerful back-office.\n*Fully Responsive Design – Optimized for all screens with accessible and intuitive UI.\n⚙️ Tech Stac\n*Frontend: Next.js (App Router) + React + TailwindCSS\n*Database: MongoDB Atlas\n*ORM: Prisma (for type-safe data handling)\n*Deployment: Verc\nSpicy Bazaar blends elegant design, smooth performance, and real-time functionality—creating a digital food marketplace that’s as bold and vibrant as your favorite spices."

  },
  {
    title: "Nesta Coffee",
    imgUrl: NestaCoffee,
    img2: Varieties,
    link: "https://product-landing-page-three-flax.vercel.app/",
    description: "A fully functional coffee website designed using React and Tailwind CSS. This project includes features such as order placement, order confirmation, cart management, location services, and user profile authentication. All user data is stored in local storage for a seamless experience. The website also follows modern UI/UX design principles, offering a responsive layout, smooth animations, and optimized performance and accessibility."
  },
  {
    title: "E-Commerce Dashboard",
    imgUrl: Ecom,
    img2: addProd,
    link: "",
    description: "A comprehensive E-commerce dashboar built with the Full Stack (MongoDB, Express, React, Node.js). It includes features such as product management, order tracking, user authentication, and real-time sales analytics. The dashboard provides an intuitive UI for managing inventory, processing transactions, and monitoring business performance efficiently."
  },
  {
    title: "CRUD App",
    imgUrl: crudApp,
    img2: viewUser,
    link: "https://github.com/RimshaArfeen/CrudApp-RTK",
    description: "A full-featured CRUD (Create, Read, Update, Delete application designed to manage data effectively. Built using Redux Toolkit for state management, this app ensures optimal performance and scalability. It includes user authentication, form validation, and seamless data manipulation, making it ideal for data-driven applications."
  },
  {
    title: "Clothing Web",
    imgUrl: Clothing,
    img2: Collections,
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


];


export const Graphics = [
  {
    "title": "Palestine Poster",
    "description": "A powerful poster design symbolizing solidarity with Palestine, using bold colors and impactful imagery to convey a strong message.",
    "imgUrl": PP
  },
  {
    "title": "Arabic Calligraphy",
    "description": "Intricate Arabic calligraphy artwork that blends traditional script with modern design elements for a visually stunning piece.",
    "imgUrl": Calligraphy
  },
  {
    "title": "Kaaba Illustration",
    "description": "A detailed illustration of the Kaaba, capturing its architectural beauty and spiritual significance with precise lines and shading.",
    "imgUrl": Kaaba
  },
  {
    "title": "Ramadan Post",
    "description": "Accurate tracing of complex images to create clean, vector-based artwork suitable for various digital and print applications.",
    "imgUrl": Ramadan
  },
  {
    "title": "Solidarity With Palestine",
    "description": "Accurate tracing of complex images to create clean, vector-based artwork suitable for various digital and print applications.",
    "imgUrl": Poster
  },

  {
    "title": "Logo Design",
    "description": "Accurate tracing of complex images to create clean, vector-based artwork suitable for various digital and print applications.",
    "imgUrl": Logo
  }, {
    "title": "Tracing of Image",
    "description": "Accurate tracing of complex images to create clean, vector-based artwork suitable for various digital and print applications.",
    "imgUrl": Illustration
  }

]

