import { Outlet } from 'react-router-dom';
import PageTitle from './PageTitle';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NAVIGATION_DATA } from './constants';
import { useFetchUser } from 'components/accounts/hooks';

const Wrapper = styled.div`
  padding: 80px 0;

  .inner {
    display: flex;
    max-width: 1200px;
    min-height: 700px;
    margin: 0 auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.color.white};
  }

  .content-section {
    flex: 1;
    padding: 0 30px 100px;
  }
`;

const SideBar = styled.aside`
  width: 220px;
  background-color: ${(props) => props.theme.color.gray[2]};

  header {
    height: 120px;
    background-color: ${(props) => props.theme.color.blue[1]};
    line-height: 120px;
    text-align: center;
  }

  header strong {
    color: ${(props) => props.theme.color.white};
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSize.l};
  }

  ul {
    background-color: ${(props) => props.theme.color.gray[3]};
  }

  ul > li {
    border-bottom: 1px solid ${(props) => props.theme.color.gray[2]};
  }

  ul > li > a {
    font-weight: 300;
    display: block;
    padding: 12px 15px;
  }

  ul li a:hover,
  ul li a.active {
    background-color: ${(props) => props.theme.color.black[2]};
    color: ${(props) => props.theme.color.white};
  }
`;

const PageLayout = ({ sideNavType }) => {
  const { data : user } = useFetchUser();
  const filteredNavItems = NAVIGATION_DATA[sideNavType].children.filter(
    (item) => {
      if (!user) {
        return item.requiredLogin !== true;
      } else {
        return item.requiredLogin !== false;
      }
    }
  );

  return (
    <Wrapper>
      <div className="inner">
        <SideBar>
          <header>
            <strong>{NAVIGATION_DATA[sideNavType].name}</strong>
          </header>
          <ul>
            {filteredNavItems.map((item) => (
              <li key={item.name}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </SideBar>
        <section className="content-section">
          <PageTitle sideNavType={sideNavType} />
          <Outlet />
        </section>
      </div>
    </Wrapper>
  );
};

export default PageLayout;
