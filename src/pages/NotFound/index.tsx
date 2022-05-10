import styles from './NotFound.module.scss';
import {ReactComponent as Logo} from '../../assets/not_found.svg';
import classNames from 'classnames';
import stylesTema from '../../styles/Tema.module.scss';

export default function NotFound() {

    const Voltar = () => {
        window.history.back();
    };

    return (
        <div className={classNames({
            [styles.container]: true,
            [stylesTema.container]: true
        })}>
            <div className={styles.voltar}>
                <button onClick={Voltar}>
                    {'< Voltar'}
                </button>
            </div>
            <Logo/>
        </div>
    );
}