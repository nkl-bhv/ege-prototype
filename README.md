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
