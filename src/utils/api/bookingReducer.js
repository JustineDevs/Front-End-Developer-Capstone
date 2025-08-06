// Initial state for available times
export const initializeTimes = () => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  // Use the API to fetch available times for today
  try {
    // Check if the API is available (it should be loaded from the script tag)
    if (typeof window !== 'undefined' && window.fetchAPI) {
      const apiTimes = window.fetchAPI(today);
      // Ensure we return an array
      return Array.isArray(apiTimes) ? apiTimes : getDefaultTimes();
    } else {
      // Fallback to default times if API is not available
      return getDefaultTimes();
    }
  } catch (error) {
    console.error('Error fetching initial times:', error);
    // Fallback to default times
    return getDefaultTimes();
  }
};

// Helper function to get default times
const getDefaultTimes = () => {
  return [
    '17:00',
    '18:00', 
    '19:00',
    '20:00',
    '21:00'
  ];
};

// Reducer function to update available times based on date
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      try {
        // Use the API to fetch available times for the selected date
        if (typeof window !== 'undefined' && window.fetchAPI && action.payload?.date) {
          const apiTimes = window.fetchAPI(action.payload.date);
          // Ensure we return an array
          return Array.isArray(apiTimes) ? apiTimes : getDefaultTimes();
        } else {
          // Fallback to default times if API is not available or no date provided
          return getDefaultTimes();
        }
      } catch (error) {
        console.error('Error updating times:', error);
        // Return current state on error, or default times if state is invalid
        return Array.isArray(state) ? state : getDefaultTimes();
      }
    default:
      // Return current state, or default times if state is invalid
      return Array.isArray(state) ? state : getDefaultTimes();
  }
}; 