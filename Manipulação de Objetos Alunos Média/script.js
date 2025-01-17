function notas(alunos) {
    let resultados = alunos.map(function (aluno) {
        let notasOrdenadas = aluno.notas.sort((a, b) => a - b);
        let soma = 0;

        for (let i = 0; i < notasOrdenadas.length; i++) {
            soma += notasOrdenadas[i];
        }

        let media = (soma / notasOrdenadas.length).toFixed(2);

        return {
            nome: aluno.nome,
            media: media,
            maiorNota: notasOrdenadas[notasOrdenadas.length - 1],
            menorNota: notasOrdenadas[0],
        };
    });

    let filtrados = resultados.filter(function (aluno) {
        return aluno.media >= 7;
    });

    filtrados.sort((a, b) => b.media - a.media);

    return filtrados;
}

console.log(
    notas([
        { nome: "Bruno", notas: [10, 8, 9, 11] },
        { nome: "Maria", notas: [2, 7, 5, 4.5] },
        { nome: "João", notas: [10, 10, 9, 10] },
        { nome: "Ana", notas: [1.5, 0, 3, 0] },
    ])
);
