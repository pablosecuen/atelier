import { v4 as uuidv4 } from 'uuid';



export const products = [
  {
    title: "Remera Azul",
    handle: "remera-azul",
    slug: "remera-azul",
    price: 25.99,
    category: "Remeras",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Una hermosa remera azul para hombres.",
    selectedProducts: [],
  },
  {
    title: "Camisa a Cuadros",
    handle: "camisa-a-cuadros",
    slug: "camisa-a-cuadros",
    price: 34.99,
    category: "Camisas",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Una elegante camisa a cuadros para hombres.",
    selectedProducts: [],
  },
  {
    title: "Polo Rojo",
    handle: "polo-rojo",
    slug: "polo-rojo",
    price: 29.99,
    category: "Polos",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Un elegante polo rojo para hombres.",
    selectedProducts: [],
  },
  {
    title: "Sweater de Lana",
    handle: "sweater-lana",
    slug: "sweater-lana",
    price: 39.99,
    category: "Sweaters",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Un cálido sweater de lana para el invierno.",
    selectedProducts: [],
  },
  {
    title: "Vestido Floral",
    handle: "vestido-floral",
    slug: "vestido-floral",
    price: 49.99,
    category: "Vestidos",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Un hermoso vestido floral para ocasiones especiales.",
    selectedProducts: [],
  },
  {
    title: "Polo Rojo",
    handle: "polo-rojo",
    slug: "polo-rojo",
    price: 29.99,
    category: "Polos",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Un elegante polo rojo para hombres.",
    selectedProducts: [],
  },
  {
    title: "Sweater de Lana",
    handle: "sweater-lana",
    slug: "sweater-lana",
    price: 39.99,
    category: "Sweaters",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "/atelier/public/assets/product.webp",
    selectedProducts: [],
  },
  {
    title: "Vestido Floral",
    handle: "vestido-floral",
    slug: "vestido-floral",
    price: 49.99,
    category: "Vestidos",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Un hermoso vestido floral para ocasiones especiales.",
    selectedProducts: [],
  },
  {
    title: "Jeans Clásicos",
    handle: "jeans-clasicos",
    slug: "jeans-clasicos",
    price: 49.99,
    category: "Jeans",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Jeans clásicos para un look casual.",
    selectedProducts: [],
  },
  {
    title: "Chaqueta de Cuero",
    handle: "chaqueta-cuero",
    slug: "chaqueta-cuero",
    price: 99.99,
    category: "Chaquetas",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Una chaqueta de cuero elegante y moderna.",
    selectedProducts: [],
  },
  {
    title: "Pantalones Cortos",
    handle: "pantalones-cortos",
    slug: "pantalones-cortos",
    price: 19.99,
    category: "Pantalones",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Pantalones cortos cómodos para el verano.",
    selectedProducts: [],
  },
  {
    title: "Bufanda de Lana",
    handle: "bufanda-lana",
    slug: "bufanda-lana",
    price: 14.99,
    category: "Accesorios",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Una bufanda suave y abrigada de lana.",
    selectedProducts: [],
  },
  {
    title: "Vestido de Noche",
    handle: "vestido-noche",
    slug: "vestido-noche",
    price: 79.99,
    category: "Vestidos",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Un elegante vestido de noche para ocasiones especiales.",
    selectedProducts: [],
  },
  {
    title: "Gorra Deportiva",
    handle: "gorra-deportiva",
    slug: "gorra-deportiva",
    price: 12.99,
    category: "Accesorios",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Una gorra deportiva cómoda y elegante.",
    selectedProducts: [],
  },
  {
    title: "Pijama de Algodón",
    handle: "pijama-algodon",
    slug: "pijama-algodon",
    price: 29.99,
    category: "Pijamas",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Un pijama de algodón suave y cómodo para dormir.",
    selectedProducts: [],
  },
  {
    title: "Abrigo de Invierno",
    handle: "abrigo-invierno",
    slug: "abrigo-invierno",
    price: 69.99,
    category: "Abrigos",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Un abrigo de invierno cálido y elegante.",
    selectedProducts: [],
  },
  {
    title: "Sudadera con Capucha",
    handle: "sudadera-capucha",
    slug: "sudadera-capucha",
    price: 29.99,
    category: "Sudaderas",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Una sudadera con capucha cómoda y moderna.",
    selectedProducts: [],
  },
  {
    title: "Vestido de Verano",
    handle: "vestido-verano",
    slug: "vestido-verano",
    price: 39.99,
    category: "Vestidos",
    options: [
      {
        id: 'size', // Identificador de la opción de tamaño
        title: 'Size', // Título de la opción de tamaño
        values: ['Large', 'Extra Large', 'XXL'] // Valores disponibles para el tamaño
      },
      {
        id: 'color', // Identificador de la opción de color
        title: 'Color', // Título de la opción de color
        values: ['Green', 'Blue', 'Red'] // Valores disponibles para el color
      }
    ],
    images: [
      { id: 1, url: "/atelier/public/assets/product.webp" },
      { id: 2, url: "/atelier/public/assets/product.webp" },
    ],
    featuredImage: 1,
    id: uuidv4(),
    description: "Un ligero vestido de verano para días soleados.",
    selectedProducts: [],
  },

];





console.log(products);
