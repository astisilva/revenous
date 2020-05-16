import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption}); // ???
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleSearch(event) {
    const {term, location, sortBy} = this.state;
    const {searchYelp} = this.props;
    if (!term || !location) {
      // && gäller för båda måste vara tomma, || gäller var och en, den skickar om en av input är tom!
      return alert('Lägg in ett värde');
    }

    searchYelp(term, location, sortBy);

    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      const sortByOptionValue = this.sortByOptions[sortByOption]; // best_match
      return (
        <li
          // TODO: jag utmanar dig att ta reda på hur du döljer punkerna i <li>
          // du kan använda style={{}} prop för att skriva CSS i JS.
          className={this.getSortByClass(sortByOptionValue)}
          style={{listStyleType: 'none'}}
          key={sortByOptionValue}
          // TODO: testa att skriva denna utan .bind - hur hade du gjort då?
          // onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
          onClick={() => this.handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
