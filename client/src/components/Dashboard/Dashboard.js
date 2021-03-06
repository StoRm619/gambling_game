import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
/* import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText"; */
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { CTX } from "../Store/Store.js";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2),
    color: "white"
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
  chatWindow: {
    width: "70%",
    marginBottom: "210px"
  },
  chatBox: {
    width: "85%",
    //marginBottom: "450px"
  },
  button: {
    width: "15%"
  },
  chatUser: {
    marginRight: "5px"
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  //CTX store
  const { allChats, sendChatAction, user } = React.useContext(CTX);
  const topics = Object.keys(allChats);
  // local state
  const [activeTopic /* changeActiveTopic */] = React.useState(topics[0]);
  const [textValue, changeTextValue] = React.useState("");

  return (
    <div>
      <Paper id="paperStyle" className={classes.root}>
        {/* <Typography variant="h4" component="h3">
          Chat app.
        </Typography>
        <Typography component="h5">{activeTopic}</Typography>  */}
        <div className={classes.flex}>
          {/* <div className={classes.topicsWindow}>
            <List>
              {topics.map(topic => (
                <ListItem
                  onClick={e => changeActiveTopic(e.target.innerText)}
                  key={topic}
                  button
                >
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div> */}
          <div className={classes.chatWindow}>
            {allChats[activeTopic].map((chat, i) => (
              <div className={classes.flex} key={i}>
                <Chip label={chat.from} className={classes.chatUser} />
                <Typography className="chatText" variant="body1" gutterBottom>
                  {chat.msg}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.flex}>
          <TextField
            id="chat"
            className={classes.chatBox}
            label="Send a chat"
            value={textValue}
            onChange={e => changeTextValue(e.target.value)}
            onKeyPress={e => {
              if (e.key === "Enter") {
                sendChatAction({
                  from: user,
                  msg: textValue,
                  topic: activeTopic
                });
                changeTextValue("");
              }
              console.log("enter is pressed");
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            id="chatSubmit"
            onClick={() => {
              sendChatAction({
                from: user,
                msg: textValue,
                topic: activeTopic
              });
              changeTextValue("");
            }}
          >
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
}
