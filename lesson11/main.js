const container = document.querySelector('#container');
const header = document.createElement('h1');
const text = document.createElement('p');
const input = document.createElement('input');
const button = document.createElement('button');

header.textContent = 'Kakovkina Kate';
container.append(header);

text.innerHTML = `Задача: создать страницу с элементами &lt;h1&gt;, &lt;p&gt;, &lt;input&gt; и &lt;button&gt;
    без использования html, а лишь используя методы объекта window.document.
    В заголовке &lt;h1&gt; должны быть ваше имя и фамилия, в &lt;p&gt; 
    - текст задания,которое вы сейчас выполняете. В &lt;input&gt; можно что-то ввести,
    если нажать на кнопку то будет выведен alert c введенным в поле значением
    и после закрытия alert'а поле будет очищаться.`;
container.append(text);

input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Введите что-нибудь');
container.append(input);

button.textContent = 'Нажми меня';
container.append(button);

button.addEventListener('click', () => {
    alert(input.value);
    input.value = '';
});