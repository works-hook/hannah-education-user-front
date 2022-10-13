import Banner from "../components/Main/banner/Banner.js";
import Subject from "../components/Main/subject/Subject.js";
import LectureCards, {CardType} from "../components/Main/lecture/LectureCards.js";
import TeacherCards from "../components/Main/teacher/TeacherCards";

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
