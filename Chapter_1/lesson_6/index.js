let yourName = prompt("Type your name ?");
let checkName = confirm(`Sure your name is ${yourName} ?`)
if (checkName)
{
    alert(`Your name is ${yourName}`);
}
else
{
    alert(`You are scam!!`);
}