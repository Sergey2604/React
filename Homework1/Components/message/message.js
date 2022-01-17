import styles from './message.modules.css'

export const Message = (props) => {
    return <div className={styles.message}>{props.text}</div>
};