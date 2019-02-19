import {
  // action creators
  decrement,
  delay,
  increment,

  //selectors
  getCurrentCount
} from '../redux/counter';


import { showLoading } from '../redux/ui';

export default class Counter {
  constructor(options) {
    this.$el = options.el;
    this.store = options.store;
    this.store.subscribe(this.update.bind(this));

    this.$el.querySelector('button:first-of-type')
      .addEventListener('click', this.delayInc.bind(this));

    this.$el.querySelector('button:nth-of-type(2)')
      .addEventListener('click', this.inc.bind(this));

    this.$el.querySelector('button:last-of-type')
      .addEventListener('click', this.dec.bind(this));

    this.count = document.querySelector('.count');
  }

  inc() {
    this.store.dispatch(increment(1))
  }

  dec() {
    this.store.dispatch(decrement(1))
  }

  delayInc() {
    this.store.dispatch(showLoading())
    this.store.dispatch(delay(1));
  }


  update() {
    const loading = document.querySelector('.loadingMask');
    if(this.store.getState().isLoading) {
      loading.classList.add('visible');
    } else {
      loading.classList.remove('visible');
    }
    this.count.innerHTML = getCurrentCount(this.store.getState());
  }

  render() {
    this.update();
  }
}
