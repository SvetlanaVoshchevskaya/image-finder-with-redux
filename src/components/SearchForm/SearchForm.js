import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuery } from '../../redux/action';
import styles from './SearchForm.module.css';

class SearchForm extends Component {
  state = {
    query: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addQuery(this.state.query);
    this.setState({ query: '' });
  };

  handleCange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    const { query } = this.state;
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={query}
          autoComplete="off"
          placeholder="Search images..."
          onChange={this.handleCange}
        />
      </form>
    );
  }
}
const MDTP = dispatch => ({ addQuery: query => dispatch(addQuery(query)) });
export default connect(
  null,
  MDTP
)(SearchForm);
