import PageHeaderTemplate from 'components/common/PageHeaderTemplate';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 80px 0;

  .inner {
    display: flex;
    max-width: 1200px;
    height: 1000px;
    margin: 0 auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .content-section {
    flex: 1;
    padding: 0 30px;
  }
`;

const SideBar = styled.aside`
  width: 220px;
  height: 100%;
  background-color: #eee;

  header {
    height: 120px;
    background-color: #004071;
    /* background: linear-gradient(to bottom, #184368 50%, #0d4c7c 50%); */
    line-height: 120px;
    text-align: center;
  }

  header h2 {
    color: white;
    font-weight: 400;
    font-size: 22px;
  }

  ul {
    background-color: #fafafa;
  }

  ul li {
    border-bottom: 1px solid #eee;
  }

  ul li a {
    font-weight: 300;
    display: block;
    padding: 12px 15px;
  }

  ul li a:hover {
    background-color: #535f76;
    color: #fff;
  }
`;

const LayoutTemplate = ({ sidebarContents, children }) => {
  return (
    <Wrapper>
      <div className="inner">
        <SideBar>
          <header>
            <h2>{sidebarContents.title}</h2>
          </header>
          <ul>
            {sidebarContents.sideMenus.map((item) => (
              <li key={item.name}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </SideBar>
        <section className="content-section">
          <PageHeaderTemplate />
          {children}
        </section>
      </div>
    </Wrapper>
  );
};

export default LayoutTemplate;
