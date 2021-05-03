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

import { forwardRef, useState } from "react";
import { styles } from "../../../assets/styles/Styles";
import "../CreateAta/Components.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Topics = (props) => {
  const { isOpen, handleClick, infoTopics } = props;

  const formatDatetime = (datetime) => {
    let [date, time] = datetime.split("T");
    date = date.split("-").reverse().join("/");
    const formated = date + " " + time;
    return formated;
  };

  return (
    <Container>
      <Grid item xs={12}>
        <Dialog open={isOpen} TransitionComponent={Transition} keepMounted onClose={handleClick}>
          <DialogTitle>Assuntos</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {infoTopics.length && (
                <Grid container justify="space-around">
                  {infoTopics.map((topic, index) => {
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
                                    {topic.id} - {topic.topic}
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
                                  {topic.inCharge}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  style={{
                                    padding: 10,
                                    fontSize: "1.2rem",
                                  }}
                                >
                                  {formatDatetime(topic.datetime)}
                                </Typography>
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    );
                  })}
                </Grid>
              )}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(Topics);
