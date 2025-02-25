// Position
Propert value that positions an element in the browser.

Static: Default value, the element follows the flow of the document.

Fixed: The element is positioned relative to the viewport and removed from the normal flow of the document.
The top, left, right, and bottom poperties can then be used to move the element.

Relative: The element is positioned in the same place as it would be with static, however it can be repositioned with
top, left, right, and bottom relative to its natural position on the documenet.

Sticky: The element will act similar to a relative positioned element, but once it scrolls off screen it will stay fixed
to the screen, essesntially acting as position: fixed. This is particularly useful for menu bars that need to "stick" to
the top of the screen as the user scrolls.

Absolute: Acts the same as fixed, except the element will be positioned relative to the document instead of the viewport.
This means that, as the page is scrolled, it will move with the page rather than stay at the same viewport location. However if an element is above it in the DOM, oftentimes referred to as an ancestor, has a position value other than static, then it will be positioned relative to that nearest positioned ancestor.

Z-index: Allows you to have an element be set at a height, and in front or behind of other elements.

Float: Takes element and pushed it t one side of a container, allowing elements behind it to take up the space.

Clear: Allows element under the float element will be behind it.
