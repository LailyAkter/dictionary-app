import React from 'react'
import css from './Header.module.css';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const Header = ({ input, setInput }) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            },
            mode: 'dark',
        },
    });

    return (
        <div className={css.header}>
            <span className={css.title}>{input ? input : 'Word Finder'}</span>
            <div className={css.inputs}>
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className={css.search}
                        label="Search Your Word"
                        variant="standard"
                        value={input}
                        onChange={(e) => { setInput(e.target.value) }}
                    />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header