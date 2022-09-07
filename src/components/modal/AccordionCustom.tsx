import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Grid,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type AccordionProps = {
  title: string;
  subTitle: string;
  comment: string;
};

function AccordionCustom({ title, subTitle, comment }: AccordionProps) {
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
          <Typography sx={{ color: "text.secondary" }}>{subTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            border: "1px solid black",
            borderTop: "none",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <Typography>{comment}</Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}

export default AccordionCustom;
