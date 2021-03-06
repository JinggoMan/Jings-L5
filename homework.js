// Do not change any of the function names

//Example 1:
function getBiggest(x, y) {
  if (x > y) { 
    return x; 
  } else if (x < y) { 
    return y;
  } else { 
    return x || y;
  }
}

function greeting(language) {
  if (language === 'German') {
    return 'Guten Tag!'; 
  } else if (language === 'Mandarin') { 
    return 'Ni Hao!'; 
  } else if (language === 'Spanish') { 
    return 'Hola!';
  } else { 
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  if (num === 10 || num === 5) { 
    return true; 
  } 
  return false;
}

function isInRange(num) {
  if (num < 50 && num > 20) { 
    return true;
  } 
  return false;
}

function isInteger(num) {
  if (Math.floor(num)) { 
    return true; 
  } else if (num === 0) { 
    return true; 
  } else { 
    return false;
  }
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) { 
    return 'fizzbuzz'; 
  } else if (num % 3 === 0) { 
    return 'fizz'; 
  } else if (num % 5 === 0) { 
    return 'buzz'; 
  } else { 
    return num;
  }
}

function isPrime(num) {
  let prime = true;
  if (num === 1 && num === 0) {
    return false;
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    } if (prime) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};