let x = 15,y = 20;
// let y = 20
// function defined
function add(a,b) {
    return a+b
}

// function called
let result = add(x,y)
console.log(result)

// if-statement 
let a = 20, 
    b = 2;

function divide(a, b) {
    if(b == 0) {
       throw 'Division by zero';
    }
    return a / b;
}
let divresponse = divide(a,b)
console.log(divresponse)

//array
let items = ['table','chair','laptop','lamp']

console.log(items.length)

// for loop 
for(let i=0; i<4; i++){
    console.log(items[i])
}

for(let i of items){
    console.log(i)
}

// alert('hello world')
let msg ;
msg = 'hi';
console.log(msg)
s = 100
console.log(s)

let str1 = 'suman';
str1 = 'bhuban';
console.log(str1)

let str2 = 'dipa';
str2 = 201;
console.log(str2)

// const name= 'nandita';
// name = 'mona';
// console.log(name)

let n = 1.1111111;
console.log(n)

let inf = 2;
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE + Number.MAX_VALUE)
console.log(-Number.MAX_VALUE - Number.MAX_VALUE)

console.log(NaN === NaN)

let message = 'I\'m also\" a valid string';
message = message + '\'\'which is also defined';
console.log(message)

console.log(Boolean(null))

let m = 1n;
console.log(m, typeof m)

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

console.log(contact['address']['street'])
console.log(contact.address.street)



let f = 0b111;
console.log(f); // 7

let error = '404';
if (error) {
  console.log(Boolean(error));
}

let info = 'I am';
let infoLiteral = `${info} Suman`;
console.log(infoLiteral, typeof infoLiteral);

let o = '456';
console.log(parseInt(o) ,typeof parseInt(o))

let t = 123 ;
let gtw = t.toString() ; 
console.log(gtw, typeof gtw);

let address = {
    'building no': 3960,
    street: 'North 1st street',
    state: 'CA',
    country: 'USA'
};

console.log(address["building no"])