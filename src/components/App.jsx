import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import getImages from 'service/pictures-api';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import style from './App.module.css';
const INIT_STATE = {
  images: [],
  query: '',
  page: 1,
  largeImageURL: '',
  error: '',
  isLoading: false,
  showModal: false,
  loadMore: false,
  isEmpty: false,
};

class App extends Component {
  state = INIT_STATE;

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.fetchImages();
    }
  }

  handelSubmit = query => {
    if (query === this.state.query) {
      alert('Is the same word');
      return;
    }
    this.setState({
      query,
      images: [],
      page: 1,
      largeImageURL: '',
      error: '',
      isLoading: false,
      showModal: false,
      loadMore: false,
    });
  };

  fetchImages = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const data = await getImages(query, page);
      const { hits: newImages } = data;
      this.setState(prev => ({
        images: [...prev.images, ...newImages],
        loadMore: page < Math.ceil(data.totalHits / 12),
        isEmpty: newImages.length === 0 && prev.images.length === 0,
      }));
    } catch (err) {
      console.log(err);
      this.setState({ error: err });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handelImageClick = largeImageURL => {
    this.setState({ largeImageURL, showModal: true });
  };

  closeModalImage = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };
  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { images, largeImageURL, isLoading, showModal, loadMore, isEmpty } =
      this.state;
    return (
      <div className={style.app}>
        <Searchbar submit={this.handelSubmit} />
        {images.length > 0 && (
          <ImageGallery
            images={images}
            handelImageClick={this.handelImageClick}
          />
        )}
        {isEmpty && <h2>Sorry there are not images</h2>}
        {this.state.error && <h2>error</h2>}
        {loadMore && <Button onClick={this.handleLoadMore} />}
        {isLoading && <Loader />}
        {showModal && this.state.largeImageURL && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModalImage} />
        )}
      </div>
    );
  }
}

export default App;
