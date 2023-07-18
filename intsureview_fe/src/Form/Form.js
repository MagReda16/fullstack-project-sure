import { useForm, Controller } from "react-hook-form";
import { Button, Input, Select, MenuItem, Box, Typography, Paper } from "@mui/material";
import { formStyles } from "./FormStyles";

const SubscribeForm = () => {

  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
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

  const onSubmit = data => console.log(data);

  return (
    <Paper elevation={1} sx={formStyles.container}>
      <Typography sx={formStyles.title}>Don't be a stranger!</Typography>
      <Typography sx={formStyles.subtitle}>Create an account for faster checkout next time you shop</Typography>
      <Box sx={formStyles.formContent}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => <Input {...field} placeholder="First name" sx={formStyles.input} />}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Last name" sx={formStyles.input} />}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Email" sx={formStyles.input} />}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => <Input {...field} placeholder="Password" sx={formStyles.input} />}
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
          <Button sx={formStyles.button} variant="contained" type="submit">Create Account</Button>
        </form>
      </Box>
    </Paper>
  );
};

export default SubscribeForm;