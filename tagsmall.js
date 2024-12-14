document.addEventListener('DOMContentLoaded', () => {
    // Dynamically create tags for the "Tags" section
    const tagData2 = [
        'Fashion', 'Clothing', 'T-Shirts', 'Shoes', 'Dress', 'Fitness Apparel', 
        'Jewelry', 'Strength', 'Creativity', 'Innovation', 'Excellence', 'Traditional'
    ];

    // Select the container
    const tagsContainer = document.querySelector('.tags-smallcontainer');

    // Check if the container exists
    if (tagsContainer) {
        // Generate tags dynamically
        tagData2.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.textContent = tag;
            tagElement.classList.add('tag');
            tagsContainer.appendChild(tagElement);

            // Toggle selected class on click
            tagElement.addEventListener('click', () => {
                tagElement.classList.toggle('selected');
            });
        });
    } else {
        console.error('Tags container not found');
    }
});
