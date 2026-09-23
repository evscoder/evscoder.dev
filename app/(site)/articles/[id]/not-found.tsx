import Link from 'next/link';
export default function NewsNotFound() {
  return (
    <section className="container py-40">
      <h1 className="text-4xl">Заметка не найдена</h1>
      <p className="mt-5">Возможно, адрес изменился или статья ещё не опубликована.</p>
      <Link href="/#notes" className="personal-button">
        К заметкам
      </Link>
    </section>
  );
}
