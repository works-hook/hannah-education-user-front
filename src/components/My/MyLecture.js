import {
  Card,
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, Alert
} from "reactstrap";
import {useState} from "react";
import MyLectureCard from "./MyLectureCard";
import {Viewer} from "@toast-ui/react-editor";
import Writer from "../utils/Writer";

const lectureData = [
  {
    lectureId: 17,
    title: "따라하며 배우는 리액트 A-Z",
    img: "https://cdn.inflearn.com/public/courses/329170/cover/223c54c0-9220-4937-836d-70a36be3eb1c/329170-eng.png",
    classCount: 10,
    doneClassCount: 2,
    startDate: "2022-10-15",
    endDate: "2022-12-31",
    notices: [
      {
        noticeId: 13,
        title: "2022/12/25 보강 공지",
        regDate: "2022-11-02"
      },
      {
        noticeId: 123,
        title: "2022/10/30 휴강 공지",
        regDate: "2022-10-27"
      },
      {
        noticeId: 33,
        title: "안녕하세요 강사 Hannah 입니다",
        regDate: "2022-10-25"
      },
    ],
    tags: [
      {
        name: "React",
        color: "info",
      },
      {
        name: "Next.js",
        color: "info",
      },
      {
        name: "TypeScript",
        color: "primary",
      },
      {
        name: "TDD",
        color: "success",
      },
    ]
  },
  {
    lectureId: 1,
    title: "Django 프레임워크 제대로 배우기",
    img: "https://cdn.inflearn.com/public/courses/328671/cover/5ac45f32-1f51-4cdd-9f4a-5f7827ed0a15/328671-eng.png",
    classCount: 20,
    doneClassCount: 7,
    startDate: "2022-09-03",
    endDate: "2022-12-31",
    notices: [
      {
        noticeId: 13,
        title: "2022/12/25 보강 공지",
        regDate: "2022-11-02"
      },
      {
        noticeId: 123,
        title: "2022/10/30 휴강 공지",
        regDate: "2022-10-27"
      },
      {
        noticeId: 33,
        title: "안녕하세요 강사 Hannah 입니다",
        regDate: "2022-10-25"
      },
    ],
    tags: [
      {
        name: "Django",
        color: "success",
      },
      {
        name: "Python",
        color: "info",
      },
    ]
  },
];

const MyLecture = () => {
  const [state = {
    iconTabs: 1,
    plainTabs: 1
  }, setState] = useState();

  const toggleNavs = (e, state, index) => {
    setState({
      [state]: index
    });
  };

  // api 통신 후 데이터 받아서 내용 뿌려주기
  const [noticeId, setNoticeId] = useState(0);
  const noticeData = {
    title: "2022/10/30 휴강 공지",
    content: "강사님의 개인적인 사정으로 2022년 10월 30일 강의는 휴강 하겠습니다. 학생들의 많은 양해 부탁드립니다. 감사합니다.",
    regDate: "2022-10-27"
  }

  // api 통신 후 데이터 받아서 내용 뿌려주기
  const [lectureId, setLectureId] = useState(0);
  const classData = [
    {
      classId: 1,
      title: "java 자료형",
      classDate: "2022-01-03 13:00",
      classState: "DONE",
      classContent: "<p><strong>JVM</strong></p><p>JVM에 대해 알아보자</p><h1><span style=\"box-sizing: border-box;\" data-offset-key=\"722542b03643435da91595dc6ebbe23d:0\">JVM, JDK, JRE</span></h1><p><img src=\"https://3553248446-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M5HOStxvx-Jr0fqZhyW%2F-MG7lYH7h3eKB140HOuL%2F-MG7oGnFMcDEj0nvLhBK%2Fjdk-jvm.png?alt=media&amp;token=40631b1f-50b8-4ba4-8831-66c09c97d98e\" contenteditable=\"false\"><br></p><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"8bcb5c352c0c42159545dcd9634ac697:0\">JRE : 자바 실행 환경의 줄임말로 JVM에 자바 라이브러리와 기타 파일들이 결합된 자바를 실행하기 위한 프로그램</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"fd09f6f903904c5d99bab5d4b006b13d:0\">JDK : 자바 개발 키트의 줄임말로 JRE에 컴파일러, 디버거 등 개발도구를 포함하는 프로그램</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"3dfd7aea61c04ba5b97c30254f24165c:0\">JVM : 자바 가상 머신으로 애플리케이션을 클래스 로더를 통해 읽어 들여 API와 함께 실행</span></p></li></ul><h1><span style=\"box-sizing: border-box;\" data-offset-key=\"505821303e8d4aa7bd0a36a29097cd50:0\">JVM 구성</span></h1><p><img src=\"https://3553248446-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M5HOStxvx-Jr0fqZhyW%2F-MG6-n2RCnRrss4KBsSz%2F-MG7f7yiI__p7MZ5dcR4%2Fimage.png?alt=media&amp;token=67393c91-2a56-4277-8a88-f2e606f80969\" contenteditable=\"false\"><br></p><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"cbf494eb87e547518fd96655e4ddc284:0\">class loader</span></h2><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"c8770c612f4240f7a0991458c3567c06:0\">.java 소스를 자바 컴파일러가 컴파일하면 .class 파일인 바이트코드가 생성된다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"f74cfb987a224fb295f58a6d8dcec135:0\">클래스 파일들을 엮어서 JVM이 운영체제로부터 할당받은 메모리 영역인 Runtime Data Area로 적재하는 역할을 한다.</span></p></li></ul><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"034cdcd0117f48948e9f3698f3e06578:0\">execution engine</span></h2><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"f9ea519a37ab47c48a6b66aa3d1865ac:0\">클래스 로더에 의해 메모리에 적재된 클래스(바이트 코드)들을 기계어로 변경해 명령어 단위로 실행하는 역할을 한다.</span></p></li></ul><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"86921c55eefc4827aad31721be534719:0\">garbage collector</span></h2><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"5d6e1ee0281a470ca2679c62b21e47d8:0\">Heap 메모리 영역에 생성된 객체들 중에 참조되지 않는 객체들을 탐색 후 제거하는 역할을 한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"e470515054da4318a568ad3505c73339:0\">GC가 수행되는 동안 GC를 수행하는 쓰레드가 아닌 다른 모든 쓰레드가 일시정지된다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"4560e4f048ee4b259e4d2ae0af6afd47:0\">특히 Fulll GC가 일어나서 수 초간 모든 쓰레드가 정지(STW)한다면 장애로 이어지는 치명적인 문제가 생길 수 있다.</span></p></li></ul><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"20d102c4642d4c5bb2ec7a2f52705cd6:0\">runtime data area</span></h2><p><img src=\"https://3553248446-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M5HOStxvx-Jr0fqZhyW%2F-MG7lYH7h3eKB140HOuL%2F-MG7ov6KmXeojWPxIgHX%2FJVM-runtime-data-area.jpg?alt=media&amp;token=ca767b87-39a2-4b6c-b00a-a0ff42833f6f\" contenteditable=\"false\"><br></p><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"a85e9893cfa04822af10458f96c69650:0\">개별 스레드에서 관리</span></p><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"5a88eaf81b8f45d7a4e15b22e72d5401:0\">PC Register : 쓰레드가 실행되는 부분의 주소와 명령을 저장하는 영역</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"c466216e73e84d12a9a33550b3ed5ea6:0\">JVM Stack : 지역 변수, 파라미터, 리턴 값, 연산에 사용되는 임시 값이 생성되는 영역</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"e8ca8bef88484a4ba3a8013b5920e254:0\">Native Method Stack : 자바 외 언어로 작성된 네이티브 코드를 위한 메모리 영역(C/C++ 코드)</span></p></li></ul></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"f4ea148dfd164ce7a464b0c9346abc05:0\">공유 스레드에서 관리</span></p><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"8699ca343d9440b4aee076e17da9b477:0\">Method Area : 클래스 멤버 변수의 이름, 데이터 타입, final 클래스 변수</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"74112dcf6ed9463f950e8a1b904c3f45:0\">Heap Area : new 키워드로 생성된 객체와 배열이 생성되는 영역, ( jdk 8 이상 : static 변수, string 상수 풀)</span></p></li></ul></li></ul><p><strong><span style=\"box-sizing: border-box;\" data-key=\"07aa1b6939924f5997b0bd2fc4806cfc\">Primitive 배열을 선언할 경우, 엘리먼트는 어느 영역에 존재하는가?</span></strong></p><p><span style=\"box-sizing: border-box;\" data-offset-key=\"9c5d6fa476d9458abde0edd6358cba13:0\">원시타입일 경우 무조건 스택 메모리에 적재된다고 생각하는 분들이 많은데 원시타입의 배열일 경우, 배열의 주소는 스택 메모리에 적재되고 원시타입이더라도 엘리먼트는 힙 메모리에 적재 된다.</span></p><h1><span style=\"box-sizing: border-box;\" data-offset-key=\"58517f3fe1da4d639adce4eeedf6804b:0\">JVM 역할</span></h1><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"963d52d24dc04381acae0bf962a4aaf7:0\">OS에 독립적인 자바 애플리케이션을 실행</span></h2><h3><span style=\"box-sizing: border-box;\" data-offset-key=\"40762d2d830c4ece84061d134aef56f0:0\">JVM 실행 과정</span></h3><ol><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"fe58a143e6a74e49a5815ef84ba2fa91:0\">프로그램이 실행되면 JVM은 OS로부터 이 프로그램이 필요로 하는 메모리를 할당 받는다. JVM은 이 메모리를 용도에 따라 여러 영역으로 나누어 관리한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"88ef68bcd8234288849f6adaaca84394:0\">자바 컴파일러(javac)가 자바소스(.java)코드를 읽어 들여 자바 바이트코드(.class)로 변환시킨다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"440e07cd1aec4c66b252f13629adff6d:0\">이 변경된 Class 파일들을 Class Loader를 통해 JVM 메모리영역(Runtime Data Areas) 영역으로 로딩한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"8ed18531b391401a92268bfb21b70f63:0\">로딩된 class파일들은 Execution engine을 통해 해석된다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"7fe732673c6141bb8ad175abac6e1592:0\">해석된 바이트코드는 Runtime Data Areas에 배치되어 실질적인 수행이 이루어지게된다.이러한 실행과정속에서 JVM은 필요에 따라 Thread Synchronization과 GC같은 관리 작업을 수행한다.</span></p></li></ol><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"47febb2fdf964480bd51b6ebd624411d:0\">GC를 이용한 메모리 관리</span></h2><h3><span style=\"box-sizing: border-box;\" data-offset-key=\"ed6c727c11ee4160acdb7ec0f592842e:0\">가비지 컬렉터는 힙 메모리에서 더 이상 참조되지 않은 객체를 확인하여 자동으로 제거하여 메모리를 관리 해준다</span></h3><p><strong><span style=\"box-sizing: border-box;\" data-key=\"cc1282bdce5f4e14a33d0a940e9028de\">자바 메모리 영역</span></strong></p><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"d43d59df73394816b4f9b0ea6e287993:0\">메소드 영역 : 클래스 메타 데이터(Field 이름, Field 타입, Class 이름 등등)</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"995a3c0e405642aea7e0f193f4966ece:0\">스택 영역 : 기본형 데이터, 로컬 변수(참조형일 경우 주소값만 저장됨)가 저장되는 영역</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"1f40035a94da4ac1a742befc5208c60a:0\">힙 영역 : 참조형 데이터가 저장되는 영역</span></p></li></ul><p><strong><span style=\"box-sizing: border-box;\" data-key=\"05c53bba43b94041868852482fb93f17\">static 데이터는 어느 메모리 영역에 존재하는가?</span></strong></p><p><span style=\"box-sizing: border-box;\" data-offset-key=\"34104595fc604d9383839725c30b7e28:0\">Java 8 이전에는 Method Area를 Permgen(permanant Generation Space)에 할당하였다. Static data는 애플리케이션이 생성되면 영구적으로 메모리에 올라가기 때문에 String Constant Pool이나 Static 배열 오용으로 인한 OutOfMemory 이슈가 발생하였다. (Perm 영역은 JVM에 의해 크기가 강제되던 영역이다)</span></p><p><span style=\"box-sizing: border-box;\" data-offset-key=\"7accd086453f4651878e48a7e93a46cb:0\">Java 8 이후부터는 PermGen 영역이 Metaspace 영역으로 변경되면서 기존에 관리되던 Static 데이터나 String Constant Pool은 Heap 메모리로 이동하게 되었고 클래스의 메타 데이터만 Metaspace로 이동하게 되었다. Metaspace 영역은 네이티브 메모리에서 관리하므로 -XX:MaxPermSize를 통해서 관리되는 데이터 양에 따라 유동적으로 관리할 수 있게 되었다.</span></p><h3><span style=\"box-sizing: border-box;\" data-offset-key=\"241f818fc8de4f93865421a731eb7468:0\">GC 동작 원리 (Pararrel GC 기준)</span></h3><p><img src=\"https://3553248446-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M5HOStxvx-Jr0fqZhyW%2F-MG6-n2RCnRrss4KBsSz%2F-MG7kB2WBDrImeVa2ILB%2F22296F3C58FF0CA120.jpg?alt=media&amp;token=28e830c4-ac42-479a-9786-7d1208d2d911\" contenteditable=\"false\"><br></p><ol><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"bf273716ff744b4887a91fe8039820f8:0\">힙 메모리 영역은 young generation(eden, survivor1, survivor2) , old generation, permanent generation 으로 나누어 진다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"9897d3118f764e229f7c2ead2885a988:0\">데이터는 young generation(eden → survivor1 → survivor2) → old generation 순으로 데이터가 참조되는 기준으로 옮겨진다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"4bfbf17a95da4b94a0835fdd3b9d19f9:0\">young generation에서 발생하는 gc를 minor gc 라고 하고, old generation에서 발생하는 gc를 major gc로 부른다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"730ef7fe2167492b833f67ea27b4ab8f:0\">minor gc는 메모리를 많이 차지하지 않고, major gc에서 메모리를 많이 차지하게 된다. 대부분의 gc를 튜닝하는 경우는 major gc에서 발생한다.</span></p></li></ol>",
      assignmentId: "1",
      assignmentTitle: "java 자료형 과제1",
      assignmentContent: " ```java\n" + "private String name;\n" + "```\n" + "- 어쨋든 과제 내용임\n" + "- 여러개 있음\n" + "> 자바 좋아\n" + "> 자바 스크립트 좋아\n" + "java 자료형 수업",
      requestAssignmentContent: "```java\n" + "private String name;\n" + "```\n" + "- 과제 내용임\n" + "- 과제 하기 싫어요 쌤\n" + "> 자바 싫어\n" + "> 자바 스크립트 싫어",
      assignmentComment: "나도 과제 내기 싫어",
      questions: null,
      answer: null,
    },
    {
      classId: 2,
      title: "java 클래스",
      classDate: "2022-01-04 13:00",
      classState: "DONE",
      classContent: "<p><strong>String, StringBuffer, StringBuilder</strong></p><p>String, StringBuffer, StringBuilder 차이를 알아보자</p><p><img src=\"https://3553248446-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M5HOStxvx-Jr0fqZhyW%2F-MH65JVMk6LY89kolMcn%2F-MH66mfDushIpg_wA7pT%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B71.png?alt=media&amp;token=d42f44a3-aef8-4432-9951-6b5be0c606d7\" contenteditable=\"false\"><br></p><h1><span style=\"box-sizing: border-box;\" data-offset-key=\"6b7a06d17bc643279d3eedc6b1ef9728:0\">String</span></h1><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"8fa756552dca40908e4364bd2d6b6cfc:0\">String은 Heap 메모리가 아닌 String 상수풀에 저장된다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"54510bf54ffb447e818af50dd946fef4:0\">String 상수풀은 Java 8 이전에는 Permgen 영역에 할당되어 Method area에 위치하였다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"7c5a948d06ee49a7a98ec47c17f1d559:0\">Method area에는 영구적으로 보관되는 상수형 데이터(Static variable)들이 저장되었다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"6a64d04ee0084a579f17314fdb80434f:0\">Java 8 이후에는 Permgen 영역이 제거되고 Metaspace 영역으로 변경되면서 Perm 영역에 있던 정보들 중 static 변수나 String 상수풀은 Heap 영역으로 이동하여 GC가 관리될 수 있도록 개선되었다.</span></p></li></ul><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"34d87a73034e4490b4682d43bf6b89e7:0\">String 클래스의 구현 코드를 살펴보자</span></h2><p><span style=\"box-sizing: border-box;\" data-offset-key=\"6ce0d9c1ad26462282fb847c837e15ee:0\">String은 final 클래스로 선언되어 있으며 클래스내의 문자열도 final로 선언된것을 확인할 수 있다. 이는 String 인스턴스를 immutable 하다는 것을 알 수 있다.</span></p><div data-language=\"java\" class=\"toastui-editor-ww-code-block-highlighting\"><pre class=\"language-java\"><code data-language=\"java\" class=\"language-java\">/**\n" + " * Strings are objects which represent immutable arrays of characters.\n" + " *\n" + " * @author OTI\n" + " * @version initial\n" + " *\n" + " * @see StringBuffer\n" + " */\n" + "public final class String implements Serializable, Comparable&lt;String&gt;, CharSequence\n" + "{\n" + "\t...\n" + "\tprivate final char[] value;\n" + "\tprivate final int count;\n" + "\tprivate int hashCode;\n" + "\n" + "\t...\n" + "\n" + "  /**\n" + "\t * Creates a string that is a copy of another string\n" + "\t *\n" + "\t * @param string\n" + "\t *          the String to copy\n" + "\t */\n" + "\tpublic String(String string) {\n" + "\t\tvalue = string.value;\n" + "\t\tcount = string.count;\n" + "\t\thashCode = string.hashCode;\n" + "\t}\n" + "}</code></pre></div><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"c0ccc55a1c7c4013a889b5cd4526b6fb:0\">문자열을 조합할 경우엔 어떻게 될까?</span></h2><p><span style=\"box-sizing: border-box;\" data-offset-key=\"d0497c58e5e046a7ba7abda7f302e169:0\">value가 final이니 인스턴스의 value를 수정할 수 없으므로 두 문자열을 조합할 경우엔 새로운 인스턴스를 생성하게 된다. 아래의 코드는 두 문자열을 조합하였을 경우 호출되는 String 생성자 코드를 확인할 수 있다.</span></p><div data-language=\"java\" class=\"toastui-editor-ww-code-block-highlighting\"><pre class=\"language-java\"><code data-language=\"java\" class=\"language-java\">/*\n" + " * Creates a string that is s1 + s2.\n" + " */\n" + "private String(String s1, String s2) {\n" + "\t...\n" + "\tvalue = new char[concatlen];\n" + "\tcount = concatlen;\n" + "\n" + "\tSystem.arraycopy(s1.value, 0, value, 0, s1len);\n" + "\tSystem.arraycopy(s2.value, 0, value, s1len, s2len);\n" + "}</code></pre></div><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"0dcc5a5f01394e039d94f7d649eb4d0c:0\">String Optimization</span></h2><p><span style=\"box-sizing: border-box;\" data-offset-key=\"2005f2acd84144cea9d636e2ab61e940:0\">Java 1.5 이상부터는 String 인스턴스에 문자열을 '+' 할 경우에 컴파일러가 StringBuilder로 변환해주는 것을 확인할 수 있다.</span></p><p><span style=\"box-sizing: border-box;\" data-offset-key=\"591a9ee6983b403893e0ca20d1d4a397:0\">그렇다면 아래와 같이 코드를 컴파일 할 경우에 어떻게 최적화 될지 확인해 보자</span></p><div data-language=\"java\" class=\"toastui-editor-ww-code-block-highlighting\"><pre class=\"language-java\"><code data-language=\"java\" class=\"language-java\">public static void main(String[] args) {\n" + "\t\t// case 1. 두 인스턴스 문자열 조합\n" + "    String str1 = \"test\";\n" + "    String str2 = \"test\";\n" + "    String str3 = str1 + str2;\n" + "\n" + "\t\t// case 2. 문자열 인스턴스에 int 추가\n" + "    String str4 = \"\";\n" + "    str4 += 0;\n" + "    str4 += 1;\n" + "    str4 += 2;\n" + "\n" + "\t\t// case 3. 문자열 인스턴스에 for loop를 돌면서 문자열 추가\n" + "    String str5 = \"123\";\n" + "    for(int i = 0; i &lt; 100; ++i) {\n" + "        str5 = str5 + \"456\";\n" + "    }\n" + "}</code></pre></div><p><span style=\"box-sizing: border-box;\" data-offset-key=\"0a8683c545004f3c85cd8e62990c0342:0\">다음은 JAD로 컴파일한 파일을 디컴파일한 결과이다.</span></p><p><span style=\"box-sizing: border-box;\" data-offset-key=\"d8e4e5dd0c914643a0f3af34c6f8351f:0\">String 인스턴스들을 조합할 경우 StringBuilder로 변환하여 append()를 호출하는 것을 확인할 수 있다. 그러나 루프문에서는 StringBuilder로 변환 되었지만 루프 수 만큼 StringBuilder가 생성되었기 때문에 루프문안에서 문자열 조합은 메모리를 고려해볼 필요가 있다.</span></p><div data-language=\"java\" class=\"toastui-editor-ww-code-block-highlighting\"><pre class=\"language-java\"><code data-language=\"java\" class=\"language-java\">public static void main(String args[])\n" + "{\n" + "\t\t// case 1. 두 인스턴스 문자열 조합\n" + "    String str1 = \"test\";\n" + "    String str2 = \"test\";\n" + "    String str3 = (new StringBuilder()).append(str1).append(str2).toString();\n" + "    \n" + "\t\t// case 2. 문자열 인스턴스에 int 추가\n" + "\t\tString str4 = \"\";\n" + "    str4 = (new StringBuilder()).append(str4).append(0).toString();\n" + "    str4 = (new StringBuilder()).append(str4).append(1).toString();\n" + "    str4 = (new StringBuilder()).append(str4).append(2).toString();\n" + "    \n" + "\t\t// case 3. 문자열 인스턴스에 for loop를 돌면서 문자열 추가\n" + "\t\tString str5 = \"123\";\n" + "    for(int i = 0; i &lt; 100; i++)\n" + "        str5 = (new StringBuilder()).append(str5).append(\"456\").toString();\n" + "\n" + "}</code></pre></div><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"7c70d298eb10470183b55a0ba3f68777:0\">결론을 내보자</span></h2><p><span style=\"box-sizing: border-box;\" data-offset-key=\"b2d45481268c42e6a81d1abdbcabc86c:0\">String 클래스의 문자열 값은 final 이므로 immutable 하다는 것을 알 수 있다. 그러므로 문자열을 추가하거나 삭제할 경우엔 새로운 인스턴스가 만들어진다는 것을 유념해야 한다. 새로운 인스턴스는 힙 메모리에 할당되므로 빈번한 문자열 조합은 가비지 컬렉터의 부하가 발생할 수 있다.</span></p><p><span style=\"box-sizing: border-box;\" data-offset-key=\"554d0f9d9ea940a8ae51d98e0312f4b6:0\">Java 5 이상부터는 String 인스턴스에 새로운 문자열을 조합할 경우 컴파일러가 최적화하여 StringBuilder로 변환해주지만 StringBuilder 또한 새로 생성되는 인스턴스이기 때문에 성능을 고려하며 코드를 작성해야 한다.</span></p><h1><span style=\"box-sizing: border-box;\" data-offset-key=\"83142f426a6e44619dc24461a1f3b6a8:0\">StringBuilder</span></h1><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"05afb0aaf2ed4bb0bfcddc5f84d811f1:0\">StringBuilder는 힙 메모리에 생성된다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"47e4eb1258264d308bd444a76c6fd735:0\">가변적이고, Thread Safe 하지 않는다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"e9a24ae5c9ce434fa11c1c816cc79475:0\">Thread safe를 고려하지 않으므로 성능 상 가장 우수하다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"c02f40ae71d04105b7bfd4660ed73f6d:0\">싱글 쓰레드 로직이나 쓰레드간 String을 공유하지 않는다면 StringBuilder를 사용하자</span></p></li></ul><h1><span style=\"box-sizing: border-box;\" data-offset-key=\"4b8fad58d92248fa8a38dccb7a0c9d6e:0\">StringBuffer</span></h1><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"4e3f6f10a1ae43a0a04b3c1002955df5:0\">StringBuffer 또한 힙 메모리에 생성된다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"f66e79580774441cb4b783a6bdca6df3:0\">가변적이지만 Thread Safe 하다.</span></p></li></ul><div data-language=\"java\" class=\"toastui-editor-ww-code-block-highlighting\"><pre class=\"language-java\"><code data-language=\"java\" class=\"language-java\">public final class StringBuilder extends AbstractStringBuilder implements Serializable, CharSequence, Appendable {\n" + "\t...\n" + "\tprivate transient char[] value;\n" + "\t...\n" + "}</code></pre></div><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"c55032b2291c4e11a7fd6522c86a34f5:0\">Thread safe를 어떻게 구현하였을까?</span></h2><p><span style=\"box-sizing: border-box;\" data-offset-key=\"ec1835d8768d44ebbdaaa87bb1c5fd4d:0\">StringBuffer의 경우에는 append 메소드에 synchronized 를 붙여주어 해당 로직에 lock을 걸어 동기화를 보장하였다. synchronized 키워드는 가장 안전하게 쓰레드 동기화를 보장해주지만 lock을 거는 만큼 성능상 이슈가 없는지 고려해보아야 한다.</span></p><div data-language=\"java\" class=\"toastui-editor-ww-code-block-highlighting\"><pre class=\"language-java\"><code data-language=\"java\" class=\"language-java\">/**\n" + " * Adds the character array to the end of this StringBuffer.\n" + " *\n" + " * @param\t\tchars\tthe character array\n" + " * @return\t\tthis StringBuffer\n" + " *\n" + " * @exception\tNullPointerException when chars is null\n" + " */\n" + "public synchronized StringBuffer append (char[] chars) {\n" + "\tint currentLength = lengthInternalUnsynchronized();\n" + "\tint currentCapacity = capacityInternal();\n" + "\t\n" + "\t...\n" + "}</code></pre></div>",
      assignmentId: "2",
      assignmentTitle: "java 클래스 과제2",
      questionsCount: "7",
      assignmentContent: " ```java\n" + "private String name;\n" + "```\n" + "- 어쨋든 과제 내용임\n" + "- 여러개 있음\n" + "> 자바 좋아\n" + "> 자바 스크립트 좋아\n" + "java 클래스 수업",
      requestAssignmentContent: null,
      questions: "쌤 강의 이게 최선이에요? 좀 더 나은 강의가 될 수 는 없는거에요?",
      answer: "어쩌라고",
    },
    {
      classId: 3,
      title: "java 추상화",
      classDate: "2022-01-05 13:00",
      classState: "READY",
      classContent: "<p>블럭킹 | 논블럭킹 | 동기 | 비동기</p><p>Blocking | Non Blocking | Sync | Async 에 대해 알아보자</p><p><img src=\"https://3553248446-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M5HOStxvx-Jr0fqZhyW%2F-MI47rzq-_aYzSxulxsR%2F-MI4kZ6A_5L4YY38SSjj%2Fasynchronous-programming-blocking-and-non-blocking-3.jpg?alt=media&amp;token=3eb5ab4d-7606-4d65-9834-1769e91dbc83\" contenteditable=\"false\"><br></p><p><span style=\"box-sizing: border-box;\" data-offset-key=\"fa01896f1afa45d8914058e3e8be2e4a:0\">https://luminousmen.com/post/asynchronous-programming-blocking-and-non-blocking</span></p><h1><span style=\"box-sizing: border-box;\" data-offset-key=\"809b98fd253947278ba623777bc7082c:0\">BLOCKING vs NON BLOCKING</span></h1><p><span style=\"box-sizing: border-box;\" data-offset-key=\"9fbd12b09d6244519b117c5bda899df1:0\">블럭킹과 논블럭킹은 </span><strong><code data-backticks=\"1\">대기큐</code></strong><span style=\"box-sizing: border-box;\" data-offset-key=\"9fbd12b09d6244519b117c5bda899df1:2\">와 </span><strong><code data-backticks=\"1\">호출 결과 시점</code></strong><span style=\"box-sizing: border-box;\" data-offset-key=\"9fbd12b09d6244519b117c5bda899df1:4\">으로 구분할 수 있다. 설명하기 쉽게 프로그램 A와 B가 있다고 가정하겠다. 프로세스는 프로그램 A에서 B를 호출하는 순서로 진행한다.</span></p><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"2eade7d5371e42728dc70b7963d422a5:0\">Blocking</span></h2><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"17c79efcf64341c190c3eac9288f4431:0\">프로그램 A 에서는 프로그램 B 로직이 수행 완료될 때 까지 대기큐에 들어가 로직이 완료된 이후에나 대기큐에서 프로그램 A가 반환되어 이후 로직을 수행할 수 있다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"5aae8e70161641d39eb154afbb79d4a1:0\">프로그램 B는 호출 결과를 로직 수행 완료 이후에 프로그램 A에게 돌려주게 된다.</span></p></li></ul><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"ea39caeeef2444289dbcd48e83c877aa:0\">Non Blocking</span></h2><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"8b8fccbc09864f8e8e50e0f4a6951608:0\">프로그램 A는 프로그램 B를 호출한 이후에도 제어권을 가지고 있어 대기큐에 들어가지 않고 다른 로직을 수행할 수 있다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"9a8fb9f0846c45739d329d8d23d06596:0\">프로그램 B가 호출된 순간 호출되었다는 결과만 프로그램 A에게 돌려준다.</span></p></li></ul><h1><span style=\"box-sizing: border-box;\" data-offset-key=\"71d95dbdb1274fccaf819abadb43cd9c:0\">SYNC vs ASYNC</span></h1><p><span style=\"box-sizing: border-box;\" data-offset-key=\"1463ffa67c0d456d935b8a619dbaa64c:0\">동기와 비동기는 호출한 결과의 </span><strong><code data-backticks=\"1\">완료 여부를 확인 하는가</code></strong><span style=\"box-sizing: border-box;\" data-offset-key=\"1463ffa67c0d456d935b8a619dbaa64c:2\">에 따라 구분할 수 있다. 이번에도 이전과 동일하게 프로그램 A,B로 가정하겠다. 프로세스도 동일하다.</span></p><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"949e170480e74a6e86b01a08fac670d0:0\">Sync</span></h2><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"613e02240df740fc9cdda1e074d5ff7a:0\">프로그램 B가 완료할 때까지 프로그램 A는 기다리게 되므로 아무런 로직도 수행하지 못한다.</span></p></li></ul><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"52f78daf782f4fe29a6696d9617282e6:0\">ASync</span></h2><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"f8c0f4b484bb49e885063305d67690b3:0\">프로그램 B를 호출한 이후에 프로그램 A는 프로그램 B의 완료 여부를 기다리지 않고 다음 로직을 수행한다.</span></p></li></ul><h1><span style=\"box-sizing: border-box;\" data-offset-key=\"763846cf1f704b99bc71e05292b64001:0\">블럭킹 &amp; 동기</span></h1><p><img src=\"https://3553248446-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M5HOStxvx-Jr0fqZhyW%2F-MI4lA8fahYT9GqE2TVy%2F-MI5XTCznDKuTXVg-FDr%2Ffigure2.gif?alt=media&amp;token=3743ae6d-7c00-4a02-8740-5f8aa47c3c19\" contenteditable=\"false\"><br></p><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"f2171425d9b14c3b8aceeef034a0b8f3:0\">애플리케이션에서 커널로 작업을 요청한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"3c1926536f8740d38d543c16b52f3d0a:0\">커널은 요청 받은 작업을 수행한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"121ac3f6a61943c29b501f057779bba9:0\">애플리케이션은 커널 작업이 완료될 때까지 대기한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"8b7c7ed682434acc8b03bb32daca3b23:0\">커널의 작업이 완료되면 결과값을 리턴해준다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"666fdfd1673e4d10a54a602268594bdb:0\">애플리케이션은 커널의 결과를 확인하고 이후 로직을 수행한다.</span></p></li></ul><blockquote><p><strong><span style=\"box-sizing: border-box;\" data-key=\"583b9da61b12489d9863f03c4a9c7900\">어느 경우에 볼 수 있을까?</span></strong></p><p><span style=\"box-sizing: border-box;\" data-offset-key=\"583b9da61b12489d9863f03c4a9c7900:1\">일반적인 Spring MVC 방식에서는 대부분 블럭킹, 동기 방식으로 동작한다.</span></p></blockquote><h1><span style=\"box-sizing: border-box;\" data-offset-key=\"6e862b1281bb4f05981af752294e92c0:0\">블럭킹 &amp; 비동기</span></h1><p><img src=\"https://3553248446-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M5HOStxvx-Jr0fqZhyW%2F-MI4lA8fahYT9GqE2TVy%2F-MI5XVEJGrq_mBwYu6cb%2Ffigure3.gif?alt=media&amp;token=ebedf153-9e6a-47da-bcec-4aa646ce384a\" contenteditable=\"false\"><br></p><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"9678b4d188824d39ad7f4b6705f0edd9:0\">애플리케이션은 커널에 작업을 요청한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"3f2890866ca744f8a102264fe20fa396:0\">커널은 작업을 수행한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"5f0ac3150a294b939ca4defe748f190e:0\">커널 작업 중간에 애플리케이션에 제어권을 넘겨 준다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"4019d0ae5164452f8c0165ef4be309c8:0\">애플리케이션은 제어권을 위임 받았으므로 나머지 작업을 수행한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"95735db64a4044978cd7f45b5b611127:0\">애플리케이션은 작업 중간에 커널에 작업 제어권을 다시 넘겨준다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"9d708cbb04fa4dd4b821f4b9dc2b62be:0\">서로 제어권을 위임하며 번갈아 수행하며 작업을 완료한다.</span></p></li></ul><blockquote><p><strong><span style=\"box-sizing: border-box;\" data-key=\"a960c46ddc7a481da231f45da74beb73\">어느 경우에 볼 수 있을까?</span></strong></p><p><span style=\"box-sizing: border-box;\" data-offset-key=\"a960c46ddc7a481da231f45da74beb73:1\">보통은 확인하기 힘든 케이스로 Node.js와 Mysql을 사용하면 확인할 수 있는 케이스가 있다. Node.js는 논블럭킹 비동기 방식으로 동작하고 Mysql은 블럭킹 방식으로 동작하기 때문에 Node.js 언어로 Mysql의 데이터를 사용한 로직을 구현하다 보면 중간 중간 블럭킹 비동기 방식으로 동작하는 경우를 확인할 수 있다. 또는 자바 소켓 프로그램에서도 매번 소켓의 데이터가 전달되었는지 체크하며 다른 로직을 수행하는 케이스로도 볼 수 있다.</span></p></blockquote><h1><span style=\"box-sizing: border-box;\" data-offset-key=\"703d37e919dc436db43be7ef4169bf4b:0\">논블럭킹 &amp; 동기</span></h1><p><img src=\"https://3553248446-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M5HOStxvx-Jr0fqZhyW%2F-MI4lA8fahYT9GqE2TVy%2F-MI5XXDnHpRHozVlsnWO%2Ffigure4.gif?alt=media&amp;token=d4e6eac0-933a-4b27-b451-0df8d05c1fbd\" contenteditable=\"false\"><br></p><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"55ddfef3e74e426abf61f577b10aff41:0\">애플리케이션은 커널에 작업을 요청한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"a8fadf84593940d19e5b576a394b7363:0\">커널은 작업을 수행한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"9cfbeb2f261c453a91d8aa48d474b81b:0\">애플리케이션은 커널에 작업 요청 이후에 바로 다른 작업을 수행한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"3d746e274f164cfeab7005d93dae7750:0\">애플리케이션은 커널의 작업이 완료 되었는지 확인하기 위해 기다린다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"40e5a95482f7467685f6668c59a05e1b:0\">커널이 작업이 완료되면 결과값을 리턴한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"944bfb7e8ab54915a983439f21d0e14e:0\">애플리케이션은 기다리다 작업이 완료되어 결과값을 전달 받으면 나머지 로직을 수행할 수 있다.</span></p></li></ul><div data-language=\"java\" class=\"toastui-editor-ww-code-block-highlighting\"><pre class=\"language-java\"><code data-language=\"java\" class=\"language-java\">@GetMapping(\"sync-nonblock\")\n" +
        "public void syncNonBlock(){\n" +
        "    ExecutorService service = Executors.newSingleThreadExecutor();\n" +
        "\n" +
        "    Callable&lt;String&gt; task = new Callable&lt;String&gt;() {\n" +
        "        @Override\n" +
        "        public String call() throws Exception {\n" +
        "            try {\n" +
        "                Thread.sleep(3000);\n" +
        "            } catch (InterruptedException e) {\n" +
        "                e.printStackTrace();\n" +
        "            }\n" +
        "            logger.info(\"BlockController.syncNonBlock.call\");\n" +
        "            return \"Future Done!!\";\n" +
        "        }\n" +
        "    };\n" +
        "\n" +
        "    Future&lt;String&gt; future = service.submit(task);\n" +
        "\n" +
        "    try {\n" +
        "        logger.info(\"BlockController.syncNonBlock.main\");\n" +
        "        String futureResult = future.get();\n" +
        "        System.out.println(\"futureResult: \" + futureResult);\n" +
        "    } catch (Exception e) {\n" +
        "        // Exception Handling\n" +
        "    }\n" +
        "}</code></pre></div><blockquote><p><strong><span style=\"box-sizing: border-box;\" data-key=\"7860be569aa94818974e42824faceead\">어느 경우에 볼 수 있을까?</span></strong></p><p><span style=\"box-sizing: border-box;\" data-offset-key=\"a6b3292bcb01409c87e68d5fc0e36bdf:0\">자바에서 Future를 사용하면 확인할 수 있다. Future 인스턴스는 호출 여부에 대한 결과만 보유하고 있고 결과값에 대한 여부는 확인하지 않는다. 그러므로 Future를 사용하여 필요한 외부 로직을 요청하고 내부에선 다른 로직을 수행하다가 어느 정도 작업이 마무리되면 외부에 호출된 결과값을 확인하여 기다리다 나머지 로직을 수행할 수 있다.</span></p></blockquote><h1><span style=\"box-sizing: border-box;\" data-offset-key=\"f915603eaee948b1a35ae1c02967a0c6:0\">논블럭킹 &amp; 비동기</span></h1><p><img src=\"https://3553248446-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M5HOStxvx-Jr0fqZhyW%2F-MI4lA8fahYT9GqE2TVy%2F-MI5XZDLnk0IjjUcaZxO%2Ffigure5.gif?alt=media&amp;token=2361bf26-1d65-4225-9e06-fc9a7f2de39c\" contenteditable=\"false\"><br></p><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"103725171c6244b7962d1c03301992d8:0\">애플리케이션은 커널의 작업을 요청한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"f8174f57c0354f7c8be2652f62a15d7e:0\">커널은 작업을 수행한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"da2e4db2bdc741d08377004c4616d99e:0\">애플리케이션은 커널에 요청 후 나머지 작업을 수행한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"f3c9da5869294d73a747a8944f6d4d5a:0\">커널은 작업 완료 후 전달받은 콜백함수를 호출하거나 종료한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"2b786d0443194c94a5814cf4393e74b5:0\">애플리케이션은 커널의 작업 여부 또는 결과값에 상관없이 본인의 작업을 완료한 이후에 종료한다.</span></p></li></ul><blockquote><p><strong><span style=\"box-sizing: border-box;\" data-key=\"941b6a201ee7493d9d3e7d034ee33050\">어느 경우에 볼 수 있을까?</span></strong></p><p><span style=\"box-sizing: border-box;\" data-offset-key=\"e23b8050c518439ba79dbf87d88f9de7:0\">Node.js가 논블럭킹 비동기 방식으로 동작한다. 또는 @Async를 사용해도 유사한 케이스를 확인할 수 있다.</span></p></blockquote><div data-language=\"java\" class=\"toastui-editor-ww-code-block-highlighting\"><pre class=\"language-java\"><code data-language=\"java\" class=\"language-java\">public void asyncBlock(){\n" +
        "    blockService.async();\n" +
        "    logger.info(\"BlockController.asyncBlock\");\n" +
        "}\n" +
        "\n" +
        "@Async\n" +
        "public void async(){\n" +
        "    try {\n" +
        "        Thread.sleep(3000);\n" +
        "    } catch (InterruptedException e) {\n" +
        "        e.printStackTrace();\n" +
        "    }\n" +
        "    logger.info(\"BlockService.async\");\n" +
        "    secondBlockService.async();\n" +
        "}</code></pre></div><p><span style=\"box-sizing: border-box;\" data-offset-key=\"f1cb58afe968476da4631c8b0643ee5a:0\" data-slate-leaf=\"true\" data-highlighting=\"punctuation\">}</span></p><h1><span style=\"box-sizing: border-box;\" data-offset-key=\"855fbc002e1e4b2b95b6c960c2150832:0\">결론</span></h1><p><span style=\"box-sizing: border-box;\" data-offset-key=\"8e8e3bf8803f4ed98bfa70b7dc1e0ce3:0\">사실 블럭킹 여부와 동기 여부는 상호 반대되는 개념이 아니다. 두 개는 기준이 다르고 의미도 전혀 다르기 때문에 상호 대응될 수 없는 개념이다. 동기는 호출자의 입장에서 바라보는 개념이고, 블럭킹은 제어권(또는 쓰레드) 관점에서 바라보는 개념이라고 할 수 있다.</span></p><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"853f0eb7337b4540b8fedbda88142507:0\">Blocking : 호출에 대한 결과를 로직 수행 완료된 이후에 반환한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"50edcc382f544c4386cf3f370cff4211:0\">NonBlocking : 호출에 대한 결과를 로직 수행 완료 여부와 무관하게 결과를 반환한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"9090897b7d804689885c13fbcf0ad694:0\">Sync : 호출한 로직의 결과값을 확인한다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"adef50a29f0740a9ae5d86d933a82f11:0\">ASync : 호출한 로직의 결과값은 수행한 쪽에서 콜백으로 반환한다. (호출한 쪽에서는 더 이상 신경쓰지 않는다)</span></p></li></ul>",
      assignmentId: null,
      assignmentTitle: null,
      questionsCount: "4",
    },
    {
      classId: 4,
      title: "java 인터페이스",
      classDate: "2022-01-06 13:00",
      classState: "NONE",
      classContent: "<p><strong>Exception(예외)</strong></p><p>Java 에서 발생하는 예외에 대해서 알아보고 해결 방법에 대해 알아보자</p><h1><span style=\"box-sizing: border-box;\" data-offset-key=\"7231892097944418b46c6231a9d11ee0:0\">예외 클래스 구조</span></h1><p><img src=\"https://3553248446-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-M5HOStxvx-Jr0fqZhyW%2F-MGEpLbycPo--tkjHN69%2F-MGEzjefcupu8N6x2IrO%2FUntitled.png?alt=media&amp;token=9775b8e0-9170-4077-b89f-4f30426455c6\" contenteditable=\"false\"><br></p><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"63176bcfddf54822b268692a234801f0:0\">Throwable 클래스</span></h2><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"30fc9c09d2c14e948c64cf9f9c0bf5f0:0\">모든 예외 클래스는 Throwable을 상속 받아 구현되어 있다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"838ef08066c04d1099dc12b002eab119:0\">Throwable 클래스는 직접 사용하는 경우는 거의 없다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"ef38bd7d83fa40099a9876c816da6052:0\">Throwable 타입과 이 클래스를 상속받은 서브 타입만이 자바 가상 머신이나 throw 키워드에 의해 예외가 발생할 수 있다.</span></p></li></ul><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"e98a0875938d41da9346da97ed8c0f28:0\">Error vs Exception</span></h2><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"adf7b5aaf62f4d26acd677fe7c5046d9:0\">Error는 JVM에서 발생하는 에러로 개발자가 대응할 수 없으며 시스템 레벨에서 처리가 가능하다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"c3dc889a9b0e416ea0cdce544ba90551:0\">Exception은 개발자가 구현한 로직에서 발생하며 예외 처리에 대한 다양한 전략이 존재한다.</span></p></li></ul><h1><span style=\"box-sizing: border-box;\" data-offset-key=\"28dbc3d4bec140d18ca429005d3d0caf:0\">Checked vs unChecked</span></h1><p><span style=\"box-sizing: border-box;\" data-offset-key=\"e128fa19faa645cf903c4761878f4ddc:0\">Exception의 자식 클래스 중 </span><strong>RuntimeException을 제외한 모든 클래스는 CheckedException</strong><span style=\"box-sizing: border-box;\" data-offset-key=\"e128fa19faa645cf903c4761878f4ddc:2\">이며, RuntimeException과 그의 자식 클래스들을 Unchecked Exception이라 부른다.</span></p><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"048bd3f95228492c8a03a571496dbd07:0\">Checked Exception</span></h2><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"248b53ab704540898b462eb1ffdf34a2:0\">예외처리 필수</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"9e2c46e9f9004bc2abafba6a86d9570f:0\">컴파일 타임에서 예외처리 되지 않을 경우 컴파일 오류 발생</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"8c87933cd3934835925f55472110664c:0\">JVM 외부와 통신(네트워크, 파일시스템 등) 관련 기능에서 예외 발생</span></p></li></ul><h2><span style=\"box-sizing: border-box;\" data-offset-key=\"683a1b2140d649e0ad889f62c280b421:0\">UnChecked Exception</span></h2><ul><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"e22bf31582c64489af881a24f9a2db0e:0\">예외처리를 컴파일 단계에서 확인하지 않는다.</span></p></li><li><p><span style=\"box-sizing: border-box;\" data-offset-key=\"a5461b51bad748bc875bba9b8be40066:0\">실행 중에 발생하는 에러로 Runtime Exception이라 명명한다.</span></p></li></ul><h3><span style=\"box-sizing: border-box;\" data-offset-key=\"ae59f1ed0928481badb8f4ffc9ee9815:0\">Exception 비교</span></h3><table><thead><tr><th><p><span data-offset-key=\"a45bfb008b054c8e933f3cecb9b8fdae:0\" style=\"box-sizing: border-box;\">구분</span></p></th><th><p><span data-offset-key=\"a595dd9052164690bf5cf2050834185a:0\" style=\"box-sizing: border-box;\">Checked Exception</span></p></th><th><p><span data-offset-key=\"060a27282de04e11a405dc3de051bd22:0\" style=\"box-sizing: border-box;\">UnChecked Exception</span></p></th></tr></thead><tbody><tr><td><p><span data-offset-key=\"088d0ef4805d4f2bb98a28a3fae980b3:0\" style=\"box-sizing: border-box;\">확인 시점</span></p></td><td><p><span data-offset-key=\"fac31ba73b22456fac32856990a4402e:0\" style=\"box-sizing: border-box;\">컴파일(Compile) 시점</span></p></td><td><p><span data-offset-key=\"482c7b1f8cbe43f2831e986486bc3690:0\" style=\"box-sizing: border-box;\">런타임(Runtime) 시점</span></p></td></tr><tr><td><p><span data-offset-key=\"67f79b70e2824acabad9f7ecfc4be402:0\" style=\"box-sizing: border-box;\">처리 여부</span></p></td><td><p><span data-offset-key=\"bf5205dbc68e4766b8fbf0778695e616:0\" style=\"box-sizing: border-box;\">반드시 예외 처리해야 한다</span></p></td><td><p><span data-offset-key=\"4fbae17d58a646cfa57e20db1a94ab4c:0\" style=\"box-sizing: border-box;\">명시적으로 하지 않아도 된다</span></p></td></tr><tr><td><p><span data-offset-key=\"fa24558928784a8f91a7f7326fb1b0c4:0\" style=\"box-sizing: border-box;\">트랜잭션 처리</span></p></td><td><p><span data-offset-key=\"6ae87ec986524565b7dd622547964227:0\" style=\"box-sizing: border-box;\">예외 발생시 롤백(rollback)되지 않는다</span></p></td><td><p><span data-offset-key=\"e36154bb0b9b45428edec26226243d9c:0\" style=\"box-sizing: border-box;\">예외 발생시 롤백(rollback)해야 한다</span></p></td></tr><tr><td><p><span data-offset-key=\"b49f68bf5ad84ac890c595d74f1d0b92:0\" style=\"box-sizing: border-box;\">종류</span></p></td><td><ul><li><p><span data-offset-key=\"0e34e7760cc84ddab8b7b264526b8929:0\" style=\"box-sizing: border-box;\">IOException</span></p></li><li><p><span data-offset-key=\"92eb0a1aac3a42c6a5feba8481fa6deb:0\" style=\"box-sizing: border-box;\">ClassNotFoundException</span></p></li></ul></td><td><ul><li><p><span data-offset-key=\"f2bbf4afa2bb4fe18085260781281cc7:0\" style=\"box-sizing: border-box;\">NullPointerException</span></p></li><li><p><span data-offset-key=\"cd06ef5e50c74ea19d62a025fe42b22b:0\" style=\"box-sizing: border-box;\">ClassCastException</span></p></li></ul></td></tr></tbody></table>",
      assignmentId: "4",
      assignmentTitle: "java 인터페이스 과제4",
      questionsCount: "0",
      assignmentContent: " ```java\n" +
        "private String name;\n" +
        "```\n" +
        "- 어쨋든 과제 내용임\n" +
        "- 여러개 있음\n" +
        "> 자바 좋아\n" +
        "> 자바 스크립트 좋아\n" +
        "java 인터페이스 수업",
    },
  ];

  const [classId, setClassId] = useState(0);
  const onClassId = (data) => {
    if (data.classState === 'NONE') {
      alert("아직 오픈하지 않은 강의 입니다.");
    } else {
      setClassId(data.classId);
    }
  }
  const classShowData = classData.filter((data) =>  data.classId === classId);

  const [toggleState, setToggleState] = useState(false);
  const toggleModal = () => setToggleState(!toggleState);

  const [lectureToggle, setLectureToggle] = useState(false);
  const lectureModal = () => setLectureToggle(!lectureToggle);

  return <>
    <section className="section-profile-cover section-shaped my-0 minus-mt-25">
      <div className="shape shape-style-1 shape-default alpha-4"/>
      <div className="separator separator-bottom separator-skew">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="fill-white"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
    </section>
    <section className="my-lecture-section">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={state.iconTabs === 1}
                    className={`mb-sm-3 mb-md-0 ${state.iconTabs === 1 ? 'active' : ''}`}
                    onClick={(e) => toggleNavs(e, "iconTabs", 1)}
                    href="#"
                    role="tab"
                  >
                    <i className="ni ni-align-left-2 mr-2"/>
                    수강 중인 강의
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={state.iconTabs === 2}
                    className={`mb-sm-3 mb-md-0 ${state.iconTabs === 2 ? 'active' : ''}`}
                    onClick={(e) => toggleNavs(e, "iconTabs", 2)}
                    href="#"
                    role="tab"
                  >
                    <i className="ni ni-basket mr-2"/>
                    내가 찜한 강의
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={state.iconTabs === 3}
                    className={`mb-sm-3 mb-md-0 ${state.iconTabs === 3 ? 'active' : ''}`}
                    onClick={(e) => toggleNavs(e, "iconTabs", 3)}
                    href="#"
                    role="tab"
                  >
                    <i className="ni ni-bell-55 mr-2"/>
                    내 질문
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + state.iconTabs}>
                  <TabPane tabId="iconTabs1">
                    <ListGroup>
                      {lectureData.map((data) => {
                        return <ListGroupItem key={data.lectureId}>
                          <MyLectureCard
                            key={data.lectureId}
                            data={data}
                            toggleModal={toggleModal}
                            lectureModal={lectureModal}
                          />
                        </ListGroupItem>
                      })}
                    </ListGroup>
                  </TabPane>
                  <TabPane tabId="iconTabs2">
                    <p className="description">
                      Cosby sweater eu banh mi, qui irure terry richardson ex
                      squid. Aliquip placeat salvia cillum iphone. Seitan
                      aliquip quis cardigan american apparel, butcher voluptate
                      nisi qui.
                    </p>
                  </TabPane>
                  <TabPane tabId="iconTabs3">
                    <p className="description">
                      Raw denim you probably haven't heard of them jean shorts
                      Austin. Nesciunt tofu stumptown aliqua, retro synth master
                      cleanse. Mustache cliche tempor, williamsburg carles vegan
                      helvetica. Reprehenderit butcher retro keffiyeh
                      dreamcatcher synth.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    <Modal
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
    <Modal
      className="modal-dialog-centered class-modal mt-7"
      isOpen={lectureToggle}
      toggle={lectureModal}
    >
      <div className="modal-header">
        <h5 className="modal-title" id="classModal">
          실전! 코틀린과 스프링 부트로 개발
        </h5>
        <div>
          <UncontrolledDropdown group className="mt-2">
            <DropdownToggle caret color="primary">
              강의 목록
            </DropdownToggle>
            <DropdownMenu className="t-5">
              {classData.map((data) => {
                return <DropdownItem key={data.classId} href="#" onClick={() => onClassId(data)}>
                  <div className="all-center">
                    <span>{data.title}</span>
                    <span className="ml-2">({data.classDate})</span>
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
        {classShowData.map((data) => {
          return <div key={data.classId}>
            <div className="all-center">
              <h5 className="mt-2">{data.title} - {data.classDate}</h5>
              <Badge color={data.classState === 'DONE' ? 'success' : 'danger'} className="h-42" pill>
                <h5 className="text-white">{data.classState}</h5>
              </Badge>
            </div>
            <hr className="mt-2"/>
            <Viewer initialValue={data.classContent}/>
            { data.assignmentId !== null &&
              <>
                <hr/>
                <div className="all-center mb-2">
                  <h5 className="mt-2">과제</h5>
                  <Badge color={data.requestAssignmentContent === null ? 'danger' : 'success'} className="h-42" pill>
                    <h5 className="text-white">{data.requestAssignmentContent === null ? '대기' : '완료'}</h5>
                  </Badge>
                </div>
                <Viewer initialValue={data.assignmentContent} />
                <h5 className="text-default">과제 제출</h5>
                {data.requestAssignmentContent === null
                  ? <>
                      <Writer />
                      <Button color="primary" size="sm" className="mt-2">제출 하기</Button>
                    </>
                  : <Viewer initialValue={data.requestAssignmentContent} />
                }
                <h5 className="mt-3">강사님 코멘트</h5>
                {data.assignmentComment === null || data.assignmentComment === undefined
                  ? <Alert color="secondary" className="text-default">아직 코멘트가 존재하지 않습니다.</Alert>
                  : <Alert color="info">{data.assignmentComment}</Alert>
                }
              </>
            }
            <hr/>
            <h5>질문하기</h5>
            {

            }
          </div>
        })}
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
  </>;
}

export default MyLecture;
