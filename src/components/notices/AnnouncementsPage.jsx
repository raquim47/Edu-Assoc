import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;






const AnnouncementsPage = () => {
 

  return (
    <Wrapper>
      <section>
        
      </section>
      <section>
      </section>

      <section>
        
      </section>
      <Link to='new'>글쓰기</Link>
    </Wrapper>
  );
};

export default AnnouncementsPage;
