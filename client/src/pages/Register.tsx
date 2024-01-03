import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useAppContext } from "../AppContext";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export type RegistrationFormData = {
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  password: string;
};

export default function Register() {
  const { showToast } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>();

  const mutation = useMutation({
    mutationFn: async (data: RegistrationFormData) => {
      const response = await fetch(
        `${VITE_API_BASE_URL}/api/v1/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseBody = await response.json();

      if (!response.ok) {
        throw new Error(responseBody.message);
      }
    },
    onSuccess() {
      showToast({ message: "Registration successful", type: "SUCCESS" });
    },
    onError(error: Error) {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        component="form"
        noValidate
        onSubmit={onSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="First Name"
              autoComplete="firstname"
              autoFocus
              {...register("firstname", { required: "This field is required" })}
            />
            {errors.firstname && (
              <Typography component="span" color="red">
                {errors.firstname.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Last Name"
              autoComplete="lastname"
              autoFocus
              {...register("lastname", { required: "This field is required" })}
            />
            {errors.lastname && (
              <Typography component="span" color="red">
                {errors.lastname.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              autoComplete="email"
              autoFocus
              {...register("email", { required: "This field is required" })}
            />
            {errors.email && (
              <Typography component="span" color="red">
                {errors.email.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="Mobile"
              autoComplete="mobile"
              autoFocus
              {...register("mobile", { required: "This field is required" })}
            />
            {errors.mobile && (
              <Typography component="span" color="red">
                {errors.mobile.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              type="password"
              fullWidth
              id="password"
              label="Password"
              autoComplete="password"
              autoFocus
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <Typography component="span" color="red">
                {errors.password.message}
              </Typography>
            )}
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
          Register
        </Button>
      </Box>
      <Typography variant="h1">{mutation.status}</Typography>
    </Container>
  );
}
