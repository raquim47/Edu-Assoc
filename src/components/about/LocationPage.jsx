import styled from 'styled-components';

const MapInfo = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.color.gray[1]};
  background-color: ${(props) => props.theme.color.gray[2]};
  
  strong {
    font-size: ${props => props.theme.fontSize.l};
    font-weight: 500;
    color: ${(props) => props.theme.color.black[1]};
  }
  
  p {
    margin-top: 10px;
    color: ${(props) => props.theme.color.black[2]};
  }
`;

const LocationPage = () => {
  return (
    <>
      <MapInfo>
        <strong>
          121-804 서울특별시 마포구 공덕동 115-12 공덕삼성상가 2층 206호 서울
        </strong>
        <p>지하철 5호선 공덕역 3번출구에서 도보 약 100m</p>
      </MapInfo>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.459177293419!2d127.0107758764291!3d37.6148854720262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbcf420e2ccbf%3A0x708ebedbe4568403!2z7ISc6rK964yA7ZWZ6rWQ!5e0!3m2!1sko!2skr!4v1709490396985!5m2!1sko!2skr"
        title="google-maps"
        width="100%"
        height="450"
      ></iframe>
    </>
  );
};

export default LocationPage;
