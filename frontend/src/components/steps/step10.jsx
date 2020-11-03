import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Step10 = ({formData, updateForm, questions}) => {
  const currentQuestion = questions[9];
  // How much sleep do you get each night? 
  const classes = useStyles();
  
  return (
    <div>
      <h3>{currentQuestion}</h3>
        <div className={classes.root}>
          <Button variant="contained" color="primary">
            4 - 6
          </Button>
          <Button variant="contained" color="primary">
            6 - 8
          </Button>
          <Button variant="contained" color="primary">
            8 + 
          </Button>
        </div>
    </div>
  )
};

export default Step10;