import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function Detail2() {
  const params = useParams(); // params.id 이런식으로 파라미터 접근
  console.log(params);

  const location = useLocation();
  // location.pathname 이런식으로 주소접근
  console.log(location);
  /*
    hash: "" //주소의 #문자열 뒤의 값
    key: "cfbd1fpq" // location 객체의 고유 값, 초기값은 default, 페이지가 변경될 때 마다 재생성
    pathname: "/movie-detail" //현재 주소 경로
    search: "" // ?를 포함한 쿼리스트
    state: null //페이지로 이동시 임의로 넣을 수 있는 상태 값
    [[Prototype]]: Object 
    */

  const navigate = useNavigate();
  // navigate('/') 이런식으로 이동
  /*   Link 컴포넌트를 사용하지 않고 다른 페이지로 이동을 해야 하는 경우, 뒤로가기 등에 사용하는 Hook 이다.
    replace 옵션을 사용하면 페이지를 이동할 때 히스토리를 남기지 않는다.
 */
  console.log(location.key);
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (location.key === "default") {
      console.log("location.key === default");
      navigate("../", { replace: true });
      //navigate(-1); //Go back
    }
  }, []);

  return <div>{localStorage.getItem("title")}</div>;
}

export default Detail2;
/* <v5> => withRouter, useHistory
componentDidMount() {
const { location,history } = this.props;
if(location.state===undefined){
    history.push("/");
}
OR
const history = useHistory();
history.push('/home');
history.replace('/home');
}
*/
/*
<v6> =>  useNavigation
const navigate = useNavigation();

navigate('/home');
navigate('/home', {replace: true});

<button onClick={() => navigate(-1)}>Go back</button>
<button onClick={() => navigate(1)}>Go forward</button>
*/
