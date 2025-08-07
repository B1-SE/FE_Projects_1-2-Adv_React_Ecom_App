
# 🛒 Advanced React E-Commerce App

A fully responsive and feature-rich e-commerce application built with **React**, **Redux Toolkit**, **React Query**, and **TypeScript**. Uses the [FakeStoreAPI](https://fakestoreapi.com/) for simulating product and category data.

## 🚀 Live Demo

👉 [View Live App](https://your-live-site.vercel.app)

---

## 📁 Project Structure

```
advanced-react-ecom-app/
├── .github/workflows/         # GitHub Actions CI/CD pipeline
├── public/                    # Static assets
├── src/
│   ├── api/                   # Axios instance + API functions
│   ├── components/            # Shared UI components
│   ├── features/cart/         # Redux cart slice
│   ├── hooks/                 # Custom React hooks
│   ├── pages/                 # Main page components
│   ├── store/                 # Redux store setup
│   ├── styles/                # Global and responsive CSS
│   ├── utils/                 # Helper utilities
│   ├── __tests__/             # Unit & Integration tests
│   └── App.tsx, index.tsx     # App entry points
├── .env.example               # Environment variable template
├── README.md                  # This file
```

---

## ⚙️ Features

- ✅ Product listing with category filtering via dropdown
- ✅ Product details: image, title, description, rating, and price
- ✅ Add/remove items from cart using Redux Toolkit
- ✅ Persistent cart with `sessionStorage`
- ✅ Checkout simulation (with fake order ID and modal)
- ✅ Thank You page + Order logging via `localStorage`
- ✅ Admin panel to view simulated orders
- ✅ CI/CD pipeline with GitHub Actions + Vercel deployment
- ✅ TDD with Jest + React Testing Library
- ✅ Fully responsive (mobile-first, flexbox-based design)

---

## 🧪 Test-Driven Development (TDD)

### Unit Tests

- `Navbar.test.tsx`: Ensures navigation links render correctly.
- `CartPage.test.tsx`: Validates cart item count, remove functionality.

### Integration Test

- `CartIntegration.test.tsx`: Simulates product add → verifies cart state change.

Run tests:

```bash
npm test
```

---

## 🛠️ CI/CD Pipeline (GitHub Actions + Vercel)

### CI Setup (.github/workflows/main.yml)

- On `push` to `main`, it:
  - Installs dependencies
  - Builds the project
  - Runs unit/integration tests
  - Prevents deployment if any test fails

### CD Setup (Vercel)

- Auto-deploys on successful CI pipeline
- Link project to [Vercel](https://vercel.com)
- Add your environment variables via the Vercel dashboard

---

## 💡 Future Extensions

### 1. Sorting

Allow sorting by price/rating:

```
?category=electronics&sort=price-asc
```

Add sorting UI and handle it via `React Query` params.

### 2. Pagination

Enable paginated product fetch:

```
?category=electronics&page=2
```

Persist scroll position and cache pages using `React Query`.

### 3. Combined Filters

Enable category + price range + sorting:

```
?category=clothing&price=10-50&sort=rating-desc
```

Use URL params to persist filters across refresh/navigation.

---

## 🧼 Code Quality

- Modular file structure
- Flex containers for all product/card layouts
- Global styles + per-component styles
- Fully responsive (500px and above)

---

## 📦 Dependencies

- React
- Redux Toolkit
- React Query
- Axios
- React Router
- Jest + React Testing Library
- MSW (Mock Service Worker)

---

## 🙌 Author & License

Built by [Your Name]. MIT License.
