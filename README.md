# PROJECT 2: BUDGET by Albert Muntal

Budget is a small Catalan budgeting application built with Angular 22, Tailwind CSS, and Angular Material. The app helps users select services, request a budget, track budget history, and see details for each budget.

---

## How the app works

The app is organized around a main dashboard that brings together:

- A **header** hero section
- A set of **service cards** that the user can select.
- A **budget summary** that updates in real time.
- A **request budget form** with validation.
- A **budget history** list with search and sort.
- A **detailed budget page** for viewing each budget.
- The possibility to **export each individual budget as a PDF**.

![Full app overview](docs/readme-assets/FULL%20APP%20OVERVIEW.png)

### User flow

1. The user opens the app and sees the landing card header.
2. They select one or more service cards and, if available, add extra pages or languages.
3. The budget summary updates automatically with the current total.
4. The user completes the budget request form and submits it.
5. The request is saved locally and appears in the budget history.
6. The user can click a budget from the history to view full details and print/PDF.

---

## Main components

### Header

The `Header` component shows the main hero message, visual branding, and responsive behavior.

![Header component](docs/readme-assets/HEADER-COMPONENT.png)

### Cards

Each `Card` represents a service offering. Cards support:

- Selecting the service with a checkbox.
- Showing extra options like pages and languages.
- Calculating the final cost in real time.
- Opening a small modal with more info.

![Selected card component](docs/readme-assets/SELECTED%20CARD%20COMPONENT.png)
![Cards component](docs/readme-assets/CARDS%20COMPONENT.png)
![Card info modal](docs/readme-assets/CARD%20INFO%20MODAL.png)

### Budget Summary

The `BudgetSummary` component displays the current total price and updates whenever card selections change.

![Budget Summary](docs/readme-assets/BUDGET%20SUMMARY.png)

### User Form

The `UserForm` component collects user data and validates:

- Name is required.
- Phone must be 9 digits.
- Email must be valid.

It is mobile-friendly and accessible.

![User form component](docs/readme-assets/USER%20FORM%20COMPONENT.png)
![User form error component](docs/readme-assets/USER%20FORM%20COMPONENT%20EMPTY%20FIELDS.png)
![User form filled component](docs/readme-assets/USER%20FORM%20FULL%20COMPONENT.png)
![Mobile user form](docs/readme-assets/USER%20FORM%20AND%20BUDGET%20HISTORY%20MOBILE%20VIEW.png)

### Budget History

The `BudgetHistory` component keeps a running list of submitted budgets. It includes:

- A search box.
- Sort buttons for date, price, and name.
- Budget cards with details and links.

![Budget history component](docs/readme-assets/BUDGET%20HISTORY%20COMPONENT.png)

### Detailed Budget

The `DetailedBudget` component shows the full content of a selected budget and includes a print/PDF view.

![Detailed budget component](docs/readme-assets/DETAILED%20BUDGET%20COMPONENT.png)

![PDF print view](docs/readme-assets/PDF%20PRINT%20VIEW.png)

---

## Project structure

Complete folder structure for the project (workspace root):

```text
Annexos-20260706/
    annex-1-projecte-2-briefing.md
    Mockups/
budget-albert/
    angular.json
    package.json
    README.md
    tsconfig.app.json
    tsconfig.json
    tsconfig.spec.json
    public/
        data/
            mock-budgets.ts
        icons/
    docs/
        readme-assets/
            FULL APP OVERVIEW.png
            HEADER-COMPONENT.png
            CARDS COMPONENT.png
            SELECTED CARD COMPONENT.png
            USER FORM COMPONENT.png
            USER FORM COMPONENT EMPTY FIELDS.png
            USER FORM FULL COMPONENT.png
            USER FORM AND BUDGET HISTORY MOBILE VIEW.png
            BUDGET HISTORY COMPONENT.png
            BUDGET HISTORY CARD WITH FILTER COMPONENT.png
            DETAILED BUDGET COMPONENT.png
            PDF PRINT VIEW.png
            VERCEL-DASHBOARD.png
            PROJECT-KANBAN.png
    src/
        index.html
        main.ts
        material-theme.scss
        styles.css
        app/
            app.config.ts
            app.css
            app.html
            app.routes.ts
            app.spec.ts
            app.ts
            components/
                budget-history/
                    budget-history.css
                    budget-history.html
                    budget-history.spec.ts
                    budget-history.ts
                budget-summary/
                    budget-summary.css
                    budget-summary.html
                    budget-summary.spec.ts
                    budget-summary.ts
                card/
                    card.css
                    card.html
                    card.spec.ts
                    card.ts
                checkbox/
                    checkbox.css
                    checkbox.html
                    checkbox.spec.ts
                    checkbox.ts
                dashboard/
                    dashboard.css
                    dashboard.html
                    dashboard.spec.ts
                    dashboard.ts
                detailed-budget/
                    detailed-budget.css
                    detailed-budget.html
                    detailed-budget.spec.ts
                    detailed-budget.ts
                header/
                    header.css
                    header.html
                    header.spec.ts
                    header.ts
                user-form/
                    user-form.css
                    user-form.html
                    user-form.spec.ts
                    user-form.ts
            models/
                cardData.ts
                cardSelection.ts
                finalBudget.ts
                sortOption.ts
                task.ts
                userForm.ts
            services/
                budgets-local-storage.spec.ts
                budgets-local-storage.ts
    test-setup.ts
    vitest.config.ts
    .gitignore
    README.md
```

---

## Technology stack

- Angular 22.0.x
- Tailwind CSS 4.3.x
- Angular Material 22.0.x
- TypeScript 6.x
- Vitest / Angular unit testing

---

## Run locally

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
ng serve
```

Open the app at:

```text
http://localhost:4200/
```

---

## Tests

Run the unit tests with:

```bash
ng test
```

This project includes component specifications for all major views and logic paths.

---

## Project planning (Kanban)

The project's Kanban board is available on Trello:

[Budget Albert Trello board](https://trello.com/b/vvb3pweT/budget-albert)

Screenshot of the board (stored in `docs/readme-assets/`):

![Project Kanban](docs/readme-assets/PROJECT-KANBAN.png)

---

## Deployment with Vercel

The project is deployed to Vercel. Live site:

[https://projecte2-budget-albert.vercel.app](https://projecte2-budget-albert.vercel.app)

If you need to re-deploy or connect a new repository, use these settings:

1. Connect the repository to Vercel.
1. Set the build command to:

```bash
npm run build
```

1. Set the output directory to:

```text
dist/budget-albert
```

1. Deploy.

These settings were used to produce the currently published site above.

### Vercel configuration file (example)

You can add a `vercel.json` at the project root to pin the build/output settings. Example:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist/budget-albert" }
    }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

### Deployment checklist (quick)

1. Confirm repository is connected to Vercel and the correct branch is selected.
2. Build command: `npm run build`.
3. Output directory: `dist/budget-albert`.
4. (Optional) Add `vercel.json` as shown above to enforce the static build output.
5. Deploy and open the site at the published URL.

![Vercel dashboard](docs/readme-assets/VERCEL-DASHBOARD.png)

---

## Notes

- The budget history is saved locally in the browser using `localStorage`.
- The UI is mobile-first and uses responsive Tailwind breakpoints.
- The app is designed for keyboard accessibility and includes aria attributes for forms and buttons.

---

## Assets

Screenshots used for the README are stored in `docs/readme-assets/`.

## License & Credits

Developed by:

- Albert Muntal Perez
- LinkedIn: [https://www.linkedin.com/in/albert-muntal-perez-a626a0120/](https://www.linkedin.com/in/albert-muntal-perez-a626a0120/)
- GitHub: [https://github.com/DrMunty](https://github.com/DrMunty)
