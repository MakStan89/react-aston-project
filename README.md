Реализованы Требования к функциональности, описанные в прикрепленном документе.

## React

- Функциональные компоненты c хуками в приоритете над классовыми.
- Есть четкое разделение на умные и глупые компоненты.
- Есть рендеринг списков [CardsBoard](./src/components/cards-board/CardsBoard.tsx), [Favourites](./src/pages/favourites/Favourites.tsx).
- Реализована хотя бы одна форма [Search](./src/pages/search/Search.tsx), [SignIn](./src/pages/signin/SignIn.tsx), [SignUp](./src/pages/signup/SignUp.tsx).
- Есть применение Контекст API [App](./src/App.tsx).
- Есть применение предохранителя [ErrorBoundary](./src/components/ErrorBoundary.tsx).
- Есть хотя бы один кастомный хук [useValidation](./src/app/hooks.ts).
- Хотя бы несколько компонентов используют PropTypes [FavouritesItem](./src/components/favourites-item/FavouritesItem.tsx), [HistoryItem](./src/components/history-item/HistoryItem.tsx).
- Поиск не должен триггерить много запросов к серверу.

## Redux

- Используем Modern Redux with Redux Toolkit [reducers](./src/app/reducers/).
- Используем слайсы [reducers](./src/app/reducers/).
- Есть хотя бы одна кастомная мидлвара [localStorageMiddleware](./src/app/localStorageMiddleware.ts).
- Используется RTK Query [apiSlice](./src/app/reducers/api-slice.ts).
- Используется Transforming Responses [apiSlice](./src/app/reducers/api-slice.ts).

## Необязательные

- Использование TypeScript.
