import type { Product } from "../components/ProductCard";
import ProductDetail from "../pages/ProductData";

import Img1 from '../assets/product/P5.png';
import Img2 from '../assets/product/Xbox.png';
import Img3 from '../assets/product/nin.png';
import Img4 from '../assets/product/sam.jpg';
import Img5 from '../assets/product/ap.jpg';
import Img7 from '../assets/product/samsung.png';
import Img9 from '../assets/product/G9.png';
import Img10 from '../assets/product/razer.jpg';
import Img11 from '../assets/product/chair.png';
import Img12 from '../assets/product/ray.jpg';
import Img13 from '../assets/product/beats.jpg';
import Img14 from '../assets/product/gta6.jpg';
import Img15 from '../assets/product/charger.jpg';
import Img16 from '../assets/product/ear.jpg';
import Img17 from '../assets/product/ipad.jpg';
import Img18 from '../assets/product/vr.jpg';

const ProductsData: Product[] = [
  { id: 1, img: Img1, title: "Playstation 5", description: "Next-gen power", longDescription: "Play in 4K with blazing fast loading.", price: 299 },
  { id: 2, img: Img2, title: "Xbox Series X", description: "High-performance console", longDescription: "Power your dreams with stunning graphics.", price: 450 },
  { id: 3, img: Img3, title: "Nintendo Switch", description: "Hybrid fun", longDescription: "Play at home or on the go!", price: 220 },
  { id: 4, img: Img4, title: "Samsung Galaxy", description: "Premium smartphone", longDescription: "Lightning fast and ultra-clear cameras.", price: 799 },
  { id: 5, img: Img5, title: "Apple Laptop", description: "Creativity machine", longDescription: "M-series chip performance.", price: 1200 },
  { id: 7, img: Img7, title: "Samsung Laptop", description: "High performance", longDescription: "Smooth multitasking & great display.", price: 1500 },
  { id: 9, img: Img9, title: "Samsung Odessey G9 Oled", description: "Curved gaming monitor", longDescription: "Ultra-wide immersion!", price: 1999 },
  { id: 10, img: Img10, title: "Razer Mouse & Keyboard", description: "RGB gaming gear", longDescription: "Built for precision and speed.", price: 150 },
  { id: 11, img: Img11, title: "Razer Chair", description: "Game comfortably", longDescription: "Ergonomic support for long gaming sessions.", price: 300 },
  { id: 12, img: Img12, title: "4k Blu Ray Player", description: "Ultimate movie clarity", longDescription: "Crystal-clear visuals & HDR.", price: 450 },
  { id: 13, img: Img13, title: "Beats Headphones", description: "Premium sound", longDescription: "Rich bass & crisp audio.", price: 500 },
  { id: 14, img: Img14, title: "GTA 6", description: "Epic story adventure", longDescription: "Experience the next-gen open world.", price: 99 },
  { id: 15, img: Img15, title: "iPhone Charger", description: "Fast charging", longDescription: "Reliable and durable.", price: 20 },
  { id: 16, img: Img16, title: "Samsung Earbuds", description: "Wireless sound", longDescription: "Active noise canceling included.", price: 250 },
  { id: 17, img: Img17, title: "Apple iPad Pro", description: "Powerful tablet", longDescription: "Laptop-level speed.", price: 2000 },
  { id: 18, img: Img18, title: "Playstation VR", description: "Immersive VR gaming", longDescription: "Step into new worlds.", price: 299 },
];

export default ProductsData;
