# React
Створено два компоненти: ControlledForm та UncontrolledForm. В першому використано useState для оновлення стану.
В цьому можна переконатись, якщо вводити текст у нижнє поле. Одразу буде оновлюватись застосунок та відображати
введений текст у тег <р>. Також в цьому ж компоненті реалізований хук useEffect, який використовує fetch для отримання
данних з API та оновлюємо дані завдяки setUser. Після чого тренарним оператором перевіряємо, якщо user має дані, то відображає
їх. Інакше показує користовачу, що данні завантажуються. Компонент UncontrolledForm використовує input та button. При натисканні
на кнопку цей івент передається у певну функцію і відображає інформацію, яка була введена у input у вигляді alert.
