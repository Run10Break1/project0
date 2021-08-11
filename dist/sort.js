function sortObject(pivot, datas) {
    // datas = [[], [], [],...] or [{}, {}, {},...] 로 구성됨
    // 각 객체 안의 pivot 속성을 기준으로 분류

    /* 일반적인 경우
    function isSmaller(i, j) {
        // test case
        // [[1,"a"], [3, "b"], [7, "c"], [2, "d"], [4, "f"], [8, "g"], [5, "h"], [6, "i"]]
        return datas[i][pivot] < datas[j][pivot];
    }
    */

    function isSmaller(i, j) {
        // test case
        // [["2019.4.3.","a"], ["2020.10.4.", "b"], ["2020.5.4.", "c"], ["2020.11.6.", "d"], ["2020.5.5.", "f"], ["2020.3.15.", "g"], ["2020.5.4.", "h"], ["2020.7.23.", "i"]]
        var date1 = datas[i][pivot].split(".");
        var date2 = datas[j][pivot].split(".");
        for(var k = 0; k < 3; k++) {
            var d1 = new Number(date1[k]), d2 = new Number(date2[k]);
            if(d1 > d2) return false;
            else if(d1 < d2) return true;
        }
        return false;
    }
    function swap(i, j) {
        var t = datas[i];
        datas[i] = datas[j];
        datas[j] = t;
    }

    function mergeSort(left, right) {
        if(left == right) return;

        var middle = Math.floor((left + right) / 2);
        mergeSort(left, middle);
        mergeSort(middle + 1, right);

        var t = [];
        var p1 = left, p2 = middle + 1;
        while(p1 <= middle && p2 <= right) {
            if(isSmaller(p1, p2)) t.push(datas[p1++]);
            else t.push(datas[p2++]);
        }
        while(p1 <= middle) t.push(datas[p1++]);
        while(p2 <= right) t.push(datas[p2++]);

        datas.splice(left, (right - left + 1), ...t);
    }
    mergeSort(0, datas.length - 1);
    console.log(datas);

    function heapSort() {

    }
}





