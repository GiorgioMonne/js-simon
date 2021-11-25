// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


let casuali = [];
let numtrov=[];
// let acc=0;
// let num;


for(let i=0;i<5;i++){
    num = Math.floor(Math.random() * 100) + 1;
    casuali.push(num);
} 

setTimeout(chiediImp,3000);



function chiediImp(){
    for(let k=0;k<5;k++){
        
        let numImput = parseInt(prompt('Inserire il numero da confrontare'));
        console.log(numImput);
        if(casuali.includes(numImput) == true){
            numtrov.push(numImput);
        }else{
            numtrov.push(" ");
        }

    }
    console.log(numtrov);
    document.querySelector('.container').innerHTML = "";
}


for(let j= 0;j < casuali.length;j++){
    let numero = casuali[j];
    addNum(numero);
    let nTrov=numtrov[j];
    addNum(nTrov);

}

function addNum(numero){

	let numeri =`
	<div class="box-numeri">
        <span>${casuali}</span>
    </div>`;

	document.querySelector('.container').innerHTML = numeri;
}





