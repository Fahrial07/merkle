
function printMultiplication(value) {
   //loop for row form value
   for (let i = 1; i <= value; i++) {
      let row = '';
      //loop for column from value
      for (let j = 1; j <= value; j++) {
         row += (i * j) + ' ';
      }
      console.log(row);
   }

}

printMultiplication(5)