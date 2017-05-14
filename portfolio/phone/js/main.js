(function ($) {
    $(function() {
        // Calls the selectBoxIt method on your HTML select box.
        $("#SelectBoxIt").selectBoxIt(
            {autoWidth: "true"}
        );
        // Toggle sidebar's visibility.
        $(".filter-xs").on("click", function() {
            $(".sidebar").toggleClass("hidden-xs");
        });
        // Toggle filter-list's visibility.
        $(".filter-title").on("click", function () {
            $(this).siblings(".filter-list").toggleClass("opened");
        });
    });
})(jQuery);