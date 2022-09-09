const useStyles = {
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
};

export { useStyles };
