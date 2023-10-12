import { v4 as uuidv4 } from 'uuid';



export const products = [
  {
    title: "Remera Alghodon",
    handle: "remera-alghodon",
    slug: "remera-alghodon",
    category: "Remeras",
    availableForSale: true,
    
    options: [
      {
        id: 'size', 
        title: 'Size', 
        position: 1,
            values: [ 'Small', 'Medium', 'Large']
      },
      {
        id: 'color', 
        title: 'Color', 
        position: 2,
       values: ['Blue', 'Red',  'Black']
      }
    ],
    variants: [
      {
        id: uuidv4(),
        title: "S - RED",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 100,
        sku: "CAMISETA-001-S-BLANCO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'Red' },
          { title: 'Size', value: 'Small' },
           
        ],
      },
      {
        id: uuidv4(),
        title: "M - Black",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 50,
        sku: "CAMISETA-001-M-NEGRO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'Black' },
          { title: 'Size', value: 'Medium' },
           
        ],
      },
      {
        id: uuidv4(),
        title: "S - Blue",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 100,
        sku: "CAMISETA-001-S-BLANCO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'Blue' },
          { title: 'Size', value: 'Large' },
           
        ],
      },
    ],
    images: [
      { id: 1, src: "/atelier/public/assets/product.webp",  position: 1 },
      { id: 2, src: "/atelier/public/assets/product.webp",position:2 },
    ],
      featuredImage: {
      url: "/atelier/public/assets/product.webp",
      width: 800,
      height: 1200,
      alt: "Camiseta de algodón en color blanco",
      availableForSale: true,
      
    },
    id: uuidv4(),
    description: "Una hermosa remera azul para hombres.",
    descriptionHtml: "<p>Una hermosa remera azul para hombres.</p>",
      selectedVariant: [],
        seo: {
      title: "Producto de  - Atelier",
      description: "Descubre nuestra camiseta de algodón de alta calidad en varios tamaños y colores. ¡Compra la tuya hoy!",
      keywords: "camiseta, algodón, ropa, cómoda, TuMarca"
    }
   
  },
  {
    title: "Camisa a Cuadros",
    handle: "camisa-a-cuadros",
    slug: "camisa-a-cuadros",
    category: "Camisas",
    availableForSale: true,
    
    options: [
      {
        id: 'size', 
        title: 'Size', 
        values: [ 'Small', 'Medium', 'Large']
      },
      {
        id: 'color', 
        title: 'Color', 
        values: ['Blue', 'Red', 'White', 'Black']
      }
    ],
    variants: [
      {
        id: uuidv4(),
        title: "L - White",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 100,
        sku: "CAMISETA-001-S-BLANCO",
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'White' },
          { title: 'Size', value: 'Large' },
        ],
      },
      {
        id: uuidv4(),
        title: "M - Black",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 50,
        sku: "CAMISETA-001-M-NEGRO",
        quantity: 0,
        barcode: "987654321",
        availableForSale: true,
        selectedOptions: [
          { title: 'Color', value: 'Black' },
          { title: 'Size', value: 'Medium' },
          
        ],
      }
    ],
    images: [
      { id: 1, src: "/atelier/public/assets/product.webp",position:1 },
      { id: 2, src: "/atelier/public/assets/product.webp",position:2 },
    ],
      featuredImage: {
      url: "/atelier/public/assets/product.webp",
      width: 800,
      height: 1200,
      alt: "Camiseta de algodón en color blanco"
    },
    id: uuidv4(),
    description: "Una elegante camisa a cuadros para hombres.",
    descriptionHtml: "<p>Una elegante camisa a cuadros para hombres.</p>",
     selectedVariant: [],
        seo: {
      title: "Producto de  - Atelier",
      description: "Descubre nuestra camiseta de algodón de alta calidad en varios tamaños y colores. ¡Compra la tuya hoy!",
      keywords: "camiseta, algodón, ropa, cómoda, TuMarca"
    }
   
  },

  {
    title: "Polo Stretch",
    handle: "polo-stretch",
    slug: "polo-stretch",
    category: "Polos",
    availableForSale: true,
    
    options: [
      {
        id: 'size', 
        title: 'Size', 
            values: [ 'Small', 'Medium', 'Large']
      },
      {
        id: 'color', 
        title: 'Color', 
       values: ['Blue', 'Red', 'White', 'Black']
      }
    ],
    variants: [
      {
        id: uuidv4(),
        title: "S - Red",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 100,
        sku: "CAMISETA-001-S-RED",quantity: 0,
        availableForSale: true,
        
        selectedOptions: [
          { title: 'Color', value: 'Red' },
          { title: 'Size', value: 'Small' },
           
        ],
      },
      {
        id: uuidv4(),
        title: "M - Negro",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 50,
        sku: "CAMISETA-001-M-NEGRO",
        barcode: "987654321",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'Black' },
          { title: 'Size', value: 'Medium' },
           
        ],
      }
    ],
    images: [
      { id: 1, src: "/public/assets/product.webp", position:1 },
      { id: 2, src: "/atelier/public/assets/product.webp",position:2 },
    ],
      featuredImage: {
      url: "/atelier/public/assets/product.webp",
      width: 800,
      height: 1200,
      alt: "Camiseta de algodón en color blanco"
    },
    id: uuidv4(),
    description: "Un elegante polo rojo para hombres.",
    descriptionHtml: "<p>Un elegante polo rojo para hombres.</p>",
       selectedVariant: [],
        seo: {
      title: "Producto de  - Atelier",
      description: "Descubre nuestra camiseta de algodón de alta calidad en varios tamaños y colores. ¡Compra la tuya hoy!",
      keywords: "camiseta, algodón, ropa, cómoda, TuMarca"
    }
   
  },
  {
    title: "Sweater de Lana",
    handle: "sweater-lana",
    slug: "sweater-lana",
    category: "Sweaters",
    availableForSale: true,
    
    options: [
      {
        id: 'size', 
        title: 'Size', 
            values: [ 'Small', 'Medium', 'Large']
      },
      {
        id: 'color', 
        title: 'Color', 
       values: ['Blue', 'Red', 'White', 'Black']
      }
    ],
    variants: [
      {
        id: uuidv4(),
        title: "S - White",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 100,
        sku: "CAMISETA-001-S-BLANCO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'White' },
          { title: 'Size', value: 'Small' },
           
        ],
      },
      {
        id: uuidv4(),
        title: "M - Black",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 50,
        sku: "CAMISETA-001-M-NEGRO",
        availableForSale: true,    quantity: 0,
              selectedOptions: [
          { title: 'Color', value: 'Black' },
          { title: 'Size', value: 'Medium' },
           
        ],
      }
    ],
    images: [
      { id: 1, src: "/atelier/public/assets/product.webp", position:1 },
      { id: 2, src: "/atelier/public/assets/product.webp" ,position:2},
    ],
      featuredImage: {
      url: "/atelier/public/assets/product.webp",
      width: 800,
      height: 1200,
      alt: "Camiseta de algodón en color blanco"
    },
    id: uuidv4(),
    description: "/atelier/public/assets/product.webp",
    descriptionHtml: "<p>Un hermoso sweater de lana para ocasiones especiales.</p>",
       selectedVariant: [],
        seo: {
      title: "Producto de  - Atelier",
      description: "Descubre nuestra camiseta de algodón de alta calidad en varios tamaños y colores. ¡Compra la tuya hoy!",
      keywords: "camiseta, algodón, ropa, cómoda, TuMarca"
    }
   
  },
  {
    title: "Vestido Floral",
    handle: "vestido-floral",
    slug: "vestido-floral",
    category: "Vestidos",
    availableForSale: true,
    
    options: [
      {
        id: 'size', 
        title: 'Size', 
            values: [ 'Small', 'Medium', 'Large']
      },
      {
        id: 'color', 
        title: 'Color', 
       values: ['Blue', 'Red', 'White', 'Black']
      }
    ],
    variants: [
      {
        id: uuidv4(),
        title: "S - White",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 100,
        sku: "CAMISETA-001-S-BLANCO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'White' },
          { title: 'Size', value: 'Small' },
           
        ],
      },
      {
        title: "M - Black",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 50,
        sku: "CAMISETA-001-M-NEGRO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'Black' },
          { title: 'Size', value: 'Medium' },
           
        ],
      }
    ],
    images: [
      { id: 1, src: "/atelier/public/assets/product.webp", position:1 },
      { id: 2, src: "/atelier/public/assets/product.webp" ,position:2},
    ],
      featuredImage: {
      url: "/atelier/public/assets/product.webp",
      width: 800,
      height: 1200,
      alt: "Camiseta de algodón en color blanco"
    },
    id: uuidv4(),
    description: "Un hermoso vestido floral para ocasiones especiales.",
    descriptionHtml: "<p>Un hermoso vestido floral para ocasiones especiales.</p>",
    
       selectedVariant: [],
        seo: {
      title: "Producto de  - Atelier",
      description: "Descubre nuestra camiseta de algodón de alta calidad en varios tamaños y colores. ¡Compra la tuya hoy!",
      keywords: "camiseta, algodón, ropa, cómoda, TuMarca"
    }
   
  },
  {
    title: "Jeans Clásicos",
    handle: "jeans-clasicos",
    slug: "jeans-clasicos",
    category: "Jeans",
    availableForSale: true,
    
    options: [
      {
        id: 'size', 
        title: 'Size', 
            values: [ 'Small', 'Medium', 'Large']
      },
      {
        id: 'color', 
        title: 'Color', 
       values: ['Blue', 'Red', 'White', 'Black']
      }
    ],
    variants: [
      {
        id: uuidv4(),
        title: "S - White",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 100,
        sku: "CAMISETA-001-S-BLANCO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'White' },
          { title: 'Size', value: 'Small' },
           
        ],
      },
      {
        id: uuidv4(),
        title: "M - Black",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 50,
        sku: "CAMISETA-001-M-NEGRO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'Black' },
          { title: 'Size', value: 'Medium' },
           
        ],
      }
    ],
    images: [
      { id: 1, src: "/atelier/public/assets/product.webp", position:1 },
      { id: 2, src: "/atelier/public/assets/product.webp",position: 2 },
    ],
      featuredImage: {
      url: "/atelier/public/assets/product.webp",
      width: 800,
      height: 1200,
      alt: "Camiseta de algodón en color blanco"
    },
    id: uuidv4(),
    description: "Jeans clásicos para un look casual.",
    descriptionHtml: "<p>Jeans clásicos para un look casual.</p>",
       selectedVariant: [],
        seo: {
      title: "Producto de  - Atelier",
      description: "Descubre nuestra camiseta de algodón de alta calidad en varios tamaños y colores. ¡Compra la tuya hoy!",
      keywords: "camiseta, algodón, ropa, cómoda, TuMarca"
    }
   
  },
  {
    title: "Chaqueta de Cuero",
    handle: "chaqueta-cuero",
    slug: "chaqueta-cuero",
    category: "Chaquetas",
    availableForSale: true,
    
    options: [
      {
        id: 'size', 
        title: 'Size', 
            values: [ 'Small', 'Medium', 'Large']
      },
      {
        id: 'color', 
        title: 'Color', 
       values: ['Blue', 'Red', 'White', 'Black']
      }
    ],
    variants: [
      {
        id: uuidv4(),
        title: "S - White",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 100,
        sku: "CAMISETA-001-S-BLANCO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'White' },
          { title: 'Size', value: 'Small' },
           
        ],
      },
      {
        id: uuidv4(),
        title: "M - Black",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 50,
        sku: "CAMISETA-001-M-NEGRO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'Black' },
          { title: 'Size', value: 'Medium' },
           
        ],
      }
    ],
    images: [
      { id: 1, src: "/atelier/public/assets/product.webp", position:1 },
      { id: 2, src: "/atelier/public/assets/product.webp" , position:2},
    ],
      featuredImage: {
      url: "/atelier/public/assets/product.webp",
      width: 800,
      height: 1200,
      alt: "Camiseta de algodón en color blanco"
    },
    id: uuidv4(),
    description: "Una chaqueta de cuero elegante y moderna.",
    descriptionHtml: "<p>Una chaqueta de cuero elegante y moderna.</p>",
       selectedVariant: [],
        seo: {
      title: "Producto de  - Atelier",
      description: "Descubre nuestra camiseta de algodón de alta calidad en varios tamaños y colores. ¡Compra la tuya hoy!",
      keywords: "camiseta, algodón, ropa, cómoda, TuMarca"
    }
   
  },
  {
    title: "Pantalones Cortos",
    handle: "pantalones-cortos",
    slug: "pantalones-cortos",
    category: "Pantalones",
    availableForSale: true,
    
    options: [
      {
        id: 'size', 
        title: 'Size', 
            values: [ 'Small', 'Medium', 'Large']
      },
      {
        id: 'color', 
        title: 'Color', 
       values: ['Blue', 'Red', 'White', 'Black']
      }
    ],
    variants: [
      {
        id: uuidv4(),
        title: "S - White",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 100,
        sku: "CAMISETA-001-S-BLANCO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'White' },
          { title: 'Size', value: 'Small' },
           
        ],
      },
      {
        id: uuidv4(),
        title: "M - Black",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 50,
        sku: "CAMISETA-001-M-NEGRO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'Black' },
          { title: 'Size', value: 'Medium' },
           
        ],
      }
    ],
    images: [
      { id: 1, src: "/atelier/public/assets/product.webp", position:1 },
      { id: 2, src: "/atelier/public/assets/product.webp",position:2 },
    ],
      featuredImage: {
      url: "/atelier/public/assets/product.webp",
      width: 800,
      height: 1200,
      alt: "Camiseta de algodón en color blanco"
    },
    id: uuidv4(),
    description: "Pantalones cortos cómodos para el verano.",
    descriptionHtml: "<p>Pantalones cortos cómodos para el verano.</p>",
       selectedVariant: [],
        seo: {
      title: "Producto de  - Atelier",
      description: "Descubre nuestra camiseta de algodón de alta calidad en varios tamaños y colores. ¡Compra la tuya hoy!",
      keywords: "camiseta, algodón, ropa, cómoda, TuMarca"
    }
   
  },
  {
    title: "Bufanda de Lana",
    handle: "bufanda-lana",
    slug: "bufanda-lana",
    category: "Accesorios",
    availableForSale: true,
    options: [
      {
        id: 'size', 
        title: 'Size', 
            values: [ 'Small', 'Medium', 'Large']
      },
      {
        id: 'color', 
        title: 'Color', 
       values: ['Blue', 'Red', 'White', 'Black']
      }
    ],
    variants: [
      {
        id: uuidv4(),
        title: "S - White",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 100,
        sku: "CAMISETA-001-S-BLANCO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'White' },
          { title: 'Size', value: 'Small' },
           
        ],
      },
      {
        id: uuidv4(),
        title: "M - Black",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 50,
        sku: "CAMISETA-001-M-NEGRO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'Black' },
          { title: 'Size', value: 'Medium' },
           
        ],
      }
    ],
    images: [
      { id: 1, src: "/atelier/public/assets/product.webp", position:1 },
      { id: 2, src: "/atelier/public/assets/product.webp",position:2 },
    ],
      featuredImage: {
      url: "/atelier/public/assets/product.webp",
      width: 800,
      height: 1200,
      alt: "Camiseta de algodón en color blanco"
    },
    id: uuidv4(),
    description: "Una bufanda suave y abrigada de lana.",
    descriptionHtml: "<p>Una bufanda suave y abrigada de lana.</p>",
       selectedVariant: [],
        seo: {
      title: "Producto de  - Atelier",
      description: "Descubre nuestra camiseta de algodón de alta calidad en varios tamaños y colores. ¡Compra la tuya hoy!",
      keywords: "camiseta, algodón, ropa, cómoda, TuMarca"
    }
   
  },
  {
    title: "Vestido de Noche",
    handle: "vestido-noche",
    slug: "vestido-noche",
    category: "Vestidos",
    availableForSale: true,
    
    options: [
      {
        id: 'size', 
        title: 'Size', 
            values: [ 'Small', 'Medium', 'Large']
      },
      {
        id: 'color', 
        title: 'Color', 
       values: ['Blue', 'Red', 'White', 'Black']
      }
    ],
    variants: [
      {
        id: uuidv4(),
        title: "S - White",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 100,
        sku: "CAMISETA-001-S-BLANCO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'White' },
          { title: 'Size', value: 'Small' },
           
        ],
      },
      {
        id: uuidv4(),
        title: "M - Black",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 50,
        sku: "CAMISETA-001-M-NEGRO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'Black' },
          { title: 'Size', value: 'Medium' },
           
        ],
      }
    ],
    images: [
      { id: 1, src: "/atelier/public/assets/product.webp", position:1 },
      { id: 2, src: "/atelier/public/assets/product.webp" ,position:2},
    ],
      featuredImage: {
      url: "/atelier/public/assets/product.webp",
      width: 800,
      height: 1200,
      alt: "Camiseta de algodón en color blanco"
    },
    id: uuidv4(),
    description: "Un elegante vestido de noche para ocasiones especiales.",
    descriptionHtml: "<p>Un elegante vestido de noche para ocasiones especiales.</p>",
       selectedVariant: [],
        seo: {
      title: "Producto de  - Atelier",
      description: "Descubre nuestra camiseta de algodón de alta calidad en varios tamaños y colores. ¡Compra la tuya hoy!",
      keywords: "camiseta, algodón, ropa, cómoda, TuMarca"
    }
   
  },
  {
    title: "Gorra Deportiva",
    handle: "gorra-deportiva",
    slug: "gorra-deportiva",
    category: "Accesorios",
    availableForSale: true,
    
    options: [
      {
        id: 'size', 
        title: 'Size', 
            values: [ 'Small', 'Medium', 'Large']
      },
      {
        id: 'color', 
        title: 'Color', 
       values: ['Blue', 'Red', 'White', 'Black']
      }
    ],
    variants: [
      {
        id: uuidv4(),
        title: "S - White",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 100,
        sku: "CAMISETA-001-S-BLANCO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'White' },
          { title: 'Size', value: 'Small' },
           
        ],
      },
      {
        id: uuidv4(),
        title: "M - Black",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 50,
        sku: "CAMISETA-001-M-NEGRO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'Black' },
          { title: 'Size', value: 'Medium' },
           
        ],
      }
    ],
    images: [
      { id: 1, src: "/atelier/public/assets/product.webp", position:1 },
      { id: 2, src: "/atelier/public/assets/product.webp",position:2 },
    ],
      featuredImage: {
      url: "/atelier/public/assets/product.webp",
      width: 800,
      height: 1200,
      alt: "Camiseta de algodón en color blanco"
    },
    id: uuidv4(),
    description: "Una gorra deportiva cómoda y elegante.",
    descriptionHtml: "<p>Una gorra deportiva cómoda y elegante.</p>",
       selectedVariant: [],
        seo: {
      title: "Producto de  - Atelier",
      description: "Descubre nuestra camiseta de algodón de alta calidad en varios tamaños y colores. ¡Compra la tuya hoy!",
      keywords: "camiseta, algodón, ropa, cómoda, TuMarca"
    }
   
  },
  {
    title: "Pijama de Algodón",
    handle: "pijama-algodon",
    slug: "pijama-algodon",
    category: "Pijamas",
    availableForSale: true,
    
    options: [
      {
        id: 'size', 
        title: 'Size', 
            values: [ 'Small', 'Medium', 'Large']
      },
      {
        id: 'color', 
        title: 'Color', 
       values: ['Blue', 'Red', 'White', 'Black']
      }
    ],
    variants: [
      {
        id: uuidv4(),
        title: "S - White",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 100,
        sku: "CAMISETA-001-S-BLANCO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'White' },
          { title: 'Size', value: 'Small' },
           
        ],
      },
      {
        id: uuidv4(),
        title: "M - Black",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 50,
        sku: "CAMISETA-001-M-NEGRO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'Black' },
          { title: 'Size', value: 'Medium' },
           
        ],
      }
    ],
    images: [
      { id: 1, src: "/atelier/public/assets/product.webp", position:1 },
      { id: 2, src: "/atelier/public/assets/product.webp",position:2 },
    ],
      featuredImage: {
      url: "/atelier/public/assets/product.webp",
      width: 800,
      height: 1200,
      alt: "Camiseta de algodón en color blanco"
    },
    id: uuidv4(),
    description: "Un pijama de algodón suave y cómodo para dormir.",
    descriptionHtml: "<p>Un pijama de algodón suave y cómodo para dormir.</p>",
       selectedVariant: [],
        seo: {
      title: "Producto de  - Atelier",
      description: "Descubre nuestra camiseta de algodón de alta calidad en varios tamaños y colores. ¡Compra la tuya hoy!",
      keywords: "camiseta, algodón, ropa, cómoda, TuMarca"
    }
   
  },
  {
    title: "Abrigo de Invierno",
    handle: "abrigo-invierno",
    slug: "abrigo-invierno",
    category: "Abrigos",
    availableForSale: true,
    
    options: [
      {
        id: 'size', 
        title: 'Size', 
            values: [ 'Small', 'Medium', 'Large']
      },
      {
        id: 'color', 
        title: 'Color', 
       values: ['Blue', 'Red', 'White', 'Black']
      }
    ],
    variants: [
      {
        id: uuidv4(),
        title: "S - White",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 100,
        sku: "CAMISETA-001-S-BLANCO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'White' },
          { title: 'Size', value: 'Small' },
           
        ],
      },
      {
        id: uuidv4(),
        title: "M - Black",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 50,
        sku: "CAMISETA-001-M-NEGRO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'Black' },
          { title: 'Size', value: 'Medium' },
           
        ],
      }
    ],
    images: [
      { id: 1, src: "/atelier/public/assets/product.webp", position:1 },
      { id: 2, src: "/atelier/public/assets/product.webp" ,position:2},
    ],
      featuredImage: {
      url: "/atelier/public/assets/product.webp",
      width: 800,
      height: 1200,
      alt: "Camiseta de algodón en color blanco"
    },
    id: uuidv4(),
    description: "Un abrigo de invierno cálido y elegante.",
    descriptionHtml: "<p>Un abrigo de invierno cálido y elegante.</p>",
       selectedVariant: [],
        seo: {
      title: "Producto de  - Atelier",
      description: "Descubre nuestra camiseta de algodón de alta calidad en varios tamaños y colores. ¡Compra la tuya hoy!",
      keywords: "camiseta, algodón, ropa, cómoda, TuMarca"
    }
   
  },
  {
    title: "Sudadera con Capucha",
    handle: "sudadera-capucha",
    slug: "sudadera-capucha",
    category: "Sudaderas",
    availableForSale: true,
    
    options: [
      {
        id: 'size', 
        title: 'Size', 
        values: [ 'Small', 'Medium', 'Large']
      },
      {
        id: 'color', 
        title: 'Color', 
       values: ['Blue', 'Red', 'White', 'Black']
      }
    ],
    variants: [
      {
        id: uuidv4(),
        title: "S - White",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 100,
        sku: "CAMISETA-001-S-BLANCO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'White' },
          { title: 'Size', value: 'Small' },
           
        ],
      },
      {
        id: uuidv4(),
        title: "M - Black",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 50,
        sku: "CAMISETA-001-M-NEGRO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'Black' },
          { title: 'Size', value: 'Medium' },
           
        ],
      }
    ],
    images: [
      { id: 1, src: "/atelier/public/assets/product.webp", position:1 },
      { id: 2, src: "/atelier/public/assets/product.webp" ,position:2},
    ],
      featuredImage: {
      url: "/atelier/public/assets/product.webp",
      width: 800,
      height: 1200,
      alt: "Camiseta de algodón en color blanco"
    },
    id: uuidv4(),
    description: "Una sudadera con capucha cómoda y moderna.",
    descriptionHtml: "<p>Una sudadera con capucha cómoda y moderna.</p>",
       selectedVariant: [],
        seo: {
      title: "Producto de  - Atelier",
      description: "Descubre nuestra camiseta de algodón de alta calidad en varios tamaños y colores. ¡Compra la tuya hoy!",
      keywords: "camiseta, algodón, ropa, cómoda, TuMarca"
    }
   
  },
  {
    title: "Vestido de Verano",
    handle: "vestido-verano",
    slug: "vestido-verano",
    category: "Vestidos",
    availableForSale: true,
    
    options: [
      {
        id: 'size', 
        title: 'Size', 
         values: [ 'Small', 'Medium', 'Large']
      },
      {
        id: 'color', 
        title: 'Color', 
        values: ['Blue', 'Red', 'White', 'Black'] 
      }
    ],
    variants: [
      {
        id: uuidv4(),
        title: "S - White",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 100,
        sku: "CAMISETA-001-S-BLANCO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'White' },
          { title: 'Size', value: 'Small' },
           
        ],
      },
      {
        id: uuidv4(),
        title: "M - Black",
        price: 19.99,
        compare_at_price: "29.99",
        inventory_policy: "continue",
        inventory_quantity: 50,
        sku: "CAMISETA-001-M-NEGRO",
        availableForSale: true,
        quantity: 0,
        selectedOptions: [
          { title: 'Color', value: 'Black' },
          { title: 'Size', value: 'Medium' },
           
        ],
      }
    ],
    images: [
      { id: 1, src: "/atelier/public/assets/product.webp", position:1 },
      { id: 2, src: "/atelier/public/assets/product.webp", position:2 },
    ],
      featuredImage: {
      url: "/atelier/public/assets/product.webp",
      width: 800,
      height: 1200,
      alt: "Camiseta de algodón en color blanco"
    },
    id: uuidv4(),
    description: "Un ligero vestido de verano para días soleados.",
    descriptionHtml: "<p>Un ligero vestido de verano para días soleados.</p>",
       selectedVariant: [],
        seo: {
      title: "Producto de  - Atelier",
      description: "Descubre nuestra camiseta de algodón de alta calidad en varios tamaños y colores. ¡Compra la tuya hoy!",
      keywords: "camiseta, algodón, ropa, cómoda, TuMarca"
    }

  },

];






