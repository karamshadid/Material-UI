import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import img from "./img/img-2.jpg";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  card: {
    height: "100%",
    width: "170%",
    borderRadius: "10%"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  }
}));

const Movie = ({ name, release, rating }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root} style={{ background: "#d5eaeb" }}>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={1} item xs={6}>
            <Grid>
              <Card className={classes.card} item xs={6}>
                <CardMedia
                  className={classes.cardMedia}
                  image={img}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Movie:{name}
                  </Typography>
                  <Typography>Movie realease date: {release}</Typography>
                  <Typography>Movie rating: {rating}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Movie;
