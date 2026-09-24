import { redirect } from 'next/navigation';

/** Alias legado: a experiência mission-control em inglês agora vive em /us. */
export default function V2EnglishAliasPage() {
  redirect('/us');
}
