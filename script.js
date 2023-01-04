const dishes = {
  soup: [
    "гороховый суп",
    "фасолевый суп",
    "куриный суп",
    "борщ",
    "щи",
    "грибной суп",
    "грибной суп-пюре",
    "суп с сосисками",
    "рассольник",
    "суп с фрикадельками",
    "холодник",
    "уха",
    "суп с колбасками",
  ],
  garnish: [
    "гречка",
    "рис",
    "макароны",
    "отварная картошка",
    "пюре",
    "запечёная картошка",
    "запечёная картошка с мясом",
    "запечёная картошка с сосисками",
    "драники",
    "бабка",
    "колдуны",
    "тушеная картошка",
    "тушеная капуста",
    "тушеная капуста с мясом и рисом",
    "тушеная капуста с сосисками",
    "макароны с подливой из сосисок",
    "макароны с гуляшом",
    "макароны с фаршем и сливками",
    "лазанья",
    "гречка с фаршем",
    "плов",
    "картофельная запеканка с фаршем",
    "ленивые голубцы",
    "голубцы",
    "тушеная фасоль",
    "жареная картошка",
    "тушеная картошка с сердцем",
    "овощи замороженные",
    "макароны с фрикадельками",
    "овощное рагу",
    "пицца",
    "пельмени",
    "чебуреки",
  ],
  meat: [
    "тефтели",
    "котлеты свиные",
    "котлеты рыбные",
    "котлеты куриные",
    "котлеты говяжьи",
    "куриные отбивные",
    "свиные отбивные",
    "запечёное мясо с сыром",
    "мясные рулеты",
    "жареная курица",
    "варёная курица",
    "запечёная курица",
    "куриное филе в сметане",
    "жареная рыба",
    "рыба запечёная",
    "рыба в кляре",
    "колбаски",
    "холодец",
  ],
  breakfast: [
    "оладьи",
    "панкейки",
    "сырники",
    "творожная запеканка",
    "омлет",
    "ленивые вареники",
    "тортилья",
    "яичница с беконом",
    "коржики",
    "сочники",
    "тонкие блины",
    "блинчики с начинкой",
    "яйцо в хлебе",
    "гренки",
    "манник",
    "картофельные блины",
    "банановые оладьи",
    "заливной пирог",
    "шарлотка",
    "пшённая каша",
    "манная каша",
    "овсяная каша",
    "рисовая сладкая каша",
  ],
  salad: [
    "салат из помидоров и огурцов",
    "салат из пекинской капусты",
    "салат из листьев салата",
    "оливье",
    "салат с фасолью",
    "салат с рыбной консервой",
    "салат свекольный с майонезом",
    "салат свекольный с маслом",
    "селёдка под шубой",
    "винегрет",
    "салат цезарь",
    "салат из капусты с морковкой",
    "квашеная капуста",
    "рулеты из баклажана",
  ],
};

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

button.onclick = () => {
  const listOfDishes = dishesForm.dishes.value;
  output.value = getRandomElement(dishes[listOfDishes]);
}