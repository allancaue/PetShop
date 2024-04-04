// Array para armazenar os itens no carrinho
var cartItems = [];

// Função para abrir o pop-up do carrinho
function openCartPopup() {
    var popup = document.getElementById('cartPopup');
    popup.style.display = "block";

    // Mostrar os itens no carrinho
    var cartContent = document.getElementById('cartContent');
    cartContent.innerHTML = "";
    cartItems.forEach(function(item) {
        cartContent.innerHTML += "<p>" + item.nome + " - R$" + item.preco + "</p>";
    });

    // Calcular e mostrar o preço total
    var totalPrice = document.getElementById('totalPrice');
    var total = calculateTotalPrice();
    totalPrice.textContent = "Preço Total: R$" + total;

    // Ativar o fundo desfocado
    document.getElementById('blurBackground').style.display = "block";
}

// Função para fechar o pop-up do carrinho
function closeCartPopup() {
    var popup = document.getElementById('cartPopup');
    popup.style.display = "none";

    // Desativar o fundo desfocado
    document.getElementById('blurBackground').style.display = "none";
}

// Função para calcular o preço total
function calculateTotalPrice() {
    var total = 0;
    cartItems.forEach(function(item) {
        total += item.preco * item.quantidade;
    });
    return total.toFixed(2); // Arredonda o total para 2 casas decimais
}

// Função para adicionar um produto ao carrinho
function addToCart(nome, preco) {
    // Verificar se o produto já está no carrinho
    var itemIndex = cartItems.findIndex(item => item.nome === nome);

    if (itemIndex !== -1) {
        // Se o produto já estiver no carrinho, aumente a quantidade
        cartItems[itemIndex].quantidade++;
    } else {
        // Se o produto ainda não estiver no carrinho, adicione-o
        cartItems.push({ nome: nome, preco: preco, quantidade: 1 });
    }

    // Atualizar o pop-up do carrinho
    openCartPopup();
}
