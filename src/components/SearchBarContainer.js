import React from "react";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { getSearchedMarkets } from "../actions/marketsActions";

class SearchBarContainer extends React.Component {
  state = { search: "" };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.getSearchedMarkets(this.state.search);
  };

  render() {
    return (
      <SearchBar
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        searchRequest={this.state.search}
      />
    );
  }
}

const mapDispatchToProps = { getSearchedMarkets };

export default connect(null, mapDispatchToProps)(SearchBarContainer);