/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
// Relinquish control of `$` to previous library
jQuery.noConflict();

// Wrap jQuery code in IIFE
(function($) {
  $(document).ready(function() {
    // Construct URL object using current browser URL
    var url = new URL(document.location);

    // Get query parameters object
    var params = url.searchParams;

	// Count parameters and verify there is a parameter to try to set
	var param_count = 0;
	for (const [key, value] of params.entries()) {param_count++;}

	if (param_count > 0) {
		// Get value of paper
		var app = params.get("app");
	
		// Set it as the dropdown value
		  $("#app").val(app);
    }
  });
})(jQuery);