import { store } from './store';

import css from './index.css';

import Counter from './components/counter';

const d = document;

d.addEventListener('DOMContentLoaded', () => {
  const counter = new Counter({
    el: d.getElementById('counter'),
    store
  });
  counter.render();
});
