function fish(shoal){  
    const pool = shoal.split("").map(Number).sort((a,b) => a-b)
    let level = 1
    if(shoal === "") return level
    
    const filterByLevel = array => array.filter(fish => fish <= level)
    const sumFiltered = filterFnc => filterFnc.reduce((sum,num) => sum + num, 0)
    
    while(pool.length) {
        
        let goal = level * 4
        const filtered = filterByLevel(pool)
        const tempState = sumFiltered(filtered)
        if(tempState < goal) {
            return level
        }
        for(let i = filtered.length - 1; i >= 0; i--) {
            if(filtered[i] <= goal) {
                goal -= filtered[i]
                let index = pool.indexOf(filtered[i])
                pool.splice(index,1)            
            }
        }
        level++
    }
      return level
    }