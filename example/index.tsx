import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../.';

const product = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png',
};

const App = () => {
  return (
    <div>
      <ProductCard
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 6,
          maxCount: 10,
        }}
      >
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
