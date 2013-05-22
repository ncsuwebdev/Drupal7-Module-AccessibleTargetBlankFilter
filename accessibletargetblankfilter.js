/*
* 
* converts target="_blank" links to a more accessible format
* adds a class to any matched link that css can then work with
* 
* adds a title attribute if one is not found too
*         
*/

jQuery(document).ready(function() {
    
    // check to see if there's a title attribute, and if not, set one
    jQuery("a").each(function(){
        
        if (!jQuery(this).attr('title')) {
            jQuery(this).attr('title', 'Link to ' + jQuery(this).attr('href'));
        }
        
    });
    
    // add class to all target="_blank" links
    jQuery("a[target=_blank]").each(function(index, el) { 
        var el = jQuery(el); 
        el.addClass('linkTargetBlankParent');
    });
    
});
