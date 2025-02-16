﻿Приложение с рецептами блюд

Необходимо было создать фуллстек-приложение с рецептами блюд, которое будет использовать Django Rest Framework,
автодокументацию OpenAPI+Swagger и react-router.

 Задание

Давать пользователю возможность создавать рецепты не нужно: достаточно распределить их по категориям
и отображать в клиенте и в API.
Где отображать документацию API — решать самим.
У каждого блюда и каждой категории должна быть своя страница: с главной страницы можно перейти на любую
из категорий, а из категории — на любой рецепт этой категории.

Для начало работы необходимо:

1. Создать каталог и скопировать в него из репозитория файлы.
2. В каталоге необходимо установить и запустить виртуальную среду: `python -m venv venv`, `venv\scripts\activate`.
3. Далее перейти в директорию проекта: `cd DjangoReactRezept`.
4. Установить зависимости: `pip install -r requirements.txt`.

6. Запустите сервер: `python manage.py runserver`.
7. После запуска Django-сервера, вся дальнейшие действия производятся в React-приложении.
8. Запустите параллельно второй терминал.
9. Перейдите в директорию React-приложения  `cd DjangoReactRezept/reactDjangoRezept`.
10. Установите зависимости: `npm install`.
11. Запустите сервер разработки: `npm start`.
12. После запуска сервера разработки вы будете перенаправлены на сервер  `http://localhost:8080/`, где будет запущено приложение.

Как использовать приложение:

- После запуска приложения, доступна главная страница со списком  категорий блюд.
- При нажатии на название категории, открывается выбранная категория со списком доступных рецептов.
- При нажатии на название блюда, открывается рецепт выбранного блюда.
- Вернуться на главную страницу  можно по ссылке `Категории`  в шапке приложения.
- Ознакомиться с документацией API можно  по ссылке `OpenAPI`  в шапке приложения.

 использованные в проекте технологии:

`React`
`react-router`
`Swagger`
`Axios`
`Bootstrap`

`Django`
`Django Rest Framework`
`Автодокументация OpenAPI`


