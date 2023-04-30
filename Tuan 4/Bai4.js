let products = [
  {
    id: 1,
    name: "Product A",
    category: "Category 1",
    price: 10.99,
    inStock: true,
  },
  {
    id: 2,
    name: "Product B",
    category: "Category 2",
    price: 15.99,
    inStock: true,
  },
  {
    id: 3,
    name: "Product C",
    category: "Category 1",
    price: 8.99,
    inStock: false,
  },
  {
    id: 4,
    name: "Product D",
    category: "Category 3",
    price: 20.99,
    inStock: true,
  },
  {
    id: 5,
    name: "Product E",
    category: "Category 2",
    price: 12.99,
    inStock: false,
  },
  {
    id: 6,
    name: "Product F",
    category: "Category 1",
    price: 6.99,
    inStock: true,
  },
  {
    id: 7,
    name: "Product G",
    category: "Category 3",
    price: 18.99,
    inStock: true,
  },
  {
    id: 8,
    name: "Product H",
    category: "Category 2",
    price: 14.99,
    inStock: false,
  },
  {
    id: 9,
    name: "Product I",
    category: "Category 1",
    price: 9.99,
    inStock: true,
  },
  {
    id: 10,
    name: "Product J",
    category: "Category 3",
    price: 22.99,
    inStock: true,
  },
];

function searchProducts(query, category) {
  let filteredProducts = products.filter((product) => {
    let matchQuery = false;
    let matchCategory = false;

    // kiểm tra xem sản phẩm có chứa từ khóa tìm kiếm hay không
    if (query) {
      let productName = product.name.toLowerCase();
      if (productName.includes(query.toLowerCase())) {
        matchQuery = true;
      }
    } else {
      matchQuery = true;
    }

    // kiểm tra xem sản phẩm có thuộc danh mục được chọn hay không
    if (category) {
      if (product.category === category) {
        matchCategory = true;
      }
    } else {
      matchCategory = true;
    }

    return matchQuery && matchCategory;
  });

  return filteredProducts;
}

function sortProducts(sortBy) {
  let sortedProducts;

  switch (sortBy) {
    case "name-asc":
      sortedProducts = products
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      sortedProducts = products
        .slice()
        .sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "price-asc":
      sortedProducts = products.slice().sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sortedProducts = products.slice().sort((a, b) => b.price - a.price);
      break;
    default:
      sortedProducts = products;
  }

  return sortedProducts;
}

function displayProducts(products) {
  let container = document.getElementById("product-list");
  container.innerHTML = "";

  if (products.length === 0) {
    let message = document.createElement("p");
    message.textContent = "Không tìm thấy sản phẩm nào";
    container.appendChild(message);
    return;
  }

  products.forEach((product) => {
    let item = document.createElement("div");
    item.classList.add("product-item");
    let name = document.createElement("h3");
    name.textContent = product.name;
    item.appendChild(name);

    let category = document.createElement("p");
    category.textContent = product.category;
    item.appendChild(category);

    let price = document.createElement("p");
    price.textContent = `Giá: ${product.price.toFixed(2)} đ`;
    item.appendChild(price);

    let status = document.createElement("p");
    status.textContent = product.inStock ? "Còn hàng" : "Hết hàng";
    item.appendChild(status);

    container.appendChild(item);
  });
}

function updateProductList() {
  let query = document.getElementById("search-box").value.trim();
  let category = document.getElementById("category-filter").value.trim();
  let sortBy = document.getElementById("sort-by").value.trim();

  let filteredProducts = searchProducts(query, category);
  let sortedProducts = sortProducts(sortBy);

  // lấy danh sách sản phẩm theo tiêu chí tìm kiếm và sắp xếp
  let productsToShow = filteredProducts.filter((product) =>
    sortedProducts.includes(product)
  );

  displayProducts(productsToShow);
}

// gán sự kiện cho các thành phần HTML
document
  .getElementById("search-box")
  .addEventListener("input", updateProductList);
document
  .getElementById("category-filter")
  .addEventListener("change", updateProductList);
document
  .getElementById("sort-by")
  .addEventListener("change", updateProductList);

// hiển thị danh sách sản phẩm ban đầu
displayProducts(products);
