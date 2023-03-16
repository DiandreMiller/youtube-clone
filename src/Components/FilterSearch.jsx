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
      <form className="filterform">
        <label htmlFor="max-results-input" className="filterform__label">
          Max number of results:
        </label>
        <input
          onChange={handleMaxResultsChange}
          type="number"
          id="max-results-input"
          name="max-results-input"
          defaultValue={maxResults}
          className="filterform__input"
        />
        <br />
        <label htmlFor="order-select" className="filterform__label">
          Order of videos:
        </label>
        <select
          onChange={handleFilterChange}
          id="order-select"
          name="order-select"
          defaultValue={searchBy}
          className="filterform__select"
        >
          <option value="date">Date</option>
          <option value="rating">Rating</option>
          <option value="relevance" selected>
            Relevance
          </option>
          <option value="title">Title</option>
        </select>
        <br />
        <label htmlFor="safe-search-select" className="filterform__label">
          Safe search:
        </label>
        <select
          onChange={handleSafeSearchChange}
          id="safe-search-select"
          name="safe-search-select"
          defaultValue={safeSearch}
          className="filterform__select"
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
