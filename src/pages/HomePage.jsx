import styled from 'styled-components';
import bannerImage from '../assets/banner.jpeg';

const HomeBoard = styled.section`
  max-width: 1080px;
  margin: 0 auto;
`;

const HomePage = () => {
  return (
    <>
      <section>
        <img src={bannerImage} alt="banner" />
      </section>
      <HomeBoard>
        <article>
          <header>
            <h3>공지사항 </h3>
            <button>더보기</button>
          </header>
          <ul>
            <li>
              <p>열린교육연구 32권1호 투고마감연장 (~11/23,목)</p>
              <time dateTime="2023-11-20">2023-11-20</time>
            </li>
            <li>
              <p>열린교육연구 32권1호 투고마감 (~11/20)</p>
              <time dateTime="2023-11-08">2023-11-08</time>
            </li>
            <li>
              <p>열린교육연구 31권6호 투고마감 연장 (~9/24)</p>
              <time dateTime="2023-09-20">2023-09-20</time>
            </li>
            <li>
              <p>2023 국제공동학술대회 (9/23, 태국)</p>
              <time dateTime="2023-09-15">2023-09-15</time>
            </li>
            <li>
              <p>열린교육연구 31권6호 투고마감 (~9/20)</p>
              <time dateTime="2023-09-15">2023-09-15</time>
            </li>
          </ul>
        </article>
        <article>
          <header>
            <h2>공지사항</h2>
            <button>더보기</button>
          </header>
          <ul>
            <li>
              <p>열린교육연구 32권1호 투고마감연장 (~11/23,목)</p>
              <time dateTime="2023-11-20">2023-11-20</time>
            </li>
            <li>
              <p>열린교육연구 32권1호 투고마감 (~11/20)</p>
              <time dateTime="2023-11-08">2023-11-08</time>
            </li>
            <li>
              <p>열린교육연구 31권6호 투고마감 연장 (~9/24)</p>
              <time dateTime="2023-09-20">2023-09-20</time>
            </li>
            <li>
              <p>2023 국제공동학술대회 (9/23, 태국)</p>
              <time dateTime="2023-09-15">2023-09-15</time>
            </li>
            <li>
              <p>열린교육연구 31권6호 투고마감 (~9/20)</p>
              <time dateTime="2023-09-15">2023-09-15</time>
            </li>
          </ul>
        </article>
        <div>
          <h3>로그인</h3>
          <form>
            <input type="text" />
            <input type="text" />
            <button>로그인</button>
          </form>
        </div>
      </HomeBoard>
    </>
  );
};

export default HomePage;
