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
import { CardShow } from "components/Items";
import SkeletonCustom from "components/skeleton/SkeletonCustom";
import { useStyles } from "./style";

function CardsTemplate() {
  const classes = useStyles();
  const { cardsMonthList, loading } = useCardsContext();

  const [selectYear, setSelectYear] = useState(2022);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectYear(Number(event.target.value));
  };

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        Meses de
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
