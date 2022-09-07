import { Card } from "services/context/types";
import { Grid } from "@mui/material";
import { SingleMonth } from "services/context/types";
import { CompactCard } from "components/Items";
// import { DataCards } from "services/context/types";

type CardProps = {
  index: number;
  card: SingleMonth;
  year: number;
};

function CardShow({ card, year, index }: CardProps) {
  return (
    <Grid>
      <CompactCard card={card} index={index} year={year} />
    </Grid>
  );
}

export default CardShow;
