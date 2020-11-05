import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 750,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Results = ({supplements, preworkouts, postworkouts}) => {

  var supplementResult = _.sample(supplements);
  var preworkoutResult = _.sample(preworkouts);
  var postworkoutResult = _.sample(postworkouts);

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);

  var handleClose = () => {
    setOpen(false);
  };

  if (supplements.length > 0 && preworkouts.length > 0 && postworkouts.length > 0) {
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <div>
          <h3>Your Supplement Blend</h3>
          <p>Name: {supplementResult.Name}</p>
          <p>Serving: {supplementResult.Flavor}</p>
          <p>Description: {supplementResult.Description}</p>
          <p>Ingredients: {supplementResult.Ingredients}</p>
        </div>
        <div>
          <h3>Your Preworkout Blend</h3>
          <p>Name: {preworkoutResult.Name}</p>
          <p>Flavor: {preworkoutResult.Flavor}</p>
          <p>Description: {preworkoutResult.Description}</p>
          <p>Ingredients: {preworkoutResult.otherIngredients}</p>
        </div>
        <div>
          <h3>Your Postworkout Blend</h3>
          <p>Name: {postworkoutResult.Name}</p>
          <p>Flavor: {postworkoutResult.Flavor}</p>
          <p>Description: {postworkoutResult.Description}</p>
          <p>Ingredients: {postworkoutResult.otherIngredients}</p>
        </div>
      </div>
    )

    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
      )
  } else {
    return (
      <div>Loading...</div>
    )
  }
};

export default Results; 