function exo1(){

    // Entrée des trois notes d'un participant
    let n1 = parseFloat(prompt("Entrer la première note"))
    let n2 = parseFloat(prompt("Entrer la seconde note"))
    let n3 = parseFloat(prompt("Entrer la troisième note"))

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
    let m1 = prompt("Saisir le premier mot")
    let m2 = prompt("Saisir le second mot")

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


    // Saisir le premier mot
    let m3 = prompt("Saisir le premier mot")

    // Convertir le mot en tableau
    tabM3 = m3.split('');

    // Saisir le second mot
    let m4 = prompt("Saisir le second mot")

    // Convertir le mot en tableau
    tabM4 = m4.split('');

    let identique = new Boolean(true);


    // Creer des tableaux alphabet pour ensuite convertir les mot en majuscules
    tabMin = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    tabMaj = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


    // Boucle sur le mot et sur l'alphabet en comparant chaque lettre pour mettre tout le mot en majuscule
    for(i=0; i<26; i++){
        for(j=0; j< tabM3.length; j++){
            
            if(tabM3[j] == tabMin[i] || tabM3[j] == tabMaj[i]){
            tabM3[j] = tabMaj[i]
            }
        }
        
        for(j=0; j< tabM4.length; j++){
            if(tabM4[j] == tabMin[i] || tabM4[j] == tabMaj[i]){
            tabM4[j] = tabMaj[i]
            }
        }
    }

    // Enlever les espaces dans le mot
    for(i=0; i<tabM3.length; i++){
        if(tabM3[i] == " "){
            delete tabM3[i]
        }
    }

    // Enlever les valeurs nulles dans le mot
    tabM3 = tabM3.filter(element => element !== null)


    for(i=0; i<tabM4.length; i++){
        if(tabM4[i] == " "){
            delete tabM4[i]
        }
    }

    tabM4 = tabM4.filter(element => element !== null)

    // Comparer chaque lettre des mots, si il y a une erreur, les mots sont différents
    for(i=0; i<tabM3.length; i++){
        if(tabM3[i] != tabM4[i]){
            identique = false
        }
    }

    // Afficher si les mots sont identiques
    if(identique){
        alert("Les mots sont identiques")
    } else {
        alert("Les mots sont différents")
    }
    
}

    


