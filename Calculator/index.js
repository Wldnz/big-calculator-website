document.addEventListener('DOMContentLoaded',() =>{
    
    let display = document.getElementById('display');

    window.appendToDisplay = function(index) {
        display.value += index;
    }
    window.clearDisplay = function(){
        display.value = ""
    }
    
    window.clearIndex = function(){
        display.value = ""
    }

    window.calculate = () => {
        try{
            display.value = eval(display.value)
        }catch(error){
            console.log(error)
            display.value = 'Syntax is error'
        }
    }


})


