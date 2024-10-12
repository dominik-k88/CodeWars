const fillNone = (arr) => {
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
 
 console.log(fillNone([undefined, 1, undefined, undefined, undefined, 2, undefined]));