/**LINK to Kata-https://www.codewars.com/kata/569d488d61b812a0f7000015 **/
function dataReverse(data) {
    const newArr = []
    
    for(let i = 0; data.length > 0; i++) {
        newArr.unshift(data.splice(0,8).join(""))
    }
    
    const finalArr = newArr.join("").split("").map(i => Number(i))
      return finalArr
    }