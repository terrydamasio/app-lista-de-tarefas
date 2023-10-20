function editar(id, txt_tarefa) {
    //1) criando form de edição
    let form = document.createElement('form')
    form.action = '../../index.php?pag=index&acao=atualizar'
    form.method = 'post'
    form.className = 'row'
    
    //2) criando input para entrada de texto
    let inputTarefa = document.createElement('input')
    inputTarefa.type = 'text'
    inputTarefa.name = 'tarefa'
    inputTarefa.className = 'col-9 form-control'
    inputTarefa.value = txt_tarefa

    //10) criar input hidden para guardar o id da tarefa
    let inputId = document.createElement('input')
    inputId.type = 'hidden'
    inputId.name = 'id'
    inputId.value = id 
    
    //3) criando button para envio do form
    let button = document.createElement('button')
    button.type = 'submit'
    button.className = 'btn btn-info'
    button.innerHTML = 'Atualizar'

    //4) inserindo inputTarefa no form
    form.appendChild(inputTarefa)

    //5) inlcuir inputId no form
    form.appendChild(inputId)

    //6) incluindo o button no form
    form.appendChild(button)

    //7) console.log(form)
    //8) alert(id)

    //selecionar div tarefa
    let tarefa = document.getElementById('tarefa_'+id)

    //9) limpar texto da tarefa para inclusão do form
    tarefa.innerHTML = ''

    //11) incluir form na página (inserir uma arvore de elemento html dentro de outro elemento -> arvore de elementos, nó)
    tarefa.insertBefore(form, tarefa[0]);

    //12) alert(txt_tarefa)
}

function remover(id) {
    $.ajax({
        url: '../../todas_tarefas.php?pag=todas_tarefas&acao=remover&id=' + id,
        type: 'GET',
        success: function(response) {
            location.href = '../../todas_tarefas.php?pag=todas_tarefas&acao=marcarRealizada&id='+id;
        }
    });
}

function marcarRealizada(id) {
    $.ajax({
        url: '../../todas_tarefas.php?pag=todas_tarefas&acao=marcarRealizada&id=' + id,
        type: 'GET',
        success: function(response) {
            location.href = '../../todas_tarefas.php?pag=todas_tarefas&acao=marcarRealizada&id='+id;
        }
    });
}
