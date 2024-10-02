// Exercice 1
/*
Entrer les 3 notes
Faire une moyenne

si la moyenne est <50
    attribuer le niveau "debutant"
si la moyenne est <70
    attribuer le niveau "intermediaire"
sinon attribuer le niveau "expert"
*/

function exo1(){

    var n1 = parseFloat(prompt("Entrer la première note"))
    var n2 = parseFloat(prompt("Entrer la seconde note"))
    var n3 = parseFloat(prompt("Entrer la troisième note"))

    
    moy = (n1 + n2 + n3)/3

    if(moy<50){
        alert("Niveau debutant")
    } else if(moy<70){
        alert("Niveau intermediaire")
    } else {
        alert("Niveau expert")
    }

}

    


