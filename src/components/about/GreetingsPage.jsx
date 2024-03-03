import styled from 'styled-components';
import greetingsBg from 'assets/greetings-bg.jpg';

const Banner = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
  padding-left: 8%;
  height: 180px;
  background-image: url(${greetingsBg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }

  h3 {
    position: relative;
    font-size: ${(props) => props.theme.fontSize.xxl};
    color: ${(props) => props.theme.color.white};
    font-weight: 400;
    line-height: 1.8;
    z-index: 1;
  }
`;

const PBlock = styled.p`
  line-height: 1.6;
  color: ${(props) => props.theme.color.black[1]};

  &.date {
    margin: 20px 0;
  }

  &.sign {
    font-size: ${(props) => props.theme.fontSize.xl};
    color: ${(props) => props.theme.color.black[2]};
  }

  &.right {
    text-align: right;
  }
`;

const GreetingsPage = () => {
  return (
    <>
      <Banner>
        <h3>
          안녕하세요
          <br />
          한국서비스경영학회 회원여러분
        </h3>
      </Banner>
      <PBlock>
        2024-2025년도 한국서비스경영학회의 회장직을 맡아 봉사를 하게 된
        숭실대학교 경영학부 최정일 교수입니다. 저희 학회는 2000년에 설립되어
        이제 창립 24주년을 맞이하고 있으며, 새로운 산업환경의 물결아래 저희
        학회는 학회의 설립 목적이나 연구범위 측면에서 볼 때 중요한 전환기를 맞고
        있습니다. <br />
        <br />
        글로벌 경영환경은 기업의 규모나 업종에 상관없이 모든 산업현장에서 ESG,
        AI, 빅데이터, 로봇 등의 도입과 함께 상당한 혁신을 요구하고 있습니다.
        이에 따라 서비스에 대한 개념과 패러다임이 더욱 디지털화되고 특히,
        소비자의 고객만족을 뛰어넘어 고객경험의 가치 제고를 요구하고 있습니다.
        한국서비스경영학회의 지난 역사 위에 저는 아래와 같은 활동들을 중점적으로
        추진하고자 합니다. 회원 여러분 모두의 적극적인 참여와 도움을
        부탁드립니다.
        <br />
        <br /> 첫째, 서비스경영 연구의 플랫폼화 및 정책 제안 정보통신기술의
        급속한 발전과 함께 소비자 니즈의 변화로 인해 삶의 질 향상을 위한 서비스
        산업의 고도화가 이루어지고 있습니다. 특히, 서비스 경영은 전통적인 서비스
        운영관리에서 디지털 기반의 서비스 혁신으로 빠르게 진행되고 있으며,
        경쟁우위를 제고하기 위해 기업들이 신기술을 적용하기 위한 노력들을
        경주하고 있습니다. 따라서 매년 춘·추계에 개최되는 학술대회에서 기업과
        연구소, 정부와 공공기관의 참여자들로부터 상당수의 논문 발표와 함께 주요
        이슈에 대한 특별 세션 구성을 기획하고, 최근 들어 더욱 강조되고 있는
        고객경험가치, 서비스디자인, 서비스품질, 서비스코칭 및 ESG경영 등과 관련
        법/제도/정책과 관련된 주제로 라운드 테이블을 기획하여 정책적 현안을
        논의하고자 합니다. 이렇게 서비스경영의 모든 이해관계자들이 함께 유기적인
        협력과 공동의 가치를 창출할 수 있는 플랫폼을 구축하고자 합니다.
      </PBlock>
      <PBlock className="date right">2022년 1월</PBlock>
      <PBlock className="sign right">
        <span>한국열린교육학회장</span> 이 광 성
      </PBlock>
    </>
  );
};

export default GreetingsPage;
