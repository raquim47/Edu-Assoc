import { Outlet } from 'react-router-dom';
import LayoutTemplate from './LayoutTemplate';

const sidebarContents = {
  title: '회원 서비스',
  sideMenus: [
    { name: '로그인', path: '/accounts/login' },
    { name: '회원가입', path: '/accounts/register' },
  ],
};

const AccountsLayout = () => {
  return (
    <LayoutTemplate sidebarContents={sidebarContents}>
      <Outlet />
    </LayoutTemplate>
  );
};

export default AccountsLayout;
