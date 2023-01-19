import _ from "lodash";

const Pagination = (props) => {
    const { totalSize, pageSize, currentPage, onPageChange } = props;

    const pageCount = Math.ceil(totalSize / pageSize);
    if (pageCount === 1) return;
    const pages = _.range(1, pageCount + 1);

    return (
        <nav>
            <ul className="pagination pagination-sm mt-2">
                {pages.map((page) => (
                    <li key={page} className="page-item">
                        <button
                            onClick={() => onPageChange(page)}
                            className={`page-link ${currentPage === page ? "active" : ""}`}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
