(() => {
  /**
   * 与えられた配列に含まれる要素の合計値を計算する
   * @param {Array} array
   * @returns
   */
   const calcTotal = (array) => {
    let total = 0;
    for (const element of array) {
      total += element;
    }
    return total;
  };


  /**
   * 与えられた配列に含まれる要素の平均値を計算する
   * @param {Array} array
   * @returns
   */
  const clacAverage = (array) => {
    return calcTotal(array) / array.length;
  };


  /**
   * 与えられた配列に含まれる要素の最大値を返す
   * @param {Array} array
   * @returns
   */
  const getMax = (array) => {
    let max = array[0];
    for (const element of array) {
      if (element > max) {
        max = element;
      }
    }
    return max;
  };


  /**
   * 与えられた配列に含まれる要素の最小値を返す
   * @param {Array} array
   * @returns
   */
   const getMin = (array) => {
    let min = array[0];
    for (const element of array) {
      if (element < min) {
        min = element;
      }
    }
    return min;
  };


  /**
   * 与えられた配列にバブルソートを実施して返す（非破壊）
   * @param {Array} array
   * @param {Int} order
   * @returns
   */
  const bubbleSort = (array, factor) => {
    let newArray = array.concat();
    for (let last = newArray.length - 1; last > 0; last--) {
      for (let i = 0; i < last; i++) {
        if (factor * newArray[i] > factor * newArray[i + 1]) {
          // 手前の要素の方が大きければ交換する(降順は符号を逆にしての比較なので逆順になる)
          const tmp = newArray[i + 1];
          newArray[i + 1] = newArray[i];
          newArray[i] = tmp;
        }
      }
    }
    return newArray;
  };


  /**
   * 与えられた配列にクイックソートを実施して返す（非破壊）
   * @param {Array} array
   * @param {Int} factor
   * @returns
   */
  const quickSort = (array, factor) => {
    if (array.length < 2) {
      return array.concat();
    }
    const pivot = array[0];
    let left = [];
    let right = [];
    for (let i = 1; i < array.length; i++) {
      if (factor * array[i] <= factor * pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    left = quickSort(left, factor);
    right = quickSort(right, factor);
    return left.concat([pivot]).concat(right);
  };

  const algorithm = () => {
    const input = window.prompt('数字を半角カンマ区切りで入力してください。\n(例: 1,2,3,4,5,6)');
    const inputArray = input.split(',').map(x => Number.parseInt(x));
    console.log(inputArray);
    const factor = {'asc': 1, 'desc': -1};
    let results = {};
    results['total'] = calcTotal(inputArray);
    results['average'] = clacAverage(inputArray);
    results['max'] = getMax(inputArray);
    results['min'] = getMin(inputArray);
    results['bubbleAsc'] = bubbleSort(inputArray, factor['asc']);
    results['bubbleDesc'] = bubbleSort(inputArray, factor['desc']);
    results['quickAsc'] = quickSort(inputArray, factor['asc']);
    results['quickDesc'] = quickSort(inputArray, factor['desc']);
    alert('合計: ' + results['total']
        + ', 平均: ' + results['average']
        + ', 最大: ' + results['max']
        + ', 最小: ' + results['min']
        + '\n小さい順（バブルソート）: ' + results['bubbleAsc']
        + '\n大きい順（バブルソート）: ' + results['bubbleDesc']
        + '\n小さい順（クイックソート）: ' + results['quickAsc']
        + '\n大きい順（クイックソート）: ' + results['quickDesc']);
  };

  let button = document.getElementById('algorithmbtn');
  button.addEventListener('click', algorithm);
})();