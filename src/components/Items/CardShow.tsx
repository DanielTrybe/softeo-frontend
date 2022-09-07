import { Card } from "services/context/types";
import { Grid } from "@mui/material";
import { SingleMonth } from "services/context/types";
import { CompactCard } from "components/Items";
// import { DataCards } from "services/context/types";

type CardProps = {
  index: number;
  card: SingleMonth;
};

function CardShow({ card, index }: CardProps) {
  return (
    <Grid>
      <CompactCard card={card} index={index} />
    </Grid>
  );
}

export default CardShow;
