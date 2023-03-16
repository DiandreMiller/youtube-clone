import "./FilterSearch.css";

const FilterSearch = ({
  searchBy,
  setSearchBy,
  maxResults,
  setMaxResults,
  safeSearch,
  setSafeSearch,
}) => {
  const handleFilterChange = (event) => {
    setSearchBy(event.target.value);
  };

  const handleMaxResultsChange = (event) => {
    setMaxResults(event.target.value);
  };

  const handleSafeSearchChange = (event) => {
    setSafeSearch(event.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="max-results-input">Max number of results:</label>
        <input
          onChange={handleMaxResultsChange}
          type="number"
          id="max-results-input"
          name="max-results-input"
          defaultValue={maxResults}
        />

        <label htmlFor="order-select">Order of videos:</label>
        <select
          onChange={handleFilterChange}
          id="order-select"
          name="order-select"
          defaultValue={searchBy}
        >
          <option value="date">Date</option>
          <option value="rating">Rating</option>
          <option value="relevance" selected>
            Relevance
          </option>
          <option value="title">Title</option>
        </select>

        <label htmlFor="safe-search-select">Safe search:</label>
        <select
          onChange={handleSafeSearchChange}
          id="safe-search-select"
          name="safe-search-select"
          defaultValue={safeSearch}
        >
          <option value="moderate">Moderate</option>
          <option value="none">None</option>
          <option value="strict" selected>
            Strict
          </option>
        </select>
      </form>
    </div>
  );
};

export default FilterSearch;
