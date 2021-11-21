// function for per items cost
 function itemCost(id, number){
    const itemPrice = document.getElementById(id + '-cost');
    itemPrice.innerText = number;
    const itemnewPrice = parseInt(itemPrice.innerText);   
 }

// function for memory item
function memory(id){
    return document.getElementById(id + '-memory');
}

// function for storage item
function storage(id){
    return document.getElementById(id + '-storage');
}

// function for delivery item
function delivery(id){
    return document.getElementById(id + '-delivery');
}
// function for footer total 
function discountTotal(){
    return document.getElementById('discount-total');
}
    
// function for item total cost
function itemTotalCost(id){
    return document.getElementById(id).innerText;
}

// function for total price 
function totalPrice(){
    const bestPrice = itemTotalCost('best-price');
    const memoryTotal = itemTotalCost('memory-cost');
    const storageTotal = itemTotalCost('storage-cost');
    const deliveryTotal = itemTotalCost('delivery-cost');
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = parseInt(bestPrice) + parseInt(memoryTotal) + parseInt(storageTotal) + parseInt(deliveryTotal);

    // function for footer total 
    discountTotal().innerText = totalCost.innerText; 
}

// event handler for memory 
const firstMemoryItem = memory('first');
const secondMemoryItem = memory('second');
firstMemoryItem.addEventListener('click', function(){
    itemCost('memory', 0);
    totalPrice();
    
});
secondMemoryItem.addEventListener('click', function(){
    itemCost('memory', 180);
    totalPrice();
});

// event handler for storage 
const firstStorageItem = storage('first');
const secondStorageItem = storage('second');
const thirdStorageItem = storage('third');
firstStorageItem.addEventListener('click', function(){
    itemCost('storage', 0);
    totalPrice();
});
secondStorageItem.addEventListener('click', function(){
    itemCost('storage', 100);
    totalPrice();
});
thirdStorageItem.addEventListener('click', function(){
    itemCost('storage', 180);
    totalPrice();
});

// event handler for delivery 
const firstDeliveryPackage = delivery('first');
const secondDeliveryPackage = delivery('second');
firstDeliveryPackage.addEventListener('click', function(){
    itemCost('delivery', 0);
    totalPrice();
});

secondDeliveryPackage.addEventListener('click', function(){
    itemCost('delivery', 20);
    totalPrice();
});

// event handler for pomo code
const pomoBtn = document.getElementById('pomo-btn');
pomoBtn.addEventListener('click', function(){
    const pomoCode = document.getElementById('pomo-code');
    const discountText = discountTotal().innerText;
    const discountAmount = parseInt(discountText);
    if(pomoCode.value == 'stevekaku'){
        discountTotal().innerText = discountAmount - discountAmount * 0.2;
    }
    pomoCode.value = '';
});

//finished123