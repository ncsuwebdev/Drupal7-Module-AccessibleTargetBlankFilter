Drupal 6 Input Filter that converts links with target="_blank" and no title 
attribute to a more accessible format.

Credit: Based on Mark Shropshire's Highlight Text Filter: 
http://drupalcode.org/project/highlight_filter.git

INSTALLATION AND USAGE INSTRUCTIONS

 -- Install this module just like any other 
    (ie: place in sites/all/modules 
    directory, so that the module directory is 
    sites/all/modules/accessibletargetblankfilter)

 -- Enable the module via the admin/build/modules
 
 -- Go to the Input Format configuration screen and click "configure" beside 
    your chosen input format (admin/settings/filters)
 
 -- Check the box to enable the "Accessible Target Blank" filter then click 
    "Save Configuration"
 
 -- Click configure next to the input format again, and then click the 
    "Rearrange" tab
 
 -- Move the "Accessible Target Blank" filter to the base of the enabled filter 
    list, so that it is executed last, and then save the new order
 
 -- Click the configure tab to change the text that will display (the default 
    text is "This link will open in a new window")

That's all you have to do.

Now, whenever Drupal content is passed through the specified input format 
(and therefore this filter) any "target="_blank" links will have a < span > tag 
and some text in there to denote that it will open in a new window... making it 
a much better experience for screen-readers and keyboard-only navigation.