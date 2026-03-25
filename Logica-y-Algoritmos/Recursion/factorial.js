function factorial(n){
    console.log('Calculando factorial de ', n)
    
    // Validacion de numeros negativos
    if(n < 0){
        throw new Error('El factorial no esta definido para numeros negativos.')
    }

    // Caso base 
    // 0! = 1
    if(n === 0){
        console.log('Case base: factorial(0) = 1');
        return 1;
    }

    const resultado = n * factorial (n - 1);
    console.log(`Retornando ${resultado} para n = ${n}`)

    //Llamada recursiva 
    // n! = n *( n-1)!
    return resultado;
}

console.log('Resultado:', factorial(5));

/* factorial(5)
= 5 * factorial(4)
= 5 * 4 * factorial(3)
= 5 * 4 * 3 * factorial(2)
= 5 * 4 * 3 * 2 * factorial(1)
= 5 * 4 * 3 * 2 * 1 * factorial(0) 
= 5 * 4 * 3 * 2 * 1 * 1 
= 120 */