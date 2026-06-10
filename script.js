function entrar(){

document.getElementById("entrada").style.display="none";
document.getElementById("site").style.display="block";

document.getElementById("musica").play();

}

const inicio = new Date("2017-10-15T12:00:00");

function atualizar(){

const agora = new Date();

let diff = agora - inicio;

let dias = Math.floor(diff / (1000*60*60*24));
let horas = Math.floor(diff / (1000*60*60));
let minutos = Math.floor(diff / (1000*60));
let segundos = Math.floor(diff / 1000);

document.getElementById("contador").innerHTML =
`
${dias.toLocaleString()} dias<br>
${horas.toLocaleString()} horas<br>
${minutos.toLocaleString()} minutos<br>
${segundos.toLocaleString()} segundos
`;

}

setInterval(atualizar,1000);
atualizar();
