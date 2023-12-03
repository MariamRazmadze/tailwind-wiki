import getData from "@/lib/getData";
import Item from "./components/Item";

type Props = {
  params: {
    searchWord: string;
  };
};

export async function generateMetadata({ params: { searchWord } }: Props) {
  const wikiData: Promise<SearchResult> = getData(searchWord);
  const data = await wikiData;
  const displayWord = searchWord.replaceAll("%20", " ");

  if (data?.query?.pages === undefined) {
    return {
      title: `${displayWord} Not Found`,
    };
  }

  return {
    title: displayWord,
  };
}

export default async function SearchResults({ params: { searchWord } }: Props) {
  const wikiData: Promise<SearchResult> = getData(searchWord);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;
  const content = (
    <main className="bg-red-400 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2>{`${searchWord} not found`}</h2>
      )}
    </main>
  );
  return content;
}
