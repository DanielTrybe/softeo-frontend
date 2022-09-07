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
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { SingleMonth } from "services/context/types";
import { PopoverCustom } from "components/Items";
import { useStyles } from "./style";
import { useCardsContext } from "hooks";

type CompactProps = {
  index: number;
  card: SingleMonth;
  year: number;
};

function CompactCard({ card, year, index }: CompactProps) {
  const { users, filterUsersByMonth } = useCardsContext();
  const classes = useStyles();
  const navigate = useNavigate();
  const [usersByThisMonth, setUsersByThisMonth] = useState([] as any);

  useEffect(() => {
    if (users.length > 0) {
      const filter = filterUsersByMonth(card.month);
      setUsersByThisMonth(filter);
    }
  }, []);

  const profit = () => {
    if (usersByThisMonth.length > 0) {
      const mapMonth = usersByThisMonth.map((item: any) => item.monthsToPay);
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

  // console.log(
  //   usersByThisMonth[0]?.monthsToPay.find(
  //     (month: any) => month.month === card.month
  //   ).value
  // );

  return (
    <Paper elevation={2}>
      <div data-testid={`card-${index}-card`}>
        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton
                // onClick={() => navigate(`/${card?.owner?.login}/${card?.name}`)}
                aria-label="settings"
              >
                <Tooltip title="See MonthDetails" placement="left-start">
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
              <Typography>Saldo do Mês</Typography>
              <Typography>Positivo: {profit()?.paid ?? 0}</Typography>
              <Typography>Negativo: {profit()?.notPaid ?? 0}</Typography>
            </CardContent>
          </Grid>
        </Card>
      </div>
    </Paper>
  );
}

export default CompactCard;
