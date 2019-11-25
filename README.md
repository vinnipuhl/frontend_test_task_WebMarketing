# Test task - Front-End Developer - Web Marketing

**Задание**: сверстать страницу листинга интернет-магазина, в которой нужно отрендерить датасет из [файла dataset.json](https://raw.githubusercontent.com/alexnaidovich/frontend_test_task/master/dataset.json). Дизайн - произвольный, за основу можно взять пример в данном репозитории ([jpeg](https://raw.githubusercontent.com/alexnaidovich/frontend_test_task/master/marketplace_sketch.jpg), [figma](https://www.figma.com/file/GZDWwVSeu1N8KHRH7B0may/Test_task_sketch?node-id=0%3A1)). Фотографии к карточкам товаров из датасета лежат в [папке src/img](https://github.com/alexnaidovich/frontend_test_task/tree/master/src/img) данного репозитория. По готовности отправить мне в [телеграм](https://t.me/alexnaidovich) 2 ссылки: на репозиторий с исходным кодом проекта и на сверстанную страницу, задеплоенную на любой бесплатный хостинг (Github Pages, Zeit Now, Netlify, Heroku и др.). 

**Что можно (и приветствуется)**:

  * Инструменты автоматизации сборки (**Webpack**, Parcel, Gulp и др.). Идеальный пример - датасет импотрируется в вебпак, и загоняется на страницу посредством `HTMLWebpackPlugin` (контр-идеальный пример - данные из датасета копируются и вставляются в html посредством `"копировать/вставить"`);
  * HTML-шаблонизаторы (EJS, Handlebars, **Pug/Jade**);
  * LESS/SASS/**SCSS**;
  * CSS-фреймворки (**Bulma**, Bootstrap, Materialize, etc.);
  * Декомпозиция в максимально разумных пределах (идеальный пример: 1 компонент - 1 pug-шаблон - 1 scss-миксин).
  
> Полужирным отмечен стек, который используется на данный момент.

**Что нельзя**:

  * Реактивные JS-фреймворки (React/Angular/Vue/Svelte/etc);
  * Если используются инструменты автоматизации сборки - помещать в один репозиторий с исходным кодом файлы готового билда и папку `node_modules`.
