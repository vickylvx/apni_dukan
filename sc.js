/* const ITEMS = [
    {
        id : 1 , 
        name : 'Puma shoes',
        Price : 500, 
        image : 's001.jpg',
        qty :  1 , 
    },
    {
        id : 1 , 
        name : 'Puma shoes',
        Price : 500, 
        image : 's001.jpg',
        qty :  1 , 
    },
    {
        id : 1 , 
        name : 'Puma shoes',
        Price : 500, 
        image : 's001.jpg',
        qty :  1 , 
    },
    {
        id : 1 , 
        name : 'Puma shoes',
        Price : 500, 
        image : 's001.jpg',
        qty :  1 , 
    },
]   */
  
  
  
let maleShop = document.querySelector('#male-shop');
let header = document.querySelector('header');
const Opnbtn = document.getElementById('open-button');
const cart = document.getElementById('side-cart');
const closebtn = document.getElementById('close_button');
const itemsE1 = document.querySelector('.card-can');
const virtual_btn = document.querySelector('.virtual_btn');
const body = document.querySelector('body');
const nav3 = document.querySelector('.nav3');
const i = document.querySelector('i');
const spanText = document.querySelector('#span_text');
const spanText1 = document.querySelector('.span_text1');
const spanText2 = document.querySelector('.span_text2');
const cart_btn = document.querySelector('.cart_btn')



virtual_btn.addEventListener('click' , () => {
    body.style.backgroundColor = 'black'
    body.style.color  = 'white'
    spanText.style.color = 'white'
    spanText1.style.color = 'white'
    spanText2.style.color = 'white'
    cart.style.backgroundColor = 'black'
    
} )

cart_btn.addEventListener('click' , () => {
    console.log('hi');
})











function shop(){
    header.style.display = 'none'
}




Opnbtn.addEventListener('click' , OpenCart)
closebtn.addEventListener('click' , closeCart)


function OpenCart(){
    cart.classList.add('open')
}
function closeCart(){
    cart.classList.remove('open')
}





//render item 

/* function renderitem(){
    ITEMS.forEach((card) => {
         const itemE1 = document.createElement('div')
         itemE1.classList.add('card')
         itemE1.innerHTML = `${card.image}
          <p>$500.00</p>
          <button>Add to cart</button>`
         itemsE1.appendChild(itemE1)
    })
} */



