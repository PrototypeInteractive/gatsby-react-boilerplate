# Gatsby React Boilerplate

### Requirements

*   [Node.js](http://nodejs.org): for all the magic

### What's included

*   [Bootstrap](http://getbootstrap.com/): Bootstrap's normalize, grid system, and utility classes are imported by default.
*   [SVG sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/): Add your icons in `components/icon` as .icon files and use them.
*	Server: Node.js code for easy, gzipped, and secure static website hosting.

### How to proceed

1.  Prepare a coffee
1.  Run: `npm i` to install the dependencies
1.  [Install Gatsby](https://www.gatsbyjs.org/docs/)
1.  Start coding!


### Considerations

* **RTL**: The usual method of generating different css file for RTL pages (as seen in static-html-boilerplate) will not work out of the box here since Gatsby pulls all the css together, this means the RTL css will override the LTR one.