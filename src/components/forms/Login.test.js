import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Login from './Login';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock window.alert
const mockAlert = jest.fn();
Object.defineProperty(window, 'alert', {
  value: mockAlert,
  writable: true
});

describe('Login Component', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    mockAlert.mockClear();
  });

  describe('Step 1: HTML5 Validation Attributes', () => {
    test('Email input has correct HTML5 validation attributes', () => {
      render(<Login />);
      
      const emailInput = screen.getByLabelText('Email Address *');
      expect(emailInput).toBeInTheDocument();
      expect(emailInput).toHaveAttribute('type', 'email');
      expect(emailInput).toHaveAttribute('required');
      expect(emailInput).toHaveAttribute('placeholder', 'Enter your email address');
    });

    test('Password input has correct HTML5 validation attributes', () => {
      render(<Login />);
      
      const passwordInput = screen.getByLabelText('Password *');
      expect(passwordInput).toBeInTheDocument();
      expect(passwordInput).toHaveAttribute('type', 'password');
      expect(passwordInput).toHaveAttribute('required');
      expect(passwordInput).toHaveAttribute('minLength', '6');
      expect(passwordInput).toHaveAttribute('placeholder', 'Enter your password');
    });

    test('First Name input has correct HTML5 validation attributes in signup mode', async () => {
      render(<Login />);
      
      const toggleButton = screen.getByText('Sign Up');
      await userEvent.click(toggleButton);
      
      const firstNameInput = screen.getByLabelText('First Name *');
      expect(firstNameInput).toBeInTheDocument();
      expect(firstNameInput).toHaveAttribute('type', 'text');
      expect(firstNameInput).toHaveAttribute('required');
      expect(firstNameInput).toHaveAttribute('placeholder', 'Enter your first name');
    });

    test('Confirm Password input has correct HTML5 validation attributes in signup mode', async () => {
      render(<Login />);
      
      const toggleButton = screen.getByText('Sign Up');
      await userEvent.click(toggleButton);
      
      const confirmPasswordInput = screen.getByLabelText('Confirm Password *');
      expect(confirmPasswordInput).toBeInTheDocument();
      expect(confirmPasswordInput).toHaveAttribute('type', 'password');
      expect(confirmPasswordInput).toHaveAttribute('required');
      expect(confirmPasswordInput).toHaveAttribute('minLength', '6');
      expect(confirmPasswordInput).toHaveAttribute('placeholder', 'Confirm your password');
    });
  });

  describe('Step 2: JavaScript Validation Functions', () => {
    test('handleInputChange updates form data correctly', async () => {
      render(<Login />);
      
      const emailInput = screen.getByLabelText('Email Address *');
      await userEvent.type(emailInput, 'test@example.com');
      
      expect(emailInput).toHaveValue('test@example.com');
    });

    test('handleSubmit validates successful login with correct credentials', async () => {
      const mockUsers = [
        { id: 1, email: 'test@example.com', password: 'password123', firstName: 'Test', lastName: 'User' }
      ];
      localStorageMock.getItem.mockReturnValue(JSON.stringify(mockUsers));
      
      render(<Login />);
      
      const emailInput = screen.getByLabelText('Email Address *');
      const passwordInput = screen.getByLabelText('Password *');
      const submitButton = screen.getByRole('button', { name: 'Sign In' });
      
      await userEvent.type(emailInput, 'test@example.com');
      await userEvent.type(passwordInput, 'password123');
      await userEvent.click(submitButton);
      
      expect(localStorageMock.setItem).toHaveBeenCalledWith('currentUser', JSON.stringify(mockUsers[0]));
      expect(mockAlert).toHaveBeenCalledWith('Login successful!');
    });

    test('handleSubmit validates failed login with incorrect credentials', async () => {
      const mockUsers = [
        { id: 1, email: 'test@example.com', password: 'password123', firstName: 'Test', lastName: 'User' }
      ];
      localStorageMock.getItem.mockReturnValue(JSON.stringify(mockUsers));
      
      render(<Login />);
      
      const emailInput = screen.getByLabelText('Email Address *');
      const passwordInput = screen.getByLabelText('Password *');
      const submitButton = screen.getByRole('button', { name: 'Sign In' });
      
      await userEvent.type(emailInput, 'test@example.com');
      await userEvent.type(passwordInput, 'wrongpassword');
      await userEvent.click(submitButton);
      
      expect(mockAlert).toHaveBeenCalledWith('Invalid email or password!');
    });

    test('handleSubmit validates successful registration with new email', async () => {
      localStorageMock.getItem.mockReturnValue('[]');
      
      render(<Login />);
      
      const toggleButton = screen.getByText('Sign Up');
      await userEvent.click(toggleButton);
      
      const firstNameInput = screen.getByLabelText('First Name *');
      const lastNameInput = screen.getByLabelText('Last Name *');
      const emailInput = screen.getByLabelText('Email Address *');
      const passwordInput = screen.getByLabelText('Password *');
      const confirmPasswordInput = screen.getByLabelText('Confirm Password *');
      const submitButton = screen.getByRole('button', { name: 'Create Account' });
      
      await userEvent.type(firstNameInput, 'John');
      await userEvent.type(lastNameInput, 'Doe');
      await userEvent.type(emailInput, 'john@example.com');
      await userEvent.type(passwordInput, 'password123');
      await userEvent.type(confirmPasswordInput, 'password123');
      await userEvent.click(submitButton);
      
      expect(mockAlert).toHaveBeenCalledWith('Registration successful! You are now logged in.');
    });

    test('handleSubmit validates failed registration with mismatched passwords', async () => {
      localStorageMock.getItem.mockReturnValue('[]');
      
      render(<Login />);
      
      const toggleButton = screen.getByText('Sign Up');
      await userEvent.click(toggleButton);
      
      const firstNameInput = screen.getByLabelText('First Name *');
      const lastNameInput = screen.getByLabelText('Last Name *');
      const emailInput = screen.getByLabelText('Email Address *');
      const passwordInput = screen.getByLabelText('Password *');
      const confirmPasswordInput = screen.getByLabelText('Confirm Password *');
      const submitButton = screen.getByRole('button', { name: 'Create Account' });
      
      await userEvent.type(firstNameInput, 'John');
      await userEvent.type(lastNameInput, 'Doe');
      await userEvent.type(emailInput, 'john@example.com');
      await userEvent.type(passwordInput, 'password123');
      await userEvent.type(confirmPasswordInput, 'differentpassword');
      await userEvent.click(submitButton);
      
      expect(mockAlert).toHaveBeenCalledWith('Passwords do not match!');
    });

    test('toggleMode switches between login and signup modes', async () => {
      render(<Login />);
      
      // Initially in login mode - check submit button text
      expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument();
      expect(screen.queryByLabelText('First Name *')).not.toBeInTheDocument();
      
      const toggleButton = screen.getByText('Sign Up');
      await userEvent.click(toggleButton);
      
      // Now in signup mode - check submit button text
      expect(screen.getByRole('button', { name: 'Create Account' })).toBeInTheDocument();
      expect(screen.getByLabelText('First Name *')).toBeInTheDocument();
      expect(screen.getByLabelText('Confirm Password *')).toBeInTheDocument();
    });
  });
}); 