import samsungImg from "@assets/1000501024_1780116301364.jpg";
import iphoneImg from "@assets/1000501026_1780116290670.jpg";
import lcdImg from "@assets/HONOR_LCD_1780432937128.webp";

export type Product = {
  id: number;
  name: string;
  price: number;
  category: "samsung" | "iphone" | "honor" | "tecno" | "redmi";
  imageUrl: string;
};

export const products: Product[] = [
  // Samsung (10)
  { id: 1,  name: "Samsung A04",    price: 250, category: "samsung", imageUrl: samsungImg },
  { id: 2,  name: "Samsung A05",    price: 250, category: "samsung", imageUrl: samsungImg },
  { id: 3,  name: "Samsung A12",    price: 250, category: "samsung", imageUrl: samsungImg },
  { id: 4,  name: "Samsung A125",   price: 250, category: "samsung", imageUrl: samsungImg },
  { id: 5,  name: "Samsung A13 4G", price: 350, category: "samsung", imageUrl: samsungImg },
  { id: 6,  name: "Samsung A13 5G", price: 350, category: "samsung", imageUrl: samsungImg },
  { id: 7,  name: "Samsung A16 4G", price: 350, category: "samsung", imageUrl: samsungImg },
  { id: 8,  name: "Samsung A16 5G", price: 350, category: "samsung", imageUrl: samsungImg },
  { id: 9,  name: "Samsung A24",    price: 400, category: "samsung", imageUrl: samsungImg },
  { id: 10, name: "Samsung A53 5G", price: 500, category: "samsung", imageUrl: samsungImg },

  // iPhone (17)
  { id: 11, name: "iPhone 11",         price: 450, category: "iphone", imageUrl: iphoneImg },
  { id: 12, name: "iPhone 11 Pro",     price: 550, category: "iphone", imageUrl: iphoneImg },
  { id: 13, name: "iPhone 11 Pro Max", price: 600, category: "iphone", imageUrl: iphoneImg },
  { id: 14, name: "iPhone 12",         price: 450, category: "iphone", imageUrl: iphoneImg },
  { id: 15, name: "iPhone 12 Pro",     price: 550, category: "iphone", imageUrl: iphoneImg },
  { id: 16, name: "iPhone 12 Pro Max", price: 600, category: "iphone", imageUrl: iphoneImg },
  { id: 17, name: "iPhone 12 Mini",    price: 400, category: "iphone", imageUrl: iphoneImg },
  { id: 18, name: "iPhone 13",         price: 450, category: "iphone", imageUrl: iphoneImg },
  { id: 19, name: "iPhone 13 Pro",     price: 550, category: "iphone", imageUrl: iphoneImg },
  { id: 20, name: "iPhone 13 Pro Max", price: 600, category: "iphone", imageUrl: iphoneImg },
  { id: 21, name: "iPhone 13 Mini",    price: 400, category: "iphone", imageUrl: iphoneImg },
  { id: 22, name: "iPhone 14",         price: 500, category: "iphone", imageUrl: iphoneImg },
  { id: 23, name: "iPhone 14 Pro",     price: 600, category: "iphone", imageUrl: iphoneImg },
  { id: 24, name: "iPhone 14 Plus",    price: 550, category: "iphone", imageUrl: iphoneImg },
  { id: 25, name: "iPhone 15",         price: 550, category: "iphone", imageUrl: iphoneImg },
  { id: 26, name: "iPhone 15 Pro",     price: 700, category: "iphone", imageUrl: iphoneImg },
  { id: 27, name: "iPhone 15 Pro Max", price: 750, category: "iphone", imageUrl: iphoneImg },

  // Honor (10)
  { id: 28, name: "Honor X6",       price: 300, category: "honor", imageUrl: lcdImg },
  { id: 29, name: "Honor X6a",      price: 300, category: "honor", imageUrl: lcdImg },
  { id: 30, name: "Honor X7",       price: 320, category: "honor", imageUrl: lcdImg },
  { id: 31, name: "Honor X7a",      price: 320, category: "honor", imageUrl: lcdImg },
  { id: 32, name: "Honor X8",       price: 340, category: "honor", imageUrl: lcdImg },
  { id: 33, name: "Honor X8a",      price: 340, category: "honor", imageUrl: lcdImg },
  { id: 34, name: "Honor X9",       price: 360, category: "honor", imageUrl: lcdImg },
  { id: 35, name: "Honor X9a",      price: 360, category: "honor", imageUrl: lcdImg },
  { id: 36, name: "Honor 90 Lite",  price: 380, category: "honor", imageUrl: lcdImg },
  { id: 37, name: "Honor 200 Lite", price: 400, category: "honor", imageUrl: lcdImg },

  // Tecno (5)
  { id: 38, name: "Tecno Spark 10", price: 300, category: "tecno", imageUrl: lcdImg },
  { id: 39, name: "Tecno Spark 20", price: 300, category: "tecno", imageUrl: lcdImg },
  { id: 40, name: "Tecno Pop 8",    price: 310, category: "tecno", imageUrl: lcdImg },
  { id: 41, name: "Tecno Camon 20", price: 320, category: "tecno", imageUrl: lcdImg },
  { id: 42, name: "Tecno Pova 5",   price: 330, category: "tecno", imageUrl: lcdImg },

  // Redmi (3)
  { id: 43, name: "Redmi 12",      price: 300, category: "redmi", imageUrl: lcdImg },
  { id: 44, name: "Redmi 13C",     price: 300, category: "redmi", imageUrl: lcdImg },
  { id: 45, name: "Redmi Note 13", price: 320, category: "redmi", imageUrl: lcdImg },
];
