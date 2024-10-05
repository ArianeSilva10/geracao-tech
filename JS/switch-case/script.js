let modo = prompt("Digite um modo: dark, red ou blue:");

switch (modo) {
    case "dark":
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        break;
    case "red":
        document.querySelector("body").style.backgroundColor = "#ff0000";
        document.body.style.color = "white";
        break;
    case "blue":
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "white";
        break;
    default:
        document.body.style.backgroundColor = "pink";
        document.body.style.color = "black";
}