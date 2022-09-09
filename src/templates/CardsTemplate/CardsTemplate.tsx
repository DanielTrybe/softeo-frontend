import { useState } from "react";
import {
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

import { useCardsContext } from "hooks";
import { CardShow, FilterIntervalProfit } from "components/Items";
import SkeletonCustom from "components/skeleton/SkeletonCustom";
import { useStyles } from "./style";

const monthsArray: Array<{ name: string; value: number }> = [
  { name: "Jan", value: 0 },
  { name: "fev", value: 1 },
  { name: "mar", value: 2 },
  { name: "abr", value: 3 },
  { name: "mai", value: 4 },
  { name: "jun", value: 5 },
  { name: "jul", value: 6 },
  { name: "ago", value: 7 },
  { name: "set", value: 8 },
  { name: "out", value: 9 },
  { name: "nov", value: 10 },
  { name: "dez", value: 11 },
];

function CardsTemplate() {
  const classes = useStyles();
  const { cardsMonthList, loading, users } = useCardsContext();
  const [selectedFirstMonth, setSelectedFirstMonth] = useState(0);
  const [selectedSecondMonth, setSelectedSecondMonth] = useState(11);
  const [selectYear, setSelectYear] = useState(2022);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectYear(Number(event.target.value));
  };

  const handleChangeFirstMonth = (event: SelectChangeEvent) => {
    setSelectedFirstMonth(Number(event.target.value));
  };

  const handleChangeSecondMonth = (event: SelectChangeEvent) => {
    setSelectedSecondMonth(Number(event.target.value));
  };

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
          <InputLabel id="select-year">Ano</InputLabel>
          <Select
            labelId="select-year"
            id="select-year"
            value={String(selectYear)}
            label="Ano"
            onChange={handleChange}
          >
            <MenuItem value={2022}>2022</MenuItem>
            <MenuItem value={2023}>2023</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
          <InputLabel id="select-firstMonth">Inicio</InputLabel>
          <Select
            labelId="select-firstMonth"
            id="select-firstMonth"
            value={String(selectedFirstMonth)}
            label="Inicio"
            onChange={handleChangeFirstMonth}
          >
            {monthsArray.map((month, index) => (
              <MenuItem key={index} value={month.value}>
                {month.name.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 70 }} size="small">
          <InputLabel id="select-year">Fim</InputLabel>
          <Select
            labelId="select-secondMonth"
            id="select-secondMonth"
            value={String(selectedSecondMonth)}
            label="Fim"
            onChange={handleChangeSecondMonth}
          >
            {monthsArray.map((month, index) => (
              <MenuItem key={index} value={month.value}>
                {month.name.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FilterIntervalProfit
          users={users}
          year={selectYear}
          firstMonth={selectedFirstMonth}
          secondMonth={selectedSecondMonth}
        />
      </Typography>

      <Grid className={classes.cards}>
        {loading ? (
          <SkeletonCustom
            length={12}
            childClass={classes.childClass}
            fatherClass={classes.cards}
          />
        ) : cardsMonthList?.length > 0 ? (
          cardsMonthList.map((card, index) => (
            <Grid key={index}>
              <CardShow card={card} index={index} year={selectYear} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" className={classes.notFoundText}>
            Não encontrei nenhum mês.
          </Typography>
        )}
      </Grid>
    </>
  );
}

export default CardsTemplate;
