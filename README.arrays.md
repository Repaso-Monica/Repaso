# Array methods

## .sort()

    Acepta una funcion dentro.

    ```js
        .sort( (a, b) => a.age < b.age )
    ```

## .reverse()

## .map()

    Convierte un array en otro de la misma longitud pero modificado.

    ```js
    const numbers = [1, 2, 3, 4]

    const newNumbers = numbers.map( (element) => {
        return element + 1
    })

    console.log(newNumbers) // [2,3,4,5]
    ```

## .filter()

    Filtra un array segun una funcion que le pasas. Guarda aquellos elementos que devuelven true.

    ```js

        peopleArray.filter( (cadaPersona) => {
            if(cadaPersona === 'female') {
                return true
            }
        })
    ```

## .reduce()

    Reduce un array a un unico valor.

    ```js
    function sumNumbers(acumulado, cadaNumero) {
        return acumulado += eachNumber
    }

    array.reduce( sumNumbers,  0 )
    ```

## .forEach()

    Igual que los otros pero simplemente ejecuta una funcion por cada elemento.

## .find()

    Encuentra un elemento segun el callback (funcion) que le pases. Como un filter pero devuelve solo la primera coincidencia.

## .some()

    Se comporta como el filter pero devuelve true si al menos uno de los elementos del array cumple la condicion (funcion) que se le pase.

## .every()

    Exactamente igual que el some pero solo devuelve true si todos los elementos cumplen la condicion

# Funciones

## Funcion nominal

    La clasica.

    ```js
    function nombreDeFuncion(argumento1, argumento2) {
        return argumento1 + argumento2
    }
    ```

## Funcion anonima

    Poco usada. Solo puede pasarse como callback o invocarla 'in situ'

    ```js
    function (argumento1, argumento2) {
        return argumento1 + argumento2
    }
    ```

## Arrow function

    ```js
    (argumento1, argumento2) => {
        return argumento1 + argumento2
    }
    ```

    Se puede guardar en variables

    ```js
    const funcionFlecha = (argumento1, argumento2) => {
        return argumento1 + argumento2
    }
    ```

    Si solo tiene una linea de codigo se pueden quitar las llaves y el return.

    ```js
    const funcionFlechaCorta = (argumento1, argumento2) => argumento1 + argumento2
    ```
