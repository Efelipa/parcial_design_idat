// data.js

export const categorias = [
    { id: 1, nombre: "Todos", slug: "todos" },
    { id: 2, nombre: "Entradas", slug: "entradas" },
    { id: 3, nombre: "Platos Fuertes", slug: "platos-fuertes" },
    { id: 4, nombre: "Bebidas", slug: "bebidas" },
    { id: 5, nombre: "Postres", slug: "postres" }
];

export const productos = [
    {
        id: 101,
        nombre: "Ceviche de la Casa",
        categoria: "entradas",
        precio: 18.00,
        popular: true,
        rating: 4.7,
        votos: 112,
        imagen: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Imagen actualizada
        descripcion: "Pescado fresco marinado en limón sutil con cebolla roja y ají."
    },
    {
        id: 102,
        nombre: "Lomo Saltado",
        categoria: "platos-fuertes",
        precio: 22.50,
        popular: true,
        rating: 4.8,
        votos: 25,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm19xNwEX6jprPYwki3o26h9YtE_70EuMwcw&s",
        descripcion: "Finos trozos de lomo saltados al wok con cebolla y tomate."
    },
    {
        id: 103,
        nombre: "Pescado a la Plancha",
        categoria: "platos-fuertes",
        precio: 22.50,
        popular: false,
        rating: 4.7,
        votos: 55,
        imagen: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=500",
        descripcion: "Filete de pescado del día acompañado de vegetales al vapor."
    },
    {
        id: 104,
        nombre: "Laria Gola",
        categoria: "postres",
        precio: 11.00,
        popular: true,
        rating: 4.9,
        votos: 72,
        imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=500",
        descripcion: "Delicioso postre artesanal con frutos del bosque."
    },
    {
        id: 105,
        nombre: "Limonada Hierbabuena",
        categoria: "bebidas",
        precio: 8.50,
        popular: false,
        rating: 4.5,
        votos: 40,
        imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500",
        descripcion: "Refrescante limonada natural con toques de hierbabuena fresca."
    },
    {
        id: 106,
        nombre: "Tallarines Verdes",
        categoria: "platos-fuertes",
        precio: 19.00,
        popular: false,
        rating: 4.6,
        votos: 88,
        imagen: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=500",
        descripcion: "Pasta en salsa de albahaca y espinaca con filete de res."
    }
];