"use client";

import * as React from "react";
import type { ToastProps } from "./toast";

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
};

const TOAST_LIMIT = 3;
const TOAST_REMOVE_DELAY = 4000;

type State = { toasts: ToasterToast[] };

const listeners: Array<(state: State) => void> = [];
let memoryState: State = { toasts: [] };

function dispatch(state: State) {
  memoryState = state;
  listeners.forEach((l) => l(memoryState));
}

let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ToastInput = Omit<ToasterToast, "id">;

function toast(props: ToastInput) {
  const id = genId();
  const newToast: ToasterToast = { ...props, id, open: true };
  dispatch({
    toasts: [newToast, ...memoryState.toasts].slice(0, TOAST_LIMIT),
  });
  setTimeout(() => {
    dispatch({
      toasts: memoryState.toasts.filter((t) => t.id !== id),
    });
  }, TOAST_REMOVE_DELAY);
  return { id };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);
  return { ...state, toast };
}

export { useToast, toast };
