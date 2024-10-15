/**LINK to Kata- https://www.codewars.com/kata/5edaa69f5fcd510020199489/javascript **/
const fillNone = (arr, method) => {
    const param0 = arr => {
        const numbers = []
        arr.forEach((info,index) =>{
            if(typeof info === "number")
            numbers.push(index)
        })
        for(let i = 0; i < numbers.length; i++){
            const numIndex = numbers[i]
            if(typeof arr[numIndex - 1] === "undefined" && (numIndex - 1 ) >= 0){
                arr[numIndex - 1] = arr[numIndex]
            }
            if(typeof arr[numIndex + 1] === "undefined" && (numIndex + 1 ) < arr.length){
                arr[numIndex + 1] = arr[numIndex]
            }
        }
        for(let i = 0; i < arr.length; i++){
            
            if(arr[i] === undefined){
             let indexOfNear = Infinity
             let num = null
             
             for(let j = 0; j < arr.length; j++){
                 if( typeof arr[j] === "number"){
                     let tempPosition = Math.abs( i - j)
                     if(tempPosition < indexOfNear){
                     indexOfNear = tempPosition
                     num = arr[j]
                         }else if( tempPosition === indexOfNear ){
                     num = Math.min(num, arr[j])
                 }
                 }
             }
             arr[i] = num
            }
        }
        return arr
    }

    const param_1 = arr => {
        for(let i = 0; i < arr.length; i++) {
            const el = arr[i]
            if(el === undefined) {
                for ( let j = i + 1; j < arr.length; j++) {
                    const num = arr[j]
                    if (typeof num === "number") {
                        arr[i] = num;
                        break;
                    }
                }
            }
        }
        return arr
    }
    const param1 = arr => {
        for(let i = arr.length - 1; i >= 0; i--) {
            const el = arr[i]
            if(el === undefined) {
                for ( let j = i - 1; j >= 0; j--) {
                    const num = arr[j]
                    if (typeof num === "number") {
                        arr[i] = num;
                        break;
                    }
                }
            }
        }
        return arr
    }

    switch ( method) {
        case 0:
            return param0(arr)
        case -1:
            return param_1(arr)
        case 1:
            return param1(arr)
    }
    
 }
 
 console.log(fillNone([1,undefined],method = -1));