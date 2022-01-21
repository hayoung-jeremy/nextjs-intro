import { useRouter } from "next/router";
import Seo from "../../components/Seo";

const Detail = ({ params }) => {
  // 컴포넌트 내부에서 router 를 사용하게 되면, 이는 클라이언트의 프론트에서만 실행된다.
  // 이 페이지는 서버에서 렌더링하기 때문에, 아직은 params 가 빈 배열이다.
  // 그래서 pre-rendering 된 html 페이지에는 빈 div 태그와 h4 태그밖에 없다.
  // 데이터를 빠르게 가져와서 html 에 바로 뿌려주기 위해서는 아래처럼 getServerSideProps()를 이용한다.
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
};

export default Detail;

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
