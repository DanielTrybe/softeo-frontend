const useStyles = {
  positiveProfit: {
    color: "darkgreen",
  },
  negativeProfit: {
    color: "orange",
  },
  card: {
    maxWidth: 345,
    minWidth: 345,
    minHeight: 220,
    maxHeight: 220,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardHeader: { maxHeight: 200, overflow: "hidden" },
  btnLinks: {
    backgroundColor: "#225F6E",
    borderRadius: 5,
    border: "none",
    fontSize: "15px",
    width: "100%",
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
  link: {
    textDecoration: "none",
    color: "black",
    "&:hover": { textDecoration: "none" },
    "&:visited": { textDecoration: "none" },
    "&active": { textDecoration: "none" },
  },
};

export { useStyles };
