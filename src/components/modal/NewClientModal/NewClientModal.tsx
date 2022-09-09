import { useState } from "react";

import {
  Typography,
  Box,
  Backdrop,
  Fade,
  Modal,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useStyles } from "./style";
import { MonthConversion } from "hooks";
import { UsersArray as UserOBJ } from "services/context/types";
import { treatments } from "services/data";
import { useCardsContext } from "hooks";

type PopupDetails = {
  setOpen: (value: boolean) => void;
  open: boolean;
};

function NewClientModal({ setOpen, open }: PopupDetails) {
  const { postNewClient } = useCardsContext();
  const classes = useStyles();

  const [price, setPrice] = useState("" as string);
  const [parcels, setParcels] = useState(0 as number);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
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

  const verifyPrice = () => {
    if (!price || !parcels)
      return "Selecione o tratamento e parcelas e clique em 'Calcular'";
    else {
      const moneyPerMonth = Number(JSON.parse(price).value) / parcels;
      return `O cliente vai pagar ${Math.ceil(moneyPerMonth)} por mês`;
    }
  };

  const onSubmit = (values: any) => {
    const newClient = {
      ...values,
      id: Math.ceil(Math.random() * 10000),
      treatment: JSON.parse(values.treatment).name,
      monthsToPay: Array.from({ length: values.monthsToPay }).map(
        (_position, index: number) => {
          const myDate = MonthConversion(
            new Date().getMonth(),
            index,
            new Date().getFullYear()
          );
          return {
            month: myDate?.month,
            year: myDate?.year,
            value: Math.ceil(
              Number(JSON.parse(values.treatment).value) / values.monthsToPay
            ),
            paid: false,
          };
        }
      ),
    };

    postNewClient(newClient);
    handleClose();
    reset();
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
                  m: 2,
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
                    m: 2,
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
                  label="Celular com DDD"
                  id="outlined-start-adornment"
                  sx={{
                    m: 2,
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
                  m: 2,
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
          <FormControl
            sx={{
              m: 2,
              width: "94.5%",
            }}
          >
            <InputLabel id="tratamento">Tratamento</InputLabel>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  error={errors?.treatment ? true : false}
                  labelId="tratamento"
                  id="tratamento"
                  value={value}
                  label="Tratamento"
                  onChange={(value) => {
                    onChange(value);
                    setPrice(value.target.value);
                  }}
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
            {errors?.treatment && (
              <span
                style={{
                  position: "absolute",
                  margin: "60px 0 0 10px",
                  color: "darkred",
                  fontSize: 12,
                }}
              >
                {errors?.treatment?.message}
              </span>
            )}
          </FormControl>

          <FormControl
            sx={{
              m: 2,
              width: "94.5%",
            }}
          >
            <InputLabel id="monthsToPay">Parcelar</InputLabel>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  error={errors?.monthsToPay ? true : false}
                  labelId="monthsToPay"
                  id="monthsToPay"
                  value={value}
                  label="Parcelar"
                  onChange={(value) => {
                    onChange(value);
                    setParcels(Number(value.target.value));
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                    (parcel, index) => (
                      <MenuItem key={index} value={parcel}>
                        {parcel} x
                      </MenuItem>
                    )
                  )}
                </Select>
              )}
              name="monthsToPay"
            />
            {errors?.monthsToPay && (
              <span
                style={{
                  position: "absolute",
                  margin: "60px 0 0 10px",
                  color: "darkred",
                  fontSize: 12,
                }}
              >
                {errors?.monthsToPay?.message}
              </span>
            )}
          </FormControl>
          <Grid sx={{ mt: 1, mb: 1 }}>{verifyPrice()}</Grid>
          <button
            onClick={handleSubmit(onSubmit)}
            type="button"
            className={classes.closeBtn}
          >
            Cadastrar
          </button>
        </Box>
      </Fade>
    </Modal>
  );
}

export default NewClientModal;
