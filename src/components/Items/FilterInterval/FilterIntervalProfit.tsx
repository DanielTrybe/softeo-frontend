import { Grid, Box } from "@mui/material";
import { UsersArray } from "services/context/types";
import { convertMonth } from "hooks";

type IntervalProps = {
  users: Array<UsersArray>;
  year: number;
  firstMonth: number;
  secondMonth: number;
};

function FilterIntervalProfit({
  users,
  year,
  firstMonth,
  secondMonth,
}: IntervalProps) {
  const filterProfit = (paid: boolean) => {
    const mapMonth = users.map((item: UsersArray) => item.monthsToPay);
    const filterMonthPaid = mapMonth
      .flat()
      .filter(
        (item) =>
          convertMonth(item?.month) >= firstMonth &&
          convertMonth(item?.month) <= secondMonth &&
          item?.year === year &&
          item.paid === paid
      );
    const faturamento = filterMonthPaid.reduce(
      (acc, next) => acc + next.value,
      0
    );
    return faturamento;
  };

  const intervalProfit = () => {
    const positive = filterProfit(true);
    const negative = filterProfit(false);

    return { positive, negative };
  };

  return (
    <Grid sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Box sx={{ mr: 1 }}>Faturamento: {intervalProfit().positive}</Box>
      <Box>Pendente: {intervalProfit().negative}</Box>
    </Grid>
  );
}

export default FilterIntervalProfit;
