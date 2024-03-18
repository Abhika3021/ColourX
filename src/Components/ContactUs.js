import { Grid, Paper, TextField } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import React, { useState } from 'react';

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({}); // State for validation errors

  function validateForm(formData) {
    const newErrors = {};

    if (!formData.get('name')) {
      newErrors.name = 'Name is required';
    }

    if (!formData.get('email')) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.get('email'))) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.get('phone')) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.get('phone'))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    setErrors(newErrors);

    // Return true if there are no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  }

  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    if (validateForm(formDatab)) {
      fetch("https://script.google.com/macros/s/AKfycbzy24jhwiCwDT6t_f843As9ynN2mS39UovSE3T4AYmtzKmnyAaFZ7Ek5tmi9MzxdJJF/exec", {
        method: "POST",
        body: formDatab
      })
        .then(() => {
          setIsSubmitted(true); // Set the submission status to true on success
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <Grid container width={'50%'} className='my-2 mx-auto'>
      <Paper elevation={0}>
        <Grid align={'center'}>
          <h2>Get in Touch</h2>
        </Grid>
        <Grid align={'center'}>
          {isSubmitted ? (
            <div className="success-message">
              Successfully submitted. Our team will contact you soon.
            </div>
          ) : (
            <div>
              <p>Please fill out the form below, and our support team will get back to you within 48 hours.</p>
            </div>
          )}
        </Grid>

        <form className="form" onSubmit={(e) => Submit(e)}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            className='m-2 w-100'
            required
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            className='m-2 w-100'
            required
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            name="phone"
            label="Phone no"
            variant="outlined"
            className='m-2 w-100'
            maxLength='10'
            required
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <Textarea
            name="comment"
            minRows={2}
            placeholder="Comment"
            variant="outlined"
            size="lg"
            className='m-2 w-100'
            required
          />
          <Button
            type="submit"
            variant="solid"
            className='m-2'
            style={{ backgroundColor: '#F7DC5A', color: 'black', width: '40%', fontSize: '20px' }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default ContactUs;
