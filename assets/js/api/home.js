document.addEventListener('DOMContentLoaded', () => {
    getCategoriesData();
    setCategoriesImages();

    function getCategoriesData() {
        const url = 'https://fakestoreapi.com/products/categories';
        try {
            fetch('https://fakestoreapi.com/products/categories')
                .then(res => res.json())
                .then(json => {
                    const categories = [json[0], json[1], json[2], json[3], json[0], json[1]];

                    // Get the elements by ID
                    const category1 = document.getElementById('category-1');
                    const category2 = document.getElementById('category-2');
                    const category3 = document.getElementById('category-3');
                    const category4 = document.getElementById('category-4');
                    const category5 = document.getElementById('category-5');
                    const category6 = document.getElementById('category-6');

                    // Update the content
                    if (category1 && category2 && category3 && category4 && category5 && category6) {

                        category1.innerHTML = `${categories[0]}`;
                        category2.innerHTML = `${categories[1]}`;
                        category3.innerHTML = `${categories[2]}`;
                        category4.innerHTML = `${categories[3]}`;
                        category5.innerHTML = `${categories[4]}`;
                        category6.innerHTML = `${categories[5]}`;
                    }
                });


            fetch('https://fakestoreapi.com/products/category/electronics')
                .then(res => res.json())
                .then(json => {
                    const category1Len = json.length;
                    // Get the elements by ID and Update the content
                    const categoryLen1 = document.getElementById('category-1-len');
                    categoryLen1.innerHTML = `${category1Len}`;
                });
            fetch('https://fakestoreapi.com/products/category/jewelery')
                .then(res => res.json())
                .then(json => {
                    const category2Len = json.length;
                    const categoryLen2 = document.getElementById('category-2-len');
                    categoryLen2.innerHTML = `${category2Len}`;
                });
            fetch("https://fakestoreapi.com/products/category/men's clothing")
                .then(res => res.json())
                .then(json => {
                    const category3Len = json.length;
                    const categoryLen3 = document.getElementById('category-3-len');
                    categoryLen3.innerHTML = `${category3Len}`;
                });
            fetch("https://fakestoreapi.com/products/category/women's clothing")
                .then(res => res.json())
                .then(json => {
                    const category4Len = json.length;
                    const categoryLen4 = document.getElementById('category-4-len');
                    categoryLen4.innerHTML = `${category4Len}`;
                });
            fetch('https://fakestoreapi.com/products/category/electronics')
                .then(res => res.json())
                .then(json => {
                    const category5Len = json.length;
                    const categoryLen5 = document.getElementById('category-5-len');
                    categoryLen5.innerHTML = `${category5Len}`;
                });
            fetch('https://fakestoreapi.com/products/category/jewelery')
                .then(res => res.json())
                .then(json => {
                    const category6Len = json.length;
                    const categoryLen6 = document.getElementById('category-6-len');
                    categoryLen6.innerHTML = `${category6Len}`;
                });
        } catch (error) {
            console.error('Error fetching all categories:', error);
        }
    }

    function setCategoriesImages() {
        try {
            // Set Categories Images
            fetch('https://fakestoreapi.com/products/category/electronics?limit=5')
                .then(res => res.json())
                .then(json => {
                    return json[4];
                }).then(data => {
                    const image = data.image;
                    const category1Image = document.getElementById('category-1-img');
                    category1Image.src = `${image}`;
                });
            fetch('https://fakestoreapi.com/products/category/jewelery?limit=1')
                .then(res => res.json())
                .then(json => {
                    return json[0];
                }).then(data => {
                    const image = data.image;
                    const category2Image = document.getElementById('category-2-img');
                    category2Image.src = `${image}`;
                });
            fetch("https://fakestoreapi.com/products/category/men's clothing?limit=1")
                .then(res => res.json())
                .then(json => {
                    return json[0];
                }).then(data => {
                    const image = data.image;
                    const category3Image = document.getElementById('category-3-img');
                    category3Image.src = `${image}`;
                });
            fetch("https://fakestoreapi.com/products/category/women's clothing?limit=1")
                .then(res => res.json())
                .then(json => {
                    return json[0];
                }).then(data => {
                    const image = data.image;
                    const category4Image = document.getElementById('category-4-img');
                    category4Image.src = `${image}`;
                });
            fetch('https://fakestoreapi.com/products/category/electronics?limit=1')
                .then(res => res.json())
                .then(json => {
                    return json[0];
                }).then(data => {
                    const image = data.image;
                    const category5Image = document.getElementById('category-5-img');
                    category5Image.src = `${image}`;
                });
            fetch('https://fakestoreapi.com/products/category/jewelery?limit=1')
                .then(res => res.json())
                .then(json => {
                    return json[0];
                }).then(data => {
                    const image = data.image;
                    const category6Image = document.getElementById('category-6-img');
                    category6Image.src = `${image}`;
                });
        } catch (error) {
            console.error('Error fetching all categories:', error);
        }
    }

});