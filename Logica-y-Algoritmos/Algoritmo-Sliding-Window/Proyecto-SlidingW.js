function findLongestWord(text) {
    // Dividir el texto en palabras
    const words = text.split(' ');

    let longestWord = ''; // Inicializar la palabra más larga

    // Recorrer el arreglo de palabras
    for (let i = 0; i < words.length; i++) {
        // Limpiar signos de puntuación (opcional pero recomendado)
        let word = words[i].replace(/[.,!?]/g, '');

        // Comparar longitudes
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    // Retornar la palabra más larga
    return longestWord;
}

const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(findLongestWord(text));
