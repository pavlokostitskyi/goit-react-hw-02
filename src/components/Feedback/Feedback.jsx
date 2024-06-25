import styles from './Feedback.module.css'

const Feedback = ({ feedback, total, positivePercentage }) => (
  <div className={styles.feedback}>
    <h2>Statistics</h2>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </div>
);

export default Feedback;
