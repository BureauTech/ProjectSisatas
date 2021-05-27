import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Slide,
  Typography,
  withStyles,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import { forwardRef } from "react";
import { styles } from "../../../assets/styles/Styles";
import "../CreateAta/Components.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Topics = (props) => {
  const { isOpen, handleClick, infoTopics } = props;

  // const formatDate = (date) => {
  //   const formated = date.split("-").reverse().join("/");
  //   return formated;
  // };

  const formatDate = (date) => {
    const data = new Date(date).toLocaleDateString();
    return data;
  };

  return (
    <Container>
      <Grid item xs={12}>
        <Dialog open={isOpen} TransitionComponent={Transition} keepMounted onClose={handleClick}>
          <DialogTitle>Assuntos</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Grid container justify="space-around">
                {infoTopics &&
                  infoTopics.map((topic, index) => {
                    return (
                      <Grid item xs={12} key={index + 1} style={{ padding: "10px" }}>
                        <Accordion style={{ width: "100%" }} className="light">
                          <AccordionSummary expandIcon={<ExpandMore />}>
                            <Grid container alignItems="center" justify="space-between">
                              <Grid item xs>
                                <Typography
                                  style={{
                                    color: "black",
                                    fontSize: "1.2rem",
                                  }}
                                >
                                  <strong>
                                    {index + 1} - {topic.assAssunto}
                                  </strong>
                                </Typography>
                              </Grid>
                            </Grid>
                          </AccordionSummary>
                          <AccordionDetails key={index + 1} className="no-margin">
                            <Grid container justify="center">
                              <Grid item>
                                <Typography
                                  style={{
                                    padding: 10,
                                    fontSize: "1.2rem",
                                  }}
                                >
                                  {topic.responsavelAssuntos[0].usuNome}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  style={{
                                    padding: 10,
                                    fontSize: "1.2rem",
                                  }}
                                >
                                  {formatDate(topic.assPrazo)}
                                </Typography>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    );
                  })}
              </Grid>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(Topics);
