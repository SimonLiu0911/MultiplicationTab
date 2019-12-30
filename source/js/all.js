let main = document.querySelector('.wrap');

// // 放在外面依照for特性會一直蓋掉前面最後只顯示最後一個
// let card = document.createElement('div');
// card.classList.add('card');

// for loop
for (let i = 2; i <= 9; i++) {
    // add 'card' dot
    let card = document.createElement('div');
    // add class attribution on card
    card.classList.add('card');
    //inset HTML into card
    card.innerHTML = `
    <div class="number">${i}</div>
    `;
    // console.log(card)
    for (let j = 1; j <= 9; j++) {
        let formula = document.createElement('div');
        formula.classList.add('formula');
        formula.textContent = `
        ${i} x ${j} = ${i * j}
        `
        card.appendChild(formula)
    }
    main.appendChild(card)
}

// innerHTML vs textContent vs innertext
// appendChild():HTML DOM的方法，可向節點的子節點列表末尾添加新的子節點