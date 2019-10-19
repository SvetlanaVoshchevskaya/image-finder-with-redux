import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './redux/imageOparation';
import Gallery from './components/Gallery/Gallery';
import SearchForm from './components/SearchForm/SearchForm';
import { urlRequest } from './utils/request';
import styles from './App.module.css';
import { addQuery, addPage } from './redux/action';

class App extends Component {
  componentDidMount() {
    const { value, page } = this.props;
    this.props.fetchData(urlRequest(value, page));
  }

  componentDidUpdate(prevProps) {
    const { value, page } = this.props;
    if (prevProps.value !== value || prevProps.page !== page) {
      this.props.fetchData(urlRequest(value, page));
    }
  }

  handleClick = () => {
    const { page, value } = this.props;
    this.props.addPage(page + 1, () => {
      this.props.fetchData(urlRequest(value, page));
    });
  };

  render() {
    const { galleryArray, isLoading } = this.props;
    return (
      <div className={styles.app}>
        <SearchForm />
        {isLoading && <h1>Loading...</h1>}
        {galleryArray.length > 0 && <Gallery pictures={galleryArray} />}
        <button
          type="button"
          className={styles.button}
          onClick={this.handleClick}
        >
          Load more
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  galleryArray: state.galleryArray,
  page: Number(state.page),
  value: state.value,
  isLoading: state.isLoading,
  isError: state.isError
});

const mapDispatchToProps = dispatch => ({
  addPage: page => dispatch(addPage(page)),
  fetchData: url => dispatch(fetchData(url)),
  addQuery: query => dispatch(addQuery(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
