 let plusButton  =document.getElementById('plusButton');
 let minusButton = document.getElementById('minusButton')
 let mulButton = document.getElementById('mulButton')
 let divButton = document.getElementById('divButton')



plusOperation= function(){
    let number1 = document.getElementById('number1').value
    let number2 = document.getElementById('number2').value
   
    let sum = parseInt(number1)+parseInt(number2)
    

    let result = document.getElementById('result')
    result.innerHTML = sum
    
}
plusButton.addEventListener('click',plusOperation)


minusOperation = function(){
    let number1 = document.getElementById('number1').value
    let number2 = document.getElementById('number2').value

    let deference = parseInt(number1)-parseInt(number2)

    let result = document.getElementById('result')

    result.innerHTML = deference

}
 minusButton.addEventListener('click',minusOperation)


mulOperation = function(){

    let number1 = document.getElementById('number1').value
    let number2 = document.getElementById('number2').value

    let mul = parseInt(number1)*parseInt(number2)

    let result = document.getElementById('result')
    result.innerHTML = mul
}


mulButton.addEventListener('click',mulOperation)

divOperation = function(){
    let number1 = document.getElementById('number1').value
    let number2 = document.getElementById('number2').value

    let div = parseInt(number1)/parseInt(number2)

    let result = document.getElementById('result')
    result.innerHTML = div
}

divButton.addEventListener('click',divOperation)







 
