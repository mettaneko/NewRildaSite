document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    function hidePreloader() {
        if (preloader) {
            preloader.classList.add('hidden');
            // Удаляем прелоадер из DOM после завершения анимации
            preloader.addEventListener('transitionend', () => {
                preloader.remove();
            }, { once: true });
        }
    }

    // Проверяем, загрузились ли все ресурсы (включая изображения и видео)
    window.addEventListener('load', () => {
        hidePreloader();
    });

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active"); // Переключаем класс active на h3
            
            // Находим hint-текст, который следует сразу за h3
            var hintText = this.nextElementSibling;
            if (hintText && hintText.classList.contains('toggle-hint')) {
                // Класс 'active' на h3 автоматически скроет hint-текст через CSS
                // Если нужно дополнительное управление через JS, можно добавить здесь
            }

            // Находим блок контента (который следует за hint-текстом, или сразу за h3, если hint-текста нет)
            var content;
            if (hintText && hintText.classList.contains('toggle-hint')) {
                content = hintText.nextElementSibling; // Контент после hint-текста
            } else {
                content = this.nextElementSibling; // Контент сразу после h3
            }

            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

});
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
    const z = document.querySelector("#copy-to-clipboard");
    const title = document.querySelector(".hero__title");
    const m = document.getElementById("press");
    const x = document.getElementById("meow");
    const v = getRandomInt(12)
    console.log(v);
    if (v == 12){
        x.src = 'assets/meow.mp4';
        x.load();
        title.innerHTML = "Прогрессирующий OneShot++ Сервер";
        m.innerHTML="Присоединяйтесь к выживанию, где каждый найдет идеальные условия для своего творчества. Без приватов и лишних плагинов. Кстати, вы нашли пасхалку.";
    }
    if (v == 11){
        x.src = 'assets/meow2.mp4';
        x.load();
        title.innerHTML = "Прогрессирующий OneShot++ Сервер";
        m.innerHTML="Присоединяйтесь к выживанию, где каждый найдет идеальные условия для своего творчества. Без приватов и лишних плагинов. Кстати, вы нашли пасхалку.";
    }
    // Дополнительная проверка на случай, если window.load не сработает вовремя
    // или для очень быстрых загрузок, когда DOMContentLoaded уже произошел
    // до того, как скрипт успел навесить слушатель load
    if (document.readyState === 'complete') {
        hidePreloader();
    }


function copyToClipboard(textData) {
	if (window.clipboardData) { // this is for Internet Explorer
		window.clipboardData.setData("Text", textData);
    
	}
	else { // this is for Edge, Firefox, Chrome and Safari; this also works with IE, but it does not work as smoothly as above code causing the page to jump around
		var t = document.createElement("textarea"); // create textarea element
		t.value = textData; // set its value to the data to copy
		t.style.position = "absolute";
		t.style.display = "inline";
		t.style.width = t.style.height = t.style.padding = 0;
		t.setAttribute("readonly", ""); // textarea is readonly
		document.body.appendChild(t); // append the textarea element - may be better to append to the object being clicked
		t.select(); // select the data in the text area
		document.execCommand("copy"); // IMPORTANT: "copy" works as a result of user events, like "click" event
		document.body.removeChild(t); // remove the textarea element
        var z = document.querySelector("#copy-to-clipboard");

	}
    z.innerHTML = "Скопировано!";
    setTimeout(() => {
             z.innerHTML = "rilda.mettaneko.ru";
        }, "1000");
	return false;
}

