var greeting = "heLlo THerE";
greeting = greeting.toLowerCase();
console.log(greeting.toLowerCase());
var greetingChange = greeting[0];
var firstWord = greetingChange.toUpperCase();
var secondPartString = greeting.slice(1);
var totalGreeting = firstWord + secondPartString;
console.log(totalGreeting);

var totalPart2 = greeting[0].toUpperCase() + greeting.slice(1).toLowerCase();
console.log(totalPart2);
var hadShower = true;
var hasBackpack = false;
var offer = hadShower && hasBackpack;
console.log(offer);
var hadShower = true;
var hasBackpack = true;
var offer1 = hadShower && hasBackpack;
console.log(offer1);
var apple = true;
var orange = false;
var frut = apple || orange;
console.log(frut);
var weekend = true;
var needToWalk = !weekend;
var freeTime = needToWalk;
console.log(freeTime);
/*якщо змінна має булеве значення- false; і якщо застосувати не(!)перед змінною,
 то воно автоматично стає true!!!*/
/* і навпаки якщо змінна має значення true, то знак(!) робить її false.*/
needToWalk;-false
!needToWalk-true
var weekend = false;
var hadShower = true;
var apple = false;
var orange = true;
var youShouldChoose = !weekend && hadShower && (apple || orange );
console.log(youShouldChoose);
var height = 65;
var heightRestriction = 60;// Restriction-обмеження
var generalResult = height > heightRestriction;
console.log(generalResult);
var height = 60;
heightRestriction;
var generalResult1 = height >= heightRestriction;
console.log(generalResult1);
// (===) порівняння (цілком рівний до).
//порівнюємо числові типи данних.
var mySecretNumber = 5;
var chiccoNumber = 3;
var opinion = mySecretNumber === chiccoNumber;
console.log(opinion);
mySecretNumber;
var nickNumber = 7;
var opinion1 = mySecretNumber === nickNumber;
console.log(opinion1);
mySecretNumber;
var grouchoNumber = 5;
var opinion2 = mySecretNumber === grouchoNumber;
console.log(opinion2);
//застосування === з рядками
var string1 = "Hello";
var string2 = "Hi";
var iGuess = string1 === string2;
console.log(iGuess);
//застосування === з булевими змінними
var bulPositiv = true;
var bulNegative = false;
var bulTotal = bulPositiv === bulNegative;
console.log(bulTotal);
// (==) подвійний знак рівнсоті.(Проблизно рівний)
//можна порівнювати різні типи даних(числа з рядками)
var stringNumber = "5";
var actualNumber = 5;
var compears = stringNumber === actualNumber;
var compears1 = stringNumber == actualNumber;
console.log(compears,compears1);

console.log("cinema");
var age = 12;
var accompanied = true ;
var ageRestriction = 13;
var ageOk = (age >= ageRestriction);
var answer = ageOk || accompanied;
console.log(ageOk, answer);

var age = 13;
var ageRestriction = 13;
var accompanied = false;
var ageOk1 = (age >= ageRestriction) || accompanied;
console.log(ageOk1);

var myVariable;
//undefined - коли не присвоєне значення 'пуста змінна'
 console.log(myVariable);

var myNullVariable = null;
//null- ми самщстійно можемо позначити, що ця змінна в собі нічого не має.
console.log(myNullVariable);

var myTopDinosaurus = ["T-Rex", "Velociraptor", "Stegosaurus"];
console.log(myTopDinosaurus);

var dinosaurus = [
"T-Rex",
"Velociraptor",
"Stegosaurus",
"Triceraptops",
"Brachiosaurus",
"Pteranodon",
];
dinosaurus[6] = "Diplodocus";
dinosaurus[7] = "Apatosaurus";
dinosaurus[0] = "Tyrannosaurus Rex";
dinosaurus[33] = "Philosoraptor";
console.log(dinosaurus);

var unitedNumberAndDinosaurus = [3,"dinosaurus"["triceraptops","stegosaurus", 3627.5], 10];

var fruts = ["Apple", "Orange", "Pinapple", "Lime", "Banana"];
  fruts [0];
  fruts [1];
  fruts [2];
  fruts [3];
  fruts [4];
console.log(fruts);

var fruts1 = fruts.length;
console.log(fruts1);

var fruts2 = fruts[fruts.length - 1];
console.log(fruts2);

var animals = [];
  animals.push("cat");
  animals.push("dog");
  animals.push("hedgehog");
  animals.push("fox");
console.log(animals);

var animalsLength = animals.length;
console.log(animalsLength);

console.log(animals[0]);

console.log(animals.unshift("monkey"));
//unshift-додає новий елемент на першу позицію в масиві при цьому
//повертається нове значення довжини масиву(додався ще один елемент)
console.log(animals);

console.log(animals.unshift("Polar Bear"));

console.log(animals);

console.log(animals[0]);
console.log(animals[2]);


console.log("Видалення елементу з масиву (.pop)");

console.log(animals);

//створимо нову змінну для збереження значення видаленого параметра
var lastAnimal = animals.pop();
console.log(lastAnimal);

console.log(animals);

console.log(animals.pop());

console.log(animals);

console.log(animals.pop());

console.log(animals);

console.log(animals.unshift(lastAnimal));
console.log(animals);

console.log("Об'єднання масивів");
var vagetables = ["Potatoes","Pepper","Carrot"];
console.log(vagetables);

var fruts = ["Lemon","Kivi","Pear"];
console.log(fruts);

var products = vagetables.concat(fruts);
console.log(products);

console.log(vagetables);

console.log(fruts);

var berries = ["Cherry", "Blueberry", "Strawberry"];

var products1 = vagetables.concat(fruts, berries);

console.log(products1, berries);

console.log("Індекс елемента у масиві");

var colors = ["blue", "red", "green"];

console.log(colors.indexOf("blue"), colors.indexOf("red"));
var index = colors.indexOf("yellow");
console.log(index);
console.log("My mini massiv " + "My way");

var landMarks = [];
landMarks.push("My house");
landMarks.push("Front Path");
landMarks.push("Streetlamp");
landMarks.push("Leaky fire hidrant");
landMarks.push("Fire station");
landMarks.push("Cat center");
landMarks.push("My old school");
landMarks.push("My friend is house");
console.log(landMarks);

landMarks.pop();
landMarks.pop();
landMarks.pop();
landMarks.pop();
landMarks.pop();
landMarks.pop();
landMarks.pop();
console.log(landMarks);

var ingredientsOfSalad = [];
ingredientsOfSalad.push("Cucumber");
ingredientsOfSalad.push("Salt");
ingredientsOfSalad.push("Pepper");
ingredientsOfSalad.push("Tomatoes");
ingredientsOfSalad.push("Green onion");
ingredientsOfSalad.push("Olive oil");
console.log(ingredientsOfSalad);

var trueSalad = ingredientsOfSalad[0] + " " + ingredientsOfSalad[3] + " " + ingredientsOfSalad[2] + " " + ingredientsOfSalad[4] + " " + ingredientsOfSalad[1] + " " + ingredientsOfSalad[5];

console.log(trueSalad);


console.log(ingredientsOfSalad.join(", "));

var lastSalad = ingredientsOfSalad.pop();
console.log(lastSalad);

ingredientsOfSalad.pop();
ingredientsOfSalad.pop();
ingredientsOfSalad.pop();

console.log(ingredientsOfSalad.unshift(lastSalad));

console.log(ingredientsOfSalad.length);



console.log(Math.random()*10);
console.log(Math.random()*10);
console.log(Math.floor(3.7463563));
console.log(Math.floor(0.7986574345));

var namesMyFriends = [];
namesMyFriends.push("Ann");
namesMyFriends.push("Vovk");
namesMyFriends.push("Yurchik");
namesMyFriends.push("my Hanny");
console.log(namesMyFriends.length);
console.log(Math.random() * namesMyFriends.length);
var randomIndex = Math.floor(Math.random() * namesMyFriends.length);
console.log(randomIndex);

console.log(namesMyFriends[randomIndex]);

console.log("Hello Kyiv");
