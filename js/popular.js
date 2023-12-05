const catalog = document.querySelector(".cards");
const btnDown = document.getElementById("down-to");
const btnUp = document.getElementById("to-up");

function compareByRate(a, b){
    if (a.rate > b.rate) return -1;
    if (a.rate == b.rate) return 0;
    if (a.rate < b.rate) return 1;
}

function generateCards(cardsData){
    cardsData.sort(compareByRate);
    const cards = [];
    for (let i = 0; i < 5; i++){
            let quantity = JSON.parse(localStorage.getItem('productsData'))[cardsData[i].id]

            cards.push(`<div class="card" data-product-id=${cardsData[i].id}>
                            <div class="food-image"><img src="images/red/${cardsData[i].png}" alt=""></div>
                            
                            <p class="food-title">${cardsData[i].title}</p>
                            <p class="rate"><i class='bx bxs-star'></i>${cardsData[i].rate} </p>
                            <p class="price">${cardsData[i].cost} <span>руб.</span></p>
                        
                            <div id="container-btns">
                                <button id="minus"><p>-</p></button>
                                <p id="quantity">${quantity}</p>
                                <button id="plus"><p>+</p></button>
                            </div>
                    </div>`)
        }
    
    return cards;
}

catalog.innerHTML = generateCards(cardsData).join("");

const productCards = document.querySelectorAll('.card');

productCards.forEach(function(card) {
    const productId = card.dataset.productId; // Получаем идентификатор товара
    const quantityP = card.querySelector('#quantity');
    const increaseQuantityBtn = card.querySelector('#plus');
    const decreaseQuantityBtn = card.querySelector('#minus');
    
    increaseQuantityBtn.addEventListener('click', function() {
        const storedProducts = JSON.parse(localStorage.getItem('productsData'));
        quantityP.innerHTML = ++storedProducts[productId];
        localStorage.setItem('productsData', JSON.stringify(storedProducts));
    });

    decreaseQuantityBtn.addEventListener('click', function() {
        const storedProducts = JSON.parse(localStorage.getItem('productsData'));
        if ((storedProducts[productId] - 1) != -1)
        {
            quantityP.innerHTML = --storedProducts[productId];
            localStorage.setItem('productsData', JSON.stringify(storedProducts));
        }
    });
});

