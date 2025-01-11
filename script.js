const products = {
   tv: [
    {name: 'Tv Samsung 40', imageUrl: './images/samsung.jpeg', price: '1800,00' },
    {name: 'Tv Philco 32', imageUrl: './images/philco.jpeg', price: '1200,00'}
   ],
   cellphone: ['iPhone', 'Samsung'],
   notebook: ['Acer', 'Lenovo'],
};

function showProducts(){
    const categorySelect = document.getElementById('categorySelect');
    const productList = document.getElementById('productList');
    const selectedCategory = categorySelect.value;
    let sum = 0;

    if(selectedCategory){
        productList.innerHTML ='';
        products[selectedCategory].forEach(product => {
            const productItem = document.createElement('div');
            const productImage = document.createElement('img');
            const productName = document.createElement('p');

            productImage.src = product.imageUrl;
            productImage.alt = product.name;
            productImage.style.width = '100px';
            productImage.addEventListener('click', () => addToCart(product));

            productName.textContent = product.name;


            productItem.appendChild(productImage);
            productItem.appendChild(productName);
            productList.appendChild(productItem);
           
        });

        productList.style.display = 'block';
    }else{
        productList.style.display = 'none';
    }
};

let sum = 0;

function addToCart(product){
    const cartItems = document.getElementById('cartItems');
    const cartItem = document.createElement('li');
    const itemInfo = document.createElement('span');
    const button = document.createElement('button');
    const price = parseFloat(product.price.replace(',', '.'));
    sum += price;

    itemInfo.textContent = `R$${product.name} - R$${product.price}`;
    button.textContent = `Remove from cart`;
    button.addEventListener('click', () => {
        removeFromCart(cartItem, price);
    });

    

    cartItems.appendChild(cartItem);
    cartItem.appendChild(button);
    cartItem.appendChild(itemInfo);

    sumTotal();
}

function removeFromCart(item, price){
    item.remove();
    sum -= price;
    sumTotal();
}

function sumTotal(){
    const totSum = document.getElementById('sum');
    totSum.textContent = `Total: R$${sum.toFixed(2)}`;
}
