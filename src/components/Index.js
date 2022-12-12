import Banner from "./Main/banner/Banner";
import Subject from "./Main/subject/Subject";
import LectureCards, {CardType} from "./Main/lecture/LectureCards";
import TeacherCards from "./Main/teacher/TeacherCards";

const Index = (props) => {
  const {customRef} = props;

  return (
    <>
      <main ref={customRef}>
        <Banner/>
        <Subject/>
        <LectureCards title={'가장 많이 수강한 강의들🌟'} type={CardType.COMPLETED}/>
        <TeacherCards title={'오늘의 강사님🎖'} type={CardType.COMPLETED} />
        <LectureCards title={'인기가 가장 많은 강의들💕'} type={CardType.LIKE}/>
      </main>
    </>
  );
}

export default Index;
