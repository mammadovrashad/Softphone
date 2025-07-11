import type { ReactNode } from 'react';
import styles from './style.module.css'
import classNames from 'classnames';

type ButtonProps = {
    text?: string,
    bgColor?: string,
    icon?: ReactNode;
    disabled?: boolean,
    variant?:'primary' | 'success' | 'danger'|'warning';
    type?: 'button' | 'submit' | 'reset';
    loading?: boolean;
    className?: string;
    onClick?: () => void;
}

const Index = (props: ButtonProps) => {
    const {variant = 'primary'} = props;
      
    const btnClass = classNames(
        styles.button,styles[variant],{ [styles.disabled]: props.disabled || props.loading },props.className
    );
    return (
        <button
            type={props.type}
            className={btnClass}
            onClick={props.onClick}
            disabled={props.disabled || props.loading}
        >
            {props.icon &&<span className={styles.icon}>{props.icon}</span>}
            {props.loading ? 'Yüklənir...' : props.text}
        </button>
    )
}
export default Index;