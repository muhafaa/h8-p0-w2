function xo(str) {
    var countO = 0;
    var countX = 0;
    for (var index = 0; index < str.length; index++) {
        var cek = str[index];
        if (cek === 'x') {
            countX += 1;
        }
        
        if (cek === 'o') {
            countO += 1;
        }
    }
    if (countX == countO) {
        return true;
    } else {
        return false;
    }
  }
  
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true