function login(){
 localStorage.setItem('user',name.value);
 location.href='shop.html';
}

function viewProduct(name,price){
 localStorage.setItem('product',name);
 localStorage.setItem('price',price);
 location.href='product.html';
}

if(document.getElementById('pname')){
 document.getElementById('pname').innerText=localStorage.getItem('product');
}

function addToCart(){
 alert('Added to cart');
}

function confirmOrder(){
 alert('Payment Successful');
 location.href='confirm.html';
}
