let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const wraper_popap = document.querySelector(".wraper_popap-endgame");
const popapLevel = document.querySelector(".wraper_popap-level");
const btnRestart = document.querySelector(".restart_game");
const btnNewgame = document.querySelectorAll(".newgame");
const winner = document.querySelector(".winner");
const section = document.querySelectorAll(".section");
const sq_1 = document.querySelectorAll(".sq_1");
const sq_2 = document.querySelectorAll(".sq_2");
const sq_3 = document.querySelectorAll(".sq_3");
const sq_4 = document.querySelectorAll(".sq_4");
const sq_5 = document.querySelectorAll(".sq_5");
const sq_6 = document.querySelectorAll(".sq_6");
const sq_7 = document.querySelectorAll(".sq_7");
const sq_8 = document.querySelectorAll(".sq_8");
const sq_9 = document.querySelectorAll(".sq_9");
const ln_1 = document.querySelectorAll(".ln_1");
const ln_2 = document.querySelectorAll(".ln_2");
const ln_3 = document.querySelectorAll(".ln_3");
const ln_4 = document.querySelectorAll(".ln_4");
const ln_5 = document.querySelectorAll(".ln_5");
const ln_6 = document.querySelectorAll(".ln_6");
const ln_7 = document.querySelectorAll(".ln_7");
const ln_8 = document.querySelectorAll(".ln_8");
const ln_9 = document.querySelectorAll(".ln_9");
const gameField = document.querySelector(".game_field");
let coutErrors = document.querySelector(".cout_errors");
const clav = document.querySelector(".clav");
const hours = document.querySelector(".hours");
const minute = document.querySelector(".minute");
const seconds = document.querySelector(".seconds");
const difficultyLevel = document.querySelectorAll(".difficulty_level");
const btnTimerPause = document.querySelector(".pause");
const btnTimerPlay = document.querySelector(".play");
const blockPause = document.querySelector(".blockPause");

const randomNum = (min, max) => {
  let num = Math.round(Math.random() * (max - min) + min);
  return num;
};

///================LINE 1 ==============////////////////
const generation1 = () => {
  const line_1 = [];
  for (let i = numbers1.length - 1; i >= 0; --i) {
    let num = randomNum(i, 0);
    line_1.push(numbers1.splice(num, 1)[0]);
  }
  numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return line_1;
};
let line_1 = generation1();
// console.log("RESULT 1 ",line_1);

////////===============LINE 2 ==========////////////////
const generation2 = () => {
  const line_2 = [];
  const newNumbwers1 = numbers2.filter(
    (item) => item != line_1[0] && item != line_1[1] && item != line_1[2]
  );
  // console.log(newNumbwers1)
  for (let i = newNumbwers1.length - 1; i >= 3; --i) {
    let num = randomNum(i, 0);
    line_2.push(newNumbwers1.splice(num, 1)[0]);
  }
  const newNumbwers2 = numbers2.filter(
    (item) =>
      item != line_1[3] &&
      item != line_1[4] &&
      item != line_1[5] &&
      item != line_2[0] &&
      item != line_2[1] &&
      item != line_2[2]
  );
  // console.log(newNumbwers2)
  if (newNumbwers2.length === 6) {
    const newNumbwers2 = [line_1[0], line_1[1], line_1[2]];
    const newNumbwers3 = [line_1[6], line_1[7], line_1[8]];
    // console.log(newNumbwers2)
    // console.log(newNumbwers3)
    for (let i = newNumbwers3.length - 1; i >= 0; --i) {
      let num = randomNum(i, 0);
      line_2.push(newNumbwers3.splice(num, 1)[0]);
    }
    for (let i = newNumbwers2.length - 1; i >= 0; --i) {
      let num = randomNum(i, 0);
      line_2.push(newNumbwers2.splice(num, 1)[0]);
    }
    // console.log(newNumbwers2)
  } else if (newNumbwers2.length === 3) {
    const newNumbwers2 = [line_1[0], line_1[1], line_1[2]];
    const newNumbwers3 = [line_1[3], line_1[4], line_1[5]];
    // console.log(newNumbwers2)
    // console.log(newNumbwers3)
    for (let i = newNumbwers2.length - 1; i >= 0; --i) {
      let num = randomNum(i, 0);
      line_2.push(newNumbwers2.splice(num, 1)[0]);
    }
    for (let i = newNumbwers3.length - 1; i >= 0; --i) {
      let num = randomNum(i, 0);
      line_2.push(newNumbwers3.splice(num, 1)[0]);
    }
    // console.log(newNumbwers2)
  } else if (newNumbwers2.length === 5) {
    const newNumbwers1 = [line_1[6], line_1[7], line_1[8]].filter(
      (item) =>
        item != line_2[0] &&
        item != line_2[1] &&
        item != line_2[2] &&
        item != line_1[3] &&
        item != line_1[4] &&
        item != line_1[5]
    );
    // console.log(newNumbwers1)
    const newNumbwers2 = [line_1[0], line_1[1], line_1[2]];
    // console.log(newNumbwers2)
    for (let i = newNumbwers2.length - 1; i >= 2; --i) {
      let num = randomNum(i, 0);
      newNumbwers1.push(newNumbwers2[num]);
      // console.log(newNumbwers2[num])
    }
    // console.log(newNumbwers1)
    for (let i = newNumbwers1.length - 1; i >= 0; --i) {
      let num = randomNum(i, 0);
      line_2.push(newNumbwers1.splice(num, 1)[0]);
    }
    const newNumbwers3 = numbers2.filter(
      (item) =>
        item != line_2[0] &&
        item != line_2[1] &&
        item != line_2[2] &&
        item != line_2[3] &&
        item != line_2[4] &&
        item != line_2[5]
    );

    // console.log(newNumbwers3)
    for (let i = newNumbwers3.length - 1; i >= 0; --i) {
      let num = randomNum(i, 0);
      line_2.push(newNumbwers3.splice(num, 1)[0]);
    }
  } else if (newNumbwers2.length === 4) {
    const newNumbwers1 = [line_1[6], line_1[7], line_1[8]].filter(
      (item) => item != line_2[0] && item != line_2[1] && item != line_2[2]
    );
    // console.log(newNumbwers1)
    const newNumbwers2 = [line_1[0], line_1[1], line_1[2]];
    // console.log(newNumbwers2)
    for (let i = newNumbwers2.length - 1; i >= 1; --i) {
      let num = randomNum(i, 0);
      newNumbwers1.push(newNumbwers2.splice(num, 1)[0]);
    }
    // console.log(newNumbwers1)
    for (let i = newNumbwers1.length - 1; i >= 0; --i) {
      let num = randomNum(i, 0);
      line_2.push(newNumbwers1.splice(num, 1)[0]);
    }
    const newNumbwers3 = numbers2.filter(
      (item) =>
        item != line_2[0] &&
        item != line_2[1] &&
        item != line_2[2] &&
        item != line_2[3] &&
        item != line_2[4] &&
        item != line_2[5]
    );

    // console.log(newNumbwers3)
    for (let i = newNumbwers3.length - 1; i >= 0; --i) {
      let num = randomNum(i, 0);
      line_2.push(newNumbwers3.splice(num, 1)[0]);
    }
  }
  return line_2;
};
let line_2 = generation2();

///------------ LINE 3 -----------//////////
const generation3 = () => {
  const line_3 = [];
  const newNumbwers1 = line_1.filter(
    (item) =>
      item != line_1[0] &&
      item != line_1[1] &&
      item != line_1[2] &&
      item != line_2[0] &&
      item != line_2[1] &&
      item != line_2[2]
  );
  const newNumbwers2 = line_1.filter(
    (item) =>
      item != line_1[3] &&
      item != line_1[4] &&
      item != line_1[5] &&
      item != line_2[3] &&
      item != line_2[4] &&
      item != line_2[5]
  );
  const newNumbwers3 = line_1.filter(
    (item) =>
      item != line_1[6] &&
      item != line_1[7] &&
      item != line_1[8] &&
      item != line_2[6] &&
      item != line_2[7] &&
      item != line_2[8]
  );
  // console.log(newNumbwers1)
  // console.log(newNumbwers2)
  // console.log(newNumbwers3)
  for (let i = newNumbwers1.length - 1; i >= 0; --i) {
    let num = randomNum(i, 0);
    line_3.push(newNumbwers1.splice(num, 1)[0]);
  }
  for (let i = newNumbwers2.length - 1; i >= 0; --i) {
    let num = randomNum(i, 0);
    line_3.push(newNumbwers2.splice(num, 1)[0]);
  }
  for (let i = newNumbwers3.length - 1; i >= 0; --i) {
    let num = randomNum(i, 0);
    line_3.push(newNumbwers3.splice(num, 1)[0]);
  }
  return line_3;
};
let line_3 = generation3();

///------------ LINE 4 -----------//////////
const generation4 = () => {
  const line_4 = [];
  let count_1 = numbers2.filter(
    (item) => item != line_1[0] && item != line_2[0] && item != line_3[0]
  );
  // console.log(count_1)
  count_1 = count_1[randomNum(count_1.length - 1, 0)];
  // console.log(count_1);
  let count_2 = numbers2.filter(
    (item) =>
      item != line_1[1] &&
      item != line_2[1] &&
      item != line_3[1] &&
      item != count_1
  );
  // console.log(count_2)
  count_2 = count_2[randomNum(count_2.length - 1, 0)];
  // console.log(count_2)
  let count_3 = numbers2.filter(
    (item) =>
      item != line_1[2] &&
      item != line_2[2] &&
      item != line_3[2] &&
      item != count_1 &&
      item != count_2
  );
  // console.log(count_3)
  count_3 = count_3[randomNum(count_3.length - 1, 0)];
  // console.log(count_3)
  let count_4 = numbers2.filter(
    (item) =>
      item != line_1[3] &&
      (item != line_2[3]) & (item != line_3[3]) &&
      item != count_1 &&
      item != count_2 &&
      item != count_3
  );
  // console.log(count_4)
  count_4 = count_4[randomNum(count_4.length - 1, 0)];
  // console.log(count_4)
  let count_5 = numbers2.filter(
    (item) =>
      item != line_1[4] &&
      (item != line_2[4]) & (item != line_3[4]) &&
      item != count_1 &&
      item != count_2 &&
      item != count_3 &&
      item != count_4
  );
  // console.log(count_5)
  count_5 = count_5[randomNum(count_5.length - 1, 0)];
  // console.log(count_5)
  let count_6 = numbers2.filter(
    (item) =>
      item != line_1[5] &&
      (item != line_2[5]) & (item != line_3[5]) &&
      item != count_1 &&
      item != count_2 &&
      item != count_3 &&
      item != count_4 &&
      item != count_5
  );
  // console.log(count_6)
  count_6 = count_6[randomNum(count_6.length - 1, 0)];
  // console.log(count_6)
  let count_7 = numbers2.filter(
    (item) =>
      item != line_1[6] &&
      (item != line_2[6]) & (item != line_3[6]) &&
      item != count_1 &&
      item != count_2 &&
      item != count_3 &&
      item != count_4 &&
      item != count_5 &&
      item != count_6
  );
  // console.log(count_7)
  count_7 = count_7[randomNum(count_7.length - 1, 0)];
  // console.log(count_7)

  let count_8 = numbers2.filter(
    (item) =>
      item != line_1[7] &&
      (item != line_2[7]) & (item != line_3[7]) &&
      item != count_1 &&
      item != count_2 &&
      item != count_3 &&
      item != count_4 &&
      item != count_5 &&
      item != count_6 &&
      item != count_7
  );
  // console.log(count_8)
  count_8 = count_8[randomNum(count_8.length - 1, 0)];
  // console.log(count_8);

  let count_9 = numbers2.filter(
    (item) =>
      item != line_1[8] &&
      (item != line_2[8]) & (item != line_3[8]) &&
      item != count_1 &&
      item != count_2 &&
      item != count_3 &&
      item != count_4 &&
      item != count_5 &&
      item != count_6 &&
      item != count_7 &&
      item != count_8
  );
  // console.log(count_9)
  count_9 = count_9[randomNum(count_9.length - 1, 0)];
  // console.log(count_9)
  line_4.push(
    count_1,
    count_2,
    count_3,
    count_4,
    count_5,
    count_6,
    count_7,
    count_8,
    count_9
  );

  return line_4;
};
let line_4 = generation4();
while (line_4.includes(undefined)) {
  line_4 = generation4();
}

/////===========LINE 5===============/////////
const generation5 = () => {
  const line_5 = [];
  let count1 = numbers2.filter(
    (item) =>
      item != line_4[0] &&
      item != line_4[1] &&
      item != line_4[2] &&
      item != line_1[0] &&
      item != line_2[0] &&
      item != line_3[0]
  );
  // console.log(count1)
  count1 = count1[randomNum(count1.length - 1, 0)];
  // console.log(count1)

  let count2 = numbers2.filter(
    (item) =>
      item != line_4[0] &&
      item != line_4[1] &&
      item != line_4[2] &&
      item != line_1[1] &&
      item != line_2[1] &&
      item != line_3[1] &&
      item != count1
  );
  // console.log(count2)
  count2 = count2[randomNum(count2.length - 1, 0)];
  // console.log(count2)

  let count3 = numbers2.filter(
    (item) =>
      item != line_4[0] &&
      item != line_4[1] &&
      item != line_4[2] &&
      item != line_1[2] &&
      item != line_2[2] &&
      item != line_3[2] &&
      item != count1 &&
      item != count2
  );
  // console.log(count3)
  count3 = count3[randomNum(count3.length - 1, 0)];
  // console.log(count3)

  let count4 = numbers2.filter(
    (item) =>
      item != line_4[3] &&
      item != line_4[4] &&
      item != line_4[5] &&
      item != line_1[3] &&
      item != line_2[3] &&
      item != line_3[3] &&
      item != count1 &&
      item != count2 &&
      item != count3
  );
  // console.log(count4)
  count4 = count4[randomNum(count4.length - 1, 0)];
  // console.log(count4)

  let count5 = numbers2.filter(
    (item) =>
      item != line_4[3] &&
      item != line_4[4] &&
      item != line_4[5] &&
      item != line_1[4] &&
      item != line_2[4] &&
      item != line_3[4] &&
      item != count1 &&
      item != count2 &&
      item != count3 &&
      item != count4
  );
  // console.log(count5)
  count5 = count5[randomNum(count5.length - 1, 0)];
  // console.log(count5)

  let count6 = numbers2.filter(
    (item) =>
      item != line_4[3] &&
      item != line_4[4] &&
      item != line_4[5] &&
      item != line_1[5] &&
      item != line_2[5] &&
      item != line_3[5] &&
      item != count1 &&
      item != count2 &&
      item != count3 &&
      item != count4 &&
      item != count5
  );
  // console.log(count6)
  count6 = count6[randomNum(count6.length - 1, 0)];
  // console.log(count6)

  let count7 = numbers2.filter(
    (item) =>
      item != line_4[6] &&
      item != line_4[7] &&
      item != line_4[8] &&
      item != line_1[6] &&
      item != line_2[6] &&
      item != line_3[6] &&
      item != count1 &&
      item != count2 &&
      item != count3 &&
      item != count4 &&
      item != count5 &&
      item != count6
  );
  // console.log(count7)
  count7 = count7[randomNum(count7.length - 1, 0)];
  // console.log(count7)

  let count8 = numbers2.filter(
    (item) =>
      item != line_4[6] &&
      item != line_4[7] &&
      item != line_4[8] &&
      item != line_1[7] &&
      item != line_2[7] &&
      item != line_3[7] &&
      item != count1 &&
      item != count2 &&
      item != count3 &&
      item != count4 &&
      item != count5 &&
      item != count6 &&
      item != count7
  );
  // console.log(count8)
  count8 = count8[randomNum(count8.length - 1, 0)];
  // console.log(count8)

  let count9 = numbers2.filter(
    (item) =>
      item != line_4[6] &&
      item != line_4[7] &&
      item != line_4[8] &&
      item != line_1[8] &&
      item != line_2[8] &&
      item != line_3[8] &&
      item != count1 &&
      item != count2 &&
      item != count3 &&
      item != count4 &&
      item != count5 &&
      item != count6 &&
      item != count7 &&
      item != count8
  );
  // console.log(count9)
  count9 = count9[randomNum(count9.length - 1, 0)];
  // console.log(count9)
  line_5.push(
    count1,
    count2,
    count3,
    count4,
    count5,
    count6,
    count7,
    count8,
    count9
  );
  return line_5;
};
generation5();
let line_5 = generation5();
while (line_5.includes(undefined)) {
  line_5 = generation5();
}

///////==========LINE 6 =================////////////
const generation6 = () => {
  const line_6 = [];
  let newNumbwers1 = numbers2.filter(
    (item) =>
      item != line_4[0] &&
      item != line_4[1] &&
      item != line_4[2] &&
      item != line_5[0] &&
      item != line_5[1] &&
      item != line_5[2]
  );
  // console.log(newNumbwers1)
  let num1_count1 = newNumbwers1.filter(
    (item) => item != line_1[0] && item != line_2[0] && item != line_3[0]
  );
  let num1_count2 = newNumbwers1.filter(
    (item) => item != line_1[1] && item != line_2[1] && item != line_3[1]
  );
  let num1_count3 = newNumbwers1.filter(
    (item) => item != line_1[2] && item != line_2[2] && item != line_3[2]
  );
  let arrCount = [num1_count1, num1_count2, num1_count3];
  // console.log(arrCount)

  for (let i = 0; i < arrCount.length; i++) {
    if (arrCount[i].length === 1) {
      // console.log(true, i)
      line_6[i] = arrCount[i][0];
      newNumbwers1 = newNumbwers1.filter((item) => item != arrCount[i][0]);
      // console.log(newNumbwers1)
      if (i === 0) {
        for (let i = newNumbwers1.length - 1; i >= 0; --i) {
          let num = randomNum(i, 0);
          line_6.push(newNumbwers1.splice(num, 1)[0]);
        }
      } else if (i === 1) {
        // for (let i = newNumbwers1.length - 1; i >= 0; --i) {
        line_6[0] = newNumbwers1[randomNum(0, 1)];
        // }
        newNumbwers1 = newNumbwers1.filter((item) => item != line_6[0]);
        line_6.push(newNumbwers1[0]);
        // console.log(newNumbwers1)
      } else if (i === 2) {
        line_6[0] = newNumbwers1[randomNum(0, 1)];
        newNumbwers1 = newNumbwers1.filter((item) => item != line_6[0]);
        line_6[1] = newNumbwers1[0];
      }
    } else if (
      arrCount[0].length === 2 &&
      arrCount[1].length === 2 &&
      arrCount[2].length === 2
    ) {
      // console.log(num1_count1,num1_count2,num1_count3)
      // console.log(newNumbwers1)
      for (let i = num1_count1.length - 1; i >= 1; --i) {
        let num = randomNum(i, 0);
        line_6.push(num1_count1.splice(num, 1)[0]);
        if (num1_count2.includes(line_6[0])) {
          line_6[1] = num1_count2.filter((item) => item != line_6[0])[0];
          line_6[2] = num1_count3.filter((item) => item != line_6[1])[0];
        }
        if (num1_count3.includes(line_6[0])) {
          line_6[2] = num1_count3.filter((item) => item != line_6[0])[0];
          line_6[1] = num1_count2.filter((item) => item != line_6[2])[0];
        }
      }
    }
  }

  let newNumbwers2 = numbers2.filter(
    (item) =>
      item != line_4[3] &&
      item != line_4[4] &&
      item != line_4[5] &&
      item != line_5[3] &&
      item != line_5[4] &&
      item != line_5[5]
  );
  // console.log(newNumbwers2);
  let num2_count1 = newNumbwers2.filter(
    (item) => item != line_1[3] && item != line_2[3] && item != line_3[3]
  );
  let num2_count2 = newNumbwers2.filter(
    (item) => item != line_1[4] && item != line_2[4] && item != line_3[4]
  );
  let num2_count3 = newNumbwers2.filter(
    (item) => item != line_1[5] && item != line_2[5] && item != line_3[5]
  );

  let arrCount2 = [num2_count1, num2_count2, num2_count3];
  // console.log(num2_count1, num2_count2, num2_count3);

  for (let i = 0; i < arrCount2.length; i++) {
    if (arrCount2[i].length === 1) {
      // console.log(i);
      line_6[i + 3] = arrCount2[i][0];
      newNumbwers2 = newNumbwers2.filter((item) => item != arrCount2[i][0]);
      // console.log(newNumbwers2);
      if (i === 0) {
        for (let i = newNumbwers2.length - 1; i >= 0; --i) {
          let num = randomNum(i, 0);
          line_6.push(newNumbwers2.splice(num, 1)[0]);
        }
      } else if (i === 1) {
        // for (let i = newNumbwers1.length - 1; i >= 0; --i) {
        line_6[3] = newNumbwers2[randomNum(0, 1)];
        // }
        newNumbwers2 = newNumbwers2.filter((item) => item != line_6[3]);
        line_6.push(newNumbwers2[0]);
        // console.log(newNumbwers1)
      } else if (i === 2) {
        line_6[3] = newNumbwers2[randomNum(0, 1)];
        newNumbwers2 = newNumbwers2.filter((item) => item != line_6[3]);
        line_6[4] = newNumbwers2[0];
      }
    } else if (
      arrCount2[0].length === 2 &&
      arrCount2[1].length === 2 &&
      arrCount2[2].length === 2
    ) {
      // console.log(num2_count1,num2_count2,num2_count3)
      // console.log(newNumbwers2)
      for (let i = num2_count1.length - 1; i >= 1; --i) {
        let num = randomNum(i, 0);
        line_6.push(num2_count1.splice(num, 1)[0]);
        if (num2_count2.includes(line_6[3])) {
          line_6[4] = num2_count2.filter((item) => item != line_6[3])[0];
          line_6[5] = num2_count3.filter((item) => item != line_6[4])[0];
        }
        if (num2_count3.includes(line_6[3])) {
          line_6[5] = num2_count3.filter((item) => item != line_6[3])[0];
          line_6[4] = num2_count2.filter((item) => item != line_6[5])[0];
        }
      }
    }
  }

  let newNumbwers3 = numbers2.filter(
    (item) =>
      item != line_4[6] &&
      item != line_4[7] &&
      item != line_4[8] &&
      item != line_5[6] &&
      item != line_5[7] &&
      item != line_5[8]
  );
  let num3_count1 = newNumbwers3.filter(
    (item) => item != line_1[6] && item != line_2[6] && item != line_3[6]
  );
  let num3_count2 = newNumbwers3.filter(
    (item) => item != line_1[7] && item != line_2[7] && item != line_3[7]
  );
  let num3_count3 = newNumbwers3.filter(
    (item) => item != line_1[8] && item != line_2[8] && item != line_3[8]
  );

  let arrCount3 = [num3_count1, num3_count2, num3_count3];
  // console.log(num3_count1, num3_count2, num3_count3);
  for (let i = 0; i < arrCount3.length; i++) {
    if (arrCount3[i].length === 1) {
      // console.log(i);
      line_6[i + 6] = arrCount3[i][0];
      newNumbwers3 = newNumbwers3.filter((item) => item != arrCount3[i][0]);
      // console.log(newNumbwers3);
      if (i === 0) {
        for (let i = newNumbwers3.length - 1; i >= 0; --i) {
          let num = randomNum(i, 0);
          line_6.push(newNumbwers3.splice(num, 1)[0]);
        }
      } else if (i === 1) {
        line_6[6] = newNumbwers3[randomNum(0, 1)];
        newNumbwers3 = newNumbwers3.filter((item) => item != line_6[6]);
        line_6.push(newNumbwers3[0]);
        // console.log(newNumbwers3)
      } else if (i === 2) {
        line_6[6] = newNumbwers3[randomNum(0, 1)];
        newNumbwers3 = newNumbwers3.filter((item) => item != line_6[6]);
        line_6[7] = newNumbwers3[0];
      }
    } else if (
      arrCount3[0].length === 2 &&
      arrCount3[1].length === 2 &&
      arrCount3[2].length === 2
    ) {
      // console.log(num3_count1, num3_count2, num3_count3);
      // console.log(newNumbwers3)
      for (let i = num3_count1.length - 1; i >= 1; --i) {
        let num = randomNum(i, 0);
        line_6.push(num3_count1.splice(num, 1)[0]);
        if (num3_count2.includes(line_6[6])) {
          line_6[7] = num3_count2.filter((item) => item != line_6[6])[0];
          line_6[8] = num3_count3.filter((item) => item != line_6[7])[0];
        }
        if (num3_count3.includes(line_6[6])) {
          line_6[8] = num3_count3.filter((item) => item != line_6[6])[0];
          line_6[7] = num3_count2.filter((item) => item != line_6[8])[0];
        }
      }
    }
  }
  // console.log(newNumbwers3);
  return line_6;
};
let line_6 = generation6();

/////=================LINE 7 ==========////////////
const generation7 = () => {
  let line_7 = [];
  for (let i = 0; i < 9; i++) {
    let arrCount = numbers2.filter(
      (item) =>
        item !== line_1[i] &&
        item !== line_2[i] &&
        item !== line_3[i] &&
        item !== line_4[i] &&
        item !== line_5[i] &&
        item !== line_6[i] &&
        !line_7.includes(item)
    );
    line_7.push(arrCount[randomNum(0, arrCount.length - 1)]);
    // console.log(arrCount);
  }
  return line_7;
};
let line_7 = generation7();
// console.log("RESULT 7", line_7);

/////=================LINE 8 ==========////////////
const generation8 = () => {
  let line_8 = [];
  for (let i = 0; i < 9; i++) {
    let arrCount = numbers2.filter(
      (item) =>
        item !== line_1[i] &&
        item !== line_2[i] &&
        item !== line_3[i] &&
        item !== line_4[i] &&
        item !== line_5[i] &&
        item !== line_6[i] &&
        item !== line_7[i] &&
        !line_8.includes(item)
    );
    line_8.push(arrCount[randomNum(0, arrCount.length - 1)]);
    // console.log(arrCount);
  }
  return line_8;
};
let line_8 = generation8();
// console.log("RESULT 8 ", line_8);

/////=================LINE 9 ==========////////////
const generation9 = () => {
  let line_9 = [];
  for (let i = 0; i < 9; i++) {
    let arrCount = numbers2.filter(
      (item) =>
        item !== line_1[i] &&
        item !== line_2[i] &&
        item !== line_3[i] &&
        item !== line_4[i] &&
        item !== line_5[i] &&
        item !== line_6[i] &&
        item !== line_7[i] &&
        item !== line_8[i] &&
        !line_9.includes(item)
    );
    line_9.push(arrCount[randomNum(0, arrCount.length - 1)]);
    // console.log(arrCount);
  }
  return line_9;
};
let line_9 = generation9();
// console.log("RESULT 9 ", line_9);

/////========VALIDATION=========///////////////
const validation = (result) => {
  let res;
  for (let i = 0; i < result.length; i++) {
    // console.log(!result[i].includes(undefined) && result[i].length === 9)
    // console.log(result[i])
    if (!result[i].includes(undefined) && result[i].length === 9) {
      res = true;
    } else {
      res = false;
      break;
    }
  }
  return res;
};

//////////=============== I N I T ========//////////////////
const generationArr = () => {
  const result = [];
  result.push(
    (line_1 = generation1()),
    (line_2 = generation2()),
    (line_3 = generation3()),
    (line_4 = generation4()),
    (line_5 = generation5()),
    (line_6 = generation6()),
    (line_7 = generation7()),
    (line_8 = generation8()),
    (line_9 = generation9())
  );

  if (validation(result) === true) {
    return result;
  } else {
    return generationArr();
  }
};
let resultArr = generationArr();
// console.log(resultArr)

///////////============= DRAW ======/////////////
const draw = () => {
  for (let i = 0; i < section.length; i++) {
    // console.log(section[i].children)
    for (let y = 0; y < 9; y++) {
      section[i].children[y].innerHTML = `<p>${resultArr[i][y]}</p>`;
    }
  }
};
draw();

const field = [sq_1, sq_2, sq_3, sq_4, sq_5, sq_6, sq_7, sq_8, sq_9];
const levelHard = (level) => {
  for (let y = 0; y < field.length; y++) {
    for (let i = 0; i < level; i++) {
      field[y][randomNum(0, 8)].innerHTML = " ";
    }
  }
};
levelHard(4);

const initDraw = (line) => {
  for (let i = 0; i < 9; i++) {
    line[i].classList.add("active-line");
  }
};
const paint = (line, sq) => {
  switch (line) {
    case "ln_1":
      initDraw(ln_1);
      break;
    case "ln_2":
      initDraw(ln_2);
      break;
    case "ln_3":
      initDraw(ln_3);
      break;
    case "ln_4":
      initDraw(ln_4);
      break;
    case "ln_5":
      initDraw(ln_5);
      break;
    case "ln_6":
      initDraw(ln_6);
      break;
    case "ln_7":
      initDraw(ln_7);
      break;
    case "ln_8":
      initDraw(ln_8);
      break;
    case "ln_9":
      initDraw(ln_9);
      break;
  }
  switch (sq) {
    case "sq_1":
      initDraw(sq_1);
      break;
    case "sq_2":
      initDraw(sq_2);
      break;
    case "sq_3":
      initDraw(sq_3);
      break;
    case "sq_4":
      initDraw(sq_4);
      break;
    case "sq_5":
      initDraw(sq_5);
      break;
    case "sq_6":
      initDraw(sq_6);
      break;
    case "sq_7":
      initDraw(sq_7);
      break;
    case "sq_8":
      initDraw(sq_8);
      break;
    case "sq_9":
      initDraw(sq_9);
      break;
  }
};
let activeNum;
gameField.addEventListener("click", (event) => {
  if (
    event.target.classList.length !== 0 &&
    event.target.classList[0] !== "game_field"
  ) {
    for (let i = 0; i < 9; i++) {
      for (let y = 0; y < 9; y++) {
        field[i][y].classList.remove("active");
        field[i][y].classList.remove("active-line");
        event.target.classList.add("active");
        activeNum = event.target;
        section[i].classList.remove("active-line");
        paint(event.target.classList[2], event.target.classList[1]);
        event.target.parentNode.classList.add("active-line");
      }
    }
    // console.log(activeNum);
  } else {
    for (let i = 0; i < 9; i++) {
      for (let y = 0; y < 9; y++) {
        field[i][y].classList.remove("active");
        field[i][y].classList.remove("active-line");
        section[i].classList.remove("active-line");
      }
      paint(
        event.target.closest("div").classList[2],
        event.target.closest("div").classList[1]
      );
      event.target.closest("div").parentNode.classList.add("active-line");
      event.target.closest("div").classList.add("active");
    }
  }
});
const activeSection = () => {
  let resArr;
  for (let i = 0; i < 9; i++) {
    for (let y = 0; y < 9; y++) {
      if (section[i].children[y].classList.contains("active")) {
        resArr = resultArr[i][y];
      }
    }
  }
  return resArr;
};
///////// ERROR ANIMATION///////////////
const init = () => {
  let resultUser;
  let errors = 0;
  clav.addEventListener("click", (event) => {
    // console.log(activeSection());
    if (
      +event.target.textContent &&
      !activeNum.children[0] &&
      activeSection() === +event.target.textContent
    ) {
      resultUser = event.target.textContent;
      activeNum.innerHTML = `<p style = "color: rebeccapurple;">${+resultUser}`;
    } else if (
      activeSection() !== event.target.textContent &&
      !activeNum.children[0] &&
      +event.target.textContent
    ) {
      gameField.classList.add("error");
      errors++;
      coutErrors.innerHTML = errors;
      // console.log(errors);
      if (errors === 3) {
        wraper_popap.style.display = "block";
      }
      setTimeout(() => {
        gameField.classList.remove("error");
      }, 500);
    }
    oter: for (let i = 0; i < 9; i++) {
      for (let y = 0; y < 9; y++) {
        if (!section[i].children[y].innerText) {
          // console.log(i, y, !section[i].children[y].innerText);
          break oter;
        }
        if (i === 8 && y === 8) {
          console.log("winn");
          winner.style.display = "block";
          window.addEventListener("click", activeSection, false);
        }
      }
    }
  });
  btnNewgame[1].addEventListener("click", () => {
    wraper_popap.style.display = "none";
    popapLevel.style.display = "block";
    errors = 0;
    coutErrors.innerHTML = errors;
    resultArr = generationArr();
  });
  btnRestart.addEventListener("click", () => {
    errors--;
    coutErrors.innerHTML = errors;
    wraper_popap.style.display = "none";
  });
  btnNewgame[0].addEventListener("click", () => {
    errors = 0;
    popapLevel.style.display = "block";
    coutErrors.innerHTML = errors;
    winner.style.display = "none";
    resultArr = generationArr();
  });
};
init();

/////==================T I M E R ==============
let sec = 0;
let min = 0;
let hrs = 0;
let interval;
const timer = () => {
  ////second
  sec++;
  if (sec < 9) {
    seconds.innerHTML = "0" + sec;
  }
  if (sec > 9) {
    seconds.innerHTML = sec;
  }
  if (sec === 60) {
    min++;
    sec = 0;
    minute.innerHTML = "0" + min;
  }
  if (min < 9) {
    minute.innerHTML = "0" + min;
  }
  if (min > 9) {
    minute.innerHTML = min;
  }
  if (min === 60) {
    min = 0;
    hrs++;
    hours.innerHTML = "0" + hrs;
  }
  if (hrs < 9) {
    hours.innerHTML = "0" + hrs;
  }
  if (hrs > 9) {
    hours.innerHTML = hrs;
  }
};

let timerID = setInterval(timer, 1000);

btnTimerPause.addEventListener("click", () => {
  btnTimerPause.style.display = "none";
  btnTimerPlay.style.display = "block";
  blockPause.style.zIndex = "1";
  console.log("pause");
  clearInterval(timerID);
});
btnTimerPlay.addEventListener("click", () => {
  btnTimerPause.style.display = "block";
  btnTimerPlay.style.display = "none";
  blockPause.style.zIndex = "-2";
  console.log("play");
  timerID = setInterval(timer, 1000);
});

blockPause.addEventListener("click", () => {
  btnTimerPause.style.display = "block";
  btnTimerPlay.style.display = "none";
  blockPause.style.zIndex = "-2";
  console.log("play");
  timerID = setInterval(timer, 1000);
});
/////////////////////// L E V E L ==================
const levelGame = (level) => {
  wraper_popap.style.display = "none";
  popapLevel.style.display = "none";
  errors = 0;
  coutErrors.innerHTML = errors;
  resultArr = generationArr();
  draw();
  levelHard(level);
  clearInterval(timerID);
  sec = 0;
  min = 0;
  hrs = 0;
  timerID = setInterval(timer, 1000);
  setInterval(timer(), 1000);
};

for (let i = 0; i < difficultyLevel.length; i++) {
  difficultyLevel[i].addEventListener("click", (event) => {
    let level = event.target.classList[1];
    console.log(difficultyLevel[i]);
    for (let y = 0; y < difficultyLevel.length; y++) {
      difficultyLevel[y].classList.remove("activeLevel");
    }
    if (level === "easy") {
      levelGame(3);
      difficultyLevel[0].classList.add("activeLevel");
    } else if (level === "medium") {
      levelGame(5);
      difficultyLevel[1].classList.add("activeLevel");
    } else if (level === "hard") {
      difficultyLevel[2].classList.add("activeLevel");
      levelGame(7);
    }
  });
}
