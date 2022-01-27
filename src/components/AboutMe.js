import NavBar from "./NavBar";

const AboutMe = () => {
  return (
    <>
      <NavBar />
      <div className="aboutPara">
        <p id="aboutHello">HELLO! </p>
        <p id="aboutName"> I am Sheah Wen.</p>
        <br />
        <p id="aboutTwo">
          Growing up in a small town in Limbang, Sarawak State of Malaysia, I
          have always wanted to explore the bigger world and curious about
          everything new. Being awarded ASEAN Scholarship in 2012 led me onto my
          Singapore journey. With my love for numbers, I have chosen Bachelor of
          Accountancy in Nanyang Technological University and completed it in
          year 2019. While in school, I have taken 4 computing elective modules
          – introduction to computational thinking, digital logic, data
          structures and machine learning in business and finance. That sparked
          my interest in programming and soon I realized I was spending hours
          coding.{" "}
        </p>
        <br />
        <p id="aboutThree">
          In 2021, I took the leap of faith to pursue my passion for programming
          and attended Software Engineering Immersive bootcamp by General
          Assembly. During the course, I have learnt to build a MERN stack
          (MongoDB, Express, React and Node JS), relational database PostgreSQL,
          Python and Django. With the course coming to an end, I am ready to be
          a ‘forever student’ to continue building my knowledges and stay in
          tune with the latest updates. Now, I hope to put my skills into test
          in solving real-world problems. Let’s connect if you share similar
          experience or have an opportunity for me!{" "}
        </p>
      </div>
    </>
  );
};

export default AboutMe;
