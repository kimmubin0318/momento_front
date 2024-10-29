import { Outlet } from "react-router-dom";

/**
 * 전체 페이지에 랜더링되는 컴포넌트 입니다.
 * 헤더, 푸터를 여기에 만들어주세요
 * @returns
 */
export default function Layout() {
  return (
    <>
      헤더 여기에
      <Outlet />
      푸터 여기에
    </>
  );
}
