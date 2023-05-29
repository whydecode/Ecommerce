import { Component } from "react";
import "./Book.css"
class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: this.props.bookData,
      onItemAdd: this.props.onItemAdd
    };
  }
  render() {
    return (
      <div className="book-card">
        <img
          src={require(`${this.state.bookData.imageURL}`)}
          alt={this.state.bookData.title}
        />
        <div className="bookInfoDiv">
          <div className="bookInfo">
            <span>{this.state.bookData.title}</span>
            <span>&#x20b9;{this.state.bookData.price}</span>
          </div>
          <p className="author">{this.state.bookData.author}</p>
          <button className="addButton" onClick={this.state.onItemAdd}>Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default Book;
