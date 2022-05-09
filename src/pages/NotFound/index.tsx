import styles from './NotFound.module.scss';
import {ReactComponent as Logo} from '../../assets/not_found.svg';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <Logo/>
        </div>
    );
}