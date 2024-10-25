import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

interface Props {
  progress: number;
}

const Preloader = ({ progress }: Props) => {
  console.log(progress);
  return (
    <div style={styles.loaderContainer}>
      <CircularProgress value={progress} size="120px" color="teal.400">
        <CircularProgressLabel>{progress}%</CircularProgressLabel>
      </CircularProgress>
    </div>
  );
};

const styles = {
  loaderContainer: {
    alignItems: "center",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    left: 0,
    top: 0,
    width: "100vw",
    zIndex: 1000,
  },
};

export default Preloader;
