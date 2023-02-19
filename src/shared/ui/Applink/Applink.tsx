import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Applink.module.scss';

export enum ApplinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface ApplinkProps extends LinkProps {
  className?: string;
  theme?: ApplinkTheme;
}

export const Applink: FC<ApplinkProps> = (props) => {
    const {
        to, className, children, theme, ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.Applink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    );
};
