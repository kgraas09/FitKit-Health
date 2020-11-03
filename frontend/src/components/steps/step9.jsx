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

const Step9 = ({formData, updateForm, questions}) => {
  const currentQuestion = questions[8];
  // How many times per week do you exercise?
  const classes = useStyles();
  
  return (
    <div>
      <h3>{currentQuestion}</h3>
        <div className={classes.root}>
          <Button variant="contained" color="primary">
            1 - 2
          </Button>
          <Button variant="contained" color="primary">
            2 - 4
          </Button>
          <Button variant="contained" color="primary">
            4 +
          </Button>
        </div>
    </div>
  )
};

export default Step9;