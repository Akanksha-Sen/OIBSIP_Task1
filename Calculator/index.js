let screen = document.getElementById('screen'); //returns element having id=screen
 buttons = document.querySelectorAll('button'); //returns list of elements matching selector buttons

 let screenValue=''; //variable

 for(item of buttons) //iterating the list
 {
    item.addEventListener('click', (e)=>  //addEventListener() method attaches an event handler to an element.
    {
        buttonText = e.target.innerText;
        console.log(buttonText);

        if(buttonText=='X'){
            buttonText='*';
            screenValue += buttonText; //screenValue is a variable
            screen.value += buttonText; //screen.value is value of screen
        }

        else if(buttonText=='C'){
            screenValue = " ";
            screen.value = " ";
        }

        else if(buttonText=='='){
            screen.value = eval(screenValue);
        }

        else{
            screenValue += buttonText ;
            screen.value = screenValue; 
        }
    })
 }