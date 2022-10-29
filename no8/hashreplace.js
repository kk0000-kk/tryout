(() => {
  const hashreplace = () => {
    const input = window.prompt('変換したいハッシュを入力してください');
    const inputJson = JSON.parse(input);
    console.log(inputJson);
    const originKeys = Object.keys(inputJson);
    const regex = /foo/g;

    /**
     * 特定の文字列を置き換える
     * @param {Object} hash
     * @param {Array} keys
     */
    const replaceToUry = (hash, keys) => {
      for (const key of keys) {
        if (key === 'text') {
          hash[key] = hash[key].replace(regex, 'uryyyy!!');
        } else {
          replaceToUry(hash[key], Object.keys(hash[key]));
        }
      }
    };
    replaceToUry(inputJson, originKeys);
    alert(JSON.stringify(inputJson));
  };


  let button = document.getElementById('hashreplacebtn');
  button.addEventListener('click', hashreplace);
})();