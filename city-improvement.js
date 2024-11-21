// Массив данных для карточек
  const cardsData = [
    {
        id: 1,
        title: "Мерия [ 1 -> 2 ]",
        description: "<b>Условия улучшения:</b> . <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 2,
        title: "Мерия [ 2 -> 3 ]",
        description: "<b>Условия улучшения:</b> . <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 3,
        title: "Мерия [ 3 -> 4 ]",
        description: "<b>Условия улучшения:</b> . <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 4,
        title: "Мерия [ 4 -> 5 ]",
        description: "<b>Условия улучшения:</b> . <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 5,
        title: "Мерия [ 5 -> 6 ]",
        description: "<b>Условия улучшения:</b> . <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 6,
        title: "Мерия [ 6 -> 7 ]",
        description: "<b>Условия улучшения:</b> . <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 7,
        title: "Мерия [ 7 -> 8 ]",
        description: "<b>Условия улучшения:</b> . <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 8,
        title: "Мерия [ 8 -> 9 ]",
        description: "<b>Условия улучшения:</b> . <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 9,
        title: "Мерия [ 9 -> 10 ]",
        description: "<b>Условия улучшения:</b> . <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 10,
        title: "Мерия [ 10 -> 11 ]",
        description: "<b>Условия улучшения:</b> . <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 11,
        title: "Мерия [ 11 -> 12 ]",
        description: "<b>Условия улучшения:</b> . <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 12,
        title: "Мерия [ 12 -> 13 ]",
        description: "<b>Условия улучшения:</b> . <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 13,
        title: "Мерия [ 13 -> 14 ]",
        description: "<b>Условия улучшения:</b> Стена [13 lvl] + Посольтсво [13 lvl]. <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 14,
        title: "Мерия [ 14 -> 15 ]",
        description: "<b>Условия улучшения:</b> Стена [14 lvl] + Автозавод [14 lvl]. <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 15,
        title: "Мерия [ 15 -> 16 ]",
        description: "<b>Условия улучшения:</b> Стена [15 lvl] + Железный рудник [15 lvl]. <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 16,
        title: "Мерия [ 16 -> 17 ]",
        description: "<b>Условия улучшения:</b> . <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 17,
        title: "Мерия [ 17 -> 18 ]",
        description: "<b>Условия улучшения:</b> Стена [17 lvl] + Полигон [17 lvl]. <br><b>Ресурсы на улучшения мэрии:</b> Провизия и Нефть 8,749,980 + Железо 1,499,990.<br><b>Ресурсы на улучшения стены:</b> Нефть 6,036,880 + Железо 517,440.",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 18,
        title: "Мерия [ 18 -> 19 ]",
        description: "<b>Условия улучшения:</b> Стена [18 lvl] + Склад [18 lvl]. <br><b>Ресурсы на улучшения мэрии:</b> Провизия и Нефть 10,749,980 + Железо 2,215,140.<br><b>Ресурсы на улучшения стены:</b> Нефть 6,726,970 + Железо 896,920.",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 19,
        title: "Мерия [ 19 -> 20 ]",
        description: "<b>Условия улучшения:</b> Стена [19 lvl] + Академия [19 lvl]. <br><b>Ресурсы на улучшения мэрии:</b> Провизия и Нефть ПУСТО + Железо ПУСТО.<br><b>Ресурсы на улучшения стены:</b> Нефть 6,923,270 + Железо 1,384,650.",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 20,
        title: "Мерия [ 20 -> 21 ]",
        description: "<b>Условия улучшения:</b> Стена [20 lvl] + Рудник РЗЭ [20 lvl]. <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 21,
        title: "Мерия [ 21 -> 22 ]",
        description: "<b>Условия улучшения:</b> Стена [21 lvl] + Лазарет [21 lvl]. <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 22,
        title: "Мерия [ 22 -> 23 ]",
        description: "<b>Условия улучшения:</b> Стена [22 lvl] + Машзавод [22 lvl]. <br><b>Ресурсы на улучшения мэрии:</b> Провизия и Нефть 18,469,660 + Железо 4,496,960 + РЗЭ 2,087,870. <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 23,
        title: "Мерия [ 23 -> 24 ]",
        description: "<b>Условия улучшения:</b> Стена [23 lvl] + Посольство [23 lvl]. <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 24,
        title: "Мерия [ 24 -> 25 ]",
        description: "<b>Условия улучшения:</b> Стена [24 lvl] + Склад [24 lvl]. <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 25,
        title: "Мерия [ 25 -> 26 ]",
        description: "<b>Условия улучшения:</b> Стена [25 lvl] + Разведцентр [25 lvl]. <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      },
      {
        id: 26,
        title: "Мерия [ 26 -> 27 ]",
        description: "<b>Условия улучшения:</b> . <br><b>Ресурсы на улучшения мэрии:</b> <br><b>Ресурсы на улучшения стены:</b>",
        image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
      }
  ];
  
  // Функция для отображения карточек
  function displayCards() {
    const container = document.getElementById("city-improvement");
  
    // Сортировка карточек по ID (убывание)
    const sortedCards = cardsData.sort((a, b) => b.id - a.id);
  
    // Генерация HTML для каждой карточки
    sortedCards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
  
      // Устанавливаем цвет фона для карточки через JavaScript
      cardElement.style.backgroundColor = '#e1e1e1'; // Цвет фона
  
      cardElement.innerHTML = `
        <img src="${card.image}" alt="Изображение ${card.title}">
        <div class="card-content">
          <h3 class="card-title">${card.title}</h3>
          <p class="card-description">${card.description}</p>
        </div>
      `;
  
      // Добавляем карточку в контейнер
      container.appendChild(cardElement);
    });
  }
  
  // Запуск функции после загрузки страницы
  document.addEventListener("DOMContentLoaded", displayCards);  