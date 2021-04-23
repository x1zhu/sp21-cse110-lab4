var myVar = setInterval(Time, 1000);

function Time()
{
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
}
