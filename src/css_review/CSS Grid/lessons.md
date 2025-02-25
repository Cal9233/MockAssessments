A layout model used for creating responsive layouts of multiple rows and columns. An element can be made a grid container with display: grid, and all of its direct children will automatically be laid out as grid items in a single cell.
A rectangular subsection of a grid is known as a grid area. The dividers between each row and column are known as grid lines, and the rows and columns they create are called tracks.
For grid containers, these are some of the most common properties used to layout their grid items:
• grid-template-columns: Determines the number of columns and their sizes. The unit fr can be used as a fractional unit here to create a responsive design. - minmax: set width to column fr
Ex:
body {
display: grid,
grid-template-columns: minmax(200px, 1fr), 2fr, 1fr
}
• grid-template-rows: Determines the number of rows and their sizes. The unit fr can be used as a fractional unit here to create a responsive design.
• grid-template-areas: Creates names for grid areas that grid items can place themselves in.
• justify-content: Determines how grid tracks are aligned along the inline-axis (row) with possible values including start, end, center, space-around, space-between, and space-evenly.
• align-content: Determines how grid tracks are aligned along the block-axis (column) with possible values including start, end, center, space-around, space-between, and space-evenly.
• align-items: Determines how grid items are aligned in columns (called the block-axis). Possible values include start , end, center, and stretch.
• justify-items: Determines how grid items are aligned in rows (called the inline-axis). Possible values include start, end, center, and stretch.
• place-items: A shorthand for both align-items and justify-items. If one value is given, it will apply to both. If two values are given, they will applyto align-items and justify-items respectively.
• gap: Determines the amount of space between grid items. This can take one or two length values. If it is given two, they will be treated as a row gap and a column gap respectively. Alternatively, a row-gap and column-gap property can be specified to individually set the gap between rows and columns.
For grid items, these are some of the most common properties used to position themselves:
• grid-column-start: Determines what column this item starts on, based on a line number.
• grid-column-end: Determines what column this item ends on, based on a line number.
• grid-column: A shorthand for both grid-column-start and grid-column-end specified in the format start / end.
• grid-row-start: Determines what row this item starts on, based on a line number.
• grid-row-end: Determines what row this item ends on, based on a line number.
• grid-row: A shorthand for both grid-row-start and grid-row-end specified in the format start / end .
• grid-area: Places the item in a grid-area based on a name created in grid-template-areas .
• align-self: Overrides the align-items value used for the grid container.
• justify-self: Overrides the justify-items value used for the grid container.
• place-self: A shorthand for both align-self and justify-self in the same formatas place-items.
