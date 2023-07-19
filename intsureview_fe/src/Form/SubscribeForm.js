import React, { useState } from 'react';
import axios from 'axios'
import { useForm, Controller } from "react-hook-form";
import { Button, Input, Select, MenuItem, Box, Typography, Paper } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SubmitModal from './SubmitModal';
import { formStyles } from "./FormStyles";

const SubscribeForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '', icon: '' });


  const { register, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      willReceivePromotions: true,
      howDidYouHear: 'Dog park'
    }
  });

  const howDidYouHearOptions = [
    'Google',
    'Facebook',
    'Instagram',
    'Twitter',
    'Dog park',
    'My dog told me',
    'Word of mouth (human)',
    'Unsure'
  ]

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:8000/form/", data);
      setIsModalOpen(true)
      setModalContent({
        title: 'Thanks for joining!',
        content: 'Your account has been created.',
        icon: <FavoriteBorderIcon sx={{ fontSize: '50px' }} />
      })
      console.log(data, 'Sent successfully')
    } catch (error) {
      if (error.response.status === 400) {
        setIsModalOpen(true)
        setModalContent({
          title: 'Uh-Oh!',
          content: 'Looks like something went wrong. Please try again.',
          icon: <ErrorIcon sx={{ fontSize: '50px' }} />
        })
      }
    }
  };

  return (
    <Paper elevation={1} sx={formStyles.container}>
      <Typography sx={formStyles.title}>Don't be a stranger!</Typography>
      <Typography sx={formStyles.subtitle}>Create an account for faster checkout next time you shop</Typography>
      <Box sx={formStyles.formContent}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstname"
            control={control}
            render={({ field }) => <Input {...field} placeholder="First name" sx={formStyles.input} />}
          />
          <Controller
            name="lastname"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Last name" sx={formStyles.input} />}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Email" sx={formStyles.input} type='email' />}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Password" sx={formStyles.input} type='password'
              {...register('password', { minLength: 8 })} />}
          />
          {errors.password && <Typography>Must be at least 8 characters</Typography>}
          <Controller
            name="howDidYouHear"
            control={control}
            render={({ field }) => (
              <Box>
                <Typography>How did you hear about us?</Typography>
                <Select {...field} sx={formStyles.selects}>
                  {howDidYouHearOptions.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </Box>
            )}
          />
          <Controller
            name="willReceivePromotions"
            control={control}
            render={({ field }) => (
              <Box>
                <Typography>Would you like to receive promotions via email?</Typography>
                <Select {...field} sx={formStyles.selects} id="willReceivePromotions">
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </Box>
            )}
          />
          <Button sx={formStyles.button} variant="contained" type="submit">Create Account</Button>
        </form>
      </Box>
      <SubmitModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} modalContent={modalContent} />
    </Paper>
  );
};

export default SubscribeForm;