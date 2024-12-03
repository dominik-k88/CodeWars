function mazeRunner(maze, directions) {
    let indexCurrentLevel = maze.findIndex(level => level.includes(2))
   let myPosition = maze[indexCurrentLevel].indexOf(2)
   
   for(let i = 0; i < directions.length; i++) {
       if( directions[i] === "E") {
           myPosition ++        
           if( maze[indexCurrentLevel][myPosition] === undefined || maze[indexCurrentLevel][myPosition] === 1) {
               return "Dead"
           } else if(maze[indexCurrentLevel][myPosition] === 3) {
               return "Finish"
           }
           continue
       }
       if( directions[i] === "W") {
           myPosition --        
           if( maze[indexCurrentLevel][myPosition] === undefined || maze[indexCurrentLevel][myPosition] === 1) {
               return "Dead"
           } else if(maze[indexCurrentLevel][myPosition] === 3) {
               return "Finish"
           }
           continue
       }
        if( directions[i] === "S") {
            let currentPos = Number(myPosition.toString().slice())
           indexCurrentLevel ++
           if( (maze[indexCurrentLevel] && maze[indexCurrentLevel][currentPos] === 1 ) || !maze[indexCurrentLevel]) {
               return "Dead"
           } else if(maze[indexCurrentLevel][currentPos] === 3) {
               return "Finish"
           }
          myPosition = currentPos
          continue
       }
       if( directions[i] === "N") {
           let currentPos = Number(myPosition.toString().slice())
           indexCurrentLevel --
           if( (maze[indexCurrentLevel] && maze[indexCurrentLevel][currentPos] === 1) || 
           !maze[indexCurrentLevel]) {
               return "Dead"
           } else if(maze[indexCurrentLevel][currentPos] === 3) {
               return "Finish"
           }
           myPosition = currentPos
       }
   }
   return "Lost"
   }