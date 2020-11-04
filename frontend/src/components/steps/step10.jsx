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

const Step10 = ({clickHandler, questions}) => {
  const currentQuestion = questions[9];
  // How much sleep do you get each night? 
  const classes = useStyles();
  
  const buttonHandler = (e) => {
    clickHandler(e.target.value, "step10");
  };

  return (
    <div>
      <h3>{currentQuestion}</h3>
        <div className={classes.root}>
          <Button variant="contained" color="primary" value="3" onClick={buttonHandler}>
            4 - 6
          </Button>
          <Button variant="contained" color="primary" value="2" onClick={buttonHandler}>
            6 - 8
          </Button>
          <Button variant="contained" color="primary" value="1" onClick={buttonHandler}>
            8 + 
          </Button>
        </div>
    </div>
  )
};

export default Step10;