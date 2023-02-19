import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>{story()}</BrowserRouter>
);

// мы говорим что в эту функцию , будет переданая функция которая вернет сам компонент .
// Эти компоненты находятся в наших файлах stories.
// Оборачиваем в BrowserRouter , что бы router dom смог выполнять свои функции в сторибук
