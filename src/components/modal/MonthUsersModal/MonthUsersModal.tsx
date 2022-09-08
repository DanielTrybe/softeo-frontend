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
} from "@mui/material";
import { useStyles } from "./style";
import { isValid, format } from "date-fns";
import AccordionCustom from "./AccordionCustom";
import { UsersArray as UserOBJ } from "services/context/types";

type PopupDetails = {
  modalInfo: Array<UserOBJ>;
  setOpen: (value: boolean) => void;
  open: boolean;
  cardMonth: string;
};

function MonthUsersModal({
  modalInfo,
  setOpen,
  open,
  cardMonth,
}: PopupDetails) {
  const classes = useStyles();

  const handleClose = () => setOpen(false);

  const validDate = (date: string) => {
    const valid = isValid(new Date(date));
    return valid
      ? format(new Date(date), "dd/MM/yyyy hh:mm:ss")
      : "Data inválida";
  };
  console.log(modalInfo);
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
            Pagamentos do mês
          </Typography>
          {modalInfo.length > 0 ? (
            modalInfo.map((user) => (
              <AccordionCustom
                title={user?.name}
                subTitle={user?.treatment}
                comment={user?.tel}
                monthsToPay={user?.monthsToPay}
                cardMonth={cardMonth}
              />
            ))
          ) : (
            <Typography variant="h6" className={classes.notFoundText}>
              Não encontrei nenhum cliente para este mês.
            </Typography>
          )}

          <Grid sx={{ mt: 1, mr: 2 }} className={classes.gridBtn}>
            <Tooltip title="Fechar" placement="left-start">
              <button
                onClick={handleClose}
                type="button"
                className={classes.closeBtn}
              >
                X
              </button>
            </Tooltip>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}

export default MonthUsersModal;
