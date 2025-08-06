import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Paper,
  Grid,
  FormHelperText
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import CelebrationIcon from '@mui/icons-material/Celebration';

const BookingForm = ({ bookingContext, onDateChange }) => {
  // State for form fields
  const [formData, setFormData] = useState({
    date: null,
    time: '',
    guests: '',
    occasion: ''
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // State for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // State for field touch status (for showing errors only after user interaction)
  const [touched, setTouched] = useState({});

  // Get available times, dispatch, and submitForm from props
  const { availableTimes, dispatch, submitForm } = bookingContext || { 
    availableTimes: [], 
    dispatch: () => {},
    submitForm: () => Promise.resolve(false)
  };

  // Validation functions
  const validateField = (name, value) => {
    switch (name) {
      case 'date':
        if (!value) return 'Date is required';
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) return 'Date cannot be in the past';
        return '';
      
      case 'time':
        if (!value) return 'Time is required';
        return '';
      
      case 'guests':
        if (!value) return 'Number of guests is required';
        const guestCount = parseInt(value);
        if (guestCount < 1) return 'At least 1 guest is required';
        if (guestCount > 8) return 'Maximum 8 guests allowed';
        return '';
      
      case 'occasion':
        // Occasion is optional, so no validation needed
        return '';
      
      default:
        return '';
    }
  };

  // Validate all fields
  const validateForm = useCallback(() => {
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Check if form is valid for submit button
  const isFormValid = () => {
    return formData.date && formData.time && formData.guests && Object.keys(errors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // If date is changed, dispatch to update available times and notify parent
    if (name === 'date' && value) {
      const dateString = value.toISOString().split('T')[0];
      dispatch({ type: 'UPDATE_TIMES', payload: { date: dateString } });
      onDateChange?.(dateString);
    }
  };

  // Handle date change
  const handleDateChange = (date) => {
    setFormData(prevState => ({
      ...prevState,
      date: date
    }));

    if (date) {
      const dateString = date.toISOString().split('T')[0];
      dispatch({ type: 'UPDATE_TIMES', payload: { date: dateString } });
      onDateChange?.(dateString);
    }

    // Clear error when user selects a date
    if (errors.date) {
      setErrors(prev => ({
        ...prev,
        date: ''
      }));
    }
  };

  // Handle field blur (for showing errors after user interaction)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validate field on blur
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      // Mark all fields as touched to show errors
      setTouched({
        date: true,
        time: true,
        guests: true,
        occasion: true
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const submissionData = {
        ...formData,
        date: formData.date ? formData.date.toISOString().split('T')[0] : ''
      };

      console.log('Form submitted:', submissionData);
      console.log('Available times:', availableTimes);

      // Use the submitForm function from context
      const success = await submitForm(submissionData);
      
      if (success) {
        setSubmitStatus('success');
        // Reset form on success
        setFormData({ date: null, time: '', guests: '', occasion: '' });
        setErrors({});
        setTouched({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Validate form on mount and when formData changes
  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      validateForm();
    }
  }, [formData, touched, validateForm]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          maxWidth: 600, 
          mx: 'auto',
          borderRadius: 3,
          backgroundColor: 'background.paper'
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3, textAlign: 'center', color: 'primary.main' }}>
          Make Your Reservation
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <DatePicker
                label="Choose Date"
                value={formData.date}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    required
                    error={touched.date && !!errors.date}
                    helperText={touched.date && errors.date}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: <CalendarTodayIcon sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                  />
                )}
                minDate={new Date()}
                sx={{ width: '100%' }}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth required error={touched.time && !!errors.time}>
                <InputLabel>Choose Time</InputLabel>
                <Select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  startAdornment={<AccessTimeIcon sx={{ mr: 1, color: 'text.secondary' }} />}
                >
                  <MenuItem value="">Select a time</MenuItem>
                  {availableTimes.map((time) => (
                    <MenuItem key={time} value={time}>
                      {time}
                    </MenuItem>
                  ))}
                </Select>
                {touched.time && errors.time && (
                  <FormHelperText>{errors.time}</FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth required error={touched.guests && !!errors.guests}>
                <InputLabel>Number of Guests</InputLabel>
                <Select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  startAdornment={<GroupIcon sx={{ mr: 1, color: 'text.secondary' }} />}
                >
                  <MenuItem value="">Select number of guests</MenuItem>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num} {num === 1 ? 'person' : 'people'}
                    </MenuItem>
                  ))}
                </Select>
                {touched.guests && errors.guests && (
                  <FormHelperText>{errors.guests}</FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Occasion</InputLabel>
                <Select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  startAdornment={<CelebrationIcon sx={{ mr: 1, color: 'text.secondary' }} />}
                >
                  <MenuItem value="">No special occasion</MenuItem>
                  <MenuItem value="birthday">Birthday</MenuItem>
                  <MenuItem value="anniversary">Anniversary</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                disabled={isSubmitting || !isFormValid()}
                sx={{ 
                  py: 2, 
                  mt: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600
                }}
              >
                {isSubmitting ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CircularProgress size={20} color="inherit" />
                    Submitting...
                  </Box>
                ) : (
                  'Submit Reservation'
                )}
              </Button>
            </Grid>

            {!isFormValid() && Object.keys(touched).length > 0 && (
              <Grid item xs={12}>
                <Alert severity="warning" sx={{ mt: 2 }}>
                  Please fill in all required fields correctly.
                </Alert>
              </Grid>
            )}

            {submitStatus && (
              <Grid item xs={12}>
                <Alert 
                  severity={submitStatus === 'success' ? 'success' : 'error'}
                  sx={{ mt: 2 }}
                >
                  {submitStatus === 'success' 
                    ? 'Reservation submitted successfully!' 
                    : 'Failed to submit reservation. Please try again.'
                  }
                </Alert>
              </Grid>
            )}
          </Grid>
        </Box>
      </Paper>
    </LocalizationProvider>
  );
};

export default BookingForm; 