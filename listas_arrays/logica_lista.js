/*Essa é a classe produto com as caracteristicas e métodos/funções ligadas a ela */
class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = []; // criada uma array vazia
    }


    salvar() {
        let produto = this.lerDados(); //método de leitura ao clicar no botão inserido dentro da varável let produto
        
        if (this.validaCampos(produto)==true) {//para chamar a função passando o produto, por padrão considerar ( se validaCampos for verdadeiro true )
            this.adicionar(produto); // se validou o campo chama o método adicionar
        }
        this.listaTabela(); //chama a função que cria a tabela no js
        this.cancelar(); // chama essa função para limpar os campos e não duplicar ao cadastrar novo item
    }

    listaTabela() {// criando elementos da tabela dinâmicamente no js
        let tbody = document.getElementById("tbodyTabela");
        tbody.innerText = ''; // inicia o tbody vazio para evitar duplicar o cadastro do item ao inserir um novo

        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow(); //cria uma linha
            let td_id = tr.insertCell(); //cria uma coluna
            let td_nomeProduto= tr.insertCell();
            let td_valor = tr.insertCell();
            let td_Quantidade = tr.insertCell();
            let td_acoes = tr.insertCell();

        
            

            td_id.innerText = this.arrayProdutos[i].id; // atribuindo o elemento com o índice do array, posição dos elemento i incrementado -- o .id foi criado dentro de>> lerDados
            td_nomeProduto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].valorProduto;
            td_Quantidade.innerText = this.arrayProdutos[i].quantidadeProduto;
            // menu ações com imagens
            let imgEdit = document.createElement('img');
            imgEdit.src = '../imagens/btneditar.png';
            imgEdit.width = 20;
            imgEdit.height = 20;
            

            let imgdelete = document.createElement('img');
            imgdelete.src = '../imagens/btnlixeira.png';
            imgEdit.width = 20;
            imgEdit.height = 20;
            imgdelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")"); // insere atributo na variável que criou a imagem com os dois parametros: evento + função criada dentro de objeto produto >> +this.arrayProdutos[i].id + concatena para deletar por ID. 
            

            td_acoes.appendChild(imgEdit); //coloca como filha da tag td ações
            td_acoes.appendChild(imgdelete);
        };
    };

    adicionar(produto) {//metodo que é chamado ao validar e salvar
        this.arrayProdutos.push(produto); //adicionar elemento produto dentro do array vazio
        this.id++; //incrementa o id a cada salvar
    }
    
    lerDados() {
        let produto = {}

        produto.id = this.id; // cria a propriedade id
        produto.nomeProduto = document.getElementById('campoNomeProduto').value; // produto.NomeProduto está criando o atributo do objeto e capturando dado do input
        produto.valorProduto = document.getElementById('campoValorProduto').value;
        produto.quantidadeProduto = document.getElementById('campoQuantidadeProduto').value;

        return produto;
    }

   validaCampos(produto) {// objeto produto entra como parametro na função
        let msg = ''; // para controlar as msg na tela (inicia vazia)
        if(produto.nomeProduto == ''){
            msg += ' - Informe o nome do Produto \n'; // mensagem + ela mesmo (+=) recebe a string
        }
        if(produto.valorProduto == ''){
            msg += ' - Informe o valor do Produto \n'; // mensagem + ela mesmo (+=) recebe a string
        }

        if(produto.quantidadeProduto == ''){
            msg += ' - Informe a quantidade do Produto \n'; // mensagem + ela mesmo (+=) recebe a string
        }

        if (msg != '') {
            alert(msg);
            return false;
        }
        return true; // se não cair em nenhuma das validações, ou seja msg permaneceu vazia como no começo. 

    }

    cancelar() {
       document.getElementById('campoNomeProduto').value = ''; 
       document.getElementById('campoValorProduto').value = ''; 
       document.getElementById('campoQuantidadeProduto').value = ''; 
    }  

    deletar(id) { //considera o parâmetro id

        let tbody = document.getElementById("tbodyTabela"); // insere a variavel no escopo para deletar os dados da linha ligada ao ID

        for ( let i = 0; i < this.arrayProdutos.length; i++ )/* percorre o array*/ {
            if (this.arrayProdutos[i].id == id) /* compara o i com o id*/ {
                this.arrayProdutos.splice(i,1);
                //deleta o i e apenas 1 registro > deleta apenas o id
                tbody.deleteRow(i); // deleta a linha/conteúdo considerando o id
            }
        }
        
    }

}

var produto = new Produto(); /* váriavel para criar um novo produto e que é passada no evento onclick para acessar a classe produto*/