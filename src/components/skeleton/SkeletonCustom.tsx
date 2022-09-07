import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

interface MediaProps {
  length: number;
  childClass: string;
  fatherClass: string;
}

function SkeletonCustom({ length, childClass, fatherClass }: MediaProps) {
  return (
    <Grid className={fatherClass}>
      {Array.from(new Array(length)).map((_item, index) => (
        <Skeleton className={childClass} key={index} variant="rectangular" />
      ))}
    </Grid>
  );
}

export default SkeletonCustom;
