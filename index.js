// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]


function superbowlWin(record){
    const winning = record.find((object) => object.result === "W");
  
  // If a win is found, (?) return the year the win is found in,(:) otherwise, return undefined
   return winning? winning.year : undefined;
  } 

  // used this to confirm the code 
  console.log(superbowlWin(record)); //2015


 
  
  
  