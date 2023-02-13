import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';


// комопнент для тестирования
export const BugButton = () => {
    const { t } = useTranslation();

    const [error, setError] = useState(false);

    const onThrow = () => setError(true)

    useEffect(() => {
      if(error) throw new Error('What happenes')
    }, [error])

    return (

        <div>
            <Button onClick={onThrow}>{t('Создать ошибку')}</Button>
        </div>
    );
};
