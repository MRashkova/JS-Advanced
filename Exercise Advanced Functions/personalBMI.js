function solve(name, age, weight, height) {

    let calcBmi = () => {
        return Math.round(weight / (height/100 * height / 100))
    }
    let status = () => {
        if(calcBmi() < 18.5)
            return 'underweight'
        if(calcBmi() < 25)
            return 'normal'
        if (calcBmi() < 30)
            return 'overweight'
        return 'obese'
    }
    let result = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: calcBmi(),
        status: status(),
    }
    if (status() === 'obese') {
        result.recommendation = 'admission required'
    }
    return result

}
