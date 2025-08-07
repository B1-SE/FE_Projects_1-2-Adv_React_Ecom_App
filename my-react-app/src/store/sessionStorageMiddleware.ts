import type { Middleware } from '@reduxjs/toolkit';
import type { RootState } from './store';

const sessionStorageMiddleware: Middleware<{}, RootState> = (store) => (next) => (action: unknown) => {
  const result = next(action);
  if (typeof action === 'object' && action !== null && 'type' in action && typeof action.type === 'string') {
    if (action.type.startsWith('cart/')) {
      const state = store.getState().cart;
      sessionStorage.setItem('cart', JSON.stringify(state));
    }
  }
  return result;
};

export default sessionStorageMiddleware;