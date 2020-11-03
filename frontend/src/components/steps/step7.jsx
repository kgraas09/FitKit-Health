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

const Step7 = ({formData, updateForm, questions}) => {
  const currentQuestion = questions[6];
  // What Why do you exercise? 
  const classes = useStyles();

  return (
    <div>
      <h3>{currentQuestion}</h3>
        <div className={classes.root}>
          <Button variant="contained" color="primary">
            Build Mass
          </Button>
          <Button variant="contained" color="primary">
            Lose Weight
          </Button>
          <Button variant="contained" color="primary">
            Tone Up
          </Button>
          <Button variant="contained" color="primary">
            Increase Endurance
          </Button>
        </div>
    </div>
  )
};

export default Step7;