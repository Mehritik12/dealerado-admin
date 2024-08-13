import { FC } from "react";
import ReactPaginate from "react-paginate";
import "./style.scss";

const Pagination : FC<any>= ({totalRecord,handleClick}) => {
  const limit = 10
  const handlePaginationClick = (e: any) => {
    const selectedPage = ++e.selected;
    handleClick(selectedPage);
  };

  return (
    <div className="mt-5 justify-content-end d-flex">
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        breakLabel={"..."}
        pageCount={Math.ceil(totalRecord / limit)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePaginationClick}
        containerClassName={"pagination justify-content-end flex-wrap"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export { Pagination };
