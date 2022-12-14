import {Button, Modal} from "reactstrap";
import {useEffect, useState} from "react";
import {Viewer} from "@toast-ui/react-editor";
import {getNotice} from "../../actions/ClassActions";

const NoticeModal = ({toggleState, toggleModal, noticeId}) => {
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    if (!notice) {
      const fetchData = async () => getNotice(noticeId);
      fetchData().then(response => {
        console.log(response)
        setNotice(response.data)
      });
    }
  }, []);

  return <Modal
    className="modal-dialog-centered"
    isOpen={toggleState}
    toggle={toggleModal}
  >
    <div className="modal-header">
      {notice &&
        <h5 className="modal-title" id="exampleModalLabel">
          {notice.title}
        </h5>
      }
      <button
        aria-label="Close"
        className="close"
        data-dismiss="modal"
        type="button"
        onClick={toggleModal}
      >
        <span aria-hidden={true}>×</span>
      </button>
    </div>
    {notice &&
      <div className="modal-body custom-font">
        <Viewer initialValue={notice.content}/>
        <small>{notice.createdDate}</small>
      </div>
    }
    <div className="modal-footer">
      <Button
        color="primary"
        data-dismiss="modal"
        type="button"
        onClick={toggleModal}
      >
        Close
      </Button>
    </div>
  </Modal>
}

export default NoticeModal;