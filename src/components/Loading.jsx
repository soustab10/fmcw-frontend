\/* eslint-disable react/react-in-jsx-scope */
import { CircularProgress } from '@mui/material';
import './Loading.css';

function Loading() {
  return (
   
    <div className="loading_div">
      <CircularProgress color="inherit" />
    </div>
  );
}

export default Loading;
