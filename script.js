let btnRef = document.querySelectorAll('.button-option');
let gameoverRef = document.querySelector('.gameover');
let restartBtn = document.getElementById('restart');
let newgameBtn = document.getElementById('newgame');
let msgRef = document.getElementById('message');

let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
let oTurn = true;
let count = 0;
const disableButtons = () => {
  btnRef.forEach((element) => {
    element.disabled = true;
  });
  gameoverRef.classList.remove('hide');
};

const win = (player) => {
  disableButtons();
  msgRef.innerText = player + ' wins';
};

const checkWin = () => {
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    if (element1 != '' && element2 != '' && element3 != '') {
      if (element1 == element2 && element1 == element3) {
        win(element1);
      }
    }
  }
};
btnRef.forEach((element) => {
  element.addEventListener('click', () => {
    if (oTurn) {
      oTurn = false;
      element.innerHTML = 'O';
      element.disabled = true;
    } else {
      oTurn = true;
      element.innerText = 'X';
      element.disabled = true;
    }
    count += 1;
    if (count === 9) {
    }
    checkWin();
  });
});
const restart = () => {
  btnRef.forEach((element) => {
    element.innerText = '';
    element.disabled = false;
  });
  gameoverRef.classList.add('hide');
};

restartBtn.addEventListener('click', () => {
  count = 0;
  restart();
});
newgameBtn.addEventListener('click', () => {
  count = 0;
  restart();
});
