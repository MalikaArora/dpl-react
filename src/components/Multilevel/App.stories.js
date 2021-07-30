import React, { useState } from 'react';
import './App.css';
import MultipleLevelSelection from './components/MultipleLevelSelection/index.tsx';
import { getCategoriesByParentId } from './seeds.ts';

export default{
  title: 'Multi'
}
export const App = () => {
  const [category, setCategory] = useState();
  return (
    <div className="App">
      <main className="App-main">
        <div className="example">
          <div className="flex flex-col flex-align-start">
            <p>Selected category: {category?.name}</p>
            <MultipleLevelSelection
              initialItems={getCategoriesByParentId(0)}
              getItemKey={(item) => item.categoryId}
              getItemLabel={(item) => item.name}
              getNestedItems={(item) =>
                getCategoriesByParentId(item.categoryId)
              }
              hasNestedItems={(_, level) => level < 3}
              isEqual={(item, item2) => item?.categoryId === item2?.categoryId}
              placeholder="Choose category"
              onChange={setCategory}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

