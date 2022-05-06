import { useState } from "react";

import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

Todo.propTypes = {
    day: PropTypes.number
}

// TODO: Input validation
// TODO: Save event in localStorage
// TODO: Fix the layout and looks in general
// TODO: Add event removal
// TODO: Draw events sorted by time

function Todo({day}) {

    const [isAdderOpen, setAdderOpen] = useState(false);
    
    const [eventDesc, setEventDesc] = useState("");
    const [eventDescErr, setEventDescErr] = useState(false);
    const [eventDescErrMsg, setEventDescErrMsg] = useState("");
    
    const [eventHour, setEventHour] = useState(0);
    const [eventHourErr, setEventHourErr] = useState(false);
    const [eventHourErrMsg, setEventHourErrMsg] = useState("");
    
    const [eventMinute, setEventMinute] = useState(0);
    const [eventMinuteErr, setEventMinuteErr] = useState(false);
    const [eventMinuteErrMsg, setEventMinuteErrMsg] = useState("");

    const addEvent = () => {
        setAdderOpen(true);
    };

    const changeEventDesc = (event) => {
        setEventDesc(event.target.value);
    };

    const changeEventHour = (event) => {
        setEventHour(event.target.value);
    };

    const changeEventMinute = (event) => {
        setEventMinute(event.target.value);
    };

    return (
        <Grid item xs={7}>
            <Typography variant="h4">
                Events:
            </Typography>
            <Button variant="contained" color="success" onClick={addEvent}>
                Add event
            </Button>
            {isAdderOpen ? 
                <>
                    Opis wydarzenia:
                    <TextField variant="outlined" onChange={changeEventDesc} />
                    Godzina:
                    <TextField variant="outlined" onChange={changeEventHour} type="number"/>
                    Minuta:
                    <TextField variant="outlined" onChange={changeEventMinute} type="number"/>
                </>
            : null}
        </Grid>
    )
}

export default Todo;