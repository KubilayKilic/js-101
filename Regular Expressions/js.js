//Using the Test Method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

//Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

//Match a Literal String with Different Possibilities

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

//Ignore Case While Matching

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);

//Extract Matches

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

//Find More Than the First Match

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);

//Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

//Match Single Character with Multiple Possibilities

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);

//Match Letters of the Alphabet

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

//Match Numbers and Letters of the Alphabet

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);

//Match Single Characters Not Specified

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);

//Match Characters that Occur One or More Times

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi;
let result = difficultSpelling.match(myRegex);

//Match Characters that Occur Zero or More Times

let chewieRegex = /Aa*/;

let result = chewieQuote.match(chewieRegex);

//Find Characters with Lazy Matching

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);

//Find One or More Criminals in a Hunt

let reCriminals = /C+/; 

//Match Beginning String Patterns

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // this ^ will only search at the beginning of.
let result = calRegex.test(rickyAndCal);

//Match Ending String Patterns

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // this ^ will only search at the end of.
let result = lastRegex.test(caboose);

//Match All Letters and Numbers

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

//Match Everything But Letters and Numbers

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;

//Match All Numbers

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; //to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.
let result = movieName.match(numRegex).length;

//Match All Non-Numbers

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;

//Restrict Possible Usernames

/* 

^[a-z][a-z]+\d*$:

^[a-z]: Kullanıcı adı bir harfle başlamalıdır.
[a-z]+\d*$: Ardından bir veya daha fazla harf gelmelidir ([a-z]+), ve sonra sıfır veya daha fazla sayı (\d*$) olabilir.
Bu durum, kullanıcı adının harfle başlaması ve ardından harflerle devam edip, isteğe bağlı olarak sayılarla tamamlanmasını sağlar.

^[a-z]\d\d+$:

^[a-z]: Kullanıcı adı bir harfle başlamalıdır.
\d\d+$: Ardından sadece sayılardan oluşmalıdır (\d\d+), ve en az iki sayı içermelidir (\d\d+$).
Bu durum, kullanıcı adının bir harfle başlaması ve ardından en az iki sayı içermesi gerektiğini kontrol eder.

| işlemcisi, regex içinde "veya" anlamına gelir. Yani, ya birinci durum ya da ikinci durum sağlanmalıdır. i flag'i ise büyük/küçük harf duyarlılığını kaldırır, yani kullanıcı adındaki harflerin büyük veya küçük olmasına bakmaksızın eşleşme yapar.

*/

//Match Whitespace

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s+/g;
let result = sample.match(countWhiteSpace);

//Match Non-Whitespace Characters

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);

//Specify Upper and Lower Number of Matches

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/ //match the entire phrase Oh no only when it has 3 to 6 letter h's.
let result = ohRegex.test(ohStr);

//Specify Only the Lower Number of Matches

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // only when it has four or more letter z's.
let result = haRegex.test(haStr);

//Specify Exact Number of Matches

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);

//Check for All or None

let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);

//Positive and Negative Lookahead

let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
//to match passwords that are greater than 5 characters long, and have two consecutive digits.
let result = pwRegex.test(sampleWord);

//Check For Mixed Grouping of Characters

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);

//Reuse Patterns Using Capture Groups

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // 42 42 42 yakalar, 10 10 10
let result = reRegex.test(repeatNum);

//Use Capture Groups to Search and Replace

/* Write a regex fixRegex using three capture groups that will search for each word in the string one two three. Then update the replaceText variable to replace one two three with the string three two one and assign the result to the result variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);

//Remove Whitespace from Start and End

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, "");

/*Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.*/