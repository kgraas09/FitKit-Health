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

const Step8 = ({formData, updateForm, questions}) => {
  const currentQuestion = questions[7];
  // Do you prefer plant based?
  const classes = useStyles();

  return (
    <div>
      <h3>{currentQuestion}</h3>
        <div className={classes.root}>
          <Button variant="contained" color="primary">
            Yes
          </Button>
          <Button variant="contained" color="primary">
            No
          </Button>
          <Button variant="contained" color="primary">
            No Preference
          </Button>
        </div>
    </div>
  )
};

export default Step8;