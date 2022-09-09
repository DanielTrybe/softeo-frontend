const useStyles = {
  title: {
    textAlign: "center",
    borderBottom: "1px solid #EAEAEA",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",

    justifyContent: "center",
    gap: 1,
    padding: 5,
  },
  childClass: {
    maxWidth: 320,
    minWidth: 320,
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
};

export { useStyles };
