const container = document.querySelector('.product');

container.addEventListener("click", (e)=>{
    const target = e.target;
    if (target.classList.contains('add-to-cart')) {
        // Traverse up the DOM to find the parent product element
        const product = target.closest('.product');
        // Get the ID of the product's image
        const imageId = product.querySelector('img').id;
        // Perform your desired action with the image ID (e.g., add to cart)
        console.log('Add to cart clicked for image ID:', imageId);
      }
});

