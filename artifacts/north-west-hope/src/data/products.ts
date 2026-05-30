export type Product = {
  id: number;
  name: string;
  price: number;
  category: "samsung" | "iphone";
  imageUrl: string;
};

export const products: Product[] = [
  { id: 1, name: "Samsung A04", price: 250, category: "samsung", imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop" },
  { id: 2, name: "Samsung A05", price: 250, category: "samsung", imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop" },
  { id: 3, name: "Samsung A12", price: 250, category: "samsung", imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop" },
  { id: 4, name: "Samsung A125", price: 250, category: "samsung", imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop" },
  { id: 5, name: "Samsung A13 4G", price: 350, category: "samsung", imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop" },
  { id: 6, name: "Samsung A13 5G", price: 350, category: "samsung", imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop" },
  { id: 7, name: "Samsung A16 4G", price: 350, category: "samsung", imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop" },
  { id: 8, name: "Samsung A16 5G", price: 350, category: "samsung", imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop" },
  { id: 9, name: "Samsung A24", price: 400, category: "samsung", imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop" },
  { id: 10, name: "Samsung A53 5G", price: 500, category: "samsung", imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&auto=format&fit=crop" },

  { id: 11, name: "iPhone 11", price: 450, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
  { id: 12, name: "iPhone 11 Pro", price: 550, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
  { id: 13, name: "iPhone 11 Pro Max", price: 600, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
  { id: 14, name: "iPhone 12", price: 450, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
  { id: 15, name: "iPhone 12 Pro", price: 550, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
  { id: 16, name: "iPhone 12 Pro Max", price: 600, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
  { id: 17, name: "iPhone 12 Mini", price: 400, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
  { id: 18, name: "iPhone 13", price: 450, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
  { id: 19, name: "iPhone 13 Pro", price: 550, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
  { id: 20, name: "iPhone 13 Pro Max", price: 600, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
  { id: 21, name: "iPhone 13 Mini", price: 400, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
  { id: 22, name: "iPhone 14", price: 500, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
  { id: 23, name: "iPhone 14 Pro", price: 600, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
  { id: 24, name: "iPhone 14 Plus", price: 550, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
  { id: 25, name: "iPhone 15", price: 550, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
  { id: 26, name: "iPhone 15 Pro", price: 700, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
  { id: 27, name: "iPhone 15 Pro Max", price: 750, category: "iphone", imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&auto=format&fit=crop" },
];
