import classNames from 'classnames';
import { Prato } from 'types/Prato';
import styles from './Tags.module.scss';

export default function Tags({
    category, size, serving, price,
}: Prato) {
    return (
        <div className={styles.item__tags}>
            <div className={classNames({
                [styles.tag__tipo]: true,
                [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true
            })}>
                {category.label}
            </div>
            <div className={styles.item__porcao}>
                {size}g
            </div>
            <div className={styles.item__qtdpessoas}>
                Serve {serving} pessoa{serving === 1 ? '' : 's'}
            </div>
            <div className={styles.item__valor}>
                R$ {price.toFixed(2)}
            </div>
        </div>
    );
}