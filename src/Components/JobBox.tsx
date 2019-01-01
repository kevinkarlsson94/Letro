import * as React from "react";
import { StatelessComponent } from "react";
import { Col, Button } from "react-bootstrap";
import { BASE_URL } from 'src/Constants';

interface IJobBoxProps {
    heading: string;
    category: string;
    employmentType: string;
    image: any;
    onClick: () => any;
}

export const JobBox: StatelessComponent<IJobBoxProps & any> = ({
    heading,
    category,
    employmentType,
    image,
    onClick
}) => (

    <Col xs={12} className="job">
        <div className="logo">
            <img src={`${BASE_URL}/${image}`} />
        </div>
        <div className="info">
            <h1>{heading}</h1>
            <p>{category}</p>
            <p>{employmentType}</p>
            <Button onClick={onClick}>INFO</Button>
        </div>
        <hr/>
    </Col>

);

export default JobBox;
