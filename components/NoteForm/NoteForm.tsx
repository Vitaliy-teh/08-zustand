// 'use client';

// import { useMutation } from '@tanstack/react-query';
// import { useRouter } from 'next/navigation';
// import { createNote, type Category, type NewNoteData } from '@/lib/api';
// import { useNoteDraftStore } from '@/lib/store/noteStore';
// import styles from './NoteForm.module.css';

// type Props = { categories: Category[] };

// export default function NoteForm({ categories }: Props) {
//   const router = useRouter();
//   const { draft, setDraft, clearDraft } = useNoteDraftStore();

//   const { mutate } = useMutation({
//     mutationFn: createNote,
//     onSuccess: () => {
//       clearDraft();
//       router.push('/notes/filter/all');
//     },
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
//   ) => {
//     setDraft({
//       ...draft,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (formData: FormData) => {
//     const values = Object.fromEntries(formData) as unknown as NewNoteData;
//     mutate(values);
//   };

//   const handleCancel = () => {
//     router.push('/notes/filter/all');
//   };

//   return (
//     <form className={styles.form} action={handleSubmit}>
//       <label className={styles.label}>
//         Title
//         <input
//           type="text"
//           name="title"
//           defaultValue={draft.title}
//           onChange={handleChange}
//         />
//       </label>

//       <label className={styles.label}>
//         Content
//         <textarea
//           name="content"
//           defaultValue={draft.content}
//           onChange={handleChange}
//         />
//       </label>

//       <label className={styles.label}>
//         Category
//         <select
//           name="categoryId"
//           defaultValue={draft.categoryId}
//           onChange={handleChange}
//         >
//           <option value="">Select category</option>
//           {categories.map((cat) => (
//             <option key={cat.id} value={cat.id}>
//               {cat.name}
//             </option>
//           ))}
//         </select>
//       </label>

//       <div className={styles.actions}>
//         <button type="submit">Create</button>
//         <button type="button" onClick={handleCancel}>
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// }

// "use client";

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createNote, type NewNoteData } from "@/lib/api";
// import css from "./NoteForm.module.css";

// interface NoteFormProps {
//   categories: { id: string; name: string }[];
//   onClose?: () => void;
// }

// const tags = ["Todo", "Work", "Personal", "Meeting", "Shopping"] as const;

// export default function NoteForm({ categories, onClose }: NoteFormProps) {
//   const queryClient = useQueryClient();

//   const { mutate } = useMutation({
//     mutationFn: createNote,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["notes"] });
//       onClose?.();
//     },
//   });

//   const handleSubmit = (formData: FormData) => {
//     const values = Object.fromEntries(formData) as Record<string, string>;
//     const newNote: NewNoteData = {
//       title: values.title,
//       content: values.content,
//       tag: values.tag as NewNoteData["tag"],
//       categoryId: values.categoryId,
//     };
//     mutate(newNote);
//   };

//   return (
//     <form action={handleSubmit} className={css.form}>
//       <label className={css.label}>
//         Title
//         <input name="title" type="text" required className={css.input} />
//       </label>

//       <label className={css.label}>
//         Content
//         <textarea name="content" required className={css.textarea} />
//       </label>

//       <label className={css.label}>
//         Tag
//         <select name="tag" required className={css.select}>
//           {tags.map((tag) => (
//             <option key={tag} value={tag}>
//               {tag}
//             </option>
//           ))}
//         </select>
//       </label>

//       <label className={css.label}>
//         Category
//         <select name="categoryId" required className={css.select}>
//           {categories.map((cat) => (
//             <option key={cat.id} value={cat.id}>
//               {cat.name}
//             </option>
//           ))}
//         </select>
//       </label>

//       <button type="submit" className={css.submitBtn}>
//         Save note
//       </button>
//     </form>
//   );
// }

// 'use client';

// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { createNote, type NewNoteData } from '@/lib/api';
// import { Tag } from '@/types/note';
// import css from './NoteForm.module.css';

// type Props = { categories: Tag[] };

// export default function NoteForm({ categories }: Props) {
//   const queryClient = useQueryClient();

//   const { mutate } = useMutation({
//     mutationFn: createNote,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['notes'] });
//     },
//   });

//   const handleSubmit = (formData: FormData) => {
//     const values = Object.fromEntries(formData) as Record<string, string>;
//     const newNote: NewNoteData = {
//       title: values.title,
//       content: values.content,
//       tag: values.tag as Tag,
//       categoryId: ''
//     };
//     mutate(newNote);
//   };

//   return (
//     <form action={handleSubmit} className={css.form}>
//       <label className={css.label}>
//         Title
//         <input name="title" type="text" required className={css.input} />
//       </label>

//       <label className={css.label}>
//         Content
//         <textarea name="content" required className={css.textarea} />
//       </label>

//       <label className={css.label}>
//         Tag
//         <select name="tag" required className={css.select}>
//           {categories.map((tag) => (
//             <option key={tag} value={tag}>
//               {tag}
//             </option>
//           ))}
//         </select>
//       </label>

//       <button type="submit" className={css.submitBtn}>
//         Create note
//       </button>
//     </form>
//   );
// }

"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createNote, type NewNoteData } from "@/lib/api";
import { useNoteDraftStore } from "@/lib/store/noteStore";
import { Tag } from "@/types/note";
import css from "./NoteForm.module.css";

const tags: Tag[] = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

export default function NoteForm() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { draft, setDraft, clearDraft } = useNoteDraftStore();

  // const { mutate } = useMutation({
  //   mutationFn: createNote,
  //   onSuccess: (createdNote) => {
  //     clearDraft();
  //     queryClient.invalidateQueries({
  //       queryKey: ["notes"],
  //       refetchType: "all",
  //     });
  //     router.push("/notes/filter/all");
  //   },
  // });

const { mutate } = useMutation({
  mutationFn: createNote,
  onSuccess: (createdNote) => {
    
    queryClient.setQueryData(["notes", { searchQuery: "", currentPage: 1, tag: "all" }], (oldData: any) => {
      if (!oldData) return { notes: [createdNote], totalPages: 1 };
      return {
        ...oldData,
        notes: [createdNote, ...oldData.notes],
      };
    });

    
    clearDraft();

    
    queryClient.invalidateQueries({
      queryKey: ["notes"],
      refetchType: "all",
    });

    
    router.push("/notes/filter/all");
  },
});


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setDraft({
      ...draft,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData) as Record<string, string>;
    const newNote: NewNoteData = {
      title: values.title,
      content: values.content,
      tag: values.tag as Tag,
      categoryId: values.categoryId,
    };
    mutate(newNote);
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <label className={css.label}>
        Title
        <input
          type="text"
          name="title"
          required
          className={css.input}
          defaultValue={draft.title}
          onChange={handleChange}
        />
      </label>

      <label className={css.label}>
        Content
        <textarea
          name="content"
          required
          className={css.textarea}
          defaultValue={draft.content}
          onChange={handleChange}
        />
      </label>

      <label className={css.label}>
        Tag
        <select
          name="tag"
          required
          className={css.select}
          defaultValue={draft.tag}
          onChange={handleChange}
        >
          <option value="">Select tag</option>
          {tags.map(tag => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </label>

      <div className={css.actions}>
        <button type="submit">Create note</button>
        <button type="button" onClick={() => router.push("/notes/filter/all")}>
          Cancel
        </button>
      </div>
    </form>
  );
}
