// Example JavaScript functionality (optional)
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Đặt hàng thành công!');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const filterButton = document.getElementById("filter-button");
    const filterDropdown = document.querySelector(".filter-dropdown");
    const applyFilter = document.getElementById("apply-filter");
    const products = document.querySelectorAll(".product-card");

    // Đảm bảo dropdown bị ẩn khi tải trang
    filterDropdown.style.display = "none";

    // Mở/Tắt menu lọc
    filterButton.addEventListener("click", function () {
        filterDropdown.style.display = filterDropdown.style.display === "block" ? "none" : "block";
    });

    // Hàm lọc sản phẩm
    function filterProducts() {
        const colorFilter = document.getElementById("color-filter").value;
        const priceFilter = document.getElementById("price-filter").value;

        products.forEach(product => {
            const productColor = product.getAttribute("data-color");
            const productPrice = product.getAttribute("data-price");

            const matchColor = colorFilter === "all" || productColor === colorFilter;
            const matchPrice = priceFilter === "all" || productPrice === priceFilter;

            if (matchColor && matchPrice) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });

        // Ẩn dropdown sau khi áp dụng lọc
        filterDropdown.style.display = "none";
    }

    // Lọc khi nhấn "Áp dụng"
    applyFilter.addEventListener("click", filterProducts);
});
function toggleMenu() {
    document.querySelector("nav").classList.toggle("active"); // Toggle class 'active' trên menu di động
}
