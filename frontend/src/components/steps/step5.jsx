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

const Step5 = ({clickHandler, questions}) => {
  const currentQuestion = questions[4];
  // How many times per week do you exercise?
  const classes = useStyles();

  const buttonHandler = (e) => {
    e.preventDefault();
    clickHandler(e.target.value, "step5");
  };
  
  return (
    <div>
      <h3>{currentQuestion}</h3>
        <div className={classes.root}>
          <Button variant="contained" color="primary" value="2" onClick={buttonHandler}>
            1 - 2
          </Button>
          <Button variant="contained" color="primary" value="1" onClick={buttonHandler}>
            3 - 5
          </Button>
          <Button variant="contained" color="primary" value="0" onClick={buttonHandler}>
            5 +
          </Button>
        </div>
    </div>
  )
};

export default Step5;