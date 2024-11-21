const cardContainer = document.getElementById("card-container");

// Пример данных для карточек
const cards = [
  {
    id: 1,
    image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
    title: "Сокровище Медичи",
    description: "Нужно проходить этажи с зомби в ивенте, что бы заработать очки. <br>Расстановка войск: 1 ряд построения: 500 дуэлянтов (пилы) + по 250 воинов из каждого оставшегося типа войск; 2 ряд построения: по 500 воинов из каждого типа войск + максимум био-зомби; 3 ряд построения: максимум снайперов и минометов (уклон на тех, чей уровень выше) + 1000 щитов + 1000 эми лазеров",
    baseDate: new Date("2024-11-11T00:00:00+00:00").getTime(), // Индивидуальная базовая дата
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

  cardContainer.appendChild(cardElement);

  startTimer(card, cardElement, eventInfo, repeatInfo);
}
  cards.forEach(createCard);

renderCards();