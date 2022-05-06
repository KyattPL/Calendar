import Calendar from "./components/Calendar/Calendar.tsx";
import Grid from "@mui/material/Grid";

function App() {
    return (
        <Grid container spacing={2} columns={7}>
            <Calendar />
        </Grid>
    );
}

export default App;