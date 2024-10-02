function exo1(){

    // Entrée des trois notes d'un participant
    var n1 = parseFloat(prompt("Entrer la première note"))
    var n2 = parseFloat(prompt("Entrer la seconde note"))
    var n3 = parseFloat(prompt("Entrer la troisième note"))

    // Calcul de la moyenne
    moy = (n1 + n2 + n3)/3

    // Attribution du niveau selon la moyenne
    if(moy<50){
        alert("Niveau debutant")
    } else if(moy<70){
        alert("Niveau intermediaire")
    } else {
        alert("Niveau expert")
    }

}

function exo2(){

    // Saisir les deux mots
    m1 = prompt("Saisir le premier mot")
    m2 = prompt("Saisir le second mot")

    // Mettre les mots en majuscule
    m1 = m1.toUpperCase()
    m2 = m2.toUpperCase()

    // Enlever les espaces avant et après le mot
    m1 = m1.trim()
    m2 = m2.trim()

    // Comparaison des mots
    if(m1 == m2){
        alert("Les mots sont identiques")
    } else {
        alert("Les mots sont différents")
    }
}

    


