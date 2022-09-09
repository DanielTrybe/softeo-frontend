import { useState } from "react";
import { Grid, Box, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles, CustomTextField } from "./style";
import SofteoLogo from "images/softeologo.png";
import { useCardsContext } from "hooks";
import { useNavigate } from "react-router-dom";
import NewClientModal from "components/modal/NewClientModal/NewClientModal";

export default function Header() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Grid className={classes.header}>
      <Box
        sx={{
          width: 100,
        }}
      >
        <img
          data-testid="header-logo"
          src={SofteoLogo}
          width="200px"
          alt="logo"
          onClick={() => navigate("/")}
        />
      </Box>
      <button className={classes.btnNewClient} onClick={() => setOpen(true)}>
        Novo Tratamento
      </button>
      <NewClientModal open={open} setOpen={setOpen} />
    </Grid>
  );
}
