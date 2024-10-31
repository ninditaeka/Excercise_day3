// //write a code to dispaly multiplication of a given integer
// //example number 9

const num = 9
let div= 0
for(let i =1 ; i<= 10; i++){
console.log(`${num} x ${i}`)
}

// //write a code to check palindrome or not
// //cara lopping example madam -> palindrome

let str= "madam"
let res = ""

for(let i = str.length-1 ; i >= 0; i--){
   res += str[i] 
   
}
console.log(res)

if (str==res){
   console.log("palindrome")
} else {
   console.log("not palindrome")
}


//  //write a code to convert centimeter to kilometer
//  //example 100000cm -> 1 km

let centiValue = 100000
let kmValue = centiValue/100000
console.log (`${kmValue} km`)

//write a code to format number as currency (IDR)
//example 1000 -? Rp. 1.000,00

let input4 = 1000
let hasil4 = ""
let inputString = input4.toString()
let penambahTitik = 0
                 //9
 for(let i=inputString.length-1; i >=0; i-- ){
   penambahTitik++ 
   if (penambahTitik%3==0)
      {hasil4= "."+ inputString[i] + hasil4
   }else {
      hasil4=   inputString[i] + hasil4
   }
  
 }
 console.log(`Rp. ${hasil4},00`)

//write a code to remove the first occurence of a given "search string" from a string
//example : string ="Hello world", search string ="ell" -> "Ho World"


let searchWord = "Hello world"
let searchWordstring = searchWord.split("ell").join('')
console.log(searchWordstring)

// Write a code to capitalize the first letter of each word in a string
//example: "hello world"-> "Hello World"

let input6 = "hello world"
let hasil6 =""
let penghitunghurufpertama = 0
for(let i =0; i<input6.length; i++){
   if (penghitunghurufpertama == 0) {
      hasil6 = hasil6 +  input6[i].toUpperCase()
   }
   else 
   {
      hasil6=hasil6 + input6[i]
   }
      
   penghitunghurufpertama++

   if( input6[i]==" "){
      penghitunghurufpertama = 0
   }
}
 console.log(hasil6)

  
//Write a code to swap the case of each character from string 
// Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
 let input7 = "The QuiCk BrOwN Fox"
 let hasil7= ""
 let codeAsciiSaatini = 0
       //0      //19
 for(let i=0; i<input7.length; i++)
   
   {
      codeAsciiSaatini = input7.charCodeAt(i)

      if(input7[i]==" ")
      { 
         hasil7 = hasil7 + input7[i]
      }
      else
      {
         if (codeAsciiSaatini>90)
         {
            codeAsciiSaatini=codeAsciiSaatini-32
         }
         else
         { codeAsciiSaatini=codeAsciiSaatini+32

         } 

         hasil7= hasil7+String.fromCharCode(codeAsciiSaatini)
      }
      
   }

   console.log(hasil7)
 
//Write a code to find the largest of two given integers
// Example : num1 = 42, num2 = 27 → 42

let input8 = 42
let input81 = 27

if (input8 > input81)
    { console.log(`${input8} lebih besar dari ${input81}`)
    } else 
   
    {
       console.log(`${input81} lebih kecil ${input8}`)
    }


//Write a conditional statement to sort three numbers
// Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42


let input9 = 42
let input91 = 27
let input912 = 18
let hasil9 = []

let input9Array = [42, 27, 18]

for(let i=0 ; i<input9Array.length; i++)
   { 
      console.log (input9Array[i])
      
   }



//Write a code that shows 1 if the input is a string, 2 if the input is a number,
// and 3 for others data type. Example : “hello” → 1
 let input10 = "hello";
 let input10Type = typeof input10 
let text = 0

 switch (input10Type)
 {
   case "string":
      text = 1
      break
   case "number":
      text = 2
      break
   default:
      text = 3;
      
 }
 console.log(text)


// Write a code to change every letter a into * from a string of input
// Example : ‘An apple a day keeps the doctor away’ ->
//  `*n *pple * d*y keeps the doctor *w*y
  

let input11 = "An apple a day keeps the doctor away"
let hasil11 = ""
for(let i = 0; i < input11.length; i++) //6
   { if (input11[i]== "A" ) //p
   {
      hasil11 = hasil11 + "*"

   } else if
   ( input11[i] == "a") //p
   {
    hasil11 = hasil11 + "*"
   }

   else //p
    { hasil11 = hasil11 + input11[i] 
   }
    //*n *pp

   }
   console.log(hasil11)