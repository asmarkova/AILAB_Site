# 🚀 Инструкция по публикации AI LAB на GitHub + Vercel

## Шаг 1: Создание репозитория на GitHub

1. Перейдите на [GitHub](https://github.com)
2. Нажмите "+" → "New repository"
3. Заполните:
   - **Repository name**: `ai-lab-website` (или любое другое название)
   - **Description**: `AI LAB - AI Laboratory for Business Optimization`
   - **Visibility**: Public или Private (на ваш выбор)
   - ❌ **НЕ** ставьте галочки "Add README" или "Add .gitignore" (у нас уже есть)
4. Нажмите "Create repository"

## Шаг 2: Подключение локального репозитория к GitHub

После создания репозитория GitHub покажет инструкции. Выполните эти команды:

```bash
# Перейдите в папку проекта
cd "/Users/a1/Анастасия/Проекты  Claude/Копия 2 с анимацией/ai-lab-react"

# Добавьте remote репозиторий (замените URL на свой из GitHub)
git remote add origin https://github.com/ваш-username/ai-lab-website.git

# Проверьте, что remote добавлен
git remote -v

# Переключитесь на главную ветку (если нужно)
git checkout -b main

# Или переименуйте текущую ветку
git branch -M main

# Отправьте код на GitHub
git push -u origin main
```

**Альтернатива (если используете SSH):**
```bash
git remote add origin git@github.com:ваш-username/ai-lab-website.git
git push -u origin main
```

## Шаг 3: Подключение к Vercel

### 3.1 Регистрация/Вход в Vercel

1. Перейдите на [vercel.com](https://vercel.com)
2. Нажмите "Sign Up" или "Log In"
3. Выберите "Continue with GitHub" для удобной интеграции

### 3.2 Импорт проекта

1. После входа нажмите **"Add New..."** → **"Project"**
2. Найдите ваш репозиторий `ai-lab-website` в списке
3. Нажмите **"Import"**

### 3.3 Настройка проекта

Vercel автоматически определит, что это Vite проект. Проверьте настройки:

- **Framework Preset**: Vite
- **Root Directory**: `./` (корень проекта)
- **Build Command**: `npm run build` или `vite build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3.4 Environment Variables (если нужно)

Если у вас есть переменные окружения, добавьте их здесь:
- Пока переменных нет, можно пропустить

### 3.5 Деплой

1. Нажмите **"Deploy"**
2. Дождитесь завершения сборки (обычно 1-2 минуты)
3. После успешного деплоя вы получите временный URL вида: `https://ai-lab-website.vercel.app`

## Шаг 4: Подключение домена ai-lab.company

### 4.1 Добавление домена в Vercel

1. Откройте ваш проект в Vercel
2. Перейдите в **Settings** → **Domains**
3. Нажмите **"Add"**
4. Введите `ai-lab.company` и нажмите **"Add"**
5. Также добавьте `www.ai-lab.company` (опционально)

### 4.2 Настройка DNS записей

Vercel покажет инструкции по настройке DNS. Вам нужно добавить записи:

#### Вариант A: A Records (рекомендуется)
```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto
```

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

#### Вариант B: CNAME Record (если A Records не работают)
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: Auto
```

### 4.3 Где добавить DNS записи

1. Перейдите к вашему регистратору домена (где вы купили ai-lab.company)
   - Примеры: GoDaddy, Namecheap, REG.RU, Cloudflare и т.д.
2. Найдите раздел **"DNS Settings"** или **"DNS Management"**
3. Добавьте записи, указанные выше
4. Сохраните изменения

**⏰ Важно**: DNS изменения могут занять от 5 минут до 48 часов

### 4.4 Проверка SSL сертификата

После настройки DNS:
1. Вернитесь в Vercel → Settings → Domains
2. Дождитесь, пока статус домена станет **"Valid"**
3. Vercel автоматически выпустит SSL сертификат (HTTPS)

## Шаг 5: Автоматические обновления

Теперь при каждом push в GitHub ваш сайт будет автоматически обновляться:

```bash
# Внесите изменения в код
git add .
git commit -m "Update content"
git push origin main
```

Vercel автоматически:
1. Обнаружит изменения
2. Запустит сборку
3. Опубликует новую версию
4. Все это займет 1-2 минуты!

## Шаг 6: Проверка работы сайта

После завершения настройки проверьте:

1. ✅ **Домен работает**: https://ai-lab.company
2. ✅ **HTTPS включен**: Зеленый замок в браузере
3. ✅ **Favicon отображается**: Иконка во вкладке браузера
4. ✅ **OG изображения**: Отправьте ссылку в Telegram - должно быть превью
5. ✅ **Переключение языков**: Кнопка EN/RU работает
6. ✅ **Все страницы доступны**:
   - https://ai-lab.company/
   - https://ai-lab.company/academy

## Полезные команды

```bash
# Проверить статус Git
git status

# Посмотреть последние коммиты
git log --oneline -5

# Посмотреть remote репозитории
git remote -v

# Создать новую ветку для тестирования
git checkout -b feature/new-feature

# Вернуться на главную ветку
git checkout main

# Обновить с GitHub (если работаете с нескольких устройств)
git pull origin main
```

## Troubleshooting (Решение проблем)

### Проблема: "Push rejected" при git push

**Решение**:
```bash
git pull origin main --rebase
git push origin main
```

### Проблема: Домен не работает после настройки DNS

**Решение**:
1. Проверьте DNS записи командой:
   ```bash
   dig ai-lab.company
   ```
2. Подождите еще - DNS может занять до 48 часов
3. Очистите кэш DNS:
   ```bash
   sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
   ```

### Проблема: Vercel build failed

**Решение**:
1. Проверьте логи в Vercel Dashboard
2. Убедитесь, что проект собирается локально:
   ```bash
   npm run build
   ```
3. Проверьте версии Node.js в Vercel Settings

### Проблема: Сайт работает, но изображения не загружаются

**Решение**:
Убедитесь, что все изображения находятся в папке `public/` и пути правильные

## Контакты поддержки

- **Vercel Support**: https://vercel.com/support
- **GitHub Support**: https://support.github.com

---

🎉 **Готово!** Ваш сайт AI LAB опубликован и будет автоматически обновляться при каждом изменении кода!
