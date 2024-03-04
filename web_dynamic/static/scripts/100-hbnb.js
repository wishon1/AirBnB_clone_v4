$(document).ready(function () {
  let reviewsLoaded = false;

  // Function to fetch and display reviews
  function fetchAndDisplayReviews() {
    $.get('http://0.0.0.0:5001/api/v1/reviews/', function (data, textStatus) {
      if (textStatus === 'success') {
        if (data.length > 0) {
          $('.reviews').empty();
          data.forEach(function (review) {
            $('.reviews').append('<div class="review"><p><b>By: </b>' + review.created_by + '</p><p>' + review.text + '</p></div>');
          });
          $('.toggle-reviews').text('Hide reviews');
          reviewsLoaded = true;
        } else {
          $('.reviews').text('No reviews available.');
        }
      } else {
        $('.reviews').text('Failed to load reviews.');
      }
    });
  }

  // Toggle reviews visibility
  $('.toggle-reviews').click(function () {
    if (reviewsLoaded) {
      $('.reviews').toggle();
      $(this).text(function (_, text) {
        return text === 'Hide reviews' ? 'Show reviews' : 'Hide reviews';
      });
    } else {
      fetchAndDisplayReviews();
    }
  });
});
