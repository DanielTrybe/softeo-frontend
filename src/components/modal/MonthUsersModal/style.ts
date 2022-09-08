import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    borderBottom: "1px solid #EAEAEA",
    width: "100%",
  },
  selectedMonth: {
    border: "1px solid gray",
  },
  notSelectedMonth: {},
  textList: {
    marginRight: 15,
  },
  accordionDetails: {
    border: "1px solid black",
    borderTop: "none",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  boxStyle: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    maxHeight: "80%",
    minHeight: 300,
    overflowY: "scroll",
    background: "white",
    border: "1px solid #EAEAEA",
    padding: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  notFoundText: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "@media (max-width: 400px)": {
    boxStyle: {
      width: 320,
    },
  },
  gridBtn: {
    position: "fixed",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  closeBtn: {
    width: 30,
    height: 30,

    background: "#F9C29D",
    border: "none",
    borderRadius: "50%",
    position: "relative",
    "&:hover": {
      background: "#BEC8CE",
    },
    "&:active": {
      background: "gray",
    },
  },
});

export { useStyles };
