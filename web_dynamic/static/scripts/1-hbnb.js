$(document).ready(function() {
    // Initialize an empty array to store Amenity IDs
    var amenityIds = [];

    // Function to update the h4 tag inside the div Amenities with the list of Amenities checked
    function updateAmenities() {
        // Get the h4 tag inside the div Amenities
        var amenitiesHeader = $(".amenities h4");
        // Update its text content with the list of Amenities checked
        amenitiesHeader.text(amenityIds.join(", "));
    }

    // Listen for changes on each input checkbox tag
    $("input[type='checkbox']").change(function() {
        // Get the data-id attribute value of the checkbox
        var amenityId = $(this).data("id");

        // Check if the checkbox is checked
        if ($(this).prop("checked")) {
            // Add the Amenity ID to the array if it's not already present
            if (!amenityIds.includes(amenityId)) {
                amenityIds.push(amenityId);
            }
        } else {
            // Remove the Amenity ID from the array if it's checked
            var index = amenityIds.indexOf(amenityId);
            if (index !== -1) {
                amenityIds.splice(index, 1);
            }
        }

        // Update the h4 tag with the list of Amenities checked
        updateAmenities();
    });
});

