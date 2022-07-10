let start= document.getElementById('start')
start.addEventListener('click', createCanvas)
let reset= document.getElementById('reset')
reset.addEventListener('click', clear)



function createCanvas(){
  newGrid()
  const limit = prompt('Please choose a number between 1-100 for canvas size.\
  e.g 5 will be 5x5')
  let i = 0;
  let j = limit * limit;


  var parentDiv = document.getElementById('grid');
  for ( i = 0; i < j; i++ ) {
    if (j > 10000) {
      break;
    }

      var newDiv = document.createElement('div');
      newDiv.setAttribute('id', 'box');
      newDiv.innerHTML = '';
      parentDiv.appendChild(newDiv);
      document.documentElement.style.setProperty('--columns-row', limit);
  }
  hoverColor()
  
 console.log(j);
    }

function hoverColor() {
      let items = document.querySelectorAll('#box');
      items.forEach(items => {
        items.addEventListener('mouseover', () => {
          items.style.backgroundColor = 'black';
        });
      });
    }


    function clear() {
      let items = document.querySelectorAll('#box');
      items.forEach(items => {
          items.style.backgroundColor = null;
        });
      };

      function newGrid() {
        grid.innerHTML = '';
      }
    
















