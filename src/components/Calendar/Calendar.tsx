import { useState } from "react";
 
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// @ts-ignore
import DayCard from "../DayCard/DayCard.tsx";
// @ts-ignore
import Todo from "../Todo/Todo.tsx";

function getCurrentMonth(): number {
    return new Date().getMonth() + 1;
}

function getDaysInMonth(month: number, year: number): number {
    let days = 0;

    switch (month) {
        case 1: days = 31; break;
        case 2: days = 28; break;
        case 3: days = 31; break;
        case 4: days = 30; break;
        case 5: days = 31; break;
        case 6: days = 30; break;
        case 7: days = 31; break;
        case 8: days = 31; break;
        case 9: days = 30; break;
        case 10: days = 31; break;
        case 11: days = 30; break;
        case 12: days = 31; break;
    }

    if (month === 2 && year % 4 === 0 && year % 100 !== 0) {
        days = 29;
    }

    return days;
}

function getBlankCards(year: number, month: number): number {
    const weekDay = new Date(year, month - 1, 1).getDay();
    let blankCardsNo = weekDay - 1;
    if (blankCardsNo === -1) {
        blankCardsNo = 6;
    }
    console.log(blankCardsNo);
    return blankCardsNo;
}

// TODO: Maybe add arrows to change between months
// TODO: Also maybe add some form of syncing between devices?

function Calendar() {

    const [selectedDay, selectDay] = useState(0);

    const weekDays = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

    const dateObj = new Date();
    const month = getCurrentMonth();
    const howManyDays = getDaysInMonth(month, dateObj.getFullYear());
    const howManyBlanks = getBlankCards(dateObj.getFullYear(), month);

    return (
        <>
            <Grid item xs={7} textAlign="center">
                <Typography variant="h3">
                    {dateObj.getFullYear()}-{month}
                </Typography>
            </Grid>
            {weekDays.map(day => 
                <Grid item xs={1} key={day}>
                    <Card variant="outlined">
                        <Typography variant="h5" textAlign="center">
                            {day}
                        </Typography>
                    </Card>
                </Grid>
            )}
            {Array.from(Array(howManyBlanks).keys()).map((blank, index) => 
                <Grid item xs={1} key={`blank ${index}`}>
                    <Card variant="outlined">
                        <Typography variant="h5" textAlign="center">
                            &nbsp;
                        </Typography>
                    </Card>
                </Grid>
            )}
            {Array.from({length: howManyDays}, (_, i) => i + 1).map(day =>
                <DayCard day={day} selectDay={selectDay}
                    isSelected={day === selectedDay}/>
            )}
            <Todo day={selectedDay} />
        </>
    );
};

export default Calendar;