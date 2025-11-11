import css from "./Home.module.css";

export const metadata = {
  title: 'Page not found | NoteHub',
  description: 'This page does not exist in NoteHub.',
  openGraph: {
    title: 'Page not found | NoteHub',
    description: 'This page does not exist in NoteHub.',
    url: 'https://your-vercel-app.vercel.app/not-found',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};

export default function NotFound() {
  return (
    <main className={css.container}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </main>
  );
}
