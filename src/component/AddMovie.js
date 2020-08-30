import React from "react";
import { MovieContext } from "./Context";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
    
   
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
    


  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none",
    color: "white"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

const AddMovie = () => {
  // eslint-disable-next-line
  const [add, setadd] = React.useContext(MovieContext); //coming from Context
  //console.log(add);

  const [state, setstate] = React.useState({
    movie: " ",
    rating: " ",
    release: ""
  }); //create state
  //console.log(state);

  const [value, setValue] = React.useState("genre"); //for radio button

  const handleradio = event => {
    setValue(event.target.value);
  }; //

  const classes = useStyles();

  const handleChange = e => {
    setstate({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(state);
    // eslint-disable-next-line no-undef
    setadd(addnew => [...addnew, { ...state, rating: +rating.value }]);
    setValue(""); //after submiting radio button get empty
  };

  return (
    <div
      className="container"
      style={{ textAlign: "center", background: "#3f51b5" }}
    >
      <form onSubmit={handleSubmit} className="white">
        <Typography variant="h6" style={{ color: "white" }} noWrap>
          Add movie
        </Typography>

        <FormControl component="fieldset" className={classes.formControl} >
          <FormLabel component="legend" >
            Genre
          </FormLabel>
          <RadioGroup 
            aria-label="genre"
            name="genre"
            value={value}
            onChange={handleradio}
          >
            <FormControlLabel 
              value="comedy"
              control={<Radio />}
              label="Comedy"
            

            />
            <FormControlLabel
              value="actiom"
              control={<Radio />}
              label="Action"
            />
            <FormControlLabel value="Romantic" control={<Radio />} label="Romantic" />
          </RadioGroup>
        </FormControl>

        <TextField
          id="movie"
          label="Movie name"
          className={classes.textField}
          type="text"
          autoComplete="current-text"
          margin="normal"
          onChange={handleChange}
        />

        <TextField
          id="rating"
          label="Rating"
          
          className={classes.textField}
          type="number"
          autoComplete="current-number"
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          id="release"
          label="Release Date"
          className={classes.textField}
          type="number"
          autoComplete="current-number"
          margin="normal"
          onChange={handleChange}
        />

        <div className="input-field">
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            className={classes.button}
          >
            Add Movie
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
