import { ArticleCard } from "./ArticleCards";

export const ArticleList = () => {
  return (
    <ul className="list bg-base-100 rounded-box">
  
  <li className="p-4 pb-2 text-lg font-semibold border-b-2 border-green-500 w-fit">Global Feed</li>
  
        <li className="list-row">
        <ArticleCard
        author="yellowcat"
        date="May 20, 2025"
        title="LOL!"
        description="Haha"
        likes={6}
        tags = {["haha", "yes", "yes", "yes"]} />
        </li>
      
      
      <li className="list-row">
        
      </li>
      <li className="list-row">
        
      </li>
  





</ul>
  );
};
