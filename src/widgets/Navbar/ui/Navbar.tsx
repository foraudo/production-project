import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Applink, ApplinkTheme } from 'shared/ui/Applink/Applink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('Страница');
  // const { t } = useTranslation(['Главная страница', 'О сайте']);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.link}>
        <Applink to="/" className={cls.mainLink} theme={ApplinkTheme.SECONDARY}>
          {t('Cтраница')}
        </Applink>
        <Applink to="/about" className={cls.mainLink} theme={ApplinkTheme.RED}>
          {t('О сайте')}
        </Applink>
      </div>
    </div>
  );
};
