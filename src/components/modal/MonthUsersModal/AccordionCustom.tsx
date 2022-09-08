import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { useStyles } from "./style";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UsersArray } from "services/context/types";

type AccordionProps = {
  cardMonth: string;
  title: string;
  subTitle: string;
  comment: string;
  monthsToPay: Array<{
    month: string;
    value: number;
    paid: boolean;
    year: number;
  }>;
};

function AccordionCustom({
  title,
  subTitle,
  comment,
  monthsToPay,
  cardMonth,
}: AccordionProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Grid sx={{ mb: 1, width: " 100%" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{
            border: "1px solid black",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            backgroundColor: "#EAEAEA",
          }}
        >
          <Typography sx={{ mr: 1 }}>{title}</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Tratamento: {subTitle}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Typography>Tel: {comment}</Typography>
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            component="div"
          >
            {monthsToPay.length > 0 &&
              monthsToPay.map((month) => (
                <ListItem divider>
                  <Grid
                    className={
                      cardMonth === month?.month
                        ? classes.selectedMonth
                        : classes.notSelectedMonth
                    }
                    sx={{ width: "100%", display: "flex" }}
                  >
                    <ListItemText
                      primary={month?.month.toUpperCase()}
                      className={classes.textList}
                    />

                    <ListItemText primary={`Valor: ${month?.value}`} />
                    <ListItemText
                      primary={`Pago: ${month?.paid ? "Sim" : "Não"}`}
                    />
                  </Grid>
                </ListItem>
              ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}

export default AccordionCustom;
