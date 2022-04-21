# Dia 1. Javascript Basico

## Metodos utiles y sencillos de los arrays.

`.includes(valor)` -> devuelve true si el valor esta en el array

`.indexOf(valor)` -> devuelve el indice del valor
`.push() .pop()`
`.unshift() .shift()`

Propiedades de los arrays

`.length`

## Objetos

Para acceder al valor de un objeto lo mas habitual es:

```js
objeto.propiedad;
person.name;
```

Tambien es posible hacerlo asi:

```js
objeto["propiedad"];
person["name"];
```

Para añadir un nuevo valor:

```js
objeto.nuevaPropiedad;
person.job = "Trabajo";
```

Para modificar un valor

```js
person.age++;
person.name = "Nuevo nombre";
person.name = person.name + " Apellido";
person.hobbies.push("nuevo hobby");
```

# Condicionales

```js
if (condicion <= condicion && condicion >= condicion) {
  ejecucion;
} else if (condicion >= condicion) {
  ejecucion;
} else {
  ejecucion;
}
```

# Bucles

```js
for (let i = 0; i <= 100; i++) {
  console.log(i);
}
```

```js
for(valor de inicio; mientras se cumpla esto; aumenta asi el valor de inicio) {
    console.log(valor de inicio)
}
```

Se puede leer como 'desde que i es 0, aumentala en 1 hasta que sea menor o igual que 100. Haz lo que este entre llaves tantas veces como eso se cumpla.
