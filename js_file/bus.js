console.log('connected')
const arr = [];
let counter = 0
const seats = document.querySelectorAll('.seat');
for (let seat of seats ){
    seat.addEventListener('click',function(){
        counter += 1
        const id = this.getAttribute("id");
        if (arr.includes(id)== true){
            window.alert('You can not select a seat twice.')
            counter -= 1;
        }
        else{
            arr.push(id)
            if (counter <= 4){
                seat.classList.add('bg-lime-600');
                addSeatsToCard(id);
                totalPrice();
            }
            else{
                window.alert('You can not buy more then 4 seat at a time.');
            }
        }
        

        
    })
}

function addSeatsToCard(id){
    const seatClassPriceContainer = document.getElementById('seat-class-price-container');
    const div = document.createElement('div');
    div.classList.add('seat-class-price');
    // seat
    const p1 = document.createElement('p');
    p1.innerText = id;
    p1.classList.add('seat-occupied');
    div.appendChild(p1);
    // status
    const p2 = document.createElement('p');
    p2.innerText = 'Commercial';
    p2.classList.add('status');
    div.appendChild(p2);
    // amount
    const p3 = document.createElement('p');
    p3.innerText = '550';
    p3.classList.add('price');
    div.appendChild(p3);
    
    seatClassPriceContainer.appendChild(div);

}

function totalPrice(){
    const currentPrice = document.getElementsByClassName('price');
    const totalPrice = document.getElementById('total-price');
    const netPrice = parseInt(totalPrice.innerText);



    for (let elem of currentPrice){
        const price = parseInt(elem.innerText)

        const newPrice = netPrice + price
        totalPrice.innerText = newPrice


        
    }
}

document.getElementById('coupon').addEventListener('keyup', function(event){
    const couponCode = event.target.value;
    const apply = document.getElementById('apply');
    if (couponCode === 'NEW20' || couponCode === 'NEW15'){
        apply.removeAttribute('disabled');
        apply.style.backgroundColor = '#1DD100';
        apply.style.color = 'white';
        
    }
    else{
        apply.setAttribute('disabled',true);
        apply.style.backgroundColor = 'white';
        apply.style.color = 'green';
        apply.style.border = '1px solid green';
    }
});

function applyCoupon(){
    const coupon = document.getElementById('coupon');
    couponCode = coupon.value;

    if (couponCode === 'NEW20'){
        const currentPrice = document.getElementById('total-price');
        const totalPrice = parseInt(currentPrice.innerText);
        const price = totalPrice - (totalPrice*0.20)
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = price;
    }
    if(couponCode === 'NEW15'){
        const currentPrice = document.getElementById('total-price');
        const totalPrice = parseInt(currentPrice.innerText);
        const price = totalPrice - (totalPrice*0.15)
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = price;
    }

    
}
