Drupal 7 Input Filter that converts links with target="_blank" and no title
attribute to a more accessible format.

Source Code:
https://github.com/ncsuwebdev/Drupal7-Module-AccessibleTargetBlankFilter

Credit: Based on Mark Shropshire's Highlight Text Filter:
http://drupalcode.org/project/highlight_filter.git

INSTALLATION AND USAGE INSTRUCTIONS

-- Install this module just like any other
(ie: place in sites/all/modules
directory, so that the module directory is
sites/all/modules/accessibletargetblankfilter)

-- Enable the module via the admin/build/modules

-- Go to the Input Format configuration screen and click "configure" beside
your chosen input format (admin/config/content/formats)

-- Check the box to enable the "Accessible Target Blank" filter then configure 
the options below, then click "Save Configuration"

That's all you have to do.

Now, whenever Drupal content is passed through the specified input format
(and therefore this filter) any "target="_blank" links will have a < span > tag
and some text in there to denote that it will open in a new window... making it
a much better experience for screen-readers and keyboard-only navigation.