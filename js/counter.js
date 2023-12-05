

// Добавляем обработчик события для каждой карточки товара
function addEventListenersToCards(categoryId)
{
    const productCards = document.getElementById(categoryId).querySelectorAll('.card');

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
}