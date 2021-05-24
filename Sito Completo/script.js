function aggiungiElementi() {
    for (let i of contenuti) {
        

        let preferiti=document.createElement("z");
        preferiti.setAttribute("class", "prefe");
        let immPre=document.createElement("img");
        immPre.setAttribute("class", "stella")
        immPre.src="img/aggiungi.png";
        let fotogioc=document.createElement("img");
        fotogioc.setAttribute("class", "fotogiocatore");
        fotogioc.src=i.immagine;
        let elemento=document.createElement("div");
        elemento.setAttribute("class", "Gio");
        let descrizio=document.createElement("p");
        descrizio.style.display= "none";
        let paragrafo=document.createTextNode(i.descrizione);
        descrizio.appendChild(paragrafo);        
        let button=document.createElement("z");
        let span=document.createElement("span");
        let textspan=document.createTextNode("Scopri di più");
        span.appendChild(textspan);
        button.appendChild(span);
        let titolo=document.createElement("h1");
        let testo=document.createTextNode(i.titolo);
        titolo.appendChild(testo);
        preferiti.appendChild(titolo);
        preferiti.appendChild(immPre);
        elemento.appendChild(preferiti);
        elemento.appendChild(fotogioc);
        elemento.appendChild(descrizio); 
        elemento.appendChild(button);
        Giocatore.appendChild(elemento);
          
        
        button.addEventListener("click", mostra)
        preferiti.addEventListener("click", aggiungiPref);
    }
}

function cerca(Event){
    let filtro=Event.currentTarget.value.toUpperCase();
    let gioc=Giocatore.querySelectorAll(".Gio");
    for (let c of gioc){
        let titolo=c.querySelector("h1").textContent.toUpperCase(); 
        if (titolo.indexOf(filtro)>-1) {
            c.style.display="";
        } else c.style.display="none";
    }
}

function mostra(Event) {
    let des=Event.currentTarget.parentNode.querySelector("p");
    console.log(des);
    let span2=Event.currentTarget.parentNode.querySelector("span");
    
    if (des.style.display === "none") {
        des.style.display="";
        span2.textContent="Torna indietro";
    } else {
        des.style.display="none";
        span2.textContent="Scopri di più";
    }

}

function aggiungiPref(Event) {
    prefer.classList.remove("preferiti");
    let a2=Event.currentTarget.parentNode.querySelector(".prefe h1").textContent;
    let x2=Event.currentTarget.parentNode.querySelector(".fotogiocatore").src;
    console.log(x2);

    
    

    let imgPre2=document.createElement("img");
    imgPre2.src="img/aggiungi.png";
    let titolo2=document.createElement("h1");
    let testo2=document.createTextNode(a2);
    let fotogioc2=document.createElement("img");
    fotogioc2.src=x2;
    let boxprefe=document.createElement("div");
    boxprefe.setAttribute("class", "giocatorepreferito");
    let pref2=document.createElement("z");
    pref2.setAttribute("class", "pref2");
    boxprefe.appendChild(pref2);
    boxprefe.appendChild(fotogioc2);
    prefer.appendChild(boxprefe);
    titolo2.appendChild(testo2);
    pref2.appendChild(titolo2);
    pref2.appendChild(imgPre2);

    Event.currentTarget.removeEventListener("click", aggiungiPref);

}

const ricerca=document.querySelector(".search-txt");
ricerca.addEventListener("keyup", cerca);

const Giocatore=document.querySelector(".Giocatore");

const prefer=document.querySelector(".preferiti");

aggiungiElementi();