import {Button, Modal} from "reactstrap";

const NoticeModal = ({toggleState, toggleModal, noticeId}) => {
  // api 통신 후 데이터 받아서 내용 뿌려주기
  // const [id, setId] = useState(noticeId);
  const noticeData = {
    title: "2022/10/30 휴강 공지",
    content: "강사님의 개인적인 사정으로 2022년 10월 30일 강의는 휴강 하겠습니다. 학생들의 많은 양해 부탁드립니다. 감사합니다.",
    regDate: "2022-10-27"
  }

  return <Modal
    className="modal-dialog-centered"
    isOpen={toggleState}
    toggle={toggleModal}
  >
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">
        {noticeData.title}
      </h5>
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
    <div className="modal-body custom-font">
      {noticeData.content}<br/>
      <small>{noticeData.regDate}</small>
    </div>
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