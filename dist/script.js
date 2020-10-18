// Matriz com os valores do tabuleiro
// const board =[
//     [3, 0, 6, 5, 0, 8, 4, 0, 0],
//     [5, 2, 0, 0, 0, 0, 0, 0, 0],
//     [0, 8, 7, 0, 0, 0, 0, 3, 1],
//     [0, 0, 3, 0, 1, 0, 0, 8, 0],
//     [9, 0, 0, 8, 6, 3, 0, 0, 5],
//     [0, 5, 0, 0, 9, 0, 6, 0, 0],
//     [1, 3, 0, 0, 0, 0, 2, 5, 0],
//     [0, 0, 0, 0, 0, 0, 0, 7, 4],
//     [0, 0, 5, 2, 0, 6, 3, 0, 0]       
//   ];

//   const board2 =[
//     [3, 0, 6, 5, 0, 8, 4, 0, 0],
//     [5, 2, 0, 0, 0, 0, 0, 0, 0],
//     [0, 8, 7, 0, 0, 0, 0, 3, 1],
//     [0, 0, 3, 0, 1, 0, 0, 8, 0],
//     [9, 0, 0, 8, 6, 3, 0, 0, 5],
//     [0, 5, 0, 0, 9, 0, 6, 0, 0],
//     [1, 3, 0, 0, 0, 0, 2, 5, 0],
//     [0, 0, 0, 0, 0, 0, 0, 7, 4],
//     [0, 0, 5, 2, 0, 6, 3, 0, 0]         
//   ];

const board =[
    [0, 4, 5, 0, 9, 0, 0, 0, 1],
    [9, 0, 0, 4, 0, 5, 7, 0, 0],
    [7, 0, 0, 0, 6, 0, 0, 4, 0],
    [8, 0, 0, 0, 3, 4, 0, 2, 0],
    [0, 0, 0, 6, 0, 0, 0, 0, 0],
    [0, 0, 4, 2, 7, 0, 6, 0, 0],
    [1, 0, 6, 3, 0, 0, 0, 0, 7],
    [0, 0, 2, 0, 0, 0, 0, 0, 0],
    [3, 8, 0, 0, 4, 0, 0, 1, 0]       
  ];

  const board2 =[
    [0, 4, 5, 0, 9, 0, 0, 0, 1],
    [9, 0, 0, 4, 0, 5, 7, 0, 0],
    [7, 0, 0, 0, 6, 0, 0, 4, 0],
    [8, 0, 0, 0, 3, 4, 0, 2, 0],
    [0, 0, 0, 6, 0, 0, 0, 0, 0],
    [0, 0, 4, 2, 7, 0, 6, 0, 0],
    [1, 0, 6, 3, 0, 0, 0, 0, 7],
    [0, 0, 2, 0, 0, 0, 0, 0, 0],
    [3, 8, 0, 0, 4, 0, 0, 1, 0]         
  ];

//Faz uma cópia do array para preencher o tabuleiro 
// const board2 = board;

//Colocar as bordas maiores do tabuleiro
for(let i = 0; i < 9; i++){
   for(let j = 0; j< 9; j++){
      if(j == 2 || j == 5){
         document.querySelector("#square"+i+j).style.borderRight = "3px solid black";
      }
   }
}

//Passar os valores do tabuleiro para as células
document.querySelector(".button").addEventListener('click', function(){
   for(let i=0; i<9; i++){
      for(let j = 0; j<9; j++){
         document.querySelector("#square"+i+j).innerHTML = board2[i][j];
         if(board2[i][j] == 0){
            document.querySelector("#square"+i+j).style.color = "#03A9F4";
         }else{
            document.querySelector("#square"+i+j).style.backgroundColor = "#607D8B";
         }
      }
   }
}, false);

//Função que vericará se a célula do tabuleiro já possui um número atribuído, caso não possua retornará a sua posição e o valor 1 para indicar que não possui número atribuído
function num_unassigned(row, col){
    let numUnassigned = 0;
    for(let i=0; i<9;i++){
        for(let j=0; j<9; j++){
            if(board[i][j] == 0){
                row = i;
                col = j;
                numUnassigned = 1;
                a = [row, col, numUnassigned]
                return a;
            }
        }
    }
    a = [-1, -1, numUnassigned]
    return a;
}

// Função para verificar se os valores podem ser inseridos nas celulas de acordo com as regras do sudoku
function isSafe(n, row, col){
//Verifica a linha
    for(let i=0; i<9; i++){
        if(board[row][i] == n){
            return false;
        }
    }
//Verifica a coluna
    for(let i=0; i<9; i++){
        if(board[i][col] == n){
            return false;
        }
    }
//Verifica o bloco
    let row_start = Math.floor(row / 3) * 3;
    let col_start = Math.floor(col / 3) * 3;

    for(let i=row_start; i<row_start+3;i++){
        for(let j=col_start; j<col_start+3; j++){
            if(board[i][j] == n){
                return false;
            }        
        }
    }
    return true;
}

//Essa função vai atribuir um valor entre 1 a 9 nas celulas que não tem valores atribuídos e verificar se não causará conflito, caso haja conflito ele fará o backtracking e mudará o valor da célula anterior para os resultados posteriores se adequarem
function solve(){
    let row = 0;
    let col = 0;

    a = num_unassigned(row, col);
    if(a[2] == 0){
        return true;
    }
    row = a[0];
    col = a[1];
//Passagem do valor para a célula e backtracking
    for(let i=1; i<10; i++){
        if(isSafe(i, row, col)){
            board[row][col] = i;
            if (solve()){
                return true;
            }
            board[row][col] = 0;
        }
    }
    return false;
}

solve();

//Passagem dos valores resolvidos para o tabuleiro
document.querySelector("#button2").addEventListener('click', function(){
   for(let i=0; i<9; i++){
      for(let j = 0; j<9; j++){
         document.querySelector("#square"+i+j).innerHTML = board[i][j];
      }
   }
}, false);
