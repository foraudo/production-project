import React from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { Applink, ApplinkTheme } from 'shared/ui/Applink/Applink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.link}>
        <Applink to="/" className={cls.mainLink} theme={ApplinkTheme.SECONDARY}>
          Main
        </Applink>
        <Applink to="/about" className={cls.mainLink} theme={ApplinkTheme.RED}>
          About
        </Applink>
      </div>
    </div>
  );
};
