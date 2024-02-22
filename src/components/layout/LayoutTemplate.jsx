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
    background-color: ${props => props.theme.color.white};
  }

  .content-section {
    flex: 1;
    padding: 0 30px;
  }
`;

const SideBar = styled.aside`
  width: 220px;
  height: 100%;
  background-color: ${props => props.theme.color.gray[2]};

  header {
    height: 120px;
    background-color: ${props => props.theme.color.blue[1]};
    line-height: 120px;
    text-align: center;
  }

  header strong {
    color: ${props => props.theme.color.white};
    font-weight: 400;
    font-size: ${props => props.theme.fontSize.l};
  }

  ul {
    background-color: ${props => props.theme.color.gray[3]};
  }

  ul > li {
    border-bottom: 1px solid ${props => props.theme.color.gray[2]};
  }

  ul > li > a {
    font-weight: 300;
    display: block;
    padding: 12px 15px;
  }

  ul li a:hover {
    background-color: ${props => props.theme.color.black[2]};
    color: ${props => props.theme.color.white};
  }
`;

const LayoutTemplate = ({ sidebarContents, children }) => {
  return (
    <Wrapper>
      <div className="inner">
        <SideBar>
          <header>
            <strong>{sidebarContents.title}</strong>
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
