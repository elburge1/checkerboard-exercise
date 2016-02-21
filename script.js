// Your JS goes here
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var body = document.getElementsByTagName('body')[0];
for (var i = 0; i < 9; i++) {
  for (var j = 1; j <= 9; j++) {
    var tile = document.createElement('div');
    tile.style.height = '11.1%';
    tile.style.width = '11.1%';
    tile.style.float = 'left';
    tile.style.paddingTop = '10%';
    tile.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
    body.appendChild(tile);
  }
};
