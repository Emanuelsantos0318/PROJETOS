 window.onload = function() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

        const tableBody = document.getElementById('tarefasTable');
        tableBody.innerHTML = ''; // Limpar a tabela antes de adicionar novas tarefas

        tarefas.for
        tarefas.forEach(tarefa => {
            const row = document.createElement('tr');
            
            // Criar células para cada tarefa
            row.innerHTML = `
                <td>${tarefa.titulo}</td>
                <td>${tarefa.descricao}</td>
                <td>${tarefa.setor}</td>
                <td>${tarefa.prioridade}</td>
                <td>${tarefa.status}</td>
                <td>${tarefa.dataCadastro}</td>
            `;
            
            // Adicionar a linha à tabela
            tableBody.appendChild(row);
        });
    };