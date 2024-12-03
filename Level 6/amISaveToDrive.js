function drive(drinks, finished, drive_time) {  
    const unit = Number((drinks.map(arr  => (arr[0] * arr[1] / 1000)).reduce((sum, unit) => sum + unit, 0)).toFixed(2))
    const [hours1, minutes1] = finished.split(":").map(Number)
    const [hours2, minutes2] = drive_time.split(":").map(Number)
    const finishedInMinutes = hours1 * 60 + minutes1
    const drivetimeInMinutes = hours2 * 60 + minutes2
    let difference = drivetimeInMinutes - finishedInMinutes
    
    if(difference <= 0) {
        difference += 24 * 60
    }
    
    return [unit,(unit - difference / 60) < 0]
    }