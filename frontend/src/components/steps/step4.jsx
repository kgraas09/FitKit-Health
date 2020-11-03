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

const Step4 = ({formData, updateForm, questions}) => {
  const currentQuestion = questions[3];
  // What time of day do you usually exercise?
  const classes = useStyles();
  
  return (
    <div>
      <h3>{currentQuestion}</h3>
        <div className={classes.root}>
          <Button variant="contained" color="primary">
            Morning
          </Button>
          <Button variant="contained" color="primary">
            Mid-Day
          </Button>
          <Button variant="contained" color="primary">
            Evening
          </Button>
      </div>
  </div>
  )
};

export default Step4;