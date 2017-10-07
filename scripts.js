(function ($) {

    $(document).ready(function () {

        var isVisible = false;

        var nav = $(".navbar");

        $("#hamburger").on("click", function() {
            
            $(this).hide();
            $("#hamburger_close").show();
            $(".navbar").slideDown(500);
            
        });

        $("#hamburger_close").on("click", function() {
            
            $(this).hide();
            $("#hamburger").show();
            $(".navbar").slideUp(500);
            
        });        

    });

})(jQuery);
