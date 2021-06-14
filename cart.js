/*ADD ITEMS TO CART*/

let carts = document.querySelectorAll('.add-cart');
    
let products = [
    {
        name: 'Ch. BEAUSEJOUR BECOT ’17 750ml',
        tag: 'bs1_becot',
        price: 93,
        inCart: 0
    },
    {
        name: 'Ch. CARBONNIEUX BLANC ’16 750ml',
        tag: 'bs2_blanc',
        price: 61.38,
        inCart: 0
    },
    {
        name: 'Ch. CRUZEAU BLANC ’14 750ml',
        tag: 'bs3_cruzeau',
        price: 96.78,
        inCart: 0
    },
    {
        name: 'Ch. HAUT BRION ’18 750ml',
        tag: 'bs4_brion',
        price: 917.6,
        inCart: 0
    }
    
]

    for (let i=0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);
        }) 
    }

/*SAVE PRODUCT NUMBERS WHEN REFRESH*/
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers) {
        document.querySelector('span').textContent = productNumbers;
    }
}

/**/

function cartNumbers(product) {
   
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    
    if( productNumbers ) {
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('span').textContent = 1;
    }
    
    setItems(product);
}

//sum products on cart
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    //parse as js not json object
    cartItems = JSON.parse(cartItems);
    
    //increase purchase of same objects
    if(cartItems != null) {
        
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                //rest operator to keep what was already in cartItems
                ...cartItems,
                [product.tag]: product
            } 
        }
        cartItems[product.tag].inCart += 1;
    } else {
        //if its first time
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    product.inCart = 1;
    
    //parse as json object not js
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
//calculate total cost
function totalCost(product) {
//    console.log("the product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cart cost is", cartCost);
    console.log(typeof cartCost);
    
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    } 
}

//display cart products
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <img src="ionicons.designerpack/close-circle-outline.svg" id="close-icon" data-name="${item.name}" class="delete-item">
                <img src="resources/img/${item.tag}.png">
                <span>${item.name}</span>
            </div>
            <div class="price">€${item.price}</div>
            <div class="quantity">
                <img src="ionicons.designerpack/arrow-back-circle-outline.svg" id="reduce-icon">
                <span>${item.inCart}</span>
                <img src="ionicons.designerpack/arrow-forward-circle-outline.svg" id="increase-icon">
            </div>
            <div class="total">€${item.inCart * item.price}
            </div>
            `
        });
        
        productContainer.innerHTML += `
            <div class="basketTotalContainer"
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">
                    €${cartCost}
                </h4>
                
            </div>
        `;
    }
}

onLoadCartNumbers();
displayCart();
//delete product from cart
//let removeAllItems = document.getElementsByClassName('data-name');
//
//for(let i=0; i< removeAllItems.length; i++) {
//    let remove = removeAllItems[i];
//    remove.addEventListener('click', function(event) {
//        let removeclicked = event.target;
//        removeclicked.parentElement.remove();
//        updateCartTotal();
//    });
//}

//update total cost on remove
//function updateCartTotal() {
//    let cartItemContainer = document.getElementsByClassName('product')[0];
//    let cartRows = cartItemContainer.getElementsByClassName('products');
//    for (let i=0; i<cartRows.length; i++) {
//        let cartRow = cartRows[i];
//        let priceElement = cartRow.getElementsByClassName('price')[0];
//        let quantityElement = cartRow.getElementsByClassName('quantity')[0];
//        console.log(priceElement,quantityElement);
//    }
//    
//}


   





































   