document.addEventListener('DOMContentLoaded', () => {
    // Data for tags
    const tagData = [
        'Fashion', 'Clothing', 'T-Shirts', 'Shoes', 'Dress', 'Fitness Apparel', 
        'Jewelry', 'Strength', 'Creativity', 'Innovation', 'Excellence', 'Traditional'
    ];

    // Select the container
    const tagsContainer = document.querySelector('.tags-container');

    if (!tagsContainer) {
        console.error('Tags container not found. Make sure the .tags-container element exists in the HTML.');
        return;
    }

    // Clear existing tags (if any)
    tagsContainer.innerHTML = '';

    // Create tags dynamically
    tagData.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.textContent = tag;
        tagElement.classList.add('tag');
        tagsContainer.appendChild(tagElement);

        // Add click event to toggle 'selected' class
        tagElement.addEventListener('click', () => {
            tagElement.classList.toggle('selected');
        });
    });
});




