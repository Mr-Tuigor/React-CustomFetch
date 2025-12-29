# React CustomFetch Store 🛒

A modern, responsive e-commerce storefront built with **React** and **Vite**. This project demonstrates how to handle asynchronous data fetching using custom hooks and external JSON hosting.

## Live Demo .
[View Live Site on Netlify]([https://your-site-name.netlify.app](https://myreactcustomhook.netlify.app/])

## Featuree
- **Custom Fetch Hook**: Centralized logic for handling API calls, loading states, and error handling.
- **External Data Integration**: Product data is fetched dynamically from a hosted JSON source.
- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **Vite-Powered**: Fast Development and optimized production builds.

## Used Stack
- **Frontend**: React.js (Hooks, Functional Components)
- **Styling**: CSS3 / Tailwind (optional: mention if used)
- **Data Hosting**: GitHub Gist / Raw JSON
- **Deployment**: Netlify


## Project Decisions

1.  Data Architecture
Decision: I Created the JSON data in products.js file and external hosted JSON source (GitHub Gist). This mimics a real-world production environment where data is managed via a database. It allows the frontend to remain lightweight and ensures that updates to the product list don't require a full code re-deploy.

2. Clean JSON Standards
Decision: Strict conversion from JavaScript Objects to JSON-compliant format (standardizing double quotes and removing trailing commas). Standard JSON is the universal language of the web. By enforcing strict formatting, we ensured the data is compatible with any browser's native fetch() API and avoided conversion errors during production builds.

3. Custom Fetch Hook Pattern
Decision: Implementing the data fetching logic inside a reusable Custom Hook. This helps for complexity of handling loading, Error, and data states, Making the UI components cleaner and better to test.

4. Vite for Build Tooling
Decision: Choosing Vite over Create React App (CRA). Rationale: Vite provides significantly faster Hot Module Replacement (HMR) and a more efficient build process using ESbuild. This results in a better developer experience and smaller, faster production bundles on Netlify.

5. Deployment
Decision: Connecting the GitHub repository directly to Netlify for Continuous Integration, This ensures that the live site is always in sync with the main branch. It also allows for automatic build logs, making it easier to catch syntax errors before the site goes live.

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [https://github.com/your-username/React-CustomFetch.git](https://github.com/your-username/React-CustomFetch.git)
