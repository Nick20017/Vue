var title = document.getElementById("t");
title.innerHTML = "Главная";

new Vue({
    el: '#app',
    data: {
        main: "Создание анимации в Unity 3D",
        main1: "В этом гайде я расскажу и покажу, как сделать детальную анимацию игрового персонажа с помощью Unity 3D." +
        " В гайде я буду использовать Unity 2020 и Visual Studio 2019 для запуска анимаций." +
        " Я скачал с Asset Store модель персонажа и буду его анимировать.",
        main2: "В начале я написал простой скрипт для перемещения персонажа.",
        main3: "В методе move() находится простой скрипт для передвижения игрока и есть несколько возможных режимов передвиженния: ходить, бежать, быстро бежать и режим присев.\n" +
        "В методе rotate() отслеживается вращение мышки и игрок поворачивается в след за ней."
    },
    methods: {
        changeLang(event) {
            if(event.target.value == "ru") {
                    this.ru();
                }
            else if(event.target.value == "ua")
                this.ua();
            else if(event.target.value == "en")
                this.en();
            else
                this.pl();
        },

        ru() {
            title.innerHTML = "Главная";
            this.main = "Создание анимации в Unity 3D";
            this.main1 = "В этом гайде я расскажу и покажу, как сделать детальную анимацию игрового персонажа с помощью Unity 3D." +
            " В гайде я буду использовать Unity 2020 и Visual Studio 2019 для запуска анимаций." +
            " Я скачал с Asset Store модель персонажа и буду его анимировать.";
            this.main2 = "В начале я написал простой скрипт для перемещения персонажа.";
            this.main3 = "В методе move() находится простой скрипт для передвижения игрока и есть несколько возможных режимов передвиженния: ходить, бежать, быстро бежать и режим присев.\n" +
            "В методе rotate() отслеживается вращение мышки и игрок поворачивается в след за ней.";
        },
        
        ua() {
            title.innerHTML = "Головна";
            this.main = "Створення анімації в Unity 3D";
            this.main1 = "У цьому гайді я розповім і покажу, як зробити детальну анімацію ігрового персонажа за допомогою Unity 3D." +
            " У гайді я буду використовувати Unity 2020 і Visual Studio 2019 для запуску анімацій." +
            " Я скачав з Asset Store модель персонажа і буду його анімувати.";
            this.main2 = "На початку я написав простий скрипт для пересування персонажа.";
            this.main3 = "У методі move() знаходиться простий скрипт для пересування гравця і є кілька можливих режимів пересування: ходити, бігти, швидко бігти і режим присівши. " +
            "У методі rotate() відстежується обертання мишки і гравець повертається в слід за нею.";
        },

        en() {
            title.innerHTML = "Home page";
            this.main = "Creating of an animation in Unity 3D";
            this.main1 = "In this guide I'll tell and show you how to make a detailed game character animation using Unity 3D." +
            " In this guide I am going to use Unity 2020 and Visual Studio 2019 to play animations." +
            " I downloaded a character model from Asset Store and will be animating it.";
            this.main2 = "First, I've written a simple movement script.";
            this.main3 = "There is a simple movement script in move() method and there are several movement modes: walk, run, sprint and crouch. " +
            "Mouse rotation detection is placed in rotate() method and player's rotating is following it.";
        },

        pl () {
            title.innerHTML = "Strona główna";
            this.main = "Tworzenie animacji w Unity 3D";
            this.main1 = "W tym przewodniku opowiem i pokażę, jak wykonać szczegółową animację postaci w grze za pomocą Unity 3D." +
            " W tym przewodniku użyję Unity 2020 i Visual Studio 2019 do odtwarzania animacji." +
            " Pobrałem model postaci z Asset Store i będę go animował.";
            this.main2 = "Najpierw napisałem prosty skrypt ruchu.";
            this.main3 = "Istnieje prosty skrypt ruchu w metodzie move() i istnieje kilka trybów ruchu: chód, bieg, sprint i kucanie. " +
            "Wykrywanie obrotu myszy jest umieszczane w metodzie rotate(), a obracanie gracza podąża za nią.";
        }
    }
});