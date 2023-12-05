function compareByCost(a, b){
    if (a.cost > b.cost) return 1;
    if (a.cost == b.cost) return 0;
    if (a.cost < b.cost) return -1;
}

function generateCards(cardsData, sort, category){
    
    if (sort == "y"){
        cardsData.sort(compareByCost);
    } else if (sort == "r"){
        cardsData.sort(compareByCost);
        cardsData.reverse();
    }

    const cards = [];
    cardsData.forEach(element => {
        if (element.category == category){
            let quantity = JSON.parse(localStorage.getItem('productsData'))[element.id];

            cards.push(`<div class="card" data-product-id=${element.id}>
                            <div class="food-image"><img src="images/red/${element.png}" alt=""></div>
                            
                            <p class="food-title">${element.title}</p>
                            <p class="rate"><i class='bx bxs-star'></i>${element.rate} </p>
                            <p class="price">${element.cost} <span>руб.</span></p>
                        
                            <div id="container-btns">
                                <button id="minus"><p>-</p></button>
                                <p id="quantity">${quantity}</p>
                                <button id="plus"><p>+</p></button>
                            </div>
                    </div>`)
        }

    })
    
    return cards;
}

function generateCategory(categoryId, category){
    
    const categoryBlock = document.getElementById(categoryId).querySelector(".cards");
    const btnDown = document.getElementById(categoryId).querySelector("#down-to");
    const btnUp = document.getElementById(categoryId).querySelector("#to-up");

    categoryBlock.innerHTML = generateCards(cardsData, "", category).join("");
    addEventListenersToCards(categoryId);
    
    btnDown.addEventListener("click", function(e){
        console.log(category);
        categoryBlock.innerHTML = generateCards(cardsData, "r", category).join("");
        addEventListenersToCards(categoryId);
    })
    
    btnUp.addEventListener("click", function(e){
        categoryBlock.innerHTML = generateCards(cardsData, "y", category).join("");
        addEventListenersToCards(categoryId);
    })
}

generateCategory("fructs", "фруктовые");
generateCategory("shoko", "шоколадные");
generateCategory("cofe", "кофейные и ореховые");