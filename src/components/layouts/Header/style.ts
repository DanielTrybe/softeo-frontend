import { makeStyles, styled } from "@material-ui/styles";
import { TextField } from "@mui/material";

const useStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  btnNewClient: {
    backgroundColor: "#225F6E",
    borderRadius: 5,
    border: "none",
    fontSize: "15px",
    width: 100,

    padding: 5,
    marginBottom: 3,
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#BEC8CE",
    },
    "&:active": {
      backgroundColor: "#90969A",
    },
    cursor: "pointer",
  },
});

const CustomTextField = styled(TextField)({
  width: "100%",

  backgroundColor: "#EAEAEA",
  overflow: "visible",
  "& label.Mui-focused": {
    color: "purple",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "purple",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "purple",
    },
    "&.Mui-focused fieldset": {
      borderColor: "purple",
    },
  },
});

export { useStyles, CustomTextField };
