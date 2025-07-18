let forms = document.querySelector('form');
forms.addEventListener('submit', function (e) {
    e.preventDefault();
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let results = document.querySelector('#results');
    if(height==="" || height<0 || isNaN(height) ){
        results.innerHTML = `<h2>Please enter a valid height${height}</h2>`;
    }
    else if(weight==="" || weight<0 || isNaN(weight)){
        results.innerHTML = `<h2>Please enter a valid weight${weight}</h2>`;
    }
    else{
        let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        results.innerHTML = `<h2>Your BMI is ${bmi}</h2>`;
    }
})