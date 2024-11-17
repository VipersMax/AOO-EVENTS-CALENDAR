const cardContainer = document.getElementById("card-container");

// Пример данных для карточек
const cards = [
  {
    id: 1,
    image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
    title: "Сокровище Медичи",
    description: "Описание карточки 1",
    baseDate: new Date("2024-11-11T00:00:00+00:00").getTime(), // Индивидуальная базовая дата
    duration: 7 * 24 * 60 * 60 * 1000, // Повторение раз в неделю
    activePeriod: 1 * 24 * 60 * 60 * 1000, // Длительность 1 день
  },
  {
    id: 2,
    image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
    title: "Сильнейший командир [Обычный]",
    description: "Описание карточки 2",
    baseDate: new Date("2024-11-11T00:00:00+00:00").getTime(), // Индивидуальная базовая дата
    duration: 14 * 24 * 60 * 60 * 1000, // Повторение раз в две недели
    activePeriod: 3 * 60 * 60 * 1000, // Длительность 3 часа
  },
  {
    id: 3,
    image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
    title: "Сильнейший командир [КЕ]",
    description: "Описание карточки 3",
    baseDate: new Date("2024-11-04T00:00:00+00:00").getTime(), // Индивидуальная базовая дата
    duration: 14 * 24 * 60 * 60 * 1000, // Повторение раз в две недели
    activePeriod: 8 * 24 * 60 * 60 * 1000, // Длительность 3 дней
  },
  {
    id: 4,
    image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
    title: "Вторжение Тирексов",
    description: "Описание карточки 4",
    baseDate: new Date("2024-11-06T00:00:00+00:00").getTime(), // Индивидуальная базовая дата
    duration: 7 * 24 * 60 * 60 * 1000, // Повторение раз в неделю
    activePeriod: 3 * 24 * 60 * 60 * 1000, // Длительность 3 дня
  },
  {
    id: 5,
    image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
    title: "Матерь Смерти",
    description: "Описание карточки 5",
    baseDate: new Date("2024-11-15T00:00:00+00:00").getTime(), // Индивидуальная базовая дата
    duration: 7 * 24 * 60 * 60 * 1000, // Повторение раз в неделю
    activePeriod: 24 * 60 * 60 * 1000, // Длительность 24 часа
  },
  {
    id: 6,
    image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
    title: "Кулак Апокалипсиса",
    description: "Описание карточки 6",
    baseDate: new Date("2024-11-12T00:00:00+00:00").getTime(), // Индивидуальная базовая дата
    duration: 7 * 24 * 60 * 60 * 1000, // Повторение раз в неделю
    activePeriod: 24 * 60 * 60 * 1000, // Длительность 24 часа
  },
  {
    id: 7,
    image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
    title: "Богатство алианса",
    description: "Описание карточки 7",
    baseDate: new Date("2024-11-11T00:00:00+00:00").getTime(), // Индивидуальная базовая дата
    duration: 30 * 24 * 60 * 60 * 1000, // Повторение раз месяц
    activePeriod: 4 * 24 * 60 * 60 * 1000, // Длительность 4 дня
  },
  {
    id: 8,
    image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/8.png",
    title: "Обстрел Гигантской пушкой",
    description: "Нужно улучшить пушку с помощью Сплава (получаем в ивенте `Турнир героев`) и Чипов, после чего набрать очки убивая нападающих на пушку зомби.",
    baseDate: new Date("2024-11-14T00:00:00+00:00").getTime(), // Индивидуальная базовая дата
    duration: 14 * 24 * 60 * 60 * 1000, // Повторение раз в 2 недели
    activePeriod: 3 * 24 * 60 * 60 * 1000, // Длительность 3 дня
  },
  {
    id: 9,
    image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/9.png",
    title: "Турнир героев",
    description: "Получаем Сплав для улучшения гигантской пушки. <br>Задания: Ускорить 100 и 300 мин; Обработать материалы 10 и 20 раз; Убить 5 зомби; Вклады в альянс 10 раз.",
    baseDate: new Date("2024-11-14T00:00:00+00:00").getTime(), // Индивидуальная базовая дата
    duration: 14 * 24 * 60 * 60 * 1000, // Повторение раз в 2 недели
    activePeriod: 3 * 24 * 60 * 60 * 1000, // Длительность 3 дня
  },
  {
    id: 10,
    image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/10.png",
    title: "Распродажа ресурсов на выходных",
    description: "Скидки на расходники в магазине игры за золото.",
    baseDate: new Date("2024-11-15T00:00:00+00:00").getTime(), // Индивидуальная базовая дата
    duration: 7 * 24 * 60 * 60 * 1000, // Повторение раз в неделю
    activePeriod: 4 * 24 * 60 * 60 * 1000, // Длительность 4 дня
  },
  {
    id: 11,
    image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/11.png",
    title: "Борьба за столицу",
    description: "Нужно захватывать бащни и столицу мира. Побеждает альянс, который наберет наибольшее количество очков.",
    baseDate: new Date("2024-11-16T21:00:00+00:00").getTime(), // Индивидуальная базовая дата
    duration: 30 * 24 * 60 * 60 * 1000, // Повторение раз в месяц
    activePeriod: 3 * 60 * 60 * 1000, // Длительность 3 часа
  },
  {
    id: 12,
    image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/12.png",
    title: "Жаркое сражение",
    description: "Начало битвы между серверами. <br>Выдвется телепорт между мирами и нужно набить как можно больше очков, убивая вражеские войска.",
    baseDate: new Date("2024-11-17T00:00:00+00:00").getTime(), // Индивидуальная базовая дата
    duration: 30 * 24 * 60 * 60 * 1000, // Повторение раз в месяц
    activePeriod: 1 * 24 * 60 * 60 * 1000, // Длительность 1 день
  },
  {
    id: 13,
    image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/13.png",
    title: "Обновление Бесконечной орды зомби",
    description: "В режиме `бесконечная орда зомби` сбрасываются набранные очки и нужно снова пройти уровень в ручном режиме.",
    baseDate: new Date("2024-11-15T00:00:00+00:00").getTime(), // Индивидуальная базовая дата
    duration: 7 * 24 * 60 * 60 * 1000, // Повторение раз в неделю
    activePeriod: 1 * 24 * 60 * 60 * 1000, // Длительность 1 день
  },
];

// Функция для создания карточки
function createCard(card) {
  const cardElement = document.createElement("div");
  cardElement.className = "card";

  const eventInfo = document.createElement("div");
  eventInfo.className = "event-info";
  eventInfo.id = `event-info-${card.id}`;

  const repeatInfo = document.createElement("div");
  repeatInfo.className = "repeat-info";
  repeatInfo.id = `repeat-info-${card.id}`;

  cardElement.innerHTML = `
    <img src="${card.image}" alt="${card.title}">
    <div class="card-content">
      <div class="card-title">${card.title}</div>
      <div class="card-description">${card.description}</div>
    </div>
  `;

  const timerContainer = document.createElement("div");
  timerContainer.className = "card-timer";
  timerContainer.appendChild(eventInfo);
  timerContainer.appendChild(repeatInfo);

  cardElement.appendChild(timerContainer);
  cardContainer.appendChild(cardElement);

  startTimer(card, cardElement, eventInfo, repeatInfo);
}

// Таймер с учетом активности карточки
function startTimer(card, cardElement, eventInfoElement, repeatInfoElement) {
  function updateTimer() {
    const now = Date.now();

    // Рассчитываем начало текущего цикла события
    const cycleStart = card.baseDate + Math.floor((now - card.baseDate) / card.duration) * card.duration;

    // Время до завершения текущего активного периода
    const activeEnd = cycleStart + card.activePeriod;
    const activeRemaining = activeEnd - now;

    // Проверяем, активно ли событие
    const isActive = activeRemaining > 0;

    // Подсвечиваем активные карточки
    cardElement.style.backgroundColor = isActive ? "lightgreen" : "#e5e5e5";

    if (isActive) {
      // Дни, часы и минуты до завершения активного периода
      const activeDays = Math.floor(activeRemaining / (24 * 60 * 60 * 1000)); // Дни
      const activeHours = Math.floor((activeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)); // Часы
      const activeMinutes = Math.floor((activeRemaining % (60 * 60 * 1000)) / (60 * 1000)); // Минуты

      // Обновляем информацию о времени действия события
      eventInfoElement.style.color = "red";
      eventInfoElement.textContent = `Ивент действует: ${activeDays}д ${activeHours}ч ${activeMinutes}м`;
    } else {
      eventInfoElement.textContent = "Ивент завершен";
    }

    // Рассчитываем время до следующего повторного события
    const remaining = cycleStart + card.duration - now;
    const repeatWeeks = Math.floor(remaining / (7 * 24 * 60 * 60 * 1000)); // Недели
    const repeatDays = Math.floor((remaining % (7 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)); // Дни
    const repeatHours = Math.floor((remaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)); // Часы
    const repeatMinutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000)); // Минуты

    // Обновляем информацию о времени до следующего повторного события
    repeatInfoElement.textContent = `До повтора ивента: ${repeatWeeks}н ${repeatDays}д ${repeatHours}ч ${repeatMinutes}м`;

    // Проверяем, если до повтора события осталось менее 24 часов, выделяем карточку желтым
    if (remaining < 24 * 60 * 60 * 1000) { // Меньше 24 часов
      cardElement.style.backgroundColor = "#e8e87d";
    }

    // Повторный запуск таймера
    requestAnimationFrame(updateTimer);
  }

  updateTimer();
}

// Сортировка карточек по активности и времени
function renderCards() {
  cardContainer.innerHTML = "";
  const now = Date.now();

  // Сортировка: активные карточки первыми, затем по времени
  cards.sort((a, b) => {
    const cycleStartA =
      a.baseDate +
      Math.floor((now - a.baseDate) / a.duration) * a.duration;
    const cycleStartB =
      b.baseDate +
      Math.floor((now - b.baseDate) / b.duration) * b.duration;

    const activeEndA = cycleStartA + a.activePeriod;
    const activeEndB = cycleStartB + b.activePeriod;

    const isActiveA = now < activeEndA;
    const isActiveB = now < activeEndB;

    // Если одна карточка активна, а другая нет, активная будет выше
    if (isActiveA && !isActiveB) return -1;
    if (!isActiveA && isActiveB) return 1;

    // Если обе активны или обе неактивны, сортируем по времени до следующего цикла
    const nextA = cycleStartA + a.duration;
    const nextB = cycleStartB + b.duration;

    return nextA - nextB;
  });

  cards.forEach(createCard);
}

renderCards();
