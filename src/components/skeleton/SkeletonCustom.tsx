import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

interface MediaProps {
  length: number;
  childClass: any;
  fatherClass: any;
}

function SkeletonCustom({ length, childClass, fatherClass }: MediaProps) {
  return (
    <Grid sx={fatherClass}>
      {Array.from(new Array(length)).map((_item, index) => (
        <Skeleton style={childClass} key={index} variant="rectangular" />
      ))}
    </Grid>
  );
}

export default SkeletonCustom;
