import { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Paper,
  Card,
  CardHeader,
  Tooltip,
  CardContent,
  IconButton,
} from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";
import { SingleMonth, UsersArray as UserOBJ } from "services/context/types";
import { useStyles } from "./style";
import { useCardsContext } from "hooks";
import MonthUsersModal from "components/modal/MonthUsersModal/MonthUsersModal";

type CompactProps = {
  index: number;
  card: SingleMonth;
  year: number;
};

function CompactCard({ card, year, index }: CompactProps) {
  const { users, filterUsersByMonth } = useCardsContext();
  const classes = useStyles();

  const [usersByThisMonth, setUsersByThisMonth] = useState([] as any);
  const [openModal, setOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState([] as Array<UserOBJ>);

  useEffect(() => {
    if (users.length > 0) {
      const filter = filterUsersByMonth(card.month);

      setUsersByThisMonth(filter);
    }
  }, []);

  const profit = () => {
    if (usersByThisMonth.length > 0) {
      const mapMonth = usersByThisMonth.map(
        (item: UserOBJ) => item.monthsToPay
      );
      const filterMonthPaid = mapMonth
        .flat()
        .filter(
          (item: any) =>
            item.month === card.month &&
            item.year === year &&
            item.paid === true
        );
      const filterMonthNotPaid = mapMonth
        .flat()
        .filter(
          (item: any) =>
            item.month === card.month &&
            item.year === year &&
            item.paid === false
        );

      const reducePositive = filterMonthPaid.reduce(
        (acc: any, next: any) => acc + next.value,
        0
      );
      const reduceNegative = filterMonthNotPaid.reduce(
        (acc: any, next: any) => acc + next.value,
        0
      );
      return { paid: reducePositive, notPaid: reduceNegative };
    }
  };

  const openDetailsPopUp = (users: Array<UserOBJ>) => {
    setModalInfo(users);
    setOpenModal(true);
  };

  return (
    <>
      <Paper elevation={2}>
        <div data-testid={`card-${index}-card`}>
          <Card className={classes.card}>
            <CardHeader
              action={
                <IconButton
                  onClick={() => openDetailsPopUp(usersByThisMonth)}
                  aria-label="settings"
                >
                  <Tooltip title="Detalhes do mês" placement="left-start">
                    <InfoIcon />
                  </Tooltip>
                </IconButton>
              }
              title={
                <span data-testid={`card-${index}-name`}>
                  {card.month.toUpperCase()}
                </span>
              }
              className={classes.cardHeader}
            />

            <Grid>
              <CardContent>
                <button
                  className={classes.btnLinks}
                  onClick={() => openDetailsPopUp(usersByThisMonth)}
                >
                  Detalhes do mês
                </button>
                <Typography>Saldo do Mês</Typography>
                <Typography className={classes.positiveProfit}>
                  Pago: {profit()?.paid ?? 0}
                </Typography>
                <Typography className={classes.negativeProfit}>
                  Pendente: {profit()?.notPaid ?? 0}
                </Typography>
              </CardContent>
            </Grid>
          </Card>
        </div>
      </Paper>
      <MonthUsersModal
        modalInfo={modalInfo}
        setOpen={setOpenModal}
        open={openModal}
        cardMonth={card?.month}
      />
    </>
  );
}

export default CompactCard;
