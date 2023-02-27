import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Applink, ApplinkTheme } from 'shared/ui/Applink/Applink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Main from 'shared/assets/icon/main.svg';
import About from 'shared/assets/icon/about.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation(['main', 'about']);

    const onToggle = async () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}

        >
            <div className={cls.items}>
                <Applink
                    to={RoutePath.main}
                    theme={ApplinkTheme.SECONDARY}
                    className={cls.item}
                >
                    <Main className={cls.icon} />
                    <span className={cls.link}>
                        {t('Главная страница', { ns: 'main' })}
                    </span>
                </Applink>

                <Applink
                    to={RoutePath.about}
                    theme={ApplinkTheme.SECONDARY}
                    className={cls.item}
                >
                    <About className={cls.icon} />
                    <span className={cls.link}>
                        {t('О сайте', { ns: 'about' })}
                    </span>
                </Applink>

            </div>
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            {/* <BugButton /> */}
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};
