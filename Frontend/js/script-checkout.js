document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById("productContainer");

    // Memeriksa apakah ada data produk yang tersimpan di localStorage saat halaman dimuat
    let storedProducts = JSON.parse(localStorage.getItem("storedProducts")) || [];

    // Memuat data produk dari URL jika ada
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('name');
    const productPrice = parseFloat(urlParams.get('price'));
    const productQuantity = parseInt(urlParams.get('quantity'));
    const productDescription = urlParams.get('description');

    // Jika ada data produk dari URL, tambahkan ke daftar produk yang tersimpan
    if (productName && productPrice && productQuantity && productDescription) {
        storedProducts.push({
            name: productName,
            price: productPrice,
            quantity: productQuantity,
            description: productDescription
        });
        localStorage.setItem("storedProducts", JSON.stringify(storedProducts));
    }

    // Tampilkan semua produk yang tersimpan dalam localStorage
    storedProducts.forEach(product => {
        addProductToTable(product);
    });

    // Tambahkan event listener untuk tombol tambah dan kurang kuantitas
    productContainer.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("increment")) {
            incrementQuantity(target);
        } else if (target.classList.contains("decrement")) {
            decrementQuantity(target);
        } else if (target.classList.contains("delete-product")) {
            deleteProduct(target);
        }
    });

    function formatCurrency(price) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    }
    // Fungsi untuk menambah kuantitas
    function incrementQuantity(button) {
        const quantityElement = button.parentNode.querySelector(".quantity");
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateProductData();
    }

    // Fungsi untuk mengurangi kuantitas
    function decrementQuantity(button) {
        const quantityElement = button.parentNode.querySelector(".quantity");
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateProductData();
        }
    }

    // Fungsi untuk menghapus produk
    function deleteProduct(button) {
        const rowToDelete = button.parentNode.parentNode;
        const productName = rowToDelete.querySelector(".name").textContent;
        storedProducts = storedProducts.filter(product => product.name !== productName);
        localStorage.setItem("storedProducts", JSON.stringify(storedProducts));
        rowToDelete.remove();
    }

    // Fungsi untuk menambahkan produk ke dalam tabel
    function addProductToTable(product) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td><img src="gambar-product/${product.name}.jpg" alt="${product.name}" width="100"></td>
            <td class="name">${product.name}</td>
            <td class="description">${product.description}</td>
            <td><button class="decrement">-</button><span class="quantity">${product.quantity}</span><button class="increment">+</button></td>
            <td class="price">${formatCurrency(product.price)}</td>
            <td><button class="delete-product">Delete</button></td>
        `;
        productContainer.appendChild(newRow);
    }
});
