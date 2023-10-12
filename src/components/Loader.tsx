"use client";

import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return <div className="h-full w-full flex justify-center items-center">
    <CircularProgress color="success" />
  </div>;
};

export default Loader;
