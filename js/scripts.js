// JS - CAMPOMINATO GRID

// Prendo la griglia dal HTML ed assegno una variabile
const gridContainer = document.querySelector('.grid-container');

// Assegno anche il play button
const playBtn = document.querySelector('button')

//Quando clicco il play button partirà il ciclo
playBtn.addEventListener('click', function(){
    gridContainer.innerHTML = '';

    //BONUS
    const select = parseInt(document.getElementById('difficulty').value);
    console.log('Level '+ select +' '+ typeof select)

    const bombList = [];
        for (let x = 1; x < 16; x++) {
            let bomb = generateRandomNumber (1 , select);
            console.log('bomba '+bomb +' '+ typeof bomb);

            let foundArray = bombList.includes(bomb);
            while(foundArray == true) {
                bomb = generateRandomNumber (1 , select);
                console.log('bomba '+bomb +' '+ typeof bomb);
                foundArray = bombList.includes(bomb);
            }

            bombList.push(bomb);
        }

    
        let counter = 0;

    //Il ciclo va da 1 a 100 (incluso) e si incrementa di un man mano
    for (let i = 1; i <= select; i++) {

        //Creo un elemento div e lo nomino cell
        const cell = document.createElement('div');
        //Assegno a cell la classe cell (vedi CSS) (così prende le sembianze di un quadrato)
        cell.classList.add('cell');

        //Se seleziono 'Medium - 81' aggiungo la classe cell-81
        if (select == '81') {
            cell.classList.add('cell-81');
        }

        //Se seleziono 'Hard - 49' aggiungo la classe cell-49
        else if (select == '49') {
            cell.classList.add('cell-49');
        }

        //ALTRIMENTI se seleziono 'Easy - 100' aggiungo la classe cell-100
        cell.classList.add('cell-100');

        //Metto l'indice (NB:che man mano si incrementa) nella cella, così da creare 100 celle quadrate
        cell.innerHTML = i;


        //Appendo la cella nella griglia
        gridContainer.append(cell);

            
        cell.addEventListener('click', function () {
            if (bombList.includes(i)) {
                this.classList.add('bomb');
                alert('HAI PERSO')
            }
            else {
                if (!this.classList.contains('active')) {
                    this.classList.add('active');
                    counter++;
                }
            }
            console.log('counter ' + counter);
            const score = document.getElementById('score').innerHTML = counter;
        });
    }
})


// FUNZIONI
function generateRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}