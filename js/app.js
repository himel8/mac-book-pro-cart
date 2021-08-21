// function for per items cost
 function itemCost(id, number){
    const peviousMemoryPrice = document.getElementById(id + '-cost');
    peviousMemoryPrice.innerText = number;
    const newcost = parseInt(peviousMemoryPrice.innerText);   
 }

// function for memory
function memory(id){
    return document.getElementById(id + '-memory');
}

// function for storage
function storage(id){
    return document.getElementById(id + '-storage');
}

// function for delivery
function delivery(id){
    return document.getElementById(id + '-delivery');
}

// function for total price 
function totalPrice(){
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryTotal = document.getElementById('memory-cost').innerText;
    const storageTotal = document.getElementById('storage-cost').innerText;
    const deliveryTotal = document.getElementById('delivery-cost').innerText;
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = parseInt(bestPrice) + parseInt(memoryTotal) + parseInt(storageTotal) + parseInt(deliveryTotal);
}

// event handler for memory 
const firstMemoryCheck = memory('first');
const secondMemoryCheck = memory('second');
firstMemoryCheck.addEventListener('click',function(){
    itemCost('memory', 0);
    totalPrice();
    
})
secondMemoryCheck.addEventListener('click',function(){
    itemCost('memory', 180);
    totalPrice();
})

// event handler for storage 
const firstStorageCheck = storage('first');
const secondStorageCheck = storage('second');
const thirdStorageCheck = storage('third');
firstStorageCheck.addEventListener('click',function(){
    itemCost('storage', 0);
    totalPrice();
})
secondStorageCheck.addEventListener('click',function(){
    itemCost('storage', 100);
    totalPrice();
})
thirdStorageCheck.addEventListener('click',function(){
    itemCost('storage', 180);
    totalPrice();
})

// event handler for delivery 
const firstDelivery = delivery('first');
const secondDelivery = delivery('second');
firstDelivery.addEventListener('click',function(){
    itemCost('delivery', 0);
    totalPrice();
})

secondDelivery.addEventListener('click',function(){
    itemCost('delivery', 20);
    totalPrice();
})

