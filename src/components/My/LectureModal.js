import {
  Alert,
  Badge,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  UncontrolledDropdown
} from "reactstrap";
import {useEffect, useState} from "react";
import {Viewer} from "@toast-ui/react-editor";
import {doneTakingClass, getAllClass} from "../../actions/ClassActions";

const LectureModal = ({lectureTitle, lectureToggle, lectureModal, lectureId}) => {
  const [classes, setClasses] = useState(null);
  const [classShowData, setClassShowData] = useState(null);

  useEffect(() => {
    if (!classes) {
      const fetchData = async () => getAllClass(lectureId);
      fetchData().then(response => {
        setClasses(response.data);
        setClassShowData(classes.filter((data) => data.classId === classId));
      });
    }
  }, []);

  const [classId, setClassId] = useState(0);
  const onClassId = (classId) => {
    setClassId(classId);
    setClassShowData(classes.filter((data) => data.classId === classId));
  }

  const doneClass = (takingClassId) => {
    const fetchData = async () => doneTakingClass(takingClassId);
    fetchData().then(response => alert(response.message))
  }

  return <Modal
    className="modal-dialog-centered class-modal mt-7"
    isOpen={lectureToggle}
    toggle={lectureModal}
  >
    <div className="modal-header">
      <h5 className="modal-title" id="classModal">
        {lectureTitle}
      </h5>
      <div>
        <UncontrolledDropdown group className="mt-2">
          <DropdownToggle caret color="primary">
            강의 목록
          </DropdownToggle>
          <DropdownMenu className="t-5">
            {classes && classes.map((data) => {
              return <DropdownItem key={data.classId} href="#" onClick={() => onClassId(data.classId)}>
                <div className="all-center">
                  <span>{data.title}</span>
                </div>
              </DropdownItem>
            })}
          </DropdownMenu>
        </UncontrolledDropdown>
        <button
          aria-label="Close"
          className="close"
          data-dismiss="modal"
          type="button"
          onClick={lectureModal}
        >
          <span aria-hidden={true}>×</span>
        </button>
      </div>
    </div>
    <div className="modal-body custom-font px-7">
      {classShowData && classShowData.map((data) => {

        return <div key={data.classId}>
          <div className="all-center">
            <h5 className="mt-2">{data.title}</h5>
            <Badge color={data.isDone ? 'success' : 'danger'} className="h-42" pill>
              <h5 className="text-white">{data.isDone ? 'DONE' : 'READY'}</h5>
            </Badge>
          </div>
          <hr className="mt-2"/>
          <Viewer initialValue={data.content}/>
          {!data.isDone &&
            <Button
              className="mt-3"
              color="success"
              outline
              onClick={() => {doneClass(data.takingClassId);}}
            >
              수강 완료 하기
            </Button>
          }
        </div>
      })}
      { !classShowData && <Alert color="secondary" className="text-default">수업을 선택해주세요.</Alert> }
    </div>
    <div className="modal-footer">
      <Button
        color="default"
        data-dismiss="modal"
        type="button"
        onClick={lectureModal}
      >
        Close
      </Button>
    </div>
  </Modal>
}

export default LectureModal;