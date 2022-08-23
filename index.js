// code your solution here

function superbowlWin(record){
    const recordFound = record.find(element => element.result === "W")
    if (recordFound){
        return recordFound.year
    }else{
        return undefined
    }
}

