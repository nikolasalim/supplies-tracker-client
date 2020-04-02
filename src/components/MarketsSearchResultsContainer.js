import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SearchBarMarketsContainer from "./SearchBarMarketsContainer";
import MarketsSearchResultsList from "./MarketsSearchResultsList";
import AddMarketlist from "./AddMarketList";

class MarketsSearchResultsContainer extends React.Component {
  state = { addMarketsRedirect: false };

  renderAddMarketRedirect = () => {
    if (this.state.addMarketsRedirect) {
      console.log("state is:", this.state);
      return <Redirect to="/market" />;
    }
  };

  render() {
    if (this.props.markets.searched.length === 0) {
      return (
        <div>
          {this.renderAddMarketRedirect()}
          <SearchBarMarketsContainer />
          Is this the market you're looking for?
          <AddMarketlist marketsFetched={this.props.markets.fetched} />
        </div>
      );
    }

    return (
      <div>
        {this.renderAddMarketRedirect()}
        <SearchBarMarketsContainer />
        <MarketsSearchResultsList markets={this.props.markets.searched} />
        Not the market you're looking for?
        <button
          onClick={() =>
            this.setState({
              addMarketsRedirect: true
            })
          }
        >
          Find it
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { markets: state.markets };
}

export default connect(mapStateToProps)(MarketsSearchResultsContainer);