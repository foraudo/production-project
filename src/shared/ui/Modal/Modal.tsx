import { useTheme } from 'app/providers/ThemeProvider';
import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
 }

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const { theme } = useTheme();

    const {
        className, children, isOpen, onClose, lazy,
    } = props;

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const onContentClick = (e : React.MouseEvent) => {
        e.stopPropagation();
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(
                () => {
                    onClose();
                    setIsClosing(false);
                },
                ANIMATION_DELAY,
            );
        }
    }, [onClose]);

    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timerRef.current);
        };
    }, [isOpen, onKeyDown]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
        return () => {
            setIsMounted(false);
        };
    }, [isOpen]);

    if (lazy && !isMounted) {
        return null;
    }
    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [className, theme])}
                onClick={closeHandler}
            >

                <div
                    className={cls.overlay}

                >
                    <div
                        className={cls.content}
                        onClick={onContentClick}

                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
