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

const Step1 = ({formData, updateForm, questions}) => {
  const currentQuestion = questions[0];
  // "I identify most as" 
  const formToUpdate = formData.step1;
  const classes = useStyles();

  return (
    <div>
      <h3>{currentQuestion}</h3>
        <div className={classes.root}>
          <Button variant="contained" color="primary" value="1">
            Male
          </Button>
          <Button variant="contained" color="primary" value="2">
            Female
          </Button>
          <Button variant="contained" color="primary" value="3">
            Non-binary
          </Button>
      </div>
    </div>
  )
};

export default Step1;