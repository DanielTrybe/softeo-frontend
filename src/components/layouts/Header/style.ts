import { makeStyles, styled } from "@material-ui/styles";
import { TextField } from "@mui/material";

const useStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",

    gap: 10,
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
