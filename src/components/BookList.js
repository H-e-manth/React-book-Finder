import React from "react";

const BookList = props => (
  // <h4>{props.bookItem.volumeInfo.title}</h4>

  <div
    className="accordion md-accordion"
    id="accordionEx1"
    role="tablist"
    aria-multiselectable="true"
  >
    <div className="card">
      <div className="card-header" role="tab" id="headingTwo1">
        <a
          className="collapsed"
          data-toggle="collapse"
          data-parent="#accordionEx1"
          href="#collapseTwo1"
          aria-expanded="false"
          aria-controls="collapseTwo1"
        >
          <h5 className="mb-0">
            {props.bookItem.volumeInfo.title}
            <i className="fas fa-angle-down rotate-icon" />
          </h5>
        </a>
      </div>

      <div
        // id={`#collapseTwo1.${+1}`}
        id="collapseTwo1"
        className="collapse"
        role="tabpanel"
        aria-labelledby="headingTwo1"
        data-parent="#accordionEx1"
      >
        <div className="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3
        </div>
      </div>
    </div>
  </div>
);
// <h1>{props.bookItem.volumeInfo.title}</h1>;
export default BookList;
