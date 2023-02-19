import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Applink, ApplinkTheme } from 'shared/ui/Applink/Applink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation(['main', 'about']);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.link}>
                <Applink to="/" className={cls.mainLink} theme={ApplinkTheme.SECONDARY}>
                    {t('Главная страница', { ns: 'main' })}
                </Applink>
                <Applink to="/about" className={cls.mainLink} theme={ApplinkTheme.RED}>
                    {/* {t('О сайте', { ns: 'about' })} */}
                    {t('О сайте', { ns: 'about' })}
                </Applink>
            </div>
        </div>
    );
};
