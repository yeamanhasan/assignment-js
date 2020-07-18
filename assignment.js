// feetToMile
function feetToMile(feet) {
    var Mile = feet / 5280;
    return Mile;
  }
  
  
  // woodCalculator
  function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
  
  }
  var woodResult = woodCalculator(15, 5, 8);
  console.log(woodResult)
  
  
  
  // bricCalculator
  function brickCalculator(floorNumber){
    if (floorNumber <=10 && floorNumber >=1){
        let brickNumber = floorNumber * 15000;
        return brickNumber;
    }
    else if (floorNumber > 10 && floorNumber <= 20) {
        let brickNumber = ((floorNumber - 10) * 12000) + 150000;
        return brickNumber;
    }
    else if (floorNumber > 20){
        let brickNumber =((floorNumber - 20) * 10000) + 270000;
        return brickNumber;
    }
    else {
        return "Something is wrong!";
    }
  };
  let result1 = brickCalculator(12);
  console.log(result1);
  let result2 = brickCalculator(26);
  console.log(result2);
  let result3 = brickCalculator(35);
  console.log(result3);
  let result4 = brickCalculator(-4);
  console.log(result4);
  
  
  // tinyFriend
  function tinyFriend(friend){
    let singleFriend =friend[0];
    for(let i = 0; i < friend.length; i++){
        let element = friends[i];
        if (element.length < singleFriend.length){
            singleFriend = element ;
        }
    }
    return singleFriend;
  };
  let friends =["Yeaman", "Hasan", "Shuvo", "Rabbi", "Sadhin" , "PQ"];
  let results = tinyFriend(friends);
  console.log(results);