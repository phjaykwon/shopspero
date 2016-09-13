# shopspero
A Meteor.JS app for shop-spero.com
testing


## JS Best Practices/Documentation/Commenting
--------------
### Overview
-Use understandable variable names
-Don't use global variables
-If adding any resources, commit with descriptive message
-


### Adding a Page
Add a folder in the client folder containing the html, css, and js files for that page. Then go to routes.js under lib copy one of the other routing functions. Make sure to comment the functionality and the reason for that page.

### Inline Commenting
Create a separate line for this, don't comment on the same line as code.

### Commenting Functions
Use the [jsdoc](https://github.com/jsdoc3/jsdoc) style.

Example:

/**
 * Adds two numbers
 * @param {Number} a 
 * @param {Number} b
 * @return {Number} sum
 */
 function sum(a,b) { 
   return a + b;
 }



 Resources used include [this](http://stackoverflow.com/questions/10126310/does-javascript-have-a-standard-for-commenting-functions), [this](https://www.thinkful.com/learn/javascript-best-practices-1/), and [this](http://www.hongkiat.com/blog/source-code-comment-styling-tips/).

To quote a wise man:
> rip harambe
