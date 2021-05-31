const num7 = document.getElementById('num-7')
const num8 = document.getElementById('num-8')
const num9 = document.getElementById('num-9')
const del = document.getElementById('delete')
const num4 = document.getElementById('num-4')
const num5 = document.getElementById('num-5')
const num6 = document.getElementById('num-6')
const plus = document.getElementById('plus')
const num1 = document.getElementById('num-1')
const num2 = document.getElementById('num-2')
const num3 = document.getElementById('num-3')
const minus = document.getElementById('minus')
const dot = document.getElementById('dot')
const num0 = document.getElementById('num-0')
const slash = document.getElementById('slash')
const multiply = document.getElementById('multiply')
const reset = document.getElementById('reset')
const equal = document.getElementById('equal')

const displayNum = document.getElementById('display-num');

// main values
let calNum = 0;
let calString = '';
// 3 muttable value -> updated realt
let previousNum = undefined;
let currentNum = undefined;
let arthMethod = undefined;
let trail_arthMethod = undefined;
let sumNum = undefined;
let equalSelect = false;
// Switch Bool
let switchBool = false;

let deciTRUE =  false;





// Update display val - push method do not work on strings as cannot be modified
function updateVal(num) {

    // Check to see if there is a decimal value 
    deciTRUE =  calString.includes('.')

    
    // Define both the Number and String
    calString = displayNum.textContent.concat(num);
    calNum = Number(calString);

   
  

    if (deciTRUE && num === '.') {
        return;
    }



    
   
//    console.log(displayNum.textContent, deciTRUE)

    if (!switchBool ) {
            displayNum.textContent = calString;
            return currentNum = calNum;
            // console.log('Current', currentNum)
    } else {
            switchBool = false;
            displayNum.textContent = '';
            displayNum.textContent = calString;
            return currentNum = calNum;
    }

   


    
    // console.log( calString, typeof(calString));
    // console.log(  calNum, typeof(calNum)  )

    
    
}


//  Calculate Total -> when = is selected
function totalNum(){
    flashNum(300)
    // Add Method 
    if (currentNum && previousNum){
        if (arthMethod === '+') {
            sumNum = previousNum + currentNum;
          
        }
        // Substract Method
        if (arthMethod === '-') {
            sumNum = previousNum - currentNum;
         
            
        }
        // Mulitply Method
        if (arthMethod === '*') {
            sumNum = previousNum*currentNum;
    
        }
        // Divide Method
        if (arthMethod === '/') {
            sumNum = previousNum/currentNum;
          
        }
    
        displayNum.textContent = sumNum;
            previousNum = sumNum;
            console.log('Before clear',previousNum, currentNum, sumNum, arthMethod)
    }
  
    if (currentNum && !previousNum) {
        return displayNum.textContent = currentNum;
    }

    


}




// // Plus Arthmetic
function plusArc() {
   
    if ((previousNum && currentNum) && (previousNum !== sumNum)) {
        totalNum()
    }


    arthMethod = '+';
    if (!previousNum) {
        previousNum = currentNum;
    }
    deciTRUE = false;
    calString = ''
    currentNum = 0;
    displayNum.textContent = calString;
    switchBool = true;
    console.log(previousNum, currentNum, sumNum)
}

// // Minus Arthmetic
function minusArc() {
    if ((previousNum && currentNum) && (previousNum !== sumNum)) {
        totalNum()
    }

    arthMethod = '-';
    if (!previousNum) {
        previousNum = currentNum;
    }

    deciTRUE = false;
    calString = ''
    currentNum = 0;
    displayNum.textContent = calString;
    switchBool = true;
    console.log(previousNum, currentNum, sumNum)
  
}
// // Divide Arthmetic
function divideArc() {
    if ((previousNum && currentNum) && (previousNum !== sumNum)) {
        totalNum()
    }

    arthMethod = '/';
    if (!previousNum) {
        previousNum = currentNum;
    }

    deciTRUE = false;
    calString = ''
    currentNum = 0;
    displayNum.textContent = calString;
    switchBool = true;
    console.log(previousNum, currentNum, sumNum)
  
}
// // Minus Arthmetic
function multiplyArc() {
    if ((previousNum && currentNum) && (previousNum !== sumNum)) {
        totalNum()
    }

    arthMethod = '*';
    if (!previousNum) {
        previousNum = currentNum;
    }

    deciTRUE = false;
    calString = ''
    currentNum = 0;
    displayNum.textContent = calString;
    switchBool = true;
    console.log(previousNum, currentNum, sumNum)
  
}


// // Add decimel '.' to the current Num
// function createDecimal(){
//     let updateVals = displayNum.textContent.concat('.')
//     console.log('thhis is clicked')
//     console.log(updateVals)
//     displayNum.textContent = updateVals
//     return currentNum = updateVals;
// }









// Decimal --> Selected
dot.addEventListener('click', e => {
    e.preventDefault();
    updateVal('.')
})


// Flash Display --> when arth is pressed
function flashNum(num){
    displayNum.classList.add('quick-flash');
    setTimeout(function(){
        displayNum.classList.remove('quick-flash')
    }, num)
}


// Equal -> on Select 
equal.addEventListener('click', e => {
    e.preventDefault()
    equalSelect = true;
    return totalNum()

})



// Arthmetic cal -> on Select
plus.addEventListener('click', e => {
    e.preventDefault()
    return plusArc()

})

minus.addEventListener('click', e => {
    e.preventDefault()
    return minusArc()

})
multiply.addEventListener('click', e => {
    e.preventDefault()
    return multiplyArc()

})
slash.addEventListener('click', e => {
    e.preventDefault()
    return divideArc()

})




// Delete recent value --> on RESET
del.addEventListener('click', function(){
    const res = displayNum.textContent.slice(0,-1)
    displayNum.textContent = res;
    if (res == '') {
        sumNum = undefined;
          calString = ''
        previousNum = undefined;
        currentNum = undefined;
        arthMethod = undefined;
        deciTRUE = false;
    }
})

// Clear whole value --> on RESET
reset.addEventListener('click', function(){
    displayNum.textContent = '';
    calString = '';
    sumNum = undefined;
    deciTRUE = false;
    previousNum = undefined;
    currentNum = undefined;
    arthMethod = undefined;
})



// Update display val -> on Num select
num9.addEventListener('click', e => {
    e.preventDefault()
    updateVal('9')
})
num8.addEventListener('click', e => {
    e.preventDefault()
    updateVal('8')
})
num7.addEventListener('click', e => {
    e.preventDefault()
    updateVal('7')
})
num6.addEventListener('click', e => {
    e.preventDefault()
    updateVal('6')
})
num5.addEventListener('click', e => {
    e.preventDefault()
    updateVal('5')
})
num4.addEventListener('click', e => {
    e.preventDefault()
    updateVal('4')
})
num3.addEventListener('click', e => {
    e.preventDefault()
    updateVal('3')
})
num2.addEventListener('click', e => {
    e.preventDefault()
    updateVal('2')
})
num1.addEventListener('click', e => {
    e.preventDefault()
    updateVal('1')
})
num0.addEventListener('click', e => {
    e.preventDefault()
    updateVal('0')
})


