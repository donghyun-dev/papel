import { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
const UserProfile = ({ setIsLoggedIn }) => {
  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          게시글
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br /> 0
        </div>,
        <div key="followings">
          팔로워
          <br /> 0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>PF</Avatar>} title="profile" />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;