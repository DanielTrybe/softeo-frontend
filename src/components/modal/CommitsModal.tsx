import { useEffect } from "react";

import {
  Typography,
  Box,
  Backdrop,
  Fade,
  Modal,
  Grid,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import { useStyles } from "./style";
import { isValid, format } from "date-fns";
import AccordionCustom from "./AccordionCustom";

type PopupDetails = {
  modalInfo: {
    owner: string;
    repository: string;
    sha: string;
  };
  setOpen: (value: boolean) => void;
  open: boolean;
};

function CommitModal({ modalInfo, setOpen, open }: PopupDetails) {
  const classes = useStyles();

  useEffect(() => {
    if (open) {
      const { owner, repository, sha } = modalInfo;
      // getCommits(owner, repository, sha);
    }
    // eslint-disable-next-line
  }, [modalInfo?.sha]);

  const handleClose = () => setOpen(false);

  const validDate = (date: string) => {
    const valid = isValid(new Date(date));
    return valid
      ? format(new Date(date), "dd/MM/yyyy hh:mm:ss")
      : "Data inválida";
  };

  return (
    <>oi</>
    // <Modal
    //   aria-labelledby="transition-modal-title"
    //   aria-describedby="transition-modal-description"
    //   open={open}
    //   onClose={handleClose}
    //   closeAfterTransition
    //   keepMounted={false}
    //   BackdropComponent={Backdrop}
    //   BackdropProps={{
    //     timeout: 500,
    //   }}
    // >
    //   <Fade in={open}>
    //     <Box className={classes.boxStyle}>
    //       <Typography
    //         className={classes.title}
    //         variant="h5"
    //         sx={{ mb: 2, mt: 1 }}
    //       >
    //         Commits
    //       </Typography>
    //       {loadingCommits ? (
    //         <Backdrop
    //           sx={{
    //             backgroundColor: "white",
    //             mt: 10,
    //             zIndex: (theme) => theme.zIndex.drawer + 1,
    //           }}
    //           open={loadingCommits}
    //           onClick={handleClose}
    //         >
    //           <CircularProgress color="inherit" />
    //         </Backdrop>
    //       ) : commits.length > 0 ? (
    //         commits.map((commit) => (
    //           <AccordionCustom
    //             title={commit?.commit?.author?.name}
    //             subTitle={validDate(commit?.commit?.author?.date)}
    //             comment={commit?.commit?.message}
    //           />
    //         ))
    //       ) : (
    //         <Typography variant="h6" className={classes.notFoundText}>
    //           Não encontrei nenhum commit para esta branch, tente novamente.
    //         </Typography>
    //       )}

    //       <Grid sx={{ mt: 1, mr: 2 }} className={classes.gridBtn}>
    //         <Tooltip title="Fechar" placement="left-start">
    //           <button
    //             onClick={handleClose}
    //             type="button"
    //             className={classes.closeBtn}
    //           >
    //             X
    //           </button>
    //         </Tooltip>
    //       </Grid>
    //     </Box>
    //   </Fade>
    // </Modal>
  );
}

export default CommitModal;
