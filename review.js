// document.getElementById('reviewForm').addEventListener('submit', function(e) {
//     e.preventDefault();
  
//     // Get input values
//     const name = document.getElementById('name').value;
//     const reviewText = document.getElementById('review').value;
//     const rating = document.getElementById('rating').value;
  
//     // Create a review element
//     const reviewItem = document.createElement('div');
//     reviewItem.classList.add('review-item');
  
//     // Add content to the review
//     reviewItem.innerHTML = `
//       <div class="review-header">${name} <span class="rating">${'⭐'.repeat(rating)}</span></div>
//       <p>${reviewText}</p>
//     `;
  
//     // Append review to the reviews list
//     document.getElementById('reviewsList').appendChild(reviewItem);
  
//     // Clear the form
//     document.getElementById('reviewForm').reset();
//   });
document.getElementById('reviewForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById('name').value;
  const reviewText = document.getElementById('review').value;
  const rating = document.getElementById('rating').value;

  // Create a review object
  const review = {
      name: name,
      reviewText: reviewText,
      rating: rating
  };

  // Get existing reviews from localStorage or initialize an empty array
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  
  // Add the new review to the array
  reviews.push(review);

  // Save the updated reviews array back to localStorage
  localStorage.setItem('reviews', JSON.stringify(reviews));

  // Create a review element
  const reviewItem = document.createElement('div');
  reviewItem.classList.add('review-item');

  // Add content to the review
  reviewItem.innerHTML = `
    <div class="review-header">${name} <span class="rating">${'⭐'.repeat(rating)}</span></div>
    <p>${reviewText}</p>
  `;

  // Append review to the reviews list
  document.getElementById('reviewsList').appendChild(reviewItem);

  // Clear the form
  document.getElementById('reviewForm').reset();

  // Load existing reviews when the page is loaded
  loadReviews();
});

// Function to load reviews from localStorage
function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.forEach(review => {
      const reviewItem = document.createElement('div');
      reviewItem.classList.add('review-item');
      reviewItem.innerHTML = `
        <div class="review-header">${review.name} <span class="rating">${'⭐'.repeat(review.rating)}</span></div>
        <p>${review.reviewText}</p>
      `;
      document.getElementById('reviewsList').appendChild(reviewItem);
  });
}

// Function to clear reviews from localStorage
function clearReviews() {
  localStorage.removeItem('reviews'); // This removes the reviews from localStorage
  document.getElementById('reviewsList').innerHTML = ''; // Clear the displayed reviews from the DOM
}

// Call loadReviews on page load
window.onload = loadReviews;

// Add event listener for clear reviews button
document.getElementById('clearReviewsButton').addEventListener('click', clearReviews);