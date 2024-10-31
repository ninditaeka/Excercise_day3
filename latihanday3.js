// //write a code to dispaly multiplication of a given integer
// //example number 9
var num = 9;
var div = 0;
for (var i = 1; i <= 10; i++) {
    console.log("".concat(num, " x ").concat(i));
}
// //write a code to check palindrome or not
// //cara lopping example madam -> palindrome
var str = "madam";
var res = "";
for (var i = str.length - 1; i >= 0; i--) {
    res += str[i];
}
console.log(res);
if (str == res) {
    console.log("palindrome");
}
else {
    console.log("not palindrome");
}
//  //write a code to convert centimeter to kilometer
//  //example 100000cm -> 1 km
var centiValue = 100000;
var kmValue = centiValue / 100000;
console.log("".concat(kmValue, " km"));
//write a code to format number as currency (IDR)
//example 1000 -? Rp. 1.000,00
var input4 = 1000;
var hasil4 = "";
var inputString = input4.toString();
var penambahTitik = 0;
//9
for (var i = inputString.length - 1; i >= 0; i--) {
    penambahTitik++;
    if (penambahTitik % 3 == 0) {
        hasil4 = "." + inputString[i] + hasil4;
    }
    else {
        hasil4 = inputString[i] + hasil4;
    }
}
console.log("Rp. ".concat(hasil4, ",00"));
//write a code to remove the first occurence of a given "search string" from a string
//example : string ="Hello world", search string ="ell" -> "Ho World"
var searchWord = "Hello world";
var searchWordstring = searchWord.split("ell").join('');
console.log(searchWordstring);
// Write a code to capitalize the first letter of each word in a string
//example: "hello world"-> "Hello World"
var input6 = "hello world";
var hasil6 = "";
var penghitunghurufpertama = 0;
for (var i = 0; i < input6.length; i++) {
    if (penghitunghurufpertama == 0) {
        hasil6 = hasil6 + input6[i].toUpperCase();
    }
    else {
        hasil6 = hasil6 + input6[i];
    }
    penghitunghurufpertama++;
    if (input6[i] == " ") {
        penghitunghurufpertama = 0;
    }
}
console.log(hasil6);
//Write a code to swap the case of each character from string 
// Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
var input7 = "The QuiCk BrOwN Fox";
var hasil7 = "";
var codeAsciiSaatini = 0;
//0      //19
for (var i = 0; i < input7.length; i++) {
    codeAsciiSaatini = input7.charCodeAt(i);
    if (input7[i] == " ") {
        hasil7 = hasil7 + input7[i];
    }
    else {
        if (codeAsciiSaatini > 90) {
            codeAsciiSaatini = codeAsciiSaatini - 32;
        }
        else {
            codeAsciiSaatini = codeAsciiSaatini + 32;
        }
        hasil7 = hasil7 + String.fromCharCode(codeAsciiSaatini);
    }
}
console.log(hasil7);
//Write a code to find the largest of two given integers
// Example : num1 = 42, num2 = 27 → 42
var input8 = 42;
var input81 = 27;
if (input8 > input81) {
    console.log("".concat(input8, " lebih besar dari ").concat(input81));
}
else {
    console.log("".concat(input81, " lebih kecil ").concat(input8));
}
//Write a conditional statement to sort three numbers
// Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
var input9 = 42;
var input91 = 27;
var input912 = 18;
var hasil9 = [];
var input9Array = [42, 27, 18];
for (var i = 0; i < input9Array.length; i++) {
    console.log(input9Array[i]);
}
//Write a code that shows 1 if the input is a string, 2 if the input is a number,
// and 3 for others data type. Example : “hello” → 1
var input10 = "hello";
var input10Type = typeof input10;
var text = 0;
switch (input10Type) {
    case "string":
        text = 1;
        break;
    case "number":
        text = 2;
        break;
    default:
        text = 3;
}
console.log(text);
// Write a code to change every letter a into * from a string of input
// Example : ‘An apple a day keeps the doctor away’ ->
//  `*n *pple * d*y keeps the doctor *w*y
var input11 = "An apple a day keeps the doctor away";
var hasil11 = "";
for (var i = 0; i < input11.length; i++) //6
 {
    if (input11[i] == "A") //p
     {
        hasil11 = hasil11 + "*";
    }
    else if (input11[i] == "a") //p
     {
        hasil11 = hasil11 + "*";
    }
    else //p
     {
        hasil11 = hasil11 + input11[i];
    }
    //*n *pp
}
console.log(hasil11);
