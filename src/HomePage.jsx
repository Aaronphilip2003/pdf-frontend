import { useCallback } from "react";
import styles from "./Home.module.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const HomePage = () => {
  const onArrowImageClick = useCallback(() => {
    // Please sync "Quizzes" to the project
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.homeChild} />
      <div className={styles.homeItem} />
      <h1 className={styles.understandingEach}>
        Understanding 😬 each 👥 other with Confidence
      </h1>
      <h1 className={styles.fluentify}>Fluentify</h1>
      <h2 className={styles.quizzesLiteratureReviewContainer}>
        <ul className={styles.quizzes}>
          <li className={styles.quizzes1}>Quizzes</li>
        </ul>
        <p className={styles.blankLine}>&nbsp;</p>
        <ul className={styles.quizzes}>
        <li className={`${styles.quizzes1} hover:underline cursor-pointer`}>
            <Link to="/chats">Chat with Your Data</Link>
        </li>
        </ul>
        <p className={styles.blankLine}>&nbsp;</p>
        <ul className={styles.quizzes}>
        <li className={`${styles.quizzes1} hover:underline cursor-pointer`}>
          <Link to="/vocab">Daily Vocabulary</Link>
        </li>

        </ul>
        <p className={styles.blankLine}>&nbsp;</p>
        <ul className={styles.quizzes}>
          <li className={styles.quizzes1}>Pronounciations</li>
        </ul>
      </h2>
      <div className={styles.text} />
      <img className={styles.frameIcon} alt="" src="/frame-1.svg" />
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <h2 className={styles.supDawg}>Sup Dawg !</h2>
      </div>
      <div className={styles.ellipseGroup}>
        <div className={styles.frameItem} />
        <div className={styles.dawgDogContainer}>
          <p className={styles.blankLine}>Dawg</p>
          <p className={styles.blankLine}>{`≠ Dog `}</p>
        </div>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.sashaCFluentifyContainer}>
        <p className={styles.blankLine}>
          {/* <span>
            <b>Sasha C.</b>
          </span>
        </p>
        <p className={styles.blankLine3}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.blankLine}>
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.fluentifyIsAGameChangingE}>
          <span>
            <span>
              "Fluentify is a game-changing English learning app, highly
              recommended for its engaging lessons and personalized approach."
            </span>
          </span> */}
        </p>
      </div>
      {/* <img className={styles.starIcon} alt="" src="/star-5.svg" />
      <img className={styles.homeChild3} alt="" src="/star-5.svg" />
      <img className={styles.homeChild4} alt="" src="/star-5.svg" />
      <img className={styles.homeChild5} alt="" src="/star-5.svg" />
      <img className={styles.homeChild6} alt="" src="/star-5.svg" /> */}
    </div>
  );
};

export default HomePage;
