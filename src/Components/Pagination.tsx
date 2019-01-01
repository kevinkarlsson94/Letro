import Button from "@material-ui/core/Button";
import * as React from "react";
import { StatelessComponent } from "react";

interface IPaginationProps {
    pagerNext: () => any; // kan typas till void
    pagerPrevious: () => any; // kan typas till void
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
            <Button size="small" variant="contained" color="secondary" onClick={pagerPrevious}>←</Button>
            <span className="page-count">
                {loading ? <img src={ require("../Images/pager-loader.gif") } /> : <span>{page}</span> }
            </span>
            <Button className={page === 10 ? "disabled" : ""} size="small" variant="contained" color="secondary" onClick={pagerNext}>→</Button>
        </div>
    );
}

export default Pagination;
