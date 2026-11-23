async function fetchProducts() {
    const response = await fetch("https://cst3144-cw1-backend-cpiz.onrender.com/collection/products");


    if (!response.ok) {
        throw new Error(`Could not load products (HTTP ${response.status}).`);
    }

    const products = await response.json();

    if (!Array.isArray(products)) {
        throw new Error("The products API must return an array.");
    }

    return products;
}
