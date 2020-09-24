import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import {
  FacebookShareButton,
  FacebookShareCount,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";

function Share(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  // let url = "window.location.href";
  return (
    <div>
      <button
        style={{
          border: "none",
          backgroundColor: "inherit",
          width: "auto",
          alignItems: "center",
          margin: "0px 10px",
        }}
        variant="outline-primary"
        onClick={handleShow}
      >
        <i class="fas fa-share-alt"></i>
      </button>

      <Modal centered={true} size="sm" show={show} onHide={handleClose}>
        <Modal.Header style={{display:"flex",flexDirection:"column"}} >
          <h3>Share to ...</h3>
          <span style={{backgroundColor:"ButtonHighlight"}} >{props.value}</span>  
        </Modal.Header>
        <Modal.Body>
          <div
            className="share-icons"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <FacebookMessengerShareButton url="window.location.href">
              <FacebookMessengerIcon
                size={32}
                round={true}
                logoFillColor="white"
              />
            </FacebookMessengerShareButton>

            <FacebookShareButton url="window.location.href">
              <FacebookIcon size={42} round={true} logoFillColor="black" />
              <FacebookShareCount url={"window.location.href"}>
                {(shareCount) => (
                  <span className="myShareCountWrapper">{shareCount}</span>
                )}
              </FacebookShareCount>
            </FacebookShareButton>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Share;
