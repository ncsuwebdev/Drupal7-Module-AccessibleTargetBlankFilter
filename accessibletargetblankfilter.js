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
    $("a").each(function(){
        
        if (!$(this).attr('title')) {
            $(this).attr('title', 'Link to ' + $(this).attr('href'));
        }
        
    });
    
    // add class to all target="_blank" links
    $("a[target=_blank]").each(function(index, el) { 
        var el = $(el); 
        el.addClass('linkTargetBlankParent');
    });
    
});
