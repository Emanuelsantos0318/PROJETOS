document.getElementById('formTarefa').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletando os dados do formulário
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const setor = document.getElementById('Setor').value;
    const prioridade = document.getElementById('Prioridade').value;
    const status = document.getElementById('Status').value;
    const date = document.getElementById('date').value;

    // Criando um objeto de tarefa
    const tarefa = {
        titulo: titulo,
        descricao: descricao,
        setor: setor,
        prioridade: prioridade,
        status: status,
        dataCadastro: date
    };

    // Obtendo as tarefas salvas do LocalStorage
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    // Adicionando a nova tarefa à lista de tarefas
    tarefas.push(tarefa);

    // Salvando as tarefas atualizadas no LocalStorage
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    // Limpar o formulário após salvar
    document.getElementById('formTarefa').reset();

    // Redirecionar para a página de gerenciamento
    window.location.href = 'GERENCIAMENTO.HTML';
});
