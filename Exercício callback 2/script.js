function processUsers(users, callback) {
    let somaIdades = 0;
    let contador = 0;

    for (let i = 0; i < users.length; i++) {
        if (users[i].idade > 18) {
            somaIdades += users[i].idade;
            contador++;
        }
    }

    return callback(somaIdades, contador);
}

console.log(
    processUsers(
        [
            { nome: "Bruno", idade: 18 },
            { nome: "Otto", idade: 20 },
            { nome: "Trajano", idade: 17 },
            { nome: "Ana", idade: 19 },
        ],
        function (soma, count) {
            return soma / count;
        }
    )
);
