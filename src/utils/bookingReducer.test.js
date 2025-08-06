import { initializeTimes, updateTimes } from './bookingReducer';

// Mock the window.fetchAPI function
const mockFetchAPI = jest.fn();

// Mock window object
Object.defineProperty(window, 'fetchAPI', {
  value: mockFetchAPI,
  writable: true
});

describe('Booking Reducer Functions', () => {
  beforeEach(() => {
    // Reset mock before each test
    mockFetchAPI.mockClear();
  });

  describe('initializeTimes', () => {
    test('returns the correct initial times array when API is available', () => {
      const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
      mockFetchAPI.mockReturnValue(mockTimes);
      
      const result = initializeTimes();
      
      expect(result).toEqual(mockTimes);
      expect(mockFetchAPI).toHaveBeenCalledWith(expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/));
    });

    test('returns fallback times when API is not available', () => {
      // Mock window.fetchAPI as undefined
      const originalFetchAPI = window.fetchAPI;
      delete window.fetchAPI;
      
      const result = initializeTimes();
      
      const expectedTimes = [
        '17:00',
        '18:00', 
        '19:00',
        '20:00',
        '21:00'
      ];
      
      expect(result).toEqual(expectedTimes);
      
      // Restore the mock
      window.fetchAPI = originalFetchAPI;
    });

    test('returns fallback times when API throws an error', () => {
      mockFetchAPI.mockImplementation(() => {
        throw new Error('API Error');
      });
      
      const result = initializeTimes();
      
      const expectedTimes = [
        '17:00',
        '18:00', 
        '19:00',
        '20:00',
        '21:00'
      ];
      
      expect(result).toEqual(expectedTimes);
    });

    test('returns fallback times when API returns non-array value', () => {
      mockFetchAPI.mockReturnValue('invalid response');
      
      const result = initializeTimes();
      
      const expectedTimes = [
        '17:00',
        '18:00', 
        '19:00',
        '20:00',
        '21:00'
      ];
      
      expect(result).toEqual(expectedTimes);
    });

    test('returns fallback times when API returns null', () => {
      mockFetchAPI.mockReturnValue(null);
      
      const result = initializeTimes();
      
      const expectedTimes = [
        '17:00',
        '18:00', 
        '19:00',
        '20:00',
        '21:00'
      ];
      
      expect(result).toEqual(expectedTimes);
    });

    test('returns fallback times when API returns undefined', () => {
      mockFetchAPI.mockReturnValue(undefined);
      
      const result = initializeTimes();
      
      const expectedTimes = [
        '17:00',
        '18:00', 
        '19:00',
        '20:00',
        '21:00'
      ];
      
      expect(result).toEqual(expectedTimes);
    });

    test('returns fallback times when API returns non-array value', () => {
      mockFetchAPI.mockReturnValue('invalid response');
      
      const result = initializeTimes();
      
      const expectedTimes = [
        '17:00',
        '18:00', 
        '19:00',
        '20:00',
        '21:00'
      ];
      
      expect(result).toEqual(expectedTimes);
    });

    test('returns fallback times when API returns null', () => {
      mockFetchAPI.mockReturnValue(null);
      
      const result = initializeTimes();
      
      const expectedTimes = [
        '17:00',
        '18:00', 
        '19:00',
        '20:00',
        '21:00'
      ];
      
      expect(result).toEqual(expectedTimes);
    });

    test('returns fallback times when API returns undefined', () => {
      mockFetchAPI.mockReturnValue(undefined);
      
      const result = initializeTimes();
      
      const expectedTimes = [
        '17:00',
        '18:00', 
        '19:00',
        '20:00',
        '21:00'
      ];
      
      expect(result).toEqual(expectedTimes);
    });

    test('returns an array', () => {
      const mockTimes = ['17:00', '18:00', '19:00'];
      mockFetchAPI.mockReturnValue(mockTimes);
      
      const result = initializeTimes();
      
      expect(Array.isArray(result)).toBe(true);
    });

    test('returns times in correct format (HH:MM)', () => {
      const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
      mockFetchAPI.mockReturnValue(mockTimes);
      
      const result = initializeTimes();
      
      result.forEach(time => {
        expect(time).toMatch(/^\d{2}:\d{2}$/);
      });
    });

    test('returns times in chronological order', () => {
      const mockTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
      mockFetchAPI.mockReturnValue(mockTimes);
      
      const result = initializeTimes();
      
      for (let i = 0; i < result.length - 1; i++) {
        const currentTime = result[i];
        const nextTime = result[i + 1];
        expect(currentTime < nextTime).toBe(true);
      }
    });

    test('calls fetchAPI with today\'s date in correct format', () => {
      const mockTimes = ['17:00', '18:00', '19:00'];
      mockFetchAPI.mockReturnValue(mockTimes);
      
      initializeTimes();
      
      expect(mockFetchAPI).toHaveBeenCalledWith(expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/));
      
      // Verify it's actually today's date
      const today = new Date().toISOString().split('T')[0];
      expect(mockFetchAPI).toHaveBeenCalledWith(today);
    });

    test('calls fetchAPI with today\'s date in correct format', () => {
      const mockTimes = ['17:00', '18:00', '19:00'];
      mockFetchAPI.mockReturnValue(mockTimes);
      
      initializeTimes();
      
      expect(mockFetchAPI).toHaveBeenCalledWith(expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/));
      
      // Verify it's actually today's date
      const today = new Date().toISOString().split('T')[0];
      expect(mockFetchAPI).toHaveBeenCalledWith(today);
    });
  });

  describe('updateTimes', () => {
    test('returns API times for UPDATE_TIMES action with valid date', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      const mockTimes = ['18:00', '19:00', '20:00'];
      mockFetchAPI.mockReturnValue(mockTimes);
      
      const action = { type: 'UPDATE_TIMES', payload: { date: '2024-01-15' } };
      
      const result = updateTimes(initialState, action);
      
      expect(result).toEqual(mockTimes);
      expect(mockFetchAPI).toHaveBeenCalledWith('2024-01-15');
    });

    test('returns fallback times when API is not available for UPDATE_TIMES action', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      
      // Mock window.fetchAPI as undefined
      const originalFetchAPI = window.fetchAPI;
      delete window.fetchAPI;
      
      const action = { type: 'UPDATE_TIMES', payload: { date: '2024-01-15' } };
      
      const result = updateTimes(initialState, action);
      
      const expectedTimes = [
        '17:00',
        '18:00', 
        '19:00',
        '20:00',
        '21:00'
      ];
      
      expect(result).toEqual(expectedTimes);
      
      // Restore the mock
      window.fetchAPI = originalFetchAPI;
    });

    test('returns current state when API throws an error for UPDATE_TIMES action', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      mockFetchAPI.mockImplementation(() => {
        throw new Error('API Error');
      });
      
      const action = { type: 'UPDATE_TIMES', payload: { date: '2024-01-15' } };
      
      const result = updateTimes(initialState, action);
      
      expect(result).toEqual(initialState);
    });

    test('returns fallback times when no date is provided in payload', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      const action = { type: 'UPDATE_TIMES', payload: {} };
      
      const result = updateTimes(initialState, action);
      
      const expectedTimes = [
        '17:00',
        '18:00', 
        '19:00',
        '20:00',
        '21:00'
      ];
      
      expect(result).toEqual(expectedTimes);
    });

    test('returns fallback times when payload is null', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      const action = { type: 'UPDATE_TIMES', payload: null };
      
      const result = updateTimes(initialState, action);
      
      const expectedTimes = [
        '17:00',
        '18:00', 
        '19:00',
        '20:00',
        '21:00'
      ];
      
      expect(result).toEqual(expectedTimes);
    });

    test('returns fallback times when API returns non-array value', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      mockFetchAPI.mockReturnValue('invalid response');
      
      const action = { type: 'UPDATE_TIMES', payload: { date: '2024-01-15' } };
      
      const result = updateTimes(initialState, action);
      
      const expectedTimes = [
        '17:00',
        '18:00', 
        '19:00',
        '20:00',
        '21:00'
      ];
      
      expect(result).toEqual(expectedTimes);
    });

    test('returns fallback times when API returns null', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      mockFetchAPI.mockReturnValue(null);
      
      const action = { type: 'UPDATE_TIMES', payload: { date: '2024-01-15' } };
      
      const result = updateTimes(initialState, action);
      
      const expectedTimes = [
        '17:00',
        '18:00', 
        '19:00',
        '20:00',
        '21:00'
      ];
      
      expect(result).toEqual(expectedTimes);
    });

    test('returns fallback times when payload is null', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      const action = { type: 'UPDATE_TIMES', payload: null };
      
      const result = updateTimes(initialState, action);
      
      const expectedTimes = [
        '17:00',
        '18:00', 
        '19:00',
        '20:00',
        '21:00'
      ];
      
      expect(result).toEqual(expectedTimes);
    });

    test('returns fallback times when API returns non-array value', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      mockFetchAPI.mockReturnValue('invalid response');
      
      const action = { type: 'UPDATE_TIMES', payload: { date: '2024-01-15' } };
      
      const result = updateTimes(initialState, action);
      
      const expectedTimes = [
        '17:00',
        '18:00', 
        '19:00',
        '20:00',
        '21:00'
      ];
      
      expect(result).toEqual(expectedTimes);
    });

    test('returns fallback times when API returns null', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      mockFetchAPI.mockReturnValue(null);
      
      const action = { type: 'UPDATE_TIMES', payload: { date: '2024-01-15' } };
      
      const result = updateTimes(initialState, action);
      
      const expectedTimes = [
        '17:00',
        '18:00', 
        '19:00',
        '20:00',
        '21:00'
      ];
      
      expect(result).toEqual(expectedTimes);
    });

    test('returns the same state for unknown action types', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      const action = { type: 'UNKNOWN_ACTION', payload: { date: '2024-01-15' } };
      
      const result = updateTimes(initialState, action);
      
      expect(result).toEqual(initialState);
    });

    test('returns the same state for action without type', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      const action = { payload: { date: '2024-01-15' } };
      
      const result = updateTimes(initialState, action);
      
      expect(result).toEqual(initialState);
    });

    test('returns the same state for empty action', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      const action = {};
      
      const result = updateTimes(initialState, action);
      
      expect(result).toEqual(initialState);
    });

    test('handles empty initial state', () => {
      const initialState = [];
      const mockTimes = ['18:00', '19:00', '20:00'];
      mockFetchAPI.mockReturnValue(mockTimes);
      
      const action = { type: 'UPDATE_TIMES', payload: { date: '2024-01-15' } };
      
      const result = updateTimes(initialState, action);
      
      expect(result).toEqual(mockTimes);
    });

    test('handles null initial state', () => {
      const initialState = null;
      const mockTimes = ['18:00', '19:00', '20:00'];
      mockFetchAPI.mockReturnValue(mockTimes);
      
      const action = { type: 'UPDATE_TIMES', payload: { date: '2024-01-15' } };
      
      const result = updateTimes(initialState, action);
      
      expect(result).toEqual(mockTimes);
    });

    test('handles undefined initial state', () => {
      const initialState = undefined;
      const mockTimes = ['18:00', '19:00', '20:00'];
      mockFetchAPI.mockReturnValue(mockTimes);
      
      const action = { type: 'UPDATE_TIMES', payload: { date: '2024-01-15' } };
      
      const result = updateTimes(initialState, action);
      
      expect(result).toEqual(mockTimes);
    });

    test('handles non-array initial state', () => {
      const initialState = 'invalid state';
      const mockTimes = ['18:00', '19:00', '20:00'];
      mockFetchAPI.mockReturnValue(mockTimes);
      
      const action = { type: 'UPDATE_TIMES', payload: { date: '2024-01-15' } };
      
      const result = updateTimes(initialState, action);
      
      expect(result).toEqual(mockTimes);
    });

    test('calls fetchAPI with the provided date', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      const mockTimes = ['18:00', '19:00', '20:00'];
      mockFetchAPI.mockReturnValue(mockTimes);
      
      const testDate = '2024-01-15';
      const action = { type: 'UPDATE_TIMES', payload: { date: testDate } };
      
      updateTimes(initialState, action);
      
      expect(mockFetchAPI).toHaveBeenCalledWith(testDate);
    });

    test('handles different date formats correctly', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      const mockTimes = ['18:00', '19:00', '20:00'];
      mockFetchAPI.mockReturnValue(mockTimes);
      
      const testDates = ['2024-01-15', '2024-12-25', '2025-06-01'];
      
      testDates.forEach(date => {
        mockFetchAPI.mockClear();
        const action = { type: 'UPDATE_TIMES', payload: { date } };
        updateTimes(initialState, action);
        expect(mockFetchAPI).toHaveBeenCalledWith(date);
      });
    });

    test('handles non-array initial state', () => {
      const initialState = 'invalid state';
      const mockTimes = ['18:00', '19:00', '20:00'];
      mockFetchAPI.mockReturnValue(mockTimes);
      
      const action = { type: 'UPDATE_TIMES', payload: { date: '2024-01-15' } };
      
      const result = updateTimes(initialState, action);
      
      expect(result).toEqual(mockTimes);
    });

    test('calls fetchAPI with the provided date', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      const mockTimes = ['18:00', '19:00', '20:00'];
      mockFetchAPI.mockReturnValue(mockTimes);
      
      const testDate = '2024-01-15';
      const action = { type: 'UPDATE_TIMES', payload: { date: testDate } };
      
      updateTimes(initialState, action);
      
      expect(mockFetchAPI).toHaveBeenCalledWith(testDate);
    });

    test('handles different date formats correctly', () => {
      const initialState = ['17:00', '18:00', '19:00'];
      const mockTimes = ['18:00', '19:00', '20:00'];
      mockFetchAPI.mockReturnValue(mockTimes);
      
      const testDates = ['2024-01-15', '2024-12-25', '2025-06-01'];
      
      testDates.forEach(date => {
        mockFetchAPI.mockClear();
        const action = { type: 'UPDATE_TIMES', payload: { date } };
        updateTimes(initialState, action);
        expect(mockFetchAPI).toHaveBeenCalledWith(date);
      });
    });
  });
}); 