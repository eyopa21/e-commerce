export default defineAppConfig({
  ui: {
    primary: 'orange',
    gray: 'cool',
    notifications: {
      // Show toasts at the top right of the screen
      position: 'top-0 bottom-auto'
    },
    dropdown: {
      background: 'bg-white dark:bg-gray-900',
      item:
      {
        base: 'my-2 py-2 px-4 hover:bg-primary-300',
        active:
          'bg-primary dark:bg-primary'
      }


    }


  }
})