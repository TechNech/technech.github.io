const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  document.getElementById("advice-id").innerHTML = `Advice # ${data.slip.id}`;
  document.getElementById("advice").innerHTML = `${data.slip.advice}`;
};

fetchAdvice();
