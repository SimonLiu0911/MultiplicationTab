"use strict";

var main = document.querySelector('.wrap'); // // 放在外面依照for特性會一直蓋掉前面最後只顯示最後一個
// let card = document.createElement('div');
// card.classList.add('card');
// for loop

for (var i = 2; i <= 9; i++) {
  // add 'card' dot
  var card = document.createElement('div'); // add class attribution on card

  card.classList.add('card'); //inset HTML into card

  card.innerHTML = "\n    <div class=\"number\">".concat(i, "</div>\n    "); // console.log(card)

  for (var j = 1; j <= 9; j++) {
    var formula = document.createElement('div');
    formula.classList.add('formula');
    formula.textContent = "\n        ".concat(i, " x ").concat(j, " = ").concat(i * j, "\n        ");
    card.appendChild(formula);
  }

  main.appendChild(card);
} // innerHTML vs textContent vs innertext
// appendChild():HTML DOM的方法，可向節點的子節點列表末尾添加新的子節點