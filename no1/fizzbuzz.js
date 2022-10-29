(() => {
  const fizzbuzz = () => {
    const input = window.prompt('数字を入力してください');
    const maxNum = Number.parseInt(input);
    if (!Number.isInteger(maxNum)) {
      alert('整数以外が入力されています！整数を入力してください。');
      return;
    }

    let message = [];
    for (let i = 1; i < maxNum + 1; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        message.push('FizzBuzz');
      } else if (i % 3 == 0) {
        message.push('Fizz');
      } else if (i % 5 == 0) {
        message.push('Buzz');
      } else {
        message.push(i);
      }
    }
    alert(message.join(', '));
  };

  let button = document.getElementById('fizzbuzzbtn');
  button.addEventListener('click', fizzbuzz);
})();