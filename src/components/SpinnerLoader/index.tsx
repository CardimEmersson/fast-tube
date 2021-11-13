import Loader from "react-loader-spinner";
import { LoaderContainer } from "./styles";

function SpinnerLoader() {
  return (
    <LoaderContainer>
      <Loader type="Rings" color="#1DB954" height={100} width={100} />
    </LoaderContainer>
  );
}

export { SpinnerLoader };
