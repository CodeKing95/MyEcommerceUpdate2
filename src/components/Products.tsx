import React from "react";
import Heading from "./Heading";
import ProductCard from "./ProductCard";
import type { Product } from "./ProductCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import toast from "react-hot-toast";

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

export const ProductsData: Product[] = [
  {
    id: 1,
    img: Img1,
    title: "Playstation 5",
    price: 299,
    aosDelay: "300",
    rating: 9.9,
    reviewCount: 210,
    sold: 100,
    description: "Nice Product ",
    longDescription: "The PlayStation 5 (PS5) is Sony's powerful current-gen console featuring an 8-core AMD Zen 2 CPU, an RDNA 2 GPU with 10.3 TFLOPS, 16GB GDDR6 RAM, and a lightning-fast 825GB custom SSD for near-instant loading, supporting 4K 120Hz, Ray Tracing, and 'Tempest' 3D AudioTech for immersive sound.",
    

  },
  {
    id: 2,
    img: Img2,
    title: "Xbox Series X",
    price: 450,
    aosDelay: "0",
    rating: 4.5,
    reviewCount: 120,
    sold: 50,
    description:"",
    longDescription:"The Xbox Series S is Microsoft's compact, all-digital next-gen console, targeting 1440p gaming (upscaled to 4K) with speeds up to 120fps, featuring a custom NVMe SSD for fast loading, Xbox Velocity Architecture, and backward compatibility with thousands of games, making it a powerful, budget-friendly entry into current-gen gaming without a disc drive.",
  },
  {
    id: 3,
    img: Img3,
    title: "Nintendo Switch",
    price: 220,
    aosDelay: "0",
    rating: 4.0,
    reviewCount: 150,
    sold: 150,
    longDescription:"The Nintendo Switch is a versatile hybrid console with handheld (720p LCD/OLED) and TV (up to 1080p) modes, featuring detachable Joy-Con controllers, an NVIDIA Tegra processor, 32GB (or 64GB on OLED) storage, and hybrid connectivity for Wi-Fi/Bluetooth, offering portable and home gaming with features like HD Rumble and motion sensors, all powered by a built-in battery and supporting game cards and microSD expansion.",
  },
  {
    id: 4,
    img: Img4,
    title: "Samsung Galaxy",
    price: 799,
    aosDelay: "0",
    rating: 5.5,
    reviewCount: 170,
    sold: 200,
    longDescription:"The Samsung Galaxy S25 series (S25, S25+, S25 Ultra) brings enhanced Galaxy AI features (Circle to Search, Live Translate, ProVisual Engine), Snapdragon 8 Gen 4/Exynos 2400 processors, improved displays (brighter, with Gorilla Armor on Ultra), advanced cameras (especially the Ultra's 200MP sensor), titanium frames, and 7 years of updates, focusing on AI-driven experiences, robust build, and refined performance, with the Ultra retaining the S Pen. ",
  },
  {
    id: 5,
    img: Img5,
    title: "Apple Laptop",
    price: 1200,
    aosDelay: "0",
    rating: 5.0,
    reviewCount: 160,
    sold: 250,
    longDescription:"Apple laptops (MacBooks) are high-performance computers known for their Apple silicon chips (M-series), sleek designs, macOS operating system, and integration with the Apple ecosystem, offering models like the powerful MacBook Pro for professionals and the portable MacBook Air, customizable with M4, M5, or M4 Pro/Max chips for various needs, featuring advanced displays, memory, and AI-focused hardware.",
  },
  {
    id: 7,
    img: Img7,
    title: "Samsung Laptop",
    price: 1500,
    aosDelay: "0",
    rating: 3.8,
    reviewCount: 140,
    sold: 100,
    longDescription:"Samsung laptops, primarily the Galaxy Book series, offer sleek designs, vibrant AMOLED/OLED screens (often touchscreen), powerful Intel Core Ultra processors with dedicated NPUs for AI (Copilot+ features), long battery life, and integration with the Samsung ecosystem (Galaxy AI, Quick Share). Key specs vary by model (e.g., Book4, Book5, Pro, 360), but generally include up to Core Ultra 9, 32GB RAM, 1TB+ SSD, fast Wi-Fi, Thunderbolt ports, and premium features like Dolby Atmos audio, running Windows 11.",
  },
  {
    id: 9,
    img: Img9,
    title: "Samsung Odessey G9 Oled",
    price: 1999,
    aosDelay: "0",
    rating: 6.0,
    reviewCount: 110,
    sold: 300,
    longDescription:"The Samsung Odyssey OLED G9 (G95SC/G93SC) is a massive 49-inch curved gaming monitor featuring a 32:9 aspect ratio, Dual QHD (5120x1440) resolution, QD-OLED panel for perfect blacks & vibrant colors (1M:1 contrast), 240Hz refresh rate, and a lightning-fast 0.03ms response time, plus HDR10+ Gaming, AMD FreeSync Premium Pro, HDMI 2.1, DisplayPort, and CoreSync lighting for immersive, smooth, competitive gaming with true-to-life visuals.",
  },
  {
    id: 10,
    img: Img10,
    title: "Razer Mouse & Keybaord",
    price: 150,
    aosDelay: "0",
    rating: 5.5,
    reviewCount: 50,
    sold: 350,
    longDescription: "Razer offers high-performance gaming mice (like ergonomic Basilisk, lightweight Viper, small Cobra) and keyboards (like mechanical BlackWidow, optical Huntsman, low-profile Ornata), known for customizable RGB lighting (Chroma), advanced optical sensors (Focus Pro), anti-ghosting, and connectivity options (wired/wireless via HyperSpeed). Key features include precise tracking, programmable buttons, and Synapse software for personalization, catering to both competitive gaming and productivity needs with specialized ergonomic and wireless models.",
  },
  {
    id: 11,
    img: Img11,
    title: "Razer Chair",
    price: 300,
    aosDelay: "0",
    rating: 4.8,
    reviewCount: 60,
    sold: 50,
    longDescription: "Razer gaming chairs offer ergonomic support for long sessions, primarily in three lines: Iskur (advanced adjustable lumbar/posture), Enki (optimized weight distribution, all-day comfort with plush cushioning), and Fujin (breathable mesh for ventilation). Key features across models include 4D armrests, deep recline (up to 152°), magnetic memory foam head cushions, and choice of durable synthetic leather or fabric, with options for integrated heating/cooling in concepts like the Project Arielle.",
  },
  {
    id: 12,
    img: Img12,
    title: "4k Blu Ray Player",
    price: 450,
    aosDelay: "0",
    rating: 4.9,
    reviewCount: 10,
    sold: 100,
    longDescription:"4K Blu-ray players deliver superior home cinema by playing Ultra HD discs with four times the pixels of standard Blu-rays, offering incredible detail, vibrant colors, and realistic motion, primarily through High Dynamic Range (HDR10, Dolby Vision) and High-Resolution Audio, while also playing older discs and upscaling content for a full entertainment hub. Key features include support for various HDR formats, advanced audio (Dolby Atmos), disc/streaming versatility, and quality processing for the best picture and sound quality, even on older TVs.",
  },
  {
    id: 13,
    img: Img13,
    title: "Beats",
    price: 500,
    aosDelay: "0",
    rating: 5.1,
    reviewCount: 90,
    sold: 75,
    longDescription:"Beats headsets (like the popular Studio Pro, Solo 4, Powerbeats Pro) offer premium sound with Active Noise Cancelling (ANC) or Transparency modes, seamless Apple & Android pairing (Hey Siri, Google Fast Pair), personalized Spatial Audio, long battery life with Fast Fuel, and integrated controls, all designed for immersive listening, clear calls, and an enhanced experience across devices with high-quality wireless (Bluetooth 5.3) and wired (USB-C, 3.5mm) options, detailed in the Beats app.",
  },
  {
    id: 14,
    img: Img14,
    title: "GTA 6",
    price: 99,
    aosDelay: "0",
    rating: 9.9,
    reviewCount: 100,
    sold: 1000,
    longDescription:"Grand Theft Auto VI (GTA 6) is set in the modern-day, satirical state of Leonida (Florida-inspired), featuring dual protagonists Lucia & Jason, a Bonnie & Clyde-style criminal couple, with a confirmed November 19, 2026 release for PS5/Xbox Series X|S, focusing on social media satire, detailed world, new gameplay mechanics like hacking & partner commands, and a massive map including Vice City & the Everglades.",
  },
  {
    id: 15,
    img: Img15,
    title: "Iphone Charger",
    price: 20,
    aosDelay: "0",
    rating: 7.0,
    reviewCount: 75,
    sold: 400,
    longDescription:"iPhone chargers involve USB-C power adapters (20W+ for fast charging) and a USB-C to Lightning cable, though newer models might use USB-C to USB-C if they have USB-C ports. Key details include fast charging capability (50% in ~30 mins with 20W adapter), MagSafe for wireless charging, the need for MFi-certified or genuine Apple accessories to avoid damage, and battery health settings for optimized charging.",
  },
  {
    id: 16,
    img: Img16,
    title: "Samsung Earbuds",
    price: 250,
    aosDelay: "0",
    rating: 4.9,
    reviewCount: 60,
    sold: 1000,
    longDescription:"Samsung Galaxy Buds are a line of wireless earbuds known for features like Active Noise Cancellation (ANC), Ambient Sound, deep integration with Samsung devices via the Galaxy Wearable app, and sound quality enhancements with AI features like head gestures (on newer models) for controls, offering options from budget-friendly (Buds FE) to premium (Buds Pro) with varying designs (stem vs. stemless) and battery life, all focused on personalized audio and convenience.",
  },
  {
    id: 17,
    img: Img17,
    title: "Apple Ipad Pro",
    price: 2000,
    aosDelay: "0",
    rating: 7.5,
    reviewCount: 135,
    sold: 150,
    longDescription:"The iPad Pro is designed for professionals needing high performance for tasks like video editing, graphic design, and immersive gaming, with a focus on portability and advanced creative tools. ",
  },
  {
    id: 18,
    img: Img18,
    title: "Playstation",
    price: 299,
    aosDelay: "0",
    rating: 6.8,
    reviewCount: 125,
    sold: 100,
    longDescription:"PlayStation VR (PS VR) offers immersive virtual reality for PlayStation consoles, featuring an OLED screen (5.7-inch, 1080p), 100° field of view, 90/120Hz refresh, 3D audio, and head tracking via PlayStation Camera, connecting to PS4/PS5 with a processor unit; the newer PS VR2 for PS5 upgrades this with 4K HDR, eye-tracking, headset haptics, and a single-cable setup for a next-gen experience, using Sense controllers for advanced interaction.",
  },

];

interface ProductsProps {
  searchTerm: string;
}

const Products: React.FC<ProductsProps> = ({ searchTerm }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} has been added to your cart!`);
  };

  const filteredProducts = ProductsData.filter((product) =>
    (product.title || "").toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div className="container">
      <Heading title="Our Products" subtitle="Explore Our Products" />
      <ProductCard data={filteredProducts} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Products;
