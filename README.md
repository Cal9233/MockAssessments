Mock Frontend Assessment: Scalable, Reusable, and Responsive Components
Overview
Your task is to build a small React component library that demonstrates best practices in responsiveness, reusability, and scalability. You will need to create multiple reusable components and integrate them into a sample dashboard.

Requirements:

Use React (with hooks if necessary).
Use Styled Components or Tailwind CSS for styling.
Ensure components are fully responsive and adapt to different screen sizes.
Implement a design system approach (scalable and reusable).
Optimize for performance and accessibility (a11y).
Part 1: Component Library (60%)
Build a small UI component library with the following components:

1. Button Component
   Should support primary, secondary, and outline variants.
   Allow users to pass icons as props (left/right).
   Support different sizes (small, medium, large).
   Be fully accessible (aria-label, focus styles).
2. Input Component
   Should support text, number, and password input types.
   Support different states (error, disabled, success).
   Include an optional icon inside the input.
   Make it fully responsive.
3. Card Component
   Accept title, content, and an optional footer.
   Support a clickable variant (for navigation).
   Be responsive (grid-friendly).
4. Modal Component
   Should support open/close state with animation.
   Allow custom header, body, and footer content.
   Close when clicking outside or pressing Esc.
   Part 2: Dashboard Implementation (40%)
   Using your component library, create a responsive dashboard that includes:

Navbar:

Contains a logo and navigation links.
Supports mobile-friendly dropdown navigation.
Sidebar (Collapsible):

Contains menu items with icons.
Should collapse to an icon-only version on smaller screens.
Content Area:

Displays a grid of Card components.
Uses the Modal component when a card is clicked.
Bonus (Optional)
Implement lazy loading for better performance.
Use Context API or Redux for state management.
Write unit tests for one or more components using Jest + React Testing Library.
Submission Guidelines
Provide a GitHub repository link with a README.md explaining setup instructions.
Include a working demo (e.g., CodeSandbox, Vercel, or Netlify).
This assessment will test your ability to write clean, scalable, and maintainable code while following best practices for reusability, responsiveness, and accessibility. Let me know if you'd like modifications! 🚀
