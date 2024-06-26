
import css from "./SearchBox.module.css"
const SearchBox = ({ value, handleChange }) => {
    return (
        <div className={css.searchBox}>
            <p>Find contacts by name</p>
            <input type="text" value={value} onChange={handleChange} className={css.inputSearch } />
        </div>
    )
    

}
export default SearchBox