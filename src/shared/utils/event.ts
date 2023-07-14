type EventName = 'toc_goto' | 'toc_filter';

export const emit = (eventName: EventName, detail: any) => {
  dispatchEvent(
    new CustomEvent(eventName, {
      detail,
    })
  );
};

export const addListener = (eventName: EventName, listener: (event: CustomEvent) => void) => {
  window.addEventListener(eventName, listener as EventListener);
};

export const removeListener = (eventName: EventName, listener: (event: CustomEvent) => void) => {
  window.removeEventListener(eventName, listener as EventListener);
};
