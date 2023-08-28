const products = [
    {
        name: "iPhone 12",
        price: 40,
        img: "iphone.jpeg"
    },
    {
        name: "Galaxy AS 1",
        price: 20
    },
    {
        name: "Nokia",
        price: 5
    },
    {
        name: "Sony",
        price: 10
    }
];

let cart = [

];


console.log(products);

const productsDiv = document.getElementById("products");
const cartDiv = document.getElementById("cart");

function create(name){
    const item = document.createElement("div");
    item.setAttribute("class", name);
    return item;
}

function updateProduct(){
    productsDiv.innerHTML = "";
    products.forEach(product=>{
        const productItem = create("product");
        const productName = create("name");
        const productPrice = create("price");

        const productButton = document.createElement("button");
        productButton.setAttribute("type", "button");
        productButton.textContent = "Add to Cart";
        productButton.onclick= ()=>{
            cart.push(product);
            console.log(cart);
            updateCart();
        };

        productName.textContent = product.name;
        productPrice.textContent = product.price;
        
        productItem.appendChild(productName);
        
        if (product.img){
            const productImg = document.createElement("img");
            productImg.setAttribute("src", `images/${product.img}`)
            productItem.appendChild(productImg);
        }

        productItem.appendChild(productPrice);
        productPrice.appendChild(productButton);

        productsDiv.appendChild(productItem);
    });
}

function updateCart(){
    cartDiv.innerHTML = "";
    cart.forEach(cartProduct=>{
        const product = document.createElement("div");
        product.textContent = cartProduct.name + " " + cartProduct.price;
        cartDiv.appendChild(product);
        const removeButton = document.createElement("button");
        removeButton.setAttribute("type", "button");
        removeButton.textContent="X";
        removeButton.onclick = ()=>{
            cart = cart.filter(item=>item.name !== cartProduct.name);
            updateCart();
        }
        product.appendChild(removeButton);
    })
}

function addProduct(){
    console.log("inside add product");
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    console.log("inside add product", name, price);

    products.push({
        name: name,
        price: Number(price)
    })
    console.log(products);
    
    updateProduct();
}


updateProduct();