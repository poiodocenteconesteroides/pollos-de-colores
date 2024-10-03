let cart = []; // Variable para almacenar los productos del carrito

// Función para agregar productos al carrito
function addToCart(name, price) {
    cart.push({ name, price }); // Agrega el producto al carrito
    updateCartDisplay(); // Actualiza la visualización del carrito
}

// Función para abrir el modal del carrito
function openCartModal() {
    document.getElementById('cart-modal').style.display = 'block'; // Muestra el modal del carrito
}

// Función para cerrar el modal del carrito
function closeModal() {
    document.getElementById('cart-modal').style.display = 'none'; // Cierra el modal del carrito
}

// Función para abrir el modal de compra exitosa
function buyItems() {
    // Limpiar carrito
    cart = []; // Resetea el carrito
    updateCartDisplay(); // Actualiza la visualización del carrito
    
    // Cerrar el modal del carrito
    closeModal();
    
    // Mostrar el modal de confirmación de compra
    document.getElementById('purchase-modal').style.display = 'block'; // Muestra el modal de compra exitosa
}

// Función para cerrar el modal de compra exitosa
function closePurchaseModal() {
    document.getElementById('purchase-modal').style.display = 'none'; // Cierra el modal de compra exitosa
}

// Función para eliminar un item del carrito
function removeFromCart(index) {
    cart.splice(index, 1); // Elimina el item en la posición especificada
    updateCartDisplay(); // Actualiza la visualización del carrito
}

// Función para actualizar la vista del carrito
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items'); // Obtiene la lista de items del carrito
    cartItems.innerHTML = ''; // Limpia la lista de items del carrito
    
    let total = 0; // Inicializa el total
    cart.forEach((item, index) => {
        const li = document.createElement('li'); // Crea un nuevo elemento de lista
        li.textContent = `${item.name} - $${item.price}`; // Establece el texto del item

        // Crea un botón de eliminar
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar'; // Texto del botón
        removeButton.onclick = () => removeFromCart(index); // Asigna la función para eliminar
        li.appendChild(removeButton); // Agrega el botón al elemento de lista

        cartItems.appendChild(li); // Agrega el item a la lista del carrito
        total += item.price; // Suma el precio al total
    });
    
    document.getElementById('total').textContent = total; // Actualiza el total en el modal
    document.getElementById('cart-count').textContent = cart.length; // Actualiza el contador de items en el icono del carrito
}
