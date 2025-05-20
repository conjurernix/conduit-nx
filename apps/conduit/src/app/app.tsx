import { Header } from './layout/Header';
import { Banner } from './layout/Banner';
import { ArticleList } from './components/ArticleList';
import { TagList } from './components/TagList';


export function App() {
  return (
    <div className="flex flex-col">
  <Header />
  <Banner />

  {/* Body */}
  <div className="flex flex-row gap-6 px-24 py-10">
    <div className="w-3/4">
      <ArticleList />
    </div>
    <div className="w-1/4">
      <TagList />
    </div>
  </div>
</div>
  );
}

export default App;
