// 1st Funtion: Fit to Mile Calculator>>
// We know, 1 mile = 5280 fits.
function fitToMile (fit) {
   if(fit < 0) {
      return "haha! you cannot make me fool... Give the correct input."
   }
   else {
      var mile = fit / 5280;
      return "You have given "+ fit+ " and it's equivalent mile is "+ mile.toFixed(3);
   }
}


// 2nd Function: Wood Calulator for 3 kinds of Furnitures.
function woodCalculator (chair, table, bed) {
   if(chair < 0 || table < 0 || bed < 0) {
      return "haha! you cannot make me fool... Give the correct input."
   }
   else {
      var totalNeededWood = (chair*1) + (table*3) + (bed*5);
      return "You need "+ totalNeededWood+ " Cubic Fit of wood";
   }

}


// 3rd Function: Brick Calulator for building.
function brickCalulator (floors) {
   if(floors < 0) {
      return "haha! you cannot make me fool...Underground floors are not invented yet:3 Give the correct input."
   }
   else {
      var heightTo10th = 0;
      var heightFrom10To20th = 0;
      var heightFrom20ToUp = 0;
      for(var i = 0; i <= floors; i++) {
         // to determine the height from 0 to 10th floor.
         if(i <= 10) {
            heightTo10th = i * 15;
         }
         // to determine the height from 10 to 20th floor.
         if(i <= 20 && i > 10) { 
            heightFrom10To20th =  (i-10) * 12;
         }
         // to determine the height from 20th to upper floor.
         if(i > 20) {
            heightFrom20ToUp =  (i-20) * 10;
         }
      }
      var totalHeight = heightTo10th + heightFrom10To20th + heightFrom20ToUp;
      var brickNeeded = totalHeight * 1000;
      return "You need "+ brickNeeded+ " pcs of brick";
   }
}


// 4th Function: Finding the tiny friends from the given list of names.
function tinyFriend (names) {
   // below condition is to only accept arrays without empty values.
   if(names.includes('')) {
      return "haha! you cannot make me fool... Give the correct names without empty name."
   }
   else {
      var shortestName = names[0];
      const tinys = [];
      // below loop is to determine the shortest name
      for(var i = 1; i < names.length; i++) {
         if(shortestName.length > names[i].length) {
            shortestName = names[i];
         }
      }
      // below loop is to determine other names having similar length as the shortest one we found earlier.
      for(var j = 0; j < names.length; j++) 
      {
         if(shortestName.length == names[j].length) {
            tinys.push(names[j]);
         }
      }
      return "List of the Names of your tiny friends is: " + tinys;
   }
}



console.log(fitToMile(75000));
console.log(woodCalculator(3,2,3));
console.log(brickCalulator(23));
console.log(tinyFriend(['mahdi', 'ra', 'adika', 'banana', 'saifulislam', 'ma', 'ba']));