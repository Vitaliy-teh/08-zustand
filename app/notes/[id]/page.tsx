import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import NotePreviewClient from "@/app/@modal/(.)notes/[id]/NotePreview.client";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const note = await fetchNoteById(params.id);
  return {
    title: `${note.title} | NoteHub`,
    description: note.content.slice(0, 100) + "...",
    openGraph: {
      title: `${note.title} | NoteHub`,
      description: note.content.slice(0, 100) + "...",
      url: `https://08-zustand-ruddy-theta.vercel.app/notes/${params.id}`,
      images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
    },
  };
}

export default async function NoteDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreviewClient id={id} />
    </HydrationBoundary>
  );
}
