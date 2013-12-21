jQuery(document).ready(function() {
    jQuery('#top-menu-toggle li [data-toggle="collapse"]').click(function() {
        jQuery('#top-menu-collapse').toggleClass('hidden-xs');
    });
    jQuery("#top-menu-collapse li > ul").hide();
    jQuery("#top-menu-collapse li > ul li a[class=current]").parents("ul").show().prev("a").addClass("topmenuExpanded");
    jQuery("#top-menu-collapse li:has(ul)").addClass("topmenuNormal");
    jQuery("#top-menu-collapse li:has(ul) > a").click(function()
    {
        jQuery(this).toggleClass("topmenuExpanded");
        jQuery(this).next("ul").slideToggle("fast");
        jQuery(this).parent().siblings("li").children("ul:visible").slideUp("fast").parent("li").find("a").removeClass("topmenuExpanded");
        return false
    })
});

