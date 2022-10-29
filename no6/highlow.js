(() => {
  const target = Math.floor(Math.random() * 101);
  let answerCnt = 1;
  const highlow = () => {
    const input = window.prompt('0~100で数字を当てて');
    const inputNum = Number.parseInt(input);
    if (!Number.isInteger(inputNum) || inputNum < 0 ) {
      alert('0~100の整数を入力してください！');
      return;
    }
    if (inputNum == target) {
      alert('正解！' + answerCnt + '回目で正解。');
      return;
    } else if (inputNum < target) {
      alert('もっと上');
    } else {
      alert('もっと下');
    }
    answerCnt += 1;
    highlow();
  };


  let button = document.getElementById('highlowbtn');
  button.addEventListener('click', highlow);
})();