import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import BudgetView from "./Pages/Budget/BudgetView";
import './App.css';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BudgetView/>
            </ThemeProvider>
        </div>
    );
}

export default App;
