# SudokuSolverBacktracking
Esta aplicação foi desenvolvida utilizando quatro ferramentas: HTML e CSS para o front-end e JS e JQuery para o back-end. Seu objetivo é solucionar o puzzle sudoku a partir da técnica de Backtracking, a construção foi baseada no artigo: http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.1062.3440&rep=rep1&type=pdf

# Instalação
Por ser uma aplicação desenvolvida com as ferramentas básica da Web, não é necessária instalação, mas apenas um navegador(Preferência Google Chrome) para executar a aplicação.
Sendo assim os únicos passos necessário são clonar este repositório.

# Manual de Uso
Com o repositório já em sua máquina, acesse o diretório "dist" e abra o arquivo "index.html", uma instância do navegador padrão será iniciada, caso já haja uma iniciada será aberta apenas uma nova aba, na página da aplicação é visível um tabuleiro de sudoku e dois botões: "Mostrar valores" e "Resolver Sudoku".
Clicando em "Mostrar Valores" o tabuleiro será preenchido com os valores iniciais, em seguida deve-se clicar no botão "Resolver Sudoku", a aplicação lerá os valores e aplicará a técnica de Bracktracking para achar uma solução.

No repositório também existe um arquivo de texto "Sudoku Examples.txt", nele haverá um exemplo de sudoku em diferentes dificuldades, para alterar o tabuleiro, deve-se seguir os seguintes passos:<br />
    - Abrir o arquivo "script.js" e "Sudoku Examples.txt" em algum editor de texto.<br />
    - Copiar algum tabuleiro de "Sudoku Examples.txt".<br />
        Ex. Escolhido o tabuleiro da dificuldar Hard<br />
        const board =<br />
            [[0,7,1,5,0,2,4,0,8]<br />
            [4,0,0,0,9,0,6,5,0]<br />
            [0,0,2,0,0,8,0,0,0]<br />
            [1,0,8,0,4,0,0,0,0]<br />
            [9,4,0,0,2,0,3,8,6]<br />
            [0,0,6,9,0,0,0,0,0]<br />
            [0,0,7,0,1,4,9,3,5]<br />
            [0,0,4,2,5,9,8,6,7]<br />
            [0,5,9,3,7,6,1,2,4]];<br />
    - No arquivo "script.js" selecionar da linha 2 à 11 e colar o novo tabuleiro por cima e salvar.<br />
    - Voltando ao aplicativo no navegador basta atualizar a página e as mudanças terão efeito.<br />
PS: A cada resolução é necessário atualizar a página(F5);<br /><br />

*Também é possível utilizar a aplicação hospedada em: https://codepen.io/PabloKennedy/pen/aXvRoj