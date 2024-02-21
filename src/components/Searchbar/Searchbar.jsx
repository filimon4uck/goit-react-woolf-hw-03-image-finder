import { Component } from 'react';
import style from './Seachbar.module.css';
class Searchbar extends Component {
  state = { query: '' };
  handleOnChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    if (!this.state.query.trim()) {
      return;
    }
    this.props.submit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <header className={style.searchbar}>
        <form onSubmit={this.handleSubmit} className={style.searchForm}>
          <button type="submit" className={style.searchForm_button}>
            <span className={style.searchForm_button_label}>Search</span>
          </button>

          <input
            name="query"
            className={style.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleOnChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
