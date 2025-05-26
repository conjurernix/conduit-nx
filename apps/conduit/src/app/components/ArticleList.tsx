import { ArticleCard } from './ArticleCards';
import { useState } from 'react';

export const ArticleList = () => {
  const [activeFeed, setActiveFeed] = useState<'global' | 'my'>('global');

  const globalFeed = [
    {
      author: 'yellowcat',
      date: 'May 20, 2025',
      title: 'LOL!',
      description: 'Haha',
      likes: 6,
      tags: ['haha', 'yes', 'yes', 'yes'],
    },
    {
      author: 'yellowcat',
      date: 'May 20, 2025',
      title: 'LOL!',
      description: 'Haha',
      likes: 6,
      tags: ['haha', 'yes', 'yes', 'yes'],
    },
    {
      author: 'yellowcat',
      date: 'May 20, 2025',
      title: 'LOL!',
      description: 'Haha',
      likes: 6,
      tags: ['haha', 'yes', 'yes', 'yes'],
    },
  ];

  const myFeed = [
    {
      author: 'myself',
      date: 'May 21, 2025',
      title: 'My Article',
      description: 'yes',
      likes: 12,
      tags: ['yuh', 'nah', 'yuh'],
    },
  ];

  const articlesToDisplay = activeFeed === 'global' ? globalFeed : myFeed;

  return (
    <ul className="list bg-base-100 rounded-box border border-base-300 shadow-sm select-none">
      <li className="flex gap-4 p-4 pb-2">
        <button
          onClick={() => setActiveFeed('global')}
          className={`text-lg font-semibold border-b-2 ${
            activeFeed === 'global' ? 'border-green-500' : 'border-transparent'
          }`}
        >
          Global Feed
        </button>
        <button
          onClick={() => setActiveFeed('my')}
          className={`text-lg font-semibold border-b-2 ${
            activeFeed === 'my' ? 'border-green-500' : 'border-transparent'
          }`}
        >
          My Feed
        </button>
      </li>

      {articlesToDisplay.map((article, idx) => (
        <li key={idx} className="list-row border-t border-base-200">
          <ArticleCard {...article} />
        </li>
      ))}
    </ul>
  );
};
