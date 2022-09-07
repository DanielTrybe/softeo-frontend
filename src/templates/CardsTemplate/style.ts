import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  title: { textAlign: "center", borderBottom: "1px solid #EAEAEA" },
  cards: {
    display: "flex",
    flexWrap: "wrap",

    justifyContent: "center",
    gap: 10,
    padding: 5,
    marginTop: 5,
  },
  childClass: {
    maxWidth: 345,
    minWidth: 345,
    minHeight: 200,
    maxHeight: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  notFoundText: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export { useStyles };
