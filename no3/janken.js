(() => {
  const janken = () => {
    const input = window.prompt('じゃんけん・・・\n0.グー 1.チョキ 2.パー');
    const userChoise = Number.parseInt(input);
    if (!Number.isInteger(userChoise) || userChoise < 0 || userChoise > 2) {
      alert('0, 1, 2 のどれかを入力してください！');
      return;
    }
    const machineChoise = Math.floor(Math.random() * 3);

    const name = ['グー', 'チョキ', 'パー'];
    // 手ごとの勝敗（['グー', 'チョキ', 'パー']のマトリクス）
    const result = [
      ['draw', 'win', 'lose'],
      ['lose', 'draw', 'win'],
      ['win', 'lose', 'draw'],
    ];
    const messageTemplate = {
      'win': 'あなたの勝ち',
      'draw': 'あいこ',
      'lose': 'あなたの負け',
    };
    const message = messageTemplate[result[userChoise][machineChoise]] + '( あなた: ' + name[userChoise] + ', 相手: ' + name[machineChoise] + ' )';
    alert(message);
  };


  let button = document.getElementById('jankenbtn');
  button.addEventListener('click', janken);
})();