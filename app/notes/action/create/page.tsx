// import css from './CreateNote.module.css';
// import NoteForm from '@/components/NoteForm/NoteForm';
// import { fetchCategories } from '@/lib/api';

// export const metadata = {
//   title: 'Create note | NoteHub',
//   description: 'Create a new note or continue editing your draft in NoteHub. Save your thoughts easily.',
//   openGraph: {
//     title: 'Create note | NoteHub',
//     description: 'Create a new note or continue editing your draft in NoteHub. Save your thoughts easily.',
//     url: 'https://08-zustand-ruddy-theta.vercel.app/notes/action/create',
//     images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
//   },
// };

// export default async function CreateNotePage() {
//   const categories = await fetchCategories();

//   return (
//     <main className={css.main}>
//       <div className={css.container}>
//         <h1 className={css.title}>Create note</h1>
//         <NoteForm categories={categories} />
//       </div>
//     </main>
//   );
// }

// import css from './CreateNote.module.css';
// import NoteForm from '@/components/NoteForm/NoteForm';
// import { Tag } from '@/types/note';

// export const metadata = {
//   title: 'Create note | NoteHub',
//   description: 'Create a new note or continue editing your draft in NoteHub. Save your thoughts easily.',
//   openGraph: {
//     title: 'Create note | NoteHub',
//     description: 'Create a new note or continue editing your draft in NoteHub. Save your thoughts easily.',
//     url: 'https://08-zustand-ruddy-theta.vercel.app/notes/action/create',
//     images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
//   },
// };

// export default async function CreateNotePage() {

//   const categories: Tag[] = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

//   return (
//     <main className={css.main}>
//       <div className={css.container}>
//         <h1 className={css.title}>Create note</h1>
//         <NoteForm categories={categories} />
//       </div>
//     </main>
//   );
// }

import css from "./CreateNote.module.css";
import NoteForm from "@/components/NoteForm/NoteForm";

export const metadata = {
  title: "Create note | NoteHub",
  description: "Create a new note or continue editing your draft in NoteHub.",
};

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
