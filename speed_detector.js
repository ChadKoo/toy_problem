function detector(speed){
    const speedLimit = 70;
    const pointLimit = 12;
    const points = Math.floor((speed - speedLimit)/5); 
    if(speed <= speedLimit){
        return "Ok";
    }else if(points > pointLimit){
     
        return "License Suspended";
    }else{
            return "Points;"+ points;
        }

}

