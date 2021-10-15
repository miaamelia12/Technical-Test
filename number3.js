function number3(nilai_a, nilai_b) {
    var result      = '';
    var character   = 'ab';
    var aLength = character.length;
    var bLength = character.length;
    for ( var i = 0; i < nilai_a; i++ ) {
      result += character.charAt(Math.floor(Math.random() * aLength));
    }
    for ( var i = 0; i < nilai_b; i++ ) {
      result += character.charAt(Math.floor(Math.random() * bLength));
    }
   return result;
}

console.log(number3(5, 3));