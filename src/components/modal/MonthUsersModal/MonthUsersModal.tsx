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
import { useStyles, CloseButton } from "./style";

import AccordionCustom from "./AccordionCustom";
import { UsersArray as UserOBJ } from "services/context/types";

type PopupDetails = {
  modalInfo: Array<UserOBJ>;
  setOpen: (value: boolean) => void;
  open: boolean;
  cardMonth: string;
  year: number;
};

function MonthUsersModal({
  modalInfo,
  setOpen,
  open,
  cardMonth,
  year,
}: PopupDetails) {
  const classes = useStyles;

  const verifyYear = (user: UserOBJ) => {
    if (
      user.monthsToPay.find(
        (item) => item.month === cardMonth && item.year === year
      )
    ) {
      return (
        <AccordionCustom
          title={user?.name}
          subTitle={user?.treatment}
          comment={user?.tel}
          monthsToPay={user?.monthsToPay}
          cardMonth={cardMonth}
          user={user}
        />
      );
    } else <span />;
  };

  const handleClose = () => setOpen(false);

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
        <Box sx={classes.boxStyle}>
          <Typography sx={classes.title} variant="h5">
            Pagamentos do mês
          </Typography>
          {modalInfo.length > 0 ? (
            modalInfo.map((user) => verifyYear(user))
          ) : (
            <Typography variant="h6" sx={classes.notFoundText}>
              Não encontrado nenhum registro para esse mês.
            </Typography>
          )}

          <Grid sx={classes.gridBtn}>
            <Tooltip title="Fechar" placement="left-start">
              <CloseButton onClick={handleClose} type="button">
                X
              </CloseButton>
            </Tooltip>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}

export default MonthUsersModal;
