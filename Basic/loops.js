//output even numbers from 2 to 10 
// {
// document.writeln("List of even numbers: <br> ")
// for(let i=2;i<=10; i++){
   
//     if(i%2==0){
//        document.writeln(i );
//     }
// }
// }

//replacing with while
// let i = 0; 
// while(i<3){
//     alert(i); 
//     i++ ; 
// }


// let i = 0;
// do {
//   document.writeln(i); 
  
//   document.writeln("Before increment:"+i); 
//   i++;
//   document.writeln("after increment:"+i); 
//   document.writeln("------------------")
// } 
// while (i < 3);



// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   alert( i );
//   i++;
// }


/*

0 
0+1 = 1 



1
1+1 = 2 
2<3

2
2+1=3






*/


// let i = 3 ; 
// while(i){
//     alert(i--); 
// }



//Repeat until the input is correct 

// let number ; 
// do{
//     num=prompt("Enter a number");
// }while(num<=100 ); 


//prime number in js



for (let n = 1; n <= 20; n++) {
    let isPrime = true;
    if (n <= 1) {
      isPrime = false;
    } else {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
     document.writeln("<br>"+n + " is a prime number <br>");
    } else {
        
        document.writeln("<br>"+n + " is not a prime number");
    }
  }


  