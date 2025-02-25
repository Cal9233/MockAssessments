// Flexbox

Layout model useful for building responsive designs with row or column layouts. An element can be made a flex container
with display: flex, and all of its direct children will automatically be laid out as flex items.

Common properties:

For flex containers, these are some of the most common properties used to layout their flex items:

- flex-direction: Determines which direction is the main-axis, either row or column. Additionally, row-reverse and column-reverse can be used to reverse the order of flex items.
- justify-content: Determines how elements are positioned along the main-axis with possible values of flex-start, flex-end, center, space-around, space-between, and space-evenly
- align-items: Determines how elements are positioned along the cross-axis (the one not selected by flex-direction). Possible values are flex-start, flex-end, center, baseline, and stretch.
- flex-wrap: Determines if flex items can wrap to new lines with possible values of wrap and nowrap. wrap-reverse can also be used to wrap flex items with the lines in reverse order.
- align-content: Determines how lines are positioned along the cross-axis when flex items are wrapping on multiple lines. Possible values are flex-start, flex-end, center, space-around, space-between, and stretch.
- flex-flow: A shorthand for flex-direction and flex-wrap .
- gap: Determines the amount of space between flex items. This can take one or two length values. If it is given two, they will be treated as a row gap and a column gap respectively. Alternatively, a row-gap and column-gap property can be specified to individually set the gap between rows and columns.

For flex items, these are some of the most common properties used to position themselves:

- align-self: Overrides the align-items value used for the flex container.
- flex-basis: Sets the initial size of the flex item along the main-axis (essentially this will act as width for the row axis and height for the column axis).
- flex-grow: Determines if the flex item is able to grow into extra space. If the value is 0, the flex item will not grow.
  Otherwise, it will take up as much extra space as possible, with larger grow values taking more space proportionally. For example, if item A has a value of 1 and item B has a value of 2, then item B will take up twice as much extra space as item A (Note this does not mean it will be twice as large, only that it will take twice as much of the extra space).
- flex-shrink: Determines if a flex item is able to shrink in the case that the flex items are too large for the container. Flex tems with a value of O will not shrink. Otherwise they will all shrink proportionally based on their values, similar to flex grow. The higher the value, the more the flex item will potentially shrink.
- flex: A shorthand property for flex-grow, flex-shrink, and flex-basis in that order.
- order: Moves the flex-item to a different location amongst the other flex items rather than using the order defined in he DOM. All flex items default to having a value of O. This means a value of -1 would move an item before all other items that have not changed their order. Likewise, a value of 1 would place the item at the end.
