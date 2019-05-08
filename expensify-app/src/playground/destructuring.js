console.log('destructuring');

// Object destruturing
const person = {
    name: 'Karol',
    age: 27,
    location: {
        city: 'Kraków',
        temp: 15
    }
};

// console.log(`${person.name} is ${person.age}`)
// To powyżej możemy zrobić za pomocą samego name i age

// const name = person.name;
// const age = person.age;
// console.log(`${name} is ${age}`);

// teraz poniżej zrobimy to samo co powyżej ale za pomocą destruturing (prosty przykład)
// const { name, age } = person;
// w name, użyjemy jeszcze wartości defaultowej, w razie jakby ktoś nie podał name w obiekcie, wartosc defaultowa zostanei uzyta tylko jesli nikt nie pdoa name w obiekcie person
const { name = 'Anonumous', age } = person;

console.log(`${name} is ${age}`);

const { city, temp } = person.location;

if (city && temp) {
    console.log(`temp: ${temp} location: ${city}`);
}

// jeśli chcemu użyć innego nazewnictwa dla "temp" to: temp: temperature
// const { city, temp: temperature } = person.location;
// if (city && temperature ) {
//     console.log(`temp: ${temperature } location: ${city}`);
// }

// Challenge
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

// Poniżej zmieniamy nazwę 'name', na 'publisherName' i od razu ustawiamy jej wartośc defaultową
const { name: publisherName = 'self published' } = book.publisher;

console.log(publisherName)

// Czyli generalnie destructuring słuzy do wyciągania wartości z obiektów i tablic i rpzypisania tych wartości do zmiennych/stałych.
// Mamy możliwość zniamy nazwy tych zmiennych/stałych i ustawiania ich wartości defaultowych


// Array destructuring

const address = ['Polska', 'Małopolskie', 'Kraków', 'wysoluchow'];

// Array Destructuring
// W Array Destructuring, ważna jest pozycja, a nie nazwa tak jak to było w Object destruturing - nie ma "renaming syntax"
const [kraj, wojewodztwo, miasto, ulica] = address;

// Ustawiwanie wartości defaultowej - bedzie pobrana jak w tablicy address jej nie ebdzie
// const [kraj, wojewodztwo, miasto="Warszawa", ulica] = address;

// Jeśli chcesz ztobić destructuring tylko dla poszczególnych elementów tablicy to:
// Poniżej tylko województwo, następne elementy będą pominięte, pierwszyy też bo masz przecinek
// const [ , wojewodztwo ] = address;
// Poniżej tylko miasto
// const [ , , miasto ] = address;

console.log(`You are in ${kraj}, ${wojewodztwo}`);

// Challenge
const item = ['Coffe (hot)', '2zł', '4zł', '6zł'];

// Wyswietlimy tylko nazwe i cene średnią
const [ type, , medium] = item;

console.log(`type: ${type}, costs ${medium}`);