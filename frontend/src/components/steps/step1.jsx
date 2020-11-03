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
  const classes = useStyles();

  const buttonHandler = (e) => {
    console.log(formData);
  }

  return (
    <div>
      <h3>{currentQuestion}</h3>
        <div className={classes.root}>
          <Button variant="contained" color="primary" value="1" key="1" onClick={buttonHandler}>
            Male
          </Button>
          <Button variant="contained" color="primary" value="2" key="2" onClick={buttonHandler}>
            Female
          </Button>
          <Button variant="contained" color="primary" value="3" key="3" onClick={buttonHandler}>
            Non-binary
          </Button>
      </div>
    </div>
  )
};

export default Step1;