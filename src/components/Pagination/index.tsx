import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'


type PaginationProps = {
  onChangePage: (value: number)=>void;
  value: number;
}

 const Pagination: React.FC<PaginationProps> = ({ onChangePage, value }) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={e => onChangePage(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={value - 1}
      />
    </div>
  )
}

export default Pagination;
