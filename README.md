This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Structure and Libraries Used

-   #### Next.js 14:
    It is used `Next.js version 14`, chosen for compatibility with styled-components, antd and efficient server-side rendering.
-   #### Styled-Components:
    `styled-components` is used for modular and dynamic styling. In some cases, it was used the 'as' prop to dynamically change which HTML tag or component a styled component renders. In another cases it was passed HTML attributes to the element, allowing custom components to receive necessary props for dynamic styling.
-   #### Ant Design:
    The `Ant Design library` was primarily used for forms and a grid layout for the item list, which simplifies creating a responsive and well-styled user interface.
-   #### React Lite YouTube Embed:
    `React Lite YouTube Embed` library provides lightweight and optimized YouTube embeds, which improves page loading times and overall performance.

### Backend

For backend functionality, this project uses Next.js API route, which is defined in the /api folder.

### SEO:

Next.js provides robust SEO capabilities, including automatic routing, built-in support for next/head to manage meta tags, and optimized page structure for search engines.
The app uses semantic HTML tags to enhance accessibility and SEO.

## Social Media Preview Tags:

Implemented `Open Graph and Twitter Card meta tags` to ensure a preview when the page is shared on social platforms.

## Performance:

-   `Dynamic Imports`: Utilized dynamic imports for lazy loading components, such as videos and product lists.
-   `StyledComponentsRegistry` was used to ensure that styles are generated and injected into the DOM only when they are necessary.
-   `AntdRegistry` was used for managing the styles of Ant Design components.

## Deploy on Vercel

https://next-fe-be.vercel.app/
