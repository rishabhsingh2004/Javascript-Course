
    const timeEl = document.getElementById("time");
    const dateEl = document.getElementById("date");

// const clock = document.querySelector('#clock')

setInterval(() => {
      const now = new Date();
      timeEl.innerHTML = now.toLocaleTimeString();
      dateEl.innerHTML = now.toLocaleDateString();
    }, 1000);