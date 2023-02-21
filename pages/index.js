import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Skills from "../src/components/sections/Skills";
import Summary from "../src/components/sections/Summary";   
import TypingAnimation from "../src/components/TypingAnimation";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";

const bio = `<p>
I am Nguyen Ngoc Tuong Vi, front-end developer. I have 2 years of experience in
building dynamic and engaging user interfaces for web applications.
</p>`;
const IndexDark = () => {
  return (
    <Layout bg={"blured"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />
        <link rel="stylesheet" href="css/new-skin/minimal-skin.css" />
      </Head>
      <Header />
      <Home>
        <div className="profile no-photo">
          <div
            className="slide"
            style={{ backgroundImage: "url(images/ava.jpg)" }}
          />
          <div className="title">Nguyen Ngoc Tuong Vi</div>
          <TypingAnimation />
          <div className="social">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/nntvi"
            >
              <span className="fa fa-linkedin" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/nntvi">
              <span className="fa fa-github" />
            </a>
            <div rel="noreferrer" style={{ marginTop: "10px" }}>
              nntvi.2609@gmail.com
            </div>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <div className="lnk">
              <span class="ion ion-ios-telephone"></span>
              <span className="text">+84 037 953 1098</span>
            </div>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Summary />
          <Quote />
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
        </Resume>
      </ContentContainer>
    </Layout>
  );
};
export default IndexDark;
