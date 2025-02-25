// Box Sizing

CSS property specifying how width and height should be calculated for the selected element.
Default value is content-box for most elements which sets the width and height to only control the size of the content.
However, a value of border-box would include the size of the padding and border.

// Border-Box
Ex:

- {
  box-sizing: border-box
  }

border-box takes up the width of the width property element.
Ex:

.box {
padding: 12px;
width: 100px;
border:24px;
}

border-box would only take up a total width of 100px.

// Content-Box
Ex:

- {
  box-sizing: border-box
  }

content-box takes the total width of the element content width.
Ex:

.box {
padding: 12px;
width: 100px;
border:24px;
}

content-box would take up a total width of 172px. Taking account padding, border for left and right side.
