export default function() {
    return useState('layout', () => {
        return {
           
            showSidebar: false,
            showCart: false,
           showSearch: false,
            showFilters: false,
            showAlert: false, 
            isFiltering: false,
            showAlert: {
                message: '',
                error: true,
                warning: false
            }

        }
    })
}