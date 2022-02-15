
function getQuantity(inputFieldId,status,itemsId,itemPrice){
    var inputValue=inputFieldId+'Quantity';
    
    var quantityField= document.getElementById(inputValue);
    if(quantityField.value<0){
        document.getElementById(inputValue).value=0;
        
    }
        
       if(isNaN(quantityField.value)==false){
            // for increasing Quantity input
            if(status==true){
                var Quantity=document.getElementById(inputValue);
                
                
                document.getElementById(inputValue).value=parseInt(Quantity.value)+1;
                document.getElementById(itemsId+'Price').innerText=parseInt(Quantity.value)*itemPrice;
            }

            // for decreasing Quantity input
            else if(status==false){
                if(document.getElementById(inputValue).value>0){
                    var Quantity=document.getElementById(inputValue);
                    document.getElementById(inputValue).value=parseInt(Quantity.value)-1;
                    document.getElementById(itemsId+'Price').innerText=parseInt(Quantity.value)*itemPrice;
                }
            }
            calculateItemTotal();
    }

}

// for camera products
document.getElementById('cameraBtnPlus').addEventListener('click',function(){
    getQuantity('camera',true,'camera',10000);
})
document.getElementById('cameraBtnMinus').addEventListener('click',function(){
    getQuantity('camera',false,'camera',10000);
})
// for watch products
document.getElementById('watchBtnPlus').addEventListener('click',function(){
    getQuantity('watch',true,'watch',1000);
})
document.getElementById('watchBtnMinus').addEventListener('click',function(){
    getQuantity('watch',false,'watch',1000);
})
// for shirt products
document.getElementById('shirtBtnPlus').addEventListener('click',function(){
    getQuantity('shirt',true,'shirt',500);
})
document.getElementById('shirtBtnMinus').addEventListener('click',function(){
    getQuantity('shirt',false,'shirt',500);
})

function calculateItemTotal(){
    var cameraQuantity=document.getElementById('cameraQuantity').value;
    var watchQuantity=document.getElementById('watchQuantity').value;
    var shirtQuantity=document.getElementById('shirtQuantity').value;

    var subTotal= (parseInt(cameraQuantity)*10000)+(parseInt(watchQuantity)*1000)+(parseInt(shirtQuantity)*500);
    var tax=parseInt(subTotal*0.2);
    
    var grandTotal=subTotal+tax;
    document.getElementById('subTotal').innerText=subTotal;
    
    
    document.getElementById('taxValue').innerText=tax;
    document.getElementById('grandTotal').innerText=grandTotal;
    
    
}
