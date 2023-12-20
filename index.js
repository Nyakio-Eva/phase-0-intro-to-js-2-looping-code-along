
const names = ['Guadalupe', 'Ollie', 'Aki'];
function writeCards(names,eventname){
    const newArray = [];
    for(let i = 0; i < names.length; i++){ 
      newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventname} gift!`);
    }
    return newArray;
}
//console.log(writeCards(names, 'suprise'));

function countDown(number){
    for(let i= number; i >= 0; i--){
        console.log(i);
    }
}
countDown(4);