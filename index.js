let counter = document.getElementById("countLabel").textContent;
const increment = () => {
    counter++;
    document.getElementById("countLabel").innerHTML = counter ;
}
document.getElementById("Increment").addEventListener("click", increment);

const dencrement = () => {
    counter--;
    document.getElementById("countLabel").innerHTML = counter ;
}
document.getElementById("Decrement").addEventListener("click", dencrement);

const reset = () => {
    counter = 0;
    document.getElementById("countLabel").innerHTML = counter ;
}

document.getElementById("Reset").addEventListener("click", reset);