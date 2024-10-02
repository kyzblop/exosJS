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

function exo3(){

    // Saisir le mot de passe
    let mdp = prompt("Saisir le mot de passe")

    // Le convertir en tableau
    tabMdp = mdp.split('');

    // Declarer les conditions
    let taille = new Boolean(false)
    let maj = new Boolean(false)
    let min = new Boolean(false)
    let num = new Boolean(false)

    if(tabMdp.length >= 8){
        taille = true
    }

    // Creer des tableau alphabet minuscule et majuscule
    tabMin = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    tabMaj = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    tabNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]


    // Boucler sur le mot de passe et comparer avec les lettres en minuscule et en majuscule, puis les chiffres pour savoir si il y a des correspondances
    // Si le mot de passe contient une minuscule : le boolean min devient true
    // Si le mot de passe contient une majuscule : le boolean maj devient true
    // Si le mot de passe contient un chiffre : le boolean num devient true
    for(i=0; i<tabMdp.length; i++){
        for(j=0; j<26; j++){
            if(tabMdp[i] == tabMin[j]){
                min = true
            }

            if(tabMdp[i] == tabMaj[j]){
                maj = true
            }
        }

        for(k=0; k<11; k++){
            if(tabMdp[i] == tabNum[k]){
                num = true
            }
        }
    }

    // Si une des conditions n'est pas respectée, le mot de passe est faux
    // On indique ensuite quelle conditions n'est pas remplie
    if(num == true && min == true && maj == true && taille == true){
        alert("Le mot de passe est valide")
    } else {
        alert("Le mot de passe n'est pas valide")
        if(num == false){
            alert("Il manque un chiffre")
        }

        if(min == false){
            alert("Il manque une minuscule")
        }

        if(maj == false){
            alert("Il manque une majuscule")
        }

        if(taille == false){
            alert("Il faut qu'il fasse au moins 8 caractères")
        }
    }
}

    


