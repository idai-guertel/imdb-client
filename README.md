This app was generated with Node.js version 20.9.0, and npm version 10.2.1.
It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Run locally
1. Install dependencies

```bash
npm install
```
2. Copy `.env.example` to `.env.local` and update variables:

```bash
cp .env.example .env.local
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Test Cases
1. Visiting ../task-1 or ../task-2 should present (after loading time) 10 movie image links with the right link targets. ✔
2. Visiting none existing movie page (e.g..../task-1/1234) should present text saying page/movie could not be found. ✔
3. If fetching yields unexpected response type, user should be redirected to error page. ✘
4. If fetching times-out, user should be redirected to error page. ✔
5. When navigating to a movie page the window should be scrolled back to top. ✘
6. UI accessibility tests (contrast, screen-readers, etc.). ✘
