let input = document.querySelector(".numInput");
let sortbtn = document.querySelector(".sortbtn");
let addDataBtn = document.querySelector(".add-data");
let yourData = document.querySelector(".all-data");
let sortNums = document.querySelector(".sortNumbers");
let err = document.querySelector(".err");

let arr = [];
let uniqArr = [];

addDataBtn.addEventListener("click", () => {
  if (!input.value) {
    input.placeholder = "Please enter Data";
  } else {
    input.placeholder = "Enter your data...";
    arr.push(input.value);
    yourData.innerHTML = `${arr}.`;
  }
  input.value = "";
  err.innerHTML = "";
});

sortbtn.addEventListener("click", () => {
  if ((uniqArr = [])) {
    err.innerHTML = "Please Enter Data!!";
    err.style.color = "red";
  }
  arr.map((item, i) => {
    if (uniqArr.indexOf(item) === -1) {
      uniqArr.push(item);
      err.innerHTML = "Now your All data are sorted and unique!!!";
      err.style.color = "green";
    }
    uniqArr.map((item, i) => {
      for (let j = i; j < uniqArr.length; j++) {
        if (uniqArr[i] > uniqArr[j]) {
          temp = uniqArr[i];
          uniqArr[i] = uniqArr[j];
          uniqArr[j] = temp;
        }
      }
    });
    sortNums.innerHTML = `${uniqArr}.`;
  });
  input.value = "";
});

// console.log(arr);
