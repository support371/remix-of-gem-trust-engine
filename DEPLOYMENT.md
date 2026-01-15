# Deployment – Gem-Assist (Vercel)

## Overview

This guide provides instructions for deploying and managing the Gem-Assist project on Vercel.

## Vercel Project Mapping

-   **Project:** `gem-assist-s7kb`
-   **Production Branch:** `main`
-   **Preview Branches:** All Pull Request branches will automatically generate Preview deployments.

## Branching & Release Workflow

The project follows a standard Git flow:

1.  Create a feature branch from `main`.
2.  Submit a Pull Request to `main`.
3.  The PR is automatically deployed to a Preview environment on Vercel for review.
4.  Once approved, the PR is merged into `main`, which triggers a Production deployment.

## Required Environment Variables

The following environment variables must be configured in your Vercel project:

-   `TOOLHOUSE_API_KEY`
-   `VITE_SUPABASE_URL`
-   `VITE_SUPABASE_PUBLISHABLE_KEY`

*Note: There are no `GITHUB_CLIENT_ID` or `GITHUB_CLIENT_SECRET` variables as Supabase handles the GitHub OAuth integration.*

## Local Run Instructions

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Run Development Server:**
    ```bash
    npm run dev
    ```
3.  **Build for Production:**
    ```bash
    npm run build
    ```

## Vercel Deployment Steps (Dashboard)

1.  **Connect Repository:** In the Vercel dashboard, import the `support371/Gem-Assist` GitHub repository.
2.  **Configure Project:**
    -   Set the **Framework Preset** to "Vite".
    -   Set the **Production Branch** to `main`.
3.  **Add Environment Variables:** In the project settings under "Environment Variables," add the variables listed above.
4.  **Deploy:** Trigger a deployment. Subsequent pushes to `main` will automatically deploy to Production.

## Vercel Deployment Steps (CLI)

1.  **Log in to Vercel:**
    ```bash
    vercel login
    ```
2.  **Link Project:**
    ```bash
    vercel link --project gem-assist-s7kb
    ```
3.  **Add Environment Variables:**
    ```bash
    vercel env add TOOLHOUSE_API_KEY <value>
    vercel env add VITE_SUPABASE_URL <value>
    vercel env add VITE_SUPABASE_PUBLISHABLE_KEY <value>
    ```
4.  **Deploy to Production:**
    ```bash
    vercel --prod
    ```

## Post-Deploy Verification Checklist

-   [ ] Homepage loads correctly.
-   [ ] `/about`, `/solutions`, `/trust-center`, and `/resources` pages are accessible.
-   [ ] `/contact` form submits successfully.
-   [ ] `/login` page loads and GitHub authentication is successful.
-   [ ] `/dashboard` is protected and only accessible after login.
-   [ ] `/api/health` returns `{ "ok": true }`.
-   [ ] `/api/gem-assist` is functional and the `TOOLHOUSE_API_KEY` is not exposed client-side.
-   [ ] Theme toggle (light/dark) works and persists across page loads.

## Security Notes

-   **Never expose `TOOLHOUSE_API_KEY` client-side.** It should only be used in serverless functions.
-   Do not use the `NEXT_PUBLIC_` prefix for secrets.
-   Redeploy the application in Vercel after making any changes to environment variables.
-   Keep Preview and Production environment variables separate and appropriately configured for each environment.
