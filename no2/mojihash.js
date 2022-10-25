(() => {
  const mojihash = () => {
    const input = window.prompt('単語を半角スペースで区切った文字列を入力してください');
    const words = input.split(' ');
    let hash = {};
    for (const word of words) {
      if (typeof hash[word] === 'undefined') {
        hash[word] = 1;
      } else {
        hash[word] += 1;
      }
    }
    alert(JSON.stringify(hash));
  };


  let button = document.getElementById('mojihashbtn');
  button.addEventListener('click', mojihash);
})();