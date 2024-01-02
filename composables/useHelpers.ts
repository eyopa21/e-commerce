// A collection of helper functions.
export function useHelpers() {
  const route = useRoute();
  const runtimeConfig = useRuntimeConfig();


  function removeBodyClass(className: string): void {
    const body = document.querySelector('body');
    body?.classList.remove(className);
  }

  function addBodyClass(className: string): void {
    const body = document.querySelector('body');
    body?.classList.add(className);
  }

  function toggleBodyClass(className: string): void {
    const body = document.querySelector('body');
    body?.classList.contains(className) ? body.classList.remove(className) : body?.classList.add(className);
  }


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {

    addBodyClass,
    removeBodyClass,
    toggleBodyClass,
    scrollToTop,
  };
}
