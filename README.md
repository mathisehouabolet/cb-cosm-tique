This is a [Next.js](https://nextjs.org) showcase website for CB COSMÉTIQUE.

The site presents the product range and beauty advice. Orders and customer
questions are handled directly through WhatsApp; there is no online checkout.

## Configuration

Create a `.env.local` file with the server-side keys below:

```env
BREVO_API_KEY=your-brevo-api-key
BREVO_LIST_ID=your-brevo-list-id
```

In Brevo, create a contact list, copy its numeric ID into `BREVO_LIST_ID`, and create an API key with permission to manage contacts. The newsletter form posts to `/api/newsletter/subscribe`; the Brevo key stays server-side.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load the Cormorant Garamond and Outfit font families.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
"# cb-cosm-tique"  
