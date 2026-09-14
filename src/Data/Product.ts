export interface Product {
    id: number;
    name: string;
    category: string;
    originalPrice:number;
    price: number;
    description: string;
    image: string;
    badge ?:string;
}

export interface CartItem extends Product{
    quantity:number;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Floral Cotton Midi Dress",
        category: "women",
        originalPrice:1500,
        price: 1000,
        description: "A soft and comfortable cotton dress designed for effortless everyday style.",
        image: "https://themewagon.github.io/cozastore/images/product-04.jpg",
        badge:"HOT DEAL"
    },
    {
        id: 2,
        name: "Stretch Cotton Casual Shirt",
        category: "women",
         originalPrice:1600,
        price: 1200,
        description: "A stylish stretch-cotton shirt offering a comfortable fit for everyday wear.",
        image: "https://themewagon.github.io/cozastore/images/product-07.jpg"
    }, {
        id: 3,
        name: "Classic Casual Shirt",
        category: "men",
         originalPrice:1400,
        price: 1000,
        description: "A versatile casual shirt with a clean design, perfect for relaxed everyday looks.",
        image: "https://levi.in/cdn/shop/files/004JH0141_01_Styleshot.jpg?v=1786121712"
    },
    {
        id: 4,
        name: "Front Pocket Casual Jumper",
        category: "women",
         originalPrice:1900,
        price: 1450,
        description: "A cozy jumper featuring a practical front pocket and a relaxed everyday fit.",
        image: "https://themewagon.github.io/cozastore/images/product-05.jpg",
         badge:"NEW ARRIVAL"
    }, {
        id: 5,
        name: "Classic Formal Shirt",
        category: "women",
         originalPrice:1200,
        price: 800,
        description: "A polished formal shirt with a timeless design, ideal for work and smart occasions.",
        image: "https://themewagon.github.io/cozastore/images/product-02.jpg"
    }, {
        id: 6,
        name: "Classic Grey Cotton Trousers",
        category: "men",
         originalPrice:1100,
        price: 800,
        description: "Comfortable grey cotton trousers designed with a clean look for everyday styling.",
        image: "https://saadaa.in/cdn/shop/files/1_f1b4a53d-88cc-4d3b-996f-f7dc74925dc9.jpg?v=1756386028&width=500"
    }, {
        id: 7,
        name: "Striped Cotton T-Shirt",
        category: "women",
         originalPrice:1000,
        price: 750,
        description: "A lightweight striped T-shirt made for comfortable and effortless casual outfits.",
        image: "https://themewagon.github.io/cozastore/images/product-10.jpg",
        badge:"NEW ARRIVAL"
    }, {
        id: 8,
        name: "Men's Striped Casual T-Shirt",
        category: "men",
         originalPrice:1200,
        price: 900,
        description: "A relaxed striped T-shirt that adds a timeless touch to casual everyday looks.",
        image: "https://themewagon.github.io/cozastore/images/product-03.jpg"
    },
    {
        id: 9,
        name: "Metallic Printed Top",
        category: "women",
         originalPrice:1000,
        price: 700,
        description: "A statement printed top with a subtle metallic finish for a stylish modern look.",
        image: "https://themewagon.github.io/cozastore/images/product-08.jpg"

    }, {
        id: 10,
        name: "Square Neck Backless Top",
        category: "women",
         originalPrice:1200,
        price: 900,
        description: "A contemporary square-neck top featuring an elegant back design for a chic look.",
        image: "https://themewagon.github.io/cozastore/images/product-16.jpg",
        badge:"HOT DEAL"

    }, {
        id: 11,
        name: "Slim Fit Down Collar Shirt",
        category: "men",
         originalPrice:1500,
        price: 1100,
        description: "A smart slim-fit shirt with a classic collar, perfect for casual and semi-formal occasions.",
        image: "https://themewagon.github.io/cozastore/images/product-11.jpg",
        badge:"HOT DEAL"

    }, {
        id: 12,
        name: "Short Sleeve Casual T-Shirt",
        category: "women",
         originalPrice:1500,
        price: 1200,
        description: "A comfortable short-sleeve T-shirt designed for easy styling and everyday wear.",
        image: "https://themewagon.github.io/cozastore/images/product-13.jpg"

    }, {
        id: 13,
        name: "cotton striped formal shirt",
        category: "men",
         originalPrice:2300,
        price: 1900,
        description: "A refined striped cotton shirt that combines classic styling with all-day comfort.",
        image: "https://media.mango.com/is/image/punto/37031402-52-002?wid=640"

    }, {
        id: 14,
        name: "Classic Striped Casual Top",
        category: "women",
         originalPrice:1900,
        price: 1500,
        description: "A timeless striped top with a relaxed silhouette, perfect for effortless everyday outfits.",
        image: "https://themewagon.github.io/cozastore/images/product-14.jpg",
        badge:"HOT DEAL"

    }, {
        id: 15,
        name: "Elegant Co-Ord Set",
        category: "women",
         originalPrice:2500,
        price: 2000,
        description: "A coordinated two-piece set designed to create a stylish and effortless outfit.",
        image: "https://img.tatacliq.com/images/i32/437Wx649H/MP000000031765571_437Wx649H_202607181742001.jpeg"

    }, {
        id: 16,
        name: "Solid A-Line Dress",
        category: "women",
         originalPrice:2200,
        price: 1800,
        description: "A flattering A-line dress with a clean solid finish, perfect for versatile everyday styling.",
        image: "https://img.tatacliq.com/images/i32/437Wx649H/MP000000031823982_437Wx649H_202607261206431.jpeg"

    }, {
        id: 17,
        name: "Slim fit Cotton T-shirt",
        category: "men",
         originalPrice:2000,
        price: 1700,
        description: "A soft cotton T-shirt with a modern slim fit, ideal for comfortable everyday outfits.",
        image: "https://img.tatacliq.com/images/i29/437Wx649H/MP000000029765469_437Wx649H_202601141320451.jpeg"

    }, {
        id: 18,
        name: "Classic Blue Cotton Jeans",
        category: "men",
         originalPrice:3000,
        price: 2500,
        description: "Classic blue jeans made from comfortable cotton fabric for a timeless everyday look.",
        image: "https://img.tatacliq.com/images/i31/437Wx649H/MP000000030936259_437Wx649H_202605010253481.jpeg"

    }, {
        id: 19,
        name: "Solid Slim Fit Trousers",
        category: "men",
         originalPrice:2000,
        price: 1600,
        description: "Modern slim-fit trousers with a clean solid finish, perfect for smart casual styling.",
        image: "https://img.tatacliq.com/images/i29/437Wx649H/MP000000029765482_437Wx649H_202601141321121.jpeg"

    }

]

