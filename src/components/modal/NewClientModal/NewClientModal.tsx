import { useEffect } from "react";

import {
  Typography,
  Box,
  Backdrop,
  Fade,
  Modal,
  Grid,
  Tooltip,
  CircularProgress,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useStyles } from "./style";
import { isValid, format } from "date-fns";
import { UsersArray as UserOBJ } from "services/context/types";
import { treatments } from "services/data";

const schema = yup.object({
  name: yup.string().required("Digite um nome."),
  age: yup.string().required("Digite a idade."),
  email: yup.string().required("Digite um e-mail."),
  tel: yup.string().required("Digite um telefone."),
  treatment: yup.string().required("Selecione o tratamento."),
});

type PopupDetails = {
  setOpen: (value: boolean) => void;
  open: boolean;
};

function NewClientModal({ setOpen, open }: PopupDetails) {
  const classes = useStyles();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserOBJ>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      age: 0,
      email: "",
      tel: "",
      treatment: "",
      monthsToPay: [],
    },
  });

  const handleClose = () => setOpen(false);

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      keepMounted={false}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box className={classes.boxStyle}>
          <Typography
            className={classes.title}
            variant="h5"
            sx={{ mb: 2, mt: 1 }}
          >
            Cadastre um novo Tratamento
          </Typography>

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                inputProps={{ "data-testid": "header-input" }}
                label="Nome"
                id="outlined-start-adornment"
                sx={{
                  m: 1,
                  width: "94.5%",
                }}
                value={value}
                onChange={onChange}
                error={errors?.name ? true : false}
                helperText={
                  errors?.name && (
                    <span style={{ position: "absolute" }}>
                      {errors?.name?.message}
                    </span>
                  )
                }
              />
            )}
            name="name"
          />

          <Grid display="flex" sx={{ widht: "100%" }}>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  inputProps={{ "data-testid": "header-input" }}
                  label="Idade"
                  id="outlined-start-adornment"
                  sx={{
                    m: 1,
                    width: "30%",
                  }}
                  value={value}
                  onChange={onChange}
                  error={errors?.age ? true : false}
                  helperText={
                    errors?.age && (
                      <span style={{ position: "absolute" }}>
                        {errors?.age?.message}
                      </span>
                    )
                  }
                />
              )}
              name="age"
            />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  inputProps={{ "data-testid": "header-input" }}
                  label="Telefone"
                  id="outlined-start-adornment"
                  sx={{
                    m: 1,
                    width: "70%",
                  }}
                  value={value}
                  onChange={onChange}
                  error={errors?.tel ? true : false}
                  helperText={
                    errors?.tel && (
                      <span style={{ position: "absolute" }}>
                        {errors?.tel?.message}
                      </span>
                    )
                  }
                />
              )}
              name="tel"
            />
          </Grid>

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                inputProps={{ "data-testid": "header-input" }}
                label="E-mail"
                id="outlined-start-adornment"
                sx={{
                  m: 1,
                  width: "94.5%",
                }}
                value={value}
                onChange={onChange}
                error={errors?.email ? true : false}
                helperText={
                  errors?.email && (
                    <span style={{ position: "absolute" }}>
                      {errors?.email?.message}
                    </span>
                  )
                }
              />
            )}
            name="email"
          />
          {/* 
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                inputProps={{ "data-testid": "header-input" }}
                label="Tratamento"
                id="outlined-start-adornment"
                sx={{
                  m: 1,
                  width: "94.5%",
                }}
                value={value}
                onChange={onChange}
                error={errors?.treatment ? true : false}
                helperText={
                  errors?.treatment && (
                    <span style={{ position: "absolute" }}>
                      {errors?.treatment?.message}
                    </span>
                  )
                }
              />
            )}
            name="treatment"
          /> */}

          <FormControl
            sx={{
              m: 1,
              width: "94.5%",
            }}
          >
            <InputLabel id="tratamento">Tratamento</InputLabel>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  labelId="tratamento"
                  id="tratamento"
                  value={value}
                  label="Tratamento"
                  onChange={(value) => onChange(value)}
                >
                  {treatments.map((treatment, index) => (
                    <MenuItem key={index} value={JSON.stringify(treatment)}>
                      {treatment.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
              name="treatment"
            />
          </FormControl>

          <button
            onClick={handleSubmit(onSubmit)}
            type="button"
            className={classes.closeBtn}
          >
            Cadastrar
          </button>
          {/* <Grid sx={{ mt: 1, mr: 2 }} className={classes.gridBtn}>
            <Tooltip title="Fechar" placement="left-start">
              <button
                onClick={handleClose}
                type="button"
                className={classes.closeBtn}
              >
                X
              </button>
            </Tooltip>
          </Grid> */}
        </Box>
      </Fade>
    </Modal>
  );
}

export default NewClientModal;
