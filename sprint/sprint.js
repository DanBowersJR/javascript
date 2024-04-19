fetch("./cats.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((cat) => {
      const container = document.createElement("div");

      const div = document.createElement("div");

      div.innerHTML = `<h3>${getCatName(cat)}</h3>
      <h3>${getAge(cat)}</h3>
      <h3>${getCatSize(cat)}</h3>`;

      container.appendChild(div);
      document.body.appendChild(container);

      console.log(getAge(cat));
      console.log(getCatSize(cat));
      console.log(getCatPreference(cat));
    });
  });

function getCatName(cat) {
  return `${cat.fname} ${cat.lname}`;
}

function getAge(cat) {
  return `${cat.fname} is ${
    new Date().getFullYear() - new Date(cat.birthday).getFullYear()
  } years old.`;
}

function getCatSize(cat) {
  if (cat.weight > 9) {
    catSize = `${cat.fname} is a big sized cat`;
  } else {
    catSize = `${cat.fname} is a normal sized cat`;
  }
  return catSize;
}

function getCatPreference(cat) {
  if ((cat.environment = "Outdoor")) {
    catPreference = `${cat.fname} is a outdoors cat`;
  } else {
    catPreference = `${cat.fname} is a indoors sized cat`;
  }
  return catPreference;
}
