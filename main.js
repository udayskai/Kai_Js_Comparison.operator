"use strict" //To strict javascript voltile Nature



// Equal to sign =         // All value false exept equal values
 let Number1=5;
 let Number2=6;

if (Number1==Number2) {
    console.log("This is Equal numbers")
    }
 else{
     console.log("Not equal nummber.")
 }  

 //alternate method by using ternary method
 
 let Final_Value=undefined;
  Final_Value=(Number1==Number2)
            ?"Same"
            :"Not Sames - by ternary method same";
            console.log(Final_Value);
 

//Not equal sign !=       // All value true exept equal values
 let Number3=5;
 let Number4=5;

if (Number3!=Number4) {
    console.log("This is Not Equal numbers")
    }
 else{
     console.log(" Equal nummber-false part is second")
 }   


// > Greater than operators
let Number_1="1Z";
let Number_2="1L";
let Result_1=Number_1>Number_2;
console.log(Result_1);// true 
//In this case string consider as a Number .
//It compare each word in string in reference A-Z & 1-Infinte.
//Example 1 is same in both then it will campere next letter  Z(high) with L(low) .


//Less than <
let Number_3=10;
let Number_4="11";
let Result_2=Number_3<Number_4;
console.log(Result_2);// true 
//act same as greater then but in oppsite way.




//Greater than equal to >=
let Number10=25;
let Number11=20;
if (Number10>=Number11) {
    console.log("Number is Greater or equal")
    
}
else {
      console.log("Number is to low")
}



//Less than equal to <=
let Number13=2;
let Number14=20;
if (Number13<=Number14) {
    console.log("Number is less or equal")
    
}
else {
      console.log("Number is to high")
}

//ternary method
 let Number20="-8A";
 let Number21="-7";
 let Result20=undefined;
  Result20=(Number20>=Number21)
       ?("true")
       :("false");
       console.log(Result20);                     // (a-z then A-Z then 1- infinte)
                                                  // All string comparison are based on references
                                                //  a-z >  A-Z > 1-infinte 
                                                // compare position to position or we can say word to word.
