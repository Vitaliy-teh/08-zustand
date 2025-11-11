// import { fetchNotes } from '@/lib/api';
// import NotesClient from './Notes.client';
// import { Tag } from '@/types/note';
// import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

// export async function generateMetadata({ params }: { params: { slug: string[] } }) {
//   const filter = params.slug?.[0] ?? 'all';
//   return {
//     title: `Notes: ${filter} | NoteHub`,
//     description: `Viewing notes filtered by ${filter}.`,
//     openGraph: {
//       title: `Notes: ${filter} | NoteHub`,
//       description: `Viewing notes filtered by ${filter}.`,
//       url: `https://08-zustand-ruddy-theta.vercel.app/notes/filter/${filter}`,
//       images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
//     },
//   };
// }

// export default async function NotesPage({ params }: { params: Promise<{ slug: string[] }> }) {
//   const { slug } = await params;
//   const tag: Tag | string = slug[0];
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ['notes', { searchQuery: '', currentPage: 1, tag }],
//     queryFn: () => fetchNotes({ tag }),
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NotesClient tag={tag} />
//     </HydrationBoundary>
//   );
// }


import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import type { Tag } from "@/types/note";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const filter = params.slug?.[0] ?? "all";
  return {
    title: `Notes: ${filter} | NoteHub`,
    description: `Viewing notes filtered by ${filter}.`,
    openGraph: {
      title: `Notes: ${filter} | NoteHub`,
      description: `Viewing notes filtered by ${filter}.`,
      url: `https://08-zustand-ruddy-theta.vercel.app/notes/filter/${filter}`,
      images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
    },
  };
}

export default async function NotesPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const rawTag = slug[0];

  const validTags: Tag[] = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

  
  const tag: Tag | "all" = validTags.includes(rawTag as Tag) ? (rawTag as Tag) : "all";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", { searchQuery: "", currentPage: 1, tag }],
    queryFn: () => fetchNotes({ tag }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
