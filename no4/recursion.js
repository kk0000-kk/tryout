(() => {
  const recursion = () => {
    const input = window.prompt('正の整数を入力してください。1からその数字までの整数を全て足した値を表示します。');
    const initialNum = Number.parseInt(input);
    if (!Number.isInteger(initialNum) || initialNum < 0 ) {
      alert('正の整数を入力してください！');
      return;
    }
    let total = 0;
    let num = initialNum;
    function cumlativeSum() {
      total += num;
      num -= 1;
      if (num == 0) {
        return;
      }
      cumlativeSum();
    };
    cumlativeSum();
    alert(total);
  };


  let button = document.getElementById('recursionbtn');
  button.addEventListener('click', recursion);
})();