import { Header } from './layout/Header';
import { Banner } from './layout/Banner';
import { ArticleList } from './components/ArticleList';


export function App() {
  return (
    <div className="flex flex-col">
      <Header/>
      <Banner/>
      {/* Body */}
      <div className="mx-52">
        <ArticleList/>
      </div>
    </div>
  );
}

export default App;
