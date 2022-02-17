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
          I grew up in a small kampung called Limbang district of Sarawak,
          Malaysia. It only has the population of Bishan Singapore. I have
          always wanted to explore the bigger world so I have taken up ASEAN
          Scholarship in 2012, leading to my Singapore journey. With my love for
          numbers, I have completed Bachelor of Accountancy in Nanyang
          Technological University in year 2019. My interest for computing
          sparked from the 4 computing elective modules I have chosen during
          university. They are introduction to computational thinking, digital
          logic, data structures and machine learning in business and finance. I
          remembered spending hours reading up and coding, instead of focusing
          on accounting modules (oopss).
        </p>
        <br />
        <p id="aboutThree">
          After 2 years in the audit industry, I took the leap of faith to
          pursue my passion for programming in 2021 and attended Software
          Engineering Immersive bootcamp by General Assembly. During the course,
          I have learnt to build a MERN stack (MongoDB, Express, React and Node
          JS), relational database PostgreSQL, Python and Django. With the
          course coming to an end, I am ready to be a ‘forever student’ to
          continue building my knowledges and stay updated with latest
          technology changes. Now, I hope to put my skills into test in solving
          real-world problems. Let’s connect if you share similar interest or
          have an opportunity for me!{" "}
        </p>
      </div>
    </>
  );
};

export default AboutMe;
