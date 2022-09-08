import { useEffect, useState } from "react";

import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

import SkeletonCustom from "components/skeleton/SkeletonCustom";
import { useStyles } from "./style";

type BrachDetails = {
  owner: string;
  repo: string;
};

type ModalInfo = {
  owner: string;
  repository: string;
  sha: string;
};

function UsersDetailsTemplate() {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({} as ModalInfo);

  // const openDetailsPopUp = (card: any) => {
  //   setModalInfo({
  //     owner: owner,
  //     repository: repo,
  //     sha: card?.commit?.sha,
  //   });
  //   setOpenModal(true);
  // };

  return (
    <>
      oi
      {/* <Typography
        variant="h5"
        className={classes.title}
        date-testid="branchtitle"
      >
        Branches
      </Typography>
      <Grid>
        {loading ? (
          <SkeletonCustom
            length={12}
            childClass={classes.childClass}
            fatherClass={classes.fatherClass}
          />
        ) : (
          <Grid container className={classes.fatherClass}>
            {cardDetail.length > 0 ? (
              cardDetail.map((card, index) => (
                <Card
                  key={index}
                  className={classes.childClass}
                  variant="outlined"
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {card?.name}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      style={{ wordBreak: "break-all" }}
                    >
                      Branch ID: {card?.commit?.sha}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button
                      type="button"
                      onClick={() => openDetailsPopUp(card)}
                      className={classes.commitBtn}
                    >
                      See commits
                    </button>
                  </CardActions>
                </Card>
              ))
            ) : (
              <Typography variant="h6" className={classes.notFoundText}>
                Não encontrei nenhuma branch para este usuário, tente novamente.
              </Typography>
            )}
          </Grid>
        )}
        <CommitsModal
          modalInfo={modalInfo}
          setOpen={setOpenModal}
          open={openModal}
        />
      </Grid> */}
    </>
  );
}

export default UsersDetailsTemplate;
