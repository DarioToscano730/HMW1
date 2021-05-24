function Contenuto(elemento, sezione){
    const contenitore= document.createElement('div');
    const contenitore2= document.createElement('div');
    contenitore.classList.add('gen');
    contenitore2.classList.add('contenitore2')
    const immagine=document.createElement('img');
    immagine.src=elemento.immagine;
    const titolo=document.createElement('h2');
    titolo.textContent=elemento.titolo;
    const text=document.createElement('h4');
    text.textContent=('Scopri');
    text.classList.add('mdescription');
    const descrizione=document.createElement('span');
    descrizione.textContent=elemento.descrizione;
    descrizione.classList.add('nascondi');
    descrizione.classList.add('descrizione');
    immagine.classList.add('Calcio');
    const bm=document.createElement('img');
    bm.src="img/aggiungi.png";
    bm.classList.add('icon');
    contenitore.appendChild(titolo);
    contenitore2.appendChild(text);
    contenitore.appendChild(immagine);
    contenitore.appendChild(contenitore2);
    contenitore2.appendChild(bm);
    contenitore.appendChild(descrizione);
    sezione.appendChild(contenitore);
}
function addfavorites(event){
    const variabile=event.currentTarget.parentElement.parentElement;
    if(!variabile.classList.contains('bm')){
    	const sezione=document.querySelector('.preferiti');
        const contenitore= document.createElement('div');
        const contenitore2= document.createElement('div');
        contenitore.classList.add('divpref');
        contenitore2.classList.add('contenitore2');
        const immagine=document.createElement('img');
        immagine.src=variabile.querySelector('img').src;
        const titolo=document.createElement('h2');
        titolo.textContent=variabile.querySelector('h2').textContent;
        const text=document.createElement('h4');
        text.textContent=('Scopri');
        text.classList.add('mdescription');
        const descrizione=document.createElement('span');
        descrizione.textContent=variabile.querySelector('span').textContent;
        descrizione.classList.add('nascondi');
        descrizione.classList.add('descrizione');
        immagine.classList.add('Calcio');
        const bm=document.createElement('img');
        bm.src="img/rimuovi.png";
        bm.classList.add('iconp');
        contenitore.appendChild(titolo);
        contenitore2.appendChild(text);
        contenitore.appendChild(immagine);
        contenitore.appendChild(contenitore2);
        contenitore2.appendChild(bm);
        contenitore.appendChild(descrizione);
        sezione.appendChild(contenitore);
        sezione.classList.remove('nascondi');
        variabile.classList.add('bm');
        text.addEventListener('click', showdescription);
        
        bm.addEventListener('click', removefavorites);        
    }
}
function showdescription(event){
    const oggetto= event.currentTarget.parentElement.parentElement;
    if(oggetto.querySelector('span').classList.contains('show')){
        oggetto.querySelector('span').classList.add('nascondi');
        oggetto.querySelector('span').classList.remove('show');
    }
    else{
        oggetto.querySelector('span').classList.remove('nascondi');
        oggetto.querySelector('span').classList.add('show');
    }
} 
function removefavorites(event){
    const sezione=document.querySelector('.preferiti');
    const elemento=event.currentTarget.parentElement.parentElement;
    const preferiti=document.querySelectorAll('.preferiti .divpref');
    const libro=document.querySelectorAll('.bm');
    for(let elementi of libro){
        if(elementi.firstChild.textContent===elemento.firstChild.textContent){
            elementi.classList.remove('bm');   
        }
    }
    elemento.remove();
    if(!sezione.hasChildNodes()){
        sezione.classList.add('nascondi');
    }    
}
function loadcontent(event){    
    let oggetto=null;
    let cliccato=0;
    if(document.querySelector('div.corrente').classList.contains('nascondi')){
        cliccato=1;
    } else{
        cliccato=0;
    }
    document.querySelector('div.corrente').classList.remove('nascondi');
    document.querySelector('.search').classList.remove('nascondi');
    if(event.currentTarget===lastelement && cliccato===0){
        document.querySelector('div.corrente').classList.add('nascondi');
        document.querySelector('.search').classList.add('nascondi');
    }
    if(event.currentTarget===document.querySelector('#Giocatori')){
        oggetto=Giocatori;        
    }
    else if(event.currentTarget===document.querySelector('#Presenze')){
        oggetto=Presenze;}
    else if(event.currentTarget===document.querySelector('#Capitani')){
        oggetto=Capitani;}
 
    last=oggetto;

    while(document.querySelector('div.corrente').firstChild){
            document.querySelector('div.corrente').removeChild(document.querySelector('div.corrente').firstChild);
    }
    lastelement=event.currentTarget;    
    for(let elemento of oggetto){
        Contenuto(elemento, document.querySelector('div.corrente'));
    }
    const mostra= document.querySelectorAll('.mdescription');
        for(let button of mostra){
    button.addEventListener('click', showdescription);
    }
    const preferiti= document.querySelectorAll('.icon');
        for(let button of preferiti){
    button.addEventListener('click', addfavorites);
    }
}
function initMap() {
    const myLatLng = { lat: 37.59797809255441, lng: 15.054990095878283};
    const map = new google.maps.Map(document.getElementById("map"), 
    {
      zoom: 15,
      center: myLatLng,
    });
    new google.maps.Marker
    ({
      position: myLatLng,
      map,
    });
  } 
function onResponse(response){
    return response.json();
}
function funzione(json){
    oggetto.src=json.image;
}
function changesImg(event){
    oggetto=event.currentTarget;
    console.log(oggetto);
    if(oggetto.id=="Giocatori"){
        fetch(footballApi + "api/images/Giocatori/").then(onResponse).then(funzione);
        console.log('Giocatori');
    }
    else if(oggetto.id=="Presenze"){
        fetch(footballApi + "api/images/Presenze/").then(onResponse).then(funzione);
    }
    else if(oggetto.id=="Capitani"){
        fetch(footballApi + "api/images/Capitani/").then(onResponse).then(funzione);
    }
    else if(oggetto.id=="Catania"){
        fetch(footballApi + "api/images/Catania/").then(onResponse).then(funzione);
    }    
}
function startsearch(){    
    const oggetti=document.querySelectorAll('.corrente div.gen');
    const sezione=document.querySelector('corrente');
    arrayricerca.splice(0,arrayricerca.length);
    while(document.querySelector('div.corrente').firstChild){
        document.querySelector('div.corrente').removeChild(document.querySelector('div.corrente').firstChild);
    }
    if(ricerca.value!==""){
        for(let oggetto of Giocatori){
            
            if(oggetto.titolo.toLocaleLowerCase().indexOf(ricerca.value.toLocaleLowerCase())!==-1){
                arrayricerca.push(oggetto);
            }            
        }
        for(let oggetto of Presenze){
            if(oggetto.titolo.toLocaleLowerCase().indexOf(ricerca.value.toLocaleLowerCase())!==-1){
                arrayricerca.push(oggetto);
            }            
        }
        for(let oggetto of Capitani){
            if(oggetto.titolo.toLocaleLowerCase().indexOf(ricerca.value.toLocaleLowerCase())!==-1){
                arrayricerca.push(oggetto);
            }            
        }    
    
        if(ricerca.length!==0){
            for(let div of arrayricerca){
                Contenuto(div,document.querySelector('div.corrente') );
            }            
        }  
        const mostra= document.querySelectorAll('.mdescription');
        for(let button of mostra){
            button.addEventListener('click', showdescription);
        }
        const preferiti= document.querySelectorAll('.icon');
        for(let button of preferiti){
            button.addEventListener('click', addfavorites);
        } 
    }
    else{
        console.log('hello');
        while(document.querySelector('div.corrente').firstChild){
            document.querySelector('div.corrente').removeChild(document.querySelector('div.corrente').firstChild);
        }    
        for(let elemento of last){
            Contenuto(elemento, document.querySelector('div.corrente'));
        }
        const mostra= document.querySelectorAll('.mdescription');
        for(let button of mostra){
            button.addEventListener('click', showdescription);
        }
        const preferiti= document.querySelectorAll('.icon');
        for(let button of preferiti){
            button.addEventListener('click', addfavorites);
        }
    } 
}
let oggetto;
let last=null;
const arrayricerca=[];
let map;
let lastelement=null;
const img1=document.querySelector('.Galleria #Giocatori');
const img2=document.querySelector('.Galleria #Presenze');
const bGiocatori=document.querySelector('#Giocatori');
const bPresenze=document.querySelector('#Presenze');
const bCapitani=document.querySelector('#Capitani');
const ricerca=document.querySelector('.search input');
const img3=document.querySelector('.Galleria #Capitani');
const img5=document.querySelector('.Galleria #Catania');
bGiocatori.addEventListener('click', loadcontent);
bPresenze.addEventListener('click', loadcontent);
bCapitani.addEventListener('click', loadcontent);
ricerca.addEventListener('keyup', startsearch);
img1.addEventListener('click', changesImg);
img2.addEventListener('click', changesImg);
img3.addEventListener('click', changesImg);
img5.addEventListener('click', changesImg)
