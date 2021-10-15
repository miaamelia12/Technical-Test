function number2(leaderboards, player) {
  var result = [];
  var merge = leaderboards.concat(player);
  var sort_arr = merge.sort();
  for ( var i = 0; i < player.length; i++ ) {
    var index = sort_arr.findIndex(function find(num) {
      return num == player[i];
    })
    result.push(index+1);
  }
return result;
}

console.log(number2([200, 100, 100, 50, 10], [20, 80, 80, 10, 10, 300]));
