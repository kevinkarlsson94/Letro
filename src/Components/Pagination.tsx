import * as React from "react";
import { StatelessComponent } from "react";
import { Button } from "react-bootstrap";

interface IPaginationProps {
    pagerNext: () => void;
    pagerPrevious: () => void;
    page: number;
    loading: boolean;
}

const Pagination: StatelessComponent<IPaginationProps> = ({
    pagerNext,
    pagerPrevious,
    page,
    loading
}) => {
    return (
        <div className="pagination container shadow-align-tweak">
            <Button bsStyle="warning" onClick={pagerPrevious}>←</Button>
            <div className="page-count">
                {loading ? <img src={ require("../Images/pager-loader.gif") } /> : <span>{page}</span> }
            </div>
            <Button className={page === 10 ? "disabled" : ""} bsStyle="warning" onClick={pagerNext}>→</Button>
        </div>
    );
}

export default Pagination;
