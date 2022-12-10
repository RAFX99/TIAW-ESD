function buscaViagemERedirecionaAtePagina(inputPesquisador, arrayCidades) {
    const valorPesquisado = inputPesquisador.value;
    arrayCidades.forEach(cidade => {
        if (valorPesquisado === cidade.cidade ) { 
            console.log(cidade)
            window.location.assign(`${cidade.link}.html`)
        }
    });
}