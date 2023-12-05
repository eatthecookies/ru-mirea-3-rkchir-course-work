const trash = document.getElementById("trash-cards")
const resultCost = document.getElementById("result-cost")

function generateCards(cardsData){
    const cards = [];
    let price = 0;
    for (let i = 0; i < cardsData.length; i++){
        
        let quantity = JSON.parse(localStorage.getItem('productsData'))[i+1]
        price += parseInt(cardsData[i].cost) * parseInt(quantity);
        if (parseInt(quantity) > 0){
            cards.push(`
            <div class="card" data-product-id=${cardsData[i].id}>
                <div class="food-image">
                    <img src="images/red/${cardsData[i].png}" alt="">
                </div>
                
                <div class="title-cost">
                    <p class="food-title">${cardsData[i].title}</p>
                    <p class="price">${cardsData[i].cost} <span>руб.</span></p>
                </div>
                
                
                <button id="remove" class="rate"><p ><i class='bx bx-trash'></i></p></button>
                <div id="container-btns">
                    <button id="minus"><p>-</p></button>
                    <p id="quantity">${quantity}</p>
                    <button id="plus"><p>+</p></button>
                </div>
            </div>`)
        }

        resultCost.innerHTML = price;
    }
    return cards;
}

trash.innerHTML = generateCards(cardsData).join("");


