 //console.log("hello");

 /* const myproduct = ["iPhone","Macbook Pro","Flower pot","Water Bottle","Mac Studio mini","Watch","Tennis Ball","Mouse Pad","Keyboard","Lens"];
 console.log(myproduct); */

 /*const studentRegistry = {
    1 : "Mithun",
    2 : "Alka",
    3 : " Anurag",
    4 : "Prabir",
    5 : "shivam",
 };
 console.log(studentRegistry); */


 /* string
 let var1 = "I am happy to join The PW Skill ";
 console.log("var");
 console.log(typeof var1); */

/* Number
 let var2 = 9;
let var3 = 10.2,
let var4 = Number.POSITIVE_INFINITY;
let var5 = NaN;
console.log(typeof var2);
console.log(typeof var3 );
console.log(typeof var4);
console.log(typeof var5);*/


/*Bigint
 let var6 = 1024n;
 console.log(typeof var6); */

/* Boolean
 let var8 = true;
 console.log(typeof var8);  */

 /*undefined
 let var9 = undefined;
 console.log(typeof var9); */

 /*Null 
  let var10 = null;
  console.log(typeof var10);
  console.log(var10) */

//Symbol

 /* let var11 = Symbol("PW Skills");
  console.log(typeof var11)
  console.log(var11)
*/

// Object
       // i) Array:-
    //    let var12 = [1,2,"PW"];
    //    console.log(typeof var12);
       

    // ii)  object:-
    /*   let var13 = { name: "PW Skills", course:"FSWD"};
       console.log(typeof var13);
     */

    // valid variables

   /* let name = "PW Skills";
    console.log(name); //PW Skills

    let price = "5k per peice";
    console.log(price);  // 5k per peice
 */
          
  /*  //invalid variables
     let 1name = "PW Skills"
    console.log(1name); //SyntaxError: Invalid or unexpected token

    let var = 13
    console.log(var); //SyntaxError: Unexpected token 'var'
 */

  /*  let number = 5;
    console.log(`${number}*1 = ${number*1}`);
    console.log(`${number}*2 = ${number*2}`);
    console.log(`${number}*3 = ${number*3}`);
    console.log(`${number}*4 = ${number*4}`);
    console.log(`${number}*5 = ${number*5}`);
    console.log(`${number}*6 = ${number*6}`);
    console.log(`${number}*7 = ${number*7}`);
    console.log(`${number}*8 = ${number*8}`);
    console.log(`${number}*9 = ${number*9}`);
    console.log(`${number}*10 = ${number*10}`);

    */
 //  Output
  /*  1 = 5
 5*2 = 10
 5*3 = 15
 5*4 = 20
 5*5 = 25
 5*6 = 30
 5*7 = 35
5*10 = 50
    */

/*
let num1 =15;
let num2 =8;
 
// add
console.log(` addition of num1 and num2 is ${num1 + num2}`);
//output:- addition of num1 and num2 is 23

// substaction
console.log(`substaction of num1 and num2 is ${num1 - num2}`);
//output :-substaction of num1 and num2 is 7

// Multiplication 
console.log(`multiplication of num1 and num2 is ${num1 * num2}`);
// output:- multiplication of num1 and num2 is 120

//Division
console.log(`division of num1 and num2 is ${num1 / num2}`);
//Output:- division of num1 and num2 is 1.875

//Modulus(%) : 
console.log(`the result of modulo operation of num1 and num2 is ${num1 % num2}`);
//output :the result of modulo operation of num1 and num2 is 7

//Exponentiation(**): raises to the power of.
console.log(`the exponential of num1 and num2 is ${num1 ** num2}`);
//output: the exponential of num1 and num2 is 2562890625

*/


/*
let length = 40;
let width = 10;
let perimeterOfRectangle = 2 * (length + width);
console.log(`The perimeter of the rectangle with length :${length} and width:${width} is ${perimeterOfRectangle}`);
//The perimeter of the rechangle with length :40 and width:10 is 100
*/

/*
// Not Equal
let num5 = 1500;
let num6 = 1000;
console.log(num5 != num6) // true

let num7 = 1500;
let num8 = 1500;
console.log(num7 != num8) //false// Comparison Operators
// Equal
let num1 = 1500;
let num2 = 1500;
console.log(num1 == num2); //true

let num3 = 1500;
let num4 = 1000;
console.log(num3 == num4); // false




*/
/*
// Strictly Equal
let num9 = 12;
let num10 = 12;
console.log(num9 === num10)// true


let num11 = 12;
let num12 = "12";
console.log(num11 === num12) // false


//Not Strictly Equal

let num13 = 12;
let num14 = "12";
console.log(num13 !== num14) // true

let num15 = 12;
let num16 = 12;
console.log(num15 !== num16) // false


*/
// Greater than
/*
let num17 = 17;
let num18 = 18;
console.log(num17 > num18); // false

let num19 = 15;
let num20 = 10;
console.log(num19 > num20);// true

//lessor than
let num17 = 17;
let num18 = 18;
console.log(num17 > num18); // false

let num19 = 15;
let num20 = 10;
console.log(num19 > num20);// true

*/

/*
// condition
 
let trafficLight = "orange";

if(trafficLight == "red"){
    console.log("Vehicles must stop.");
}else if( trafficLight == "orange"){
    console.log("Vehicles must wait. the single is changing to red or green.")
} else if( trafficLight == "green"){
    console.log("Vehicles may proceed with caution.");
} else {
    console.log("Invalid traffic Light");
} //Vehicles must wait. the single is changing to red or green.
*/


/*
let num1 = 35;
let num2 = 40;
 
if (num1 > num2){
    console.log("num1 is greater than num2");    
} else {
    console.log("num2 is greater than num1");
} //num2 is greater than num1

*/

/*
let num = 15;

if (num % 5 == 0 && num % 3==0){
    console.log("FizzBuzz");
}else if(num % 3 ==0){
    console.log("Fizz");
}else if (num % 5 == 0){
    console.log("Buzz");
}else {
    console.log("Invalid input");
}

*/


/*
// Switch case 

 const day = "Sunday";
 let daysUntilWeekend;
 switch (day){
    case "Monday":
        console.log(`There are 5 day(s) untill the weekend.`);
        break;
        case "Tuesday":
            console.log(`There are 4 day(s) untill the weekend.`);
            break;
            case "Wednesday":
                console.log(`there are 3 day(s) untill the weekend.`);
                break;
                case "Thursaday":
                    console.log(`There are 2 day(s) untill the weekend.`);
                    break;
                    case "Friday":
                        console.log(`There are 1 day(s) untill the weekend.`);
                        case "Saturday":
                            case "Sunday":
                                console.log(`There are 0 day(s) untill the weekend.`);
                                break;
                                default:
                                    daysUntilWeekend = "Invalid day";
                                    break;
 } //There are 0 day(s) untill the weekend.

 */

 const monthNumber = 10;

 switch(monthNumber){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
       break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
        default:
            console.log("Invalid Month Number");
 }