import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios'
import { Button, Input, Select, MenuItem, Box, Typography, Paper, Tooltip } from "@mui/material";
import { Error, FavoriteBorder } from '@mui/icons-material';
import SubmitModal from './SubmitModal';
import { howDidYouHearOptions } from '../constants/formConstants'
import { formStyles } from "./SubscribeFormStyles";
import { API_BASE_URL } from '../api/apiConfig';

const SubscribeForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '', icon: '' });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      willReceivePromotions: true,
      howDidYouHear: 'At the dog park',
    },
  });

  // here all errors are handled the same way. Would maybe handle 400 and 500 errors differently 
  const onSubmit = async (formData) => {
    try {
      await axios.post(`${API_BASE_URL}`, formData);
      setIsModalOpen(true);
      setModalContent({
        title: 'Thanks for joining!',
        content: 'Your account has been created.',
        icon: <FavoriteBorder sx={formStyles.icons} />
      })
      reset();
    } catch (error) {
      if (error) {
        setIsModalOpen(true);
        setModalContent({
          title: 'Uh-Oh!',
          content: 'Looks like something went wrong. Please check the info you entered and try again.',
          icon: <Error sx={formStyles.icons} />
        })
      }
    }
  };

  return (
    <Paper elevation={3} sx={formStyles.container}>
      <Typography sx={formStyles.title} variant='h3'>Don't be a stranger!</Typography>
      <Typography variant='h6'>Create an account for faster checkout next time you shop</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={formStyles.inputContainer}>
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
        </Box>
        <Box sx={formStyles.inputContainer}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Email" sx={formStyles.input} type='email' />}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Tooltip
                title={errors.password ? "Must be at least 8 characters" : ""}
                componentsProps={{
                  tooltip: {
                    sx: formStyles.errorTooltip,
                  },
                }}
                placement='bottom-end'
                arrow>
                <Input
                  {...field}
                  placeholder="Password"
                  sx={formStyles.input}
                  type='password'
                  {...register('password', { minLength: 8 })}
                />
              </Tooltip>
            )}
          />
        </Box>
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
              <Select {...field} sx={formStyles.selects}>
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </Box>
          )}
        />
        <Button sx={formStyles.button} variant="contained" type="submit">Create Account</Button>
      </form>
      <SubmitModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} modalContent={modalContent} />
    </Paper>
  );
};

export default SubscribeForm;