const useStyles = {
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
    width: "90%",
    maxHeight: "80%",
    minHeight: 300,
    overflowY: "auto",
    overflowX: "hidden",
    background: "white",
    border: "1px solid #EAEAEA",
    padding: 1,
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
  closeBtn: {
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
};

export { useStyles };
