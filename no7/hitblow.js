(() => {
  const targetCnt = 4;
  /**
   * 指定の個数の0-9の数字を重複しないように生成する
   * @returns Array
   */
  const generateTargets = () => {
    if (targetCnt < 1 || targetCnt > 10) {
      alert('桁数が不正');
    }
    let targets = [];
    while (targets.length < targetCnt) {
      let tmp = Math.floor(Math.random() * 10);
      if (!targets.includes(tmp)) {
        targets.push(tmp);
      }
    }
    return targets;
  };

  const targets = generateTargets();
  let answerCnt = 1;
  const hitblow = () => {
    console.log(targets);
    const input = window.prompt(targetCnt + '桁の数字は？（0~9の重複しない数字での' + targetCnt + '桁）');
    const inputNumbers = input.split('').map(x => Number.parseInt(x));
    if (inputNumbers.length != targetCnt) {
      alert(targetCnt + '桁の数字を入力してください！');
      return;
    }
    let hit = 0;
    let blow = 0;
    for (const i in inputNumbers) {
      for (const j in targets) {
        if (inputNumbers[i] == targets[j]) {
          if (i == j) {
            hit += 1;
          } else {
            blow += 1;
          }
        }
      }
    }
    if (hit == targetCnt) {
      alert('正解！' + answerCnt + '回目で正解。');
      return;
    } else {
      answerCnt += 1;
      alert('外れ: ' + hit + 'Hits, ' + blow + 'Blow');
      hitblow();
    }
  };


  let button = document.getElementById('hitblowbtn');
  button.addEventListener('click', hitblow);
})();