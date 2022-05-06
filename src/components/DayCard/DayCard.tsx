import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

DayCard.propTypes = {
    day: PropTypes.number.isRequired,
    selectDay: PropTypes.func.isRequired,
    isSelected: PropTypes.bool
}

// TODO: Make different color if there are some events planned for that day

function DayCard({day, selectDay, isSelected}) {
    return (
        <Grid item xs={1} key={`day ${day}`}>
        <Card variant="outlined">
            <Button variant="contained" size="large"
            sx={{width: '100%'}} color={isSelected ? "success" : "primary"}
            onClick={() => selectDay(day)}>
                {day}
            </Button>
        </Card>
    </Grid>
    );
}

export default DayCard;