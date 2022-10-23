# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Тестовое задание для SKDESIGN по макету

## Требования
### Обязательные:
1. Сделана вёрстка по макету

2. Элементы выпадающего списка наполнены из приложенных json файлов

3. Валидация и формы реализованы комбинацией **React hook form** (т.к легче Formik) и **yupValidation**. Кнопка подтверждения недоступна до валидного заполнения 5 обязательных полей

4. Валидация выпадающих списков происходит через компонент **Controller RHF**.

5. Все инпуты динамичные и работают в режиме 'onChange'. В случае некорректного заполнения, компонент приобретает красные границы и появляется сообщение об ошибке.

6. После нажатия кнопки сабмит происходит задержка в 2 секунды имитирующая запрос, в это время в кнопке появляется спиннер. По окончанию процесса значения полей возвращаются к исходным и формируется json из данных который можно проверить в консоле.

7. Все переиспользованные компоненты сделаны с помощью **styled-components**.

## Дополнительные требования

1. Проект полностью написан на **TypeScript**, есть пример использования **Generic types** и кастомных типов.

2. Сделана адаптивная вёрстка для мобильных устройств, после 760px макет выстраивается в колонку (всё реализовано с помощью CSS GRID)

3. При создании инпута телефона использовался **react-input-mask**. Реализация идёт тоже через контроллер.

## P.S.

1. По заданию нужно реализовать ошибки в выпадающем списке, но ошибки можно будет видеть только при режиме валидации *onSubmit*, это вызвано особенностями выпадающих списков и тем, что это обязательное поле. (Функционал и дизайн реализованы) 

2. Номер телефона не форматируется при отправке в редакс-стор, это сделано для минимизации кода. Функция для извлечения номера без символов в маске доступна по пути (*src/utils/form/extractNumbersFromPhone*).

3. Также я знаю библиотеку MUI, но решил что правильнее и нагляднее будет написать свои компоненты. У меня есть опыт стилизации MUI компонентов с помощью styled-components. В этом проекте я стилизовал react-select c помощью стайлд.