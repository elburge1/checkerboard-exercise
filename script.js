// Your JS goes here
var body = document.getElementsByTagName('body')[0];
for (var i = 0; i < 9; i++) {
  for (var j = 1; j <= 9; j++) {
      var tile = document.createElement('div');
      tile.style.height = '11.1%';
      tile.style.width = '11.1%';
      tile.style.float = 'left';
      tile.style.paddingTop = '10%';
      if ((j + i) % 2 === 0) {
        tile.style.backgroundColor = 'white';
      } else {
        tile.style.backgroundColor = 'black';
      }
      body.appendChild(tile);
    }
  }
