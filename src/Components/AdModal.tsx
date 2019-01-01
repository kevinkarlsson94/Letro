import * as React from "react";
import { Button, Modal } from "react-bootstrap";
import { svLocale } from "src/Localization/sv-SV";

interface IAdModal {
    show: boolean;
    handleClose: any;
    data?: any;
}

export const AdModal: React.StatelessComponent<IAdModal> = ({
    show = false,
    handleClose,
    data = {},
    children
}) => (
    <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton={true}>
            <Modal.Title>{data && data.ad && data.ad.employer}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {data && data.ad && <div dangerouslySetInnerHTML={{ __html: data.ad.description }} />}
            <p>{data && data.ad && data.ad.employerUrl}</p>
            <h2>Plats</h2>
            <p>{data && data.ad && data.ad.location}</p>
            <a href={data && data.ad && data.ad.linkUrl}>Ansök här</a>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>{svLocale.stang}</Button>
          </Modal.Footer>
        </Modal>
);

export default AdModal;
