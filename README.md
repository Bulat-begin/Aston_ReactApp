# 1 уровень (необходимый минимум)

- Реализованы следующие требования к функциональности:

- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, использую LocalStorage.

## React

- [x] Пишем функциональные компоненты c хуками в приоритете над классовыми: [<a href="https://github.com/Bulat-begin/Aston_ReactApp/blob/master/src/components/card/card.jsx">components</a>]
- [x] Есть разделение на умные и глупые компоненты. Пример умного: ([Card](https://github.com/Bulat-begin/Aston_ReactApp/blob/master/src/components/card/card.jsx)), пример глупого: ([Footer](https://github.com/Bulat-begin/Aston_ReactApp/blob/master/src/components/Footer/Footer.js))
- [x] Есть рендеринг списков: ([SearchList](https://github.com/Bulat-begin/Aston_ReactApp/blob/master/src/components/search-list/search-list.jsx))
- [x] Реализована хотя бы одна форма: ([Form](https://github.com/Bulat-begin/Aston_ReactApp/blob/master/src/components/form/form.jsx))
- [x] Есть применение Контекст API: [ThemeContext](https://github.com/Bulat-begin/Aston_ReactApp/blob/master/src/context/theme-provider.jsx).
- [x] Есть применение предохранителя: [ErrorBoundary](https://github.com/Bulat-begin/Aston_ReactApp/blob/master/src/components/error-boundary.jsx).
- [x] Есть хотя бы один кастомный хук: [useDebounce](https://github.com/Bulat-begin/Aston_ReactApp/blob/master/src/hooks/use-debounce.js).
- [x] Хотя бы несколько компонентов используют PropTypes ([Card](https://github.com/Bulat-begin/Aston_ReactApp/blob/master/src/components/card/card.jsx)).
- [x] Поиск не должен триггерить много запросов к серверу ([useDebounce](https://github.com/Bulat-begin/Aston_ReactApp/tree/master/src/hooks/use-debounce.js)).
- [x] Есть применение [lazy + Suspense](https://github.com/Bulat-begin/Aston_ReactApp/blob/master/src/App.tsx).

## Redux

- [x] Используем Modern Redux with Redux Toolkit ([store](https://github.com/Bulat-begin/Aston_ReactApp/blob/master/src/store.ts))
- [x] Используем слайсы: ([historySlice](https://github.com/Bulat-begin/Aston_ReactApp/blob/master/src/redux/slices/history-slice.js))
- [x] Есть хотя бы одна кастомная мидлвара: ([middlware](https://github.com/Bulat-begin/Aston_ReactApp/blob/master/src/redux/middleware.js))
- [x] Используется RTK Query: ([playlistsApi](https://github.com/Bulat-begin/Aston_ReactApp/blob/master/src/api/playlists-api.jsx))
- [x] Используется Transforming Responses:([playlistsApi](https://github.com/Bulat-begin/Aston_ReactApp/blob/master/src/api/playlists-api.jsx))
