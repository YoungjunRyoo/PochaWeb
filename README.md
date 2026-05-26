# Pocha is Back - Responsive Web Application & Delivery Integration

> **A production-ready frontend application for a local restaurant, refactored from a legacy codebase to optimize user experience, eliminate dead code, and integrate core business features like Uber Eats and a serverless feedback channel.**

Live Demo: [https://pochaisback.netlify.app/]

---

## Project Overview
This project is a modern, responsive web application tailored for *Pocha is Back*, a Korean pub based in Austin, Texas. 

Instead of just maintaining a static informational page, the goal of this update was to transform the codebase into a high-converting business tool. I deprecated an underutilized, high-friction "Favorites" feature and replaced the user flow with direct **Uber Eats online ordering** and a streamlined **Serverless Customer Feedback system**, significantly shortening the conversion funnel for customers.

## Technical Stack
- **Frontend:** React (JavaScript), React Router DOM
- **Styling:** CSS3 (Flexbox/Grid, Mobile-First Responsive Design)
- **Deployment:** [Netlify / GitHub Pages]
- **Third-party Services:** Formspree (Serverless Form Architecture)

---

## Key Engineering & Refactoring Achievements

### 1. Eliminating Redundant State & Context Refactoring
- **Feature Deprecation:** Identified and removed a low-utility "Favorites" bookmarking feature that added unnecessary complexity for an informational/ordering restaurant site.
- **Context Optimization:** Refactored the global state configuration within `FoodContext`. By decoupling the unused favorite-tracking array and its associated handlers (`isFavorite`, `addToFavorites`), I reduced component re-rendering cycles and lightened the application's runtime footprint.

### 2. High-Conversion "Order Online" Funnel Architecture
- Streamlined the customer conversion path by completely bypassing internal pages and creating direct hooks to the restaurant's **Uber Eats** platform natively on the navigation bar.
- Implemented secure external routing practices using `target="_blank"` paired with `rel="noopener noreferrer"` across all outbound anchors to mitigate reverse-tabnabbing security vulnerabilities.

### 3. Serverless Customer Feedback System using Formspree
- Leveraged `@formspree/react` to spin up a fully functional customer satisfaction pipeline without provisioning a dedicated backend server or managing a database.
- Integrated frontend-level data validation (`ValidationError`) to catch malformed email strings or empty text scopes before making API network requests, saving client-side processing bandwidth.

### 4. Component Isolation & CSS Architecture Fixes
- Debugged a common cascading layout issue where global utility selectors leaked styles between independent components (e.g., navigation bar hover behaviors polluting footer link rendering boxes).
- Re-architected the stylesheets by creating strict, scoped class namespaces (`.footer-link`, `.footer-insta-icon`). Used explicit style resets (`background-color: transparent !important`) to strip inherited rectangular backgrounds and box-shadows, ensuring design uniformity.

---

## 📱 Responsive Layout & UI/UX
- Engineered fluid layout transitions utilizing CSS Media Queries (`@media (max-width: 768px)`), morphing desktop multi-column spaces into single-column layouts for optimal smartphone and tablet legibility.
- Enhanced touch-target spacing for mobile users browsing the dynamic menu cards and interactive phone/location hyperlinks.