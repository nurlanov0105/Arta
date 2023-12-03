$(document).ready(function () {
   const burger = document.querySelector(".burger");
   const burgerClose = document.querySelector(".burger-close");
   const mobNav = document.querySelector(".mob-nav");
   const overlay = document.querySelector(".overlay");
   const links = document.querySelectorAll(".mob-nav__link");
   const body = document.body;

   burger.addEventListener("click", function () {
      burgerClose.classList.toggle("active");
      mobNav.classList.toggle("active");
      overlay.classList.toggle("active");
      body.classList.toggle("active");
   });

   burgerClose.addEventListener("click", function () {
      burgerClose.classList.toggle("active");
      mobNav.classList.toggle("active");
      overlay.classList.toggle("active");
      body.classList.toggle("active");
   });

   overlay.addEventListener("click", function () {
      burgerClose.classList.remove("active");
      mobNav.classList.remove("active");
      overlay.classList.remove("active");
      body.classList.remove("active");
   });

   links.forEach(function (item) {
      item.addEventListener("click", function () {
         burgerClose.classList.remove("active");
         mobNav.classList.remove("active");
         overlay.classList.remove("active");
         body.classList.remove("active");
      });
   });

   // Form Popup

   const btns = document.querySelectorAll(".btn");
   const formPopupOverley = document.querySelector(".form-popup-overlay");
   const formPopupClose = document.querySelector(".form-popup__close");
   const formPopup = document.querySelector(".form-popup");

   btns.forEach(function (item) {
      item.addEventListener("click", function () {
         formPopupOverley.classList.add("active");
      });
   });

   formPopupClose.addEventListener("click", function () {
      formPopupOverley.classList.remove("active");
   });

   formPopupOverley.addEventListener("click", function () {
      formPopupOverley.classList.remove("active");
   });

   formPopup.addEventListener("click", function (e) {
      e.stopPropagation();
   });

   const reviewsSlider = $("#reviewsSlider");
   reviewsSlider.owlCarousel({
      items: 1,
      dots: false,
      nav: false,
      loop: true,
   });

   const prevBtn = $(".reviews__arow-left");
   const nextBtn = $(".reviews__arow-right");

   prevBtn.click(function () {
      reviewsSlider.trigger("prev.owl.carousel");
   });
   nextBtn.click(function () {
      reviewsSlider.trigger("next.owl.carousel");
   });

   //FORM VALIDATE Collaboration
   $("#collaboration__form").validate({
      rules: {
         name: {
            required: true,
         },
         tel: {
            required: true,
         },
      },
      messages: {
         name: {
            required: "Введите Имя",
         },
         tel: {
            required: "Введите телефон",
         },
      },
      submitHandler: function (form) {
         ajaxFormSubmit();
      },
   });

   // Функция AJAX запрса на сервер фищтуьуте
   function ajaxFormSubmit() {
      let string = $("#collaboration__form").serialize(); // Соханяем данные введенные в форму в строку.

      //Формируем ajax запрос
      $.ajax({
         type: "POST", // Тип запроса - POST
         url: "php/mail.php", // Куда отправляем запрос
         data: string, // Какие даные отправляем, в данном случае отправляем переменную string

         // Функция если все прошло успешно
         success: function (html) {
            $("#collaboration__form").slideUp(900);
            $("#answer").html(html);
         },
      });
      // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
      return false;
   }

   //FORM VALIDATE Popup
   $("#formPopup").validate({
      rules: {
         name: {
            required: true,
         },
         tel: {
            required: true,
         },
      },
      messages: {
         name: {
            required: "Введите Имя",
         },
         tel: {
            required: "Введите телефон",
         },
      },
      submitHandler: function (form) {
         ajaxFormSubmit2();
      },
   });

   // Функция AJAX запрса на сервер фищтуьуте
   function ajaxFormSubmit2() {
      let string = $("#formPopup").serialize(); // Соханяем данные введенные в форму в строку.

      //Формируем ajax запрос
      $.ajax({
         type: "POST", // Тип запроса - POST
         url: "php/mail.php", // Куда отправляем запрос
         data: string, // Какие даные отправляем, в данном случае отправляем переменную string

         // Функция если все прошло успешно
         success: function (html) {
            $("#formPopup").slideUp(900);
            $("#answer2").html(html);
         },
      });
      // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
      return false;
   }
});
