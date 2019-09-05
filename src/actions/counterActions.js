export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export function increment_v2() {
  return { type: INCREMENT };
}

export const decrement = () => ({ type: DECREMENT });
