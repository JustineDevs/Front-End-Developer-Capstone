import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from './BookingForm';

// Mock the window.submitAPI function
const mockSubmitAPI = jest.fn();

// Mock window object
Object.defineProperty(window, 'submitAPI', {
  value: mockSubmitAPI,
  writable: true
});

// Mock booking context for testing
const mockBookingContext = {
  availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00'],
  dispatch: jest.fn(),
  submitForm: jest.fn()
};

describe('BookingForm Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockSubmitAPI.mockClear();
    mockBookingContext.dispatch.mockClear();
    mockBookingContext.submitForm.mockClear();
  });

  test('Renders the "Choose date" label', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    const dateLabel = screen.getByText("Choose date *");
    expect(dateLabel).toBeInTheDocument();
  });

  test('Renders the "Choose time" label', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    const timeLabel = screen.getByText("Choose time *");
    expect(timeLabel).toBeInTheDocument();
  });

  test('Renders the "Number of guests" label', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    const guestsLabel = screen.getByText("Number of guests *");
    expect(guestsLabel).toBeInTheDocument();
  });

  test('Renders the "Occasion" label', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    const occasionLabel = screen.getByText("Occasion");
    expect(occasionLabel).toBeInTheDocument();
  });

  test('Renders the "Submit reservation" button', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    const submitButton = screen.getByText("Submit reservation");
    expect(submitButton).toBeInTheDocument();
  });

  test('Renders all form fields', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    // Check for date input
    const dateInput = screen.getByLabelText("Choose date *");
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    
    // Check for time select
    const timeSelect = screen.getByLabelText("Choose time *");
    expect(timeSelect).toBeInTheDocument();
    
    // Check for guests select
    const guestsSelect = screen.getByLabelText("Number of guests *");
    expect(guestsSelect).toBeInTheDocument();
    
    // Check for occasion select
    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).toBeInTheDocument();
  });

  test('Renders available times in select options', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    // Check that all available times are rendered as options
    mockBookingContext.availableTimes.forEach(time => {
      const timeOption = screen.getByText(time);
      expect(timeOption).toBeInTheDocument();
    });
  });

  test('Renders guest options', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    // Check for guest options
    expect(screen.getByText("1 person")).toBeInTheDocument();
    expect(screen.getByText("2 people")).toBeInTheDocument();
    expect(screen.getByText("8 people")).toBeInTheDocument();
  });

  test('Renders occasion options', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    // Check for occasion options
    expect(screen.getByText("No special occasion")).toBeInTheDocument();
    expect(screen.getByText("Birthday")).toBeInTheDocument();
    expect(screen.getByText("Anniversary")).toBeInTheDocument();
  });

  test('Handles date change and dispatches action', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    const dateInput = screen.getByLabelText("Choose date *");
    fireEvent.change(dateInput, { target: { value: '2024-01-15' } });
    
    expect(mockBookingContext.dispatch).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      payload: { date: '2024-01-15' }
    });
  });

  test('Handles form submission with submitForm success', async () => {
    mockBookingContext.submitForm.mockResolvedValue(true);
    
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    // Fill out the form
    const dateInput = screen.getByLabelText("Choose date *");
    const timeSelect = screen.getByLabelText("Choose time *");
    const guestsSelect = screen.getByLabelText("Number of guests *");
    const occasionSelect = screen.getByLabelText("Occasion");
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    
    fireEvent.change(dateInput, { target: { value: tomorrowString } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsSelect, { target: { value: '2' } });
    fireEvent.change(occasionSelect, { target: { value: 'birthday' } });
    
    // Submit the form
    const submitButton = screen.getByText("Submit reservation");
    fireEvent.click(submitButton);
    
    // Check that button shows loading state
    expect(screen.getByText("Submitting...")).toBeInTheDocument();
    
    // Wait for submission to complete
    await waitFor(() => {
      expect(mockBookingContext.submitForm).toHaveBeenCalledWith({
        date: tomorrowString,
        time: '18:00',
        guests: '2',
        occasion: 'birthday'
      });
    });
    
    // Check that success message appears
    await waitFor(() => {
      expect(screen.getByText("✅ Reservation submitted successfully!")).toBeInTheDocument();
    });
  });

  test('Handles form submission with submitForm failure', async () => {
    mockBookingContext.submitForm.mockResolvedValue(false);
    
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    // Fill out the form with valid data
    const dateInput = screen.getByLabelText("Choose date *");
    const timeSelect = screen.getByLabelText("Choose time *");
    const guestsSelect = screen.getByLabelText("Number of guests *");
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    
    fireEvent.change(dateInput, { target: { value: tomorrowString } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsSelect, { target: { value: '2' } });
    
    // Submit the form
    const submitButton = screen.getByText("Submit reservation");
    fireEvent.click(submitButton);
    
    // Wait for submission to complete
    await waitFor(() => {
      expect(mockBookingContext.submitForm).toHaveBeenCalled();
    });
    
    // Check that error message appears
    await waitFor(() => {
      expect(screen.getByText("❌ Failed to submit reservation")).toBeInTheDocument();
    });
  });

  test('Handles submitForm error during submission', async () => {
    mockBookingContext.submitForm.mockRejectedValue(new Error('Submission Error'));
    
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    // Fill out the form
    const dateInput = screen.getByLabelText("Choose date *");
    const timeSelect = screen.getByLabelText("Choose time *");
    const guestsSelect = screen.getByLabelText("Number of guests *");
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    
    fireEvent.change(dateInput, { target: { value: tomorrowString } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsSelect, { target: { value: '2' } });
    
    // Submit the form
    const submitButton = screen.getByText("Submit reservation");
    fireEvent.click(submitButton);
    
    // Wait for submission to complete
    await waitFor(() => {
      expect(mockBookingContext.submitForm).toHaveBeenCalled();
    });
    
    // Check that error message appears
    await waitFor(() => {
      expect(screen.getByText("❌ Failed to submit reservation")).toBeInTheDocument();
    });
  });

  test('Disables submit button during submission', async () => {
    mockBookingContext.submitForm.mockImplementation(() => new Promise(resolve => setTimeout(() => resolve(true), 100)));
    
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    // Fill out the form
    const dateInput = screen.getByLabelText("Choose date *");
    const timeSelect = screen.getByLabelText("Choose time *");
    const guestsSelect = screen.getByLabelText("Number of guests *");
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    
    fireEvent.change(dateInput, { target: { value: tomorrowString } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsSelect, { target: { value: '2' } });
    
    // Submit the form
    const submitButton = screen.getByText("Submit reservation");
    fireEvent.click(submitButton);
    
    // Check that button is disabled and shows loading text
    expect(submitButton).toBeDisabled();
    expect(screen.getByText("Submitting...")).toBeInTheDocument();
  });

  test('Handles missing booking context gracefully', () => {
    render(<BookingForm />);
    
    // Should still render without errors
    expect(screen.getByText("Choose date *")).toBeInTheDocument();
    expect(screen.getByText("Submit reservation")).toBeInTheDocument();
  });

  // Validation Tests
  test('Shows validation errors for empty required fields', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    const submitButton = screen.getByText("Submit reservation");
    fireEvent.click(submitButton);
    
    // Check that submit button is disabled when form is invalid
    expect(submitButton).toBeDisabled();
  });

  test('Shows validation error for past date', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    const dateInput = screen.getByLabelText("Choose date *");
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toISOString().split('T')[0];
    
    fireEvent.change(dateInput, { target: { value: yesterdayString } });
    fireEvent.blur(dateInput);
    
    expect(screen.getByText("Date cannot be in the past")).toBeInTheDocument();
  });

  test('Shows validation error for empty date', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    const dateInput = screen.getByLabelText("Choose date *");
    fireEvent.change(dateInput, { target: { value: '' } });
    fireEvent.blur(dateInput);
    
    expect(screen.getByText("Date is required")).toBeInTheDocument();
  });

  test('Shows validation error for empty time', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    const timeSelect = screen.getByLabelText("Choose time *");
    fireEvent.change(timeSelect, { target: { value: '' } });
    fireEvent.blur(timeSelect);
    
    expect(screen.getByText("Time is required")).toBeInTheDocument();
  });

  test('Shows validation error for empty guests', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    const guestsSelect = screen.getByLabelText("Number of guests *");
    fireEvent.change(guestsSelect, { target: { value: '' } });
    fireEvent.blur(guestsSelect);
    
    expect(screen.getByText("Number of guests is required")).toBeInTheDocument();
  });

  test('Submit button is disabled when form is invalid', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    const submitButton = screen.getByText("Submit reservation");
    expect(submitButton).toBeDisabled();
  });

  test('Submit button is enabled when form is valid', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    // Fill out the form with valid data
    const dateInput = screen.getByLabelText("Choose date *");
    const timeSelect = screen.getByLabelText("Choose time *");
    const guestsSelect = screen.getByLabelText("Number of guests *");
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    
    fireEvent.change(dateInput, { target: { value: tomorrowString } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsSelect, { target: { value: '2' } });
    
    const submitButton = screen.getByText("Submit reservation");
    expect(submitButton).not.toBeDisabled();
  });

  test('Clears validation errors when user starts typing', () => {
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    const dateInput = screen.getByLabelText("Choose date *");
    
    // Trigger validation error
    fireEvent.blur(dateInput);
    expect(screen.getByText("Date is required")).toBeInTheDocument();
    
    // Start typing to clear error
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    
    fireEvent.change(dateInput, { target: { value: tomorrowString } });
    
    // Error should be cleared
    expect(screen.queryByText("Date is required")).not.toBeInTheDocument();
  });

  test('Form resets on successful submission', async () => {
    mockBookingContext.submitForm.mockResolvedValue(true);
    
    render(<BookingForm bookingContext={mockBookingContext} />);
    
    // Fill out the form
    const dateInput = screen.getByLabelText("Choose date *");
    const timeSelect = screen.getByLabelText("Choose time *");
    const guestsSelect = screen.getByLabelText("Number of guests *");
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    
    fireEvent.change(dateInput, { target: { value: tomorrowString } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    fireEvent.change(guestsSelect, { target: { value: '2' } });
    
    // Submit the form
    const submitButton = screen.getByText("Submit reservation");
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(mockBookingContext.submitForm).toHaveBeenCalled();
    });
    
    // Check that form is reset
    await waitFor(() => {
      expect(dateInput.value).toBe('');
      expect(timeSelect.value).toBe('');
      expect(guestsSelect.value).toBe('');
    });
  });
}); 