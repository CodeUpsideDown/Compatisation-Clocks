function setClock(offSet){
const currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let day = currentDate.getDate();
let tOs = currentDate.getTimezoneOffset()/60;
outSet = 0;
if (tOs <= 0 && offSet <= 0){
    outSet = tOs - offSet;
}else if (tOs < 0 && offSet > 0){
    outSet = tOs - offSet;
}else if (tOs > 0 && offSet < 0){
    outSet = tOs + offSet;
}else if (tOs > 0 && offSet > 0){
    outSet = -tOs + offSet;
}

if (Number.isInteger(outSet)) {
    hours = hours + outSet;
} else {
    hours = hours + Math.floor(outSet);
    minutes = minutes + (outSet % 1) * 60;

    if (minutes >= 60) {
        hours = hours + 1;
        minutes = minutes - 60;
    } else if (minutes < 0) {
        hours = hours - 1;
        minutes = 60 + minutes;
    }
}

if (hours < 0) {
    hours = hours + 24;
    day = day - 1;
} else if (hours >= 24) {
    hours = hours - 24;
    day = day + 1;
}


console.log(outSet);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(day);
}



