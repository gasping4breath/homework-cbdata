'use client'
import { use } from 'react'
import { usePlanetsContext } from '@/app/planets-context-provider';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const ITEMS_PER_PAGE = 10;

export default function Planets() {
  const planetPromise = usePlanetsContext();
  const planets = use(planetPromise);
  const { replace } = useRouter();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pageCount = Math.ceil(planets.length / ITEMS_PER_PAGE);
  const pageParam = Number(searchParams.get('page'));
  const currentPage = Math.min(pageCount, pageParam > 0 ? pageParam : 1);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div>
      <ul className="list-disc pl-5">
        {planets.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((planet) => (
          <li key={planet.url}>{planet.name}</li>
        ))}
      </ul>
      <div className="flex mt-4">
        <button
          className="flex h-10 w-40 disabled:bg-gray-600 disabled:hover:bg-gray-600 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          disabled={currentPage <= 1}
          onClick={() => {
            replace(createPageURL(currentPage - 1));
          }}>Previous</button>
        <button
          className="flex h-10 w-40 disabled:bg-gray-600 disabled:hover:bg-gray-600 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          disabled={currentPage >= pageCount}
          onClick={() => {
            replace(createPageURL(currentPage + 1));
          }}>Next</button>
      </div>
    </div >
  )
}