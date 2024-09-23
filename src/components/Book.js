import React, { Component } from "react";

//eslint-disable-next-line

// n
// import { array } from "prop-types";
// import BookList from "./BookList";

class Book extends Component {
  render() {
    let anchorLink = "collapseTwo";

    return (
      <div className="container accordion_style">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <div
              className="accordion md-accordion"
              id="accordionEx1"
              role="tablist"
              aria-multiselectable="true"
            >
              {this.props.Books.map((book, id) => {
                return (
                  <div key={id} className="card card_style">
                    <div className="card-header" role="tab" id="headingTwo1">
                      <a
                        className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordionEx1"
                        href={`#${anchorLink}${id}`}
                        aria-expanded="false"
                        aria-controls={`#${anchorLink}${id}`}
                      >
                        <h5 className="mb-0 title_style">
                          {book.volumeInfo.title}
                          <i className="fas fa-angle-down rotate-icon" />
                        </h5>
                      </a>
                    </div>

                    <div
                      id={`${anchorLink}${id}`}
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo1"
                      data-parent="#accordionEx1"
                    >
                      <div className="card-body">
                        <div className="row row_info">
                          <div className="col-sm-8">
                            <p>
                              <b>Author(s):</b> {book.volumeInfo.authors}
                            </p>
                            <p>
                              <b>Rating:</b> {book.volumeInfo.ratingsCount}
                            </p>
                            <p>
                              <b>Publisher:</b> {book.volumeInfo.publisher}
                            </p>
                            <p>
                              <b>No of pages:</b> {book.volumeInfo.pageCount}
                            </p>
                            <a
                              className="btn btn-default btn_custom"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={book.saleInfo.buyLink}
                            >
                              Buy this Book
                            </a>
                          </div>
                          <div className="col-sm-4">
                            <img
                              // onError={this.addDefaultSrc}
                              src={
                                book.volumeInfo.imageLinks !== undefined
                                  ? book.volumeInfo.imageLinks.thumbnail
                                  : ""
                              }
                              alt=""
                            />
                          </div>
                        </div>

                        <div className="description_book">
                          <p>
                            {" "}
                            <b>Description</b>
                            <br />
                            {book.searchInfo !== undefined
                              ? book.searchInfo.textSnippet
                              : "No description were provided."}
                          </p>
                          {/* <p>{book.volumeInfo.description}</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  // Book.propTypes = {
  //   Book: propTypes.object.isRequired
  // }
}
// App.propTypes = {
//   books: PropTypes.object
// };
export default Book;
