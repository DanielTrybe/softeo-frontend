import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  title: { textAlign: "center", borderBottom: "1px solid #EAEAEA" },
  fatherClass: {
    marginTop: 15,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  childClass: {
    margin: 1,
    maxWidth: 320,
    minWidth: 320,
    minHeight: 165,
    maxHeight: 165,
  },
  notFoundText: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  commitBtn: {
    backgroundColor: "#F9C29D",
    borderRadius: 5,
    border: "none",
    fontSize: "15px",
    width: "100%",
    padding: 5,
    marginBottom: 3,
    "&:hover": {
      backgroundColor: "#BEC8CE",
    },

    "&:active": {
      backgroundColor: "#90969A",
    },
    cursor: "pointer",
  },
});

export { useStyles };
