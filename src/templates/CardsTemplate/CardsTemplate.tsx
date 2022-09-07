import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useCardsContext } from "hooks";
import { CardShow } from "components/Items";
import SkeletonCustom from "components/skeleton/SkeletonCustom";
import { useStyles } from "./style";

function CardsTemplate() {
  const classes = useStyles();
  const { cardsMonthList, loading } = useCardsContext();

  const [selectYear, setSelectYear] = useState(2022);

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        Meses de {selectYear}
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
