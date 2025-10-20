# ЕГЭ-Прокачка — стартовый шаблон (Next.js 14 + Tailwind + PWA)

Мобильный UX, экран главного меню, мок-данные, базовое PWA (manifest + регистрация SW).

## Запуск локально
```bash
npm i
npm run dev
```

Открой: http://localhost:3000

## Сборка
```bash
npm run build
npm start
```

## Развёртывание на Vercel

— Root Directory: / (корень репозитория)
— Framework Preset: Next.js
— Никаких экспериментальных опций в next.config.mjs
— Команды установки и билда указаны в `vercel.json`, поэтому Vercel будет собирать проект из корня (`npm install` → `npm run build`).

### Архитектура проекта

## Сборка
```bash
npm run build
npm start
```
app/                 # App Router: layout, главная страница и PWA-хук
components/          # Переиспользуемые UI-блоки (TopStatusBar, Roadmap и т.п.)
lib/                 # Типы и мок-данные, которые питают UI
public/              # Статика + PWA (manifest, service worker, иконки)
styles/globals.css   # Tailwind reset и глобальные токены
tailwind.config.ts   # Темы и токены Tailwind
vercel.json          # Команды установки/сборки для окружений Vercel
```

* `app/layout.tsx` подключает глобальные стили и регистрирует service worker, благодаря чему PWA работает на каждом рендере.
* `app/page.tsx` собирает экран из компонентов и передаёт им мок-данные из `lib/mock-data.ts`.
* Каждый компонент (`components/*.tsx`) отвечает за отдельный блок UI и не содержит бизнес-логики; состояния (текущий урок, прогресс) задаются через пропсы.
* Tailwind-токены и глобальные стили лежат в одном месте, что позволяет синхронно менять визуальный язык.
* Service worker (`public/sw.js`) и манифест (`public/manifest.webmanifest`) обеспечивают офлайн-кеш и установку на домашний экран.

### Диагностика конфликтов и сборки

1. Убедитесь, что в проекте нет старой папки `apps/web`. Если Vercel продолжает собирать из неё (в логах встречаются пути `apps/web/...`), откройте настройки проекта на Vercel и поменяйте **Root Directory** на `/`.
2. После смены корня повторите деплой: `npm install` → `npm run build`. Эти команды уже прописаны в `vercel.json`, так что дополнительная настройка не нужна.
3. Если появляются конфликты в README, оставьте актуальный блок выше и удалите маркеры `<<<<<<<`, `=======`, `>>>>>>>`.

### Поток данных на главном экране

1. `app/page.tsx` импортирует `mockStats` и `mockSubject` из `lib/mock-data.ts` и передаёт их в компоненты.
2. `TopStatusBar`, `DailyGoalCard`, `SubjectHero`, `LessonRoadmap` читают эти пропсы и отрисовывают соответствующие куски UI.
3. `LessonRoadmap` прокидывает каждый узел в `LessonNodeCard`, где Framer Motion отвечает за анимации появления, а Tailwind — за состояния (locked/current/completed).
4. Нижняя навигация (`BottomNav`) статична, но её можно расширить, подключив роуты App Router.
5. Благодаря строгим типам в `lib/types.ts` любые расхождения данных будут найдены компилятором.
