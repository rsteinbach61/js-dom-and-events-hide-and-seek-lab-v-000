
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  let element = document.querySelector("#grand-node").lastElementChild
  let final = element;
    while (element){
      final = element;
      element = element.lastElementChild;
    }
    return final
}

function increaseRankBy(n){
  const rank = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < rank.length; i++){

    rank[i].innerHTML = (parseInt(rank[i].innerHTML, 10) + n)

  }
}
