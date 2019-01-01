import * as React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { svLocale } from "src/Localization/sv-SV";

interface IFilterProps {
    updatePage: any;
    loading: boolean;
}


export const Filters: React.StatelessComponent<IFilterProps> = ({
    updatePage,
    loading,
    children
}) => (
    <Row className="container">
        <Col xs={12} className="command-bar shadow-align-tweak">
            { children }
            <Row>
                <Col xs={12}>
                    <Button className="search-button" bsStyle="warning" onClick={updatePage}>{loading ? svLocale.laddar : svLocale.sok}</Button>
                </Col>
            </Row>
        </Col>
    </Row>
);


export default Filters;