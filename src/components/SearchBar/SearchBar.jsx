import { useState } from "react";
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (inputValue.trim() === '') toast.error("Please enter text to get your gallery");
        onSearch(inputValue.trim());
        setInputValue('');
    }

    return (
        <header className={css.header}>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={inputValue}
                    onChange={handleChange}
                    className={css.input}
                />
                <button type="submit" className={css.searchBtn}>Search</button>
            </form>
        </header>
    )
}
