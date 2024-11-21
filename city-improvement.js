// Массив данных для карточек
const cardsData = [
    {
      id: 1,
      title: "Мерия [ 1 -> 2 ]",
      description: "Описание первой карточки.",
      image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
    },
    {
      id: 2,
      title: "Мерия [ 2 -> 3 ]",
      description: "Описание второй карточки.",
      image: "https://vipersmax.github.io/AOO-EVENTS-CALENDAR/img/none.png",
    },
  ];
  
  // Функция для отображения карточек
  function displayCards() {
    const container = document.getElementById("card-container");
  
    // Сортировка карточек по ID (убывание)
    const sortedCards = cardsData.sort((a, b) => b.id - a.id);
  
    // Генерация HTML для каждой карточки
    sortedCards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
  
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
  