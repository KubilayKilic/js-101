function calcFactorial(n) {

  if ( n === 0 || n === 1) {
    return 1;
  } else {
    return n * calcFactorial(n-1);
  }
}


result = calcFactorial(5);
console.log(result);




function facto1(n) {

  if (n === 1 || n === 0){
    return 1;
  }

  else {
    return n * facto1(n-1);
  }
  
}

let result = facto1(6);

console.log(result);


function fibo1(m) {

  firstValues = [0, 1];

  for (let i = 2; i <= m; i++) {
    let yeniDeger = firstValues[i-2] + firstValues[i-1];
    
    firstValues.push(yeniDeger);
  }

  return firstValues;
}

result = fibo1(10);
console.log(result);






function practiceFactorial(n){

  if (n === 1 || n === 0){
    return 1;
  }  else {
    return n * practiceFactorial(n-1);
  }
}

let ans = practiceFactorial(7); 
console.log(ans);// 5040.

function practiceFibonacci(m){

  baslangicArr = [0, 1];

  for (let i = 2; i <= m; i++){

    yeniDegers = baslangicArr[i-2] + baslangicArr[i-1];

    baslangicArr.push(yeniDegers);
  }
  return baslangicArr;
}

let result2 = practiceFibonacci(9);
console.log(result2);


function faktoriell (n1){

  if (n1 === 1 || n1 === 0){
    return 1;
  } else {
    return n1 * faktoriell(n1-1);
  }
}

function fiboSequ(m1){

  startFiboSeq = [0,1];

  for (i = 2; i <= m1; i+++){

    newFiboSeq = startFiboSeq[i-2] + startFiboSeq[i-1];
    
    startFiboSeq.push(newFiboSeq);
  
  }

  return startFiboSeq;

}