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

const Step9 = ({clickHandler, questions}) => {
  const currentQuestion = questions[8];
  // Meals per day?
  const classes = useStyles();
  
  const buttonHandler = (e) => {
    clickHandler(e.target.value, "step9");
  };

  return (
    <div>
      <h3>{currentQuestion}</h3>
        <div className={classes.root}>
          <Button variant="contained" color="primary" value="0" onClick={buttonHandler}>
            1 - 2
          </Button>
          <Button variant="contained" color="primary" value="1" onClick={buttonHandler}>
            2 - 4
          </Button>
          <Button variant="contained" color="primary" value="2" onClick={buttonHandler}>
            4 +
          </Button>
        </div>
    </div>
  )
};

export default Step9;