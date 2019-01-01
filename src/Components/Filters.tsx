import Button from "@material-ui/core/Button";
import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { svLocale } from "src/Localization/sv-SV";

interface IFilterProps {
    updatePage: any;
    loading: boolean;
}

class Filters extends React.Component<IFilterProps> {

    public render() {
        const {
            updatePage,
            loading,
            children
        } = this.props;
        return (
            <Row className="container">
                <Col xs={12} className="command-bar shadow-align-tweak">
                    { children }
                    <Row>
                        <Col xs={12}>
                            <Button mini={true} className="search-button" size="medium" variant="contained" color="secondary" onClick={updatePage}>{loading ? svLocale.laddar : svLocale.sok}</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Filters;