function handleClick() {
  let num = 1;
  const counter = setInterval(() => {
    if (num < 10000001) {
      console.log(num);
      num++;
    } else {
      clearInterval(counter);
    }
  });
}

handleClick();
