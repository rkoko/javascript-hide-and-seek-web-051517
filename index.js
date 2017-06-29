function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
 return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n){
  let rankedList = document.querySelectorAll('.ranked-list li')

  rankedList.forEach((li)=>{
    li.innerHTML = parseInt(li.innerHTML)+n
    })

  }

function deepestChild(){
  let divs = document.querySelector("div#grand-node").querySelectorAll("div")

  return divs[divs.length-1]

}
