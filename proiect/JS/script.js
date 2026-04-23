console.log("JS INCARCAT");

function setTema(t){
document.body.classList.remove("gradient","light","dark");
document.body.classList.add(t);
}

function rate(n){
alert("Ai dat rating " + n + " stele!");
}

function like(){
alert("Ai adăugat la favorite ❤️");
}

/* COS */
function addToCart(nume){

let cos = JSON.parse(localStorage.getItem("cos")) || [];

cos.push(nume);

localStorage.setItem("cos", JSON.stringify(cos));

alert(nume + " adăugat în coș 🛒");

afiseazaCos();
}

function afiseazaCos(){

let lista = document.getElementById("cos-lista");
if(!lista) return;

let cos = JSON.parse(localStorage.getItem("cos")) || [];

lista.innerHTML="";

cos.forEach((item,index)=>{
let li=document.createElement("li");
li.innerHTML=item + ` <button onclick="stergeDinCos(${index})">❌</button>`;
lista.appendChild(li);
});
}

function stergeDinCos(index){

let cos = JSON.parse(localStorage.getItem("cos")) || [];

cos.splice(index,1);

localStorage.setItem("cos", JSON.stringify(cos));

afiseazaCos();
}



/* RANDOM */
function randomParfum(){

let parfumuri=[
"parfumuri/lebeau.html",
"parfumuri/sauvage.html",
"parfumuri/eros.html",
"parfumuri/khamrah.html",
"parfumuri/maahir.html",
"parfumuri/erosenergy.html",
"parfumuri/najim.html",
"parfumuri/powerfully.html",
"parfumuri/imagination.html",
"parfumuri/oudwood.html",
"parfumuri/armani.html"
];

let random=Math.floor(Math.random()*parfumuri.length);

window.location.href=parfumuri[random];
}

window.addEventListener("DOMContentLoaded", afiseazaCos);

document.addEventListener("DOMContentLoaded", function(){

    const form = document.getElementById("form-contact");

    if(!form){
        console.log("Form NOT found");
        return;
    }

    form.addEventListener("submit", function(e){

        e.preventDefault();
        console.log("AJAX submit pornit");

        let nume = document.getElementById("nume").value;
        let email = document.getElementById("email").value;

        fetch("http://localhost/proiect/procesare.php", {
      method: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "nume=" + encodeURIComponent(nume) + "&email=" + encodeURIComponent(email)
  })
  .then(response => response.text())
  .then(data => {
      document.getElementById("rezultat").innerHTML =
      "<span style='color:green; font-weight:bold;'>✔ Trimis cu succes!</span><br>" + data;

      document.getElementById("form-contact").reset();
  })
  .catch(error => {
      console.log("Eroare:", error);
  });

    });

});
