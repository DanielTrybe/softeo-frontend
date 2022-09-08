import { Grid } from "@mui/material";
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
  const intervalProfit = () => {
    const mapMonth = users.map((item: UsersArray) => item.monthsToPay);
    const filterMonthPaid = mapMonth
      .flat()
      .filter(
        (item: any) =>
          convertMonth(item?.month) >= firstMonth &&
          convertMonth(item?.month) <= secondMonth &&
          item.paid === true
      );
    const faturamento = filterMonthPaid.reduce(
      (acc, next) => acc + next.value,
      0
    );
    return faturamento;
  };

  return <Grid>Faturamento: {intervalProfit()}</Grid>;
}

export default FilterIntervalProfit;
