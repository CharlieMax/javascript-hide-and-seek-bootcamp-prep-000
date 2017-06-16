function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < lists.length; i++) {
    var lis = lists[i].children
    for (let j = 0; j < lis.length; j++) {
      lis[j].innerHTML = parseInt(lis[j].innerHTML) + n
    }
  }
}

function deepestChild(){
  var nodes = document.querySelectorAll('#grand-node div');
  var mostDeep = nodes[nodes.length- 1];
  return mostDeep
}
