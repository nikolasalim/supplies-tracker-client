import React from "react";
import AddForm from "./AddForm";
import { connect } from "react-redux";
import { addProduct } from "../actions/productsActions";

class AddProductFormContainer extends React.Component {
  state = { name: "" };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addProduct(this.state, parseInt(this.props.marketId));
    this.setState({ name: "" });
  };

  render() {
    return (
      <AddForm
        placeholder={"Add product"}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

const mapDispatchToProps = { addProduct };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductFormContainer);
