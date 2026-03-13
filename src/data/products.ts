export type Product = {
  slug: string;
  name: string;
  priceRange: string;
  description: string;
  images: string[];
};

export const products: Product[] = [
  {
    slug: "green-tea",
    name: "Premium Green Tea",
    priceRange: "$200 - $300",
    description: "Experience the fresh, vegetal notes of our premium Green Tea. Harvested early in the spring to preserve the delicate antioxidants and vibrant green color, our selection includes famous varieties like Longjing (Dragon Well) and Biluochun. Perfect for daily consumption, this tea offers a refreshing taste with a sweet aftertaste.",
    images: ["/images/products/green-tea-1.png"],
  },
  {
    slug: "black-tea",
    name: "Classic Black Tea",
    priceRange: "$200 - $300",
    description: "Our Classic Black Tea is fully fermented, offering a robust and bold flavor profile. Sourced from high-altitude gardens, it features rich malty notes with hints of chocolate and fruit. Ideal for breakfast or afternoon tea, it pairs perfectly with milk and sugar or can be enjoyed plain for a pure taste.",
    images: ["/images/products/black-tea-1.png"],
  },
  {
    slug: "oolong-tea",
    name: "Oolong Tea",
    priceRange: "$200 - $300",
    description: "Oolong Tea is a semi-fermented masterpiece, striking a perfect balance between the freshness of green tea and the richness of black tea. Our collection ranges from floral Tieguanyin to the roasted depth of Da Hong Pao (Big Red Robe). Each cup reveals complex layers of orchid, honey, and mineral flavors.",
    images: ["/images/products/oolong-tea-1.png"],
  },
  {
    slug: "white-tea",
    name: "White Tea",
    priceRange: "$200 - $300",
    description: "Renowned for its minimal processing, White Tea retains the natural sweetness and delicate aroma of the tea bud. Our selection includes Silver Needle and White Peony, offering a subtle, hay-like flavor with a smooth mouthfeel. It is high in antioxidants and low in caffeine.",
    images: ["/images/products/white-tea-1.png"],
  },
  {
    slug: "puerh-tea",
    name: "Pu-erh Tea",
    priceRange: "$200 - $300",
    description: "Aged to perfection, our Pu-erh Tea offers a unique, earthy flavor profile that deepens with time. Available in both Raw (Sheng) and Ripe (Shou) varieties, it is prized for its digestive benefits and smooth, mellow taste. A true collector's tea that improves with age.",
    images: ["/images/products/puerh-tea-1.png"],
  },
  {
    slug: "blooming-tea",
    name: "Blooming Tea",
    priceRange: "$200 - $300",
    description: "Turn your tea time into a visual spectacle with our Blooming Tea. Hand-tied tea leaves wrap around vibrant dried flowers, slowly unfurling into a beautiful bouquet when steeped in hot water. Mild and floral in taste, it is perfect for glass teapots and special occasions.",
    images: ["/images/products/blooming-tea-1.png"],
  },
  {
    slug: "ceramic-tea-sets",
    name: "Ceramic Tea Sets",
    priceRange: "$500 - $3,000",
    description: "Elevate your tea ceremony with our exquisite Ceramic Tea Sets. Crafted from high-quality porcelain and ceramic, these sets are designed for both beauty and function. Available in various styles, from traditional blue and white patterns to modern minimalist designs, they are perfect for hosting guests.",
    images: [
      "/images/products/ceramic-set-1.png",
      "/images/products/ceramic-set-2.png",
      "/images/products/ceramic-set-3.png",
    ],
  },
  {
    slug: "purple-clay-tea-sets",
    name: "Purple Clay (Zisha) Tea Sets",
    priceRange: "$500 - $3,000",
    description: "Authentic Yixing Purple Clay (Zisha) tea sets are the gold standard for Gongfu tea brewing. The unglazed clay absorbs the tea's essential oils over time, enhancing the flavor of future brews. Each pot is a work of art, hand-finished by skilled artisans.",
    images: [
      "/images/products/purple-clay-set-1.png",
      "/images/products/purple-clay-set-2.png",
    ],
  },
  {
    slug: "glass-tea-sets",
    name: "Glass Tea Sets",
    priceRange: "$500 - $3,000",
    description: "Modern and elegant, our Glass Tea Sets are perfect for showcasing the color of your tea liquor, especially blooming teas and green teas. Made from heat-resistant borosilicate glass, they are durable and easy to clean, adding a touch of sophistication to any table.",
    images: [
      "/images/products/glass-set-1.png",
      "/images/products/glass-set-2.png",
    ],
  },
  {
    slug: "tea-trays",
    name: "Bamboo & Wooden Tea Trays",
    priceRange: "$500 - $3,000",
    description: "The foundation of a Gongfu tea setup, our Bamboo and Wooden Tea Trays provide a dedicated space for brewing. Designed with drainage systems to catch excess water, they are crafted from sustainable bamboo or premium hardwoods, combining practicality with natural beauty.",
    images: [
      "/images/products/tea-tray-1.png",
      "/images/products/tea-tray-2.png",
      "/images/products/tea-tray-3.png",
    ],
  },
  {
    slug: "tea-tools",
    name: "Tea Accessories & Tools",
    priceRange: "$500 - $3,000",
    description: "Complete your tea experience with our professional Tea Accessories. This collection includes bamboo scoops, tongs, needles, and strainers – everything you need for the traditional Gongfu brewing method. Essential tools for any serious tea enthusiast.",
    images: ["/images/products/tea-tools-1.png"],
  },
  {
    slug: "gift-sets",
    name: "Premium Gift Boxes",
    priceRange: "$500 - $3,000",
    description: "The perfect gift for business partners or loved ones. Our Premium Gift Boxes combine our finest teas with matching teaware, beautifully packaged in elegant boxes. Customizable options are available for corporate orders.",
    images: [
      "/images/products/gift-set-1.png",
      "/images/products/gift-set-2.png",
    ],
  },
];
