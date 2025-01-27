
function cal() {
    // Get form values
    const ugender = document.getElementById('ugender').value;
    const uweight = document.getElementById('uweight').value;
    const uheight = document.getElementById('uheight').value;
    const age = document.getElementById('age').value;
    const activityLevel = document.getElementById('activityLevel').value;
    const goal = document.getElementById('goal').value;
    const bmrType = document.getElementById('bmrType').value;


    // Function to check if both fields are filled

    if (ugender.trim() !== '' && uweight.trim() !== '' && uheight.trim() !== '' && age.trim() !== '' && activityLevel.trim() !== '' && goal.trim() !== '' && bmrType.trim() !== '') {

        document.getElementById("msg").innerHTML = ""
        document.getElementById("results").style.display = "block";

        // Log the values to the console
        // console.log("Form Data:");
        // console.log("Gender:", ugender);
        // console.log("Weight (kg):", uweight);
        // console.log("Height (cm):", uheight);
        // console.log("Age:", age);
        // console.log("Activity Level:", activityLevel);
        // console.log("Goal:", goal);
        // console.log("BMR Type:", bmrType);

        // Calculation

        if (ugender == 'male') {
            // console.log('male');

            var ree_bmr = Math.round(10 * uweight + 6.25 * uheight - (5 * age) + 5)
            // console.log('BMR = ', ree_bmr);

            var tdee = Math.round(ree_bmr * activityLevel)
            // console.log('TDEE = ', tdee);

            if (goal == 'maintain') {
                var goa = tdee + 0
                // console.log('Maintain ', goa);
            }

            else if (goal == 'g_300') {

                var goa = tdee + 300
                // console.log('goal + 300', goa);
            }

            else if (goal == 'g_500') {

                var goa = tdee + 500
                // console.log('goal + 500', goa);
            }

            else if (goal == 'l_300') {

                var goa = tdee - 300
                // console.log('goal - 300', goa);
            }

            else {
                var goa = tdee - 500
                // console.log('goal - 500', goa);
            }

            document.getElementById("total_calorie").innerHTML = goa

            if (bmrType == 'meso_endo') {
                // console.log("meso endo");

                var protein = Math.round(goa * (35 / 100) / 4)
                // console.log('Pro', protein);
                document.getElementById("protein").value = protein

                var carbs = Math.round(goa * (45 / 100) / 4)
                // console.log('Carb', carbs);
                document.getElementById("carbs").value = carbs

                var fats = Math.round(goa * (20 / 100) / 9)
                // console.log('fat', fats);
                document.getElementById("fats").value = fats

            }
            else {
                // console.log('ecto');

                var protein = Math.round(goa * (30 / 100) / 4)
                // console.log('Pro', protein);
                document.getElementById("protein").value = protein

                var carbs = Math.round(goa * (50 / 100) / 4)
                // console.log('Carb', carbs);
                document.getElementById("carbs").value = carbs

                var fats = Math.round(goa * (20 / 100) / 9)
                // console.log('fat', fats);
                document.getElementById("fats").value = fats
            }

            // for 4 Meals 
            var m_4_p = Math.round(protein / 4)
            document.getElementById("prot").innerHTML = m_4_p
            var m_4_c = Math.round(carbs / 4)
            document.getElementById("carb").innerHTML = m_4_c
            var m_4_f = Math.round(fats / 4)
            document.getElementById("fat").innerHTML = m_4_f

            // for 5 Meals 
            var m_5_p = Math.round(protein / 5)
            document.getElementById("prot5").innerHTML = m_5_p
            var m_5_c = Math.round(carbs / 5)
            document.getElementById("carb5").innerHTML = m_5_c
            var m_5_f = Math.round(fats / 5)
            document.getElementById("fat5").innerHTML = m_5_f

            // for 6 Meals 
            var m_6_p = Math.round(protein / 6)
            document.getElementById("prot6").innerHTML = m_6_p
            var m_6_c = Math.round(carbs / 6)
            document.getElementById("carb6").innerHTML = m_6_c
            var m_6_f = Math.round(fats / 6)
            document.getElementById("fat6").innerHTML = m_6_f


        }

        else {
            // console.log('female');

            var ree_bmr = Math.round(10 * uweight + 6.25 * uheight - (5 * age) - 161)
            // console.log('BMR = ', ree_bmr);

            var tdee = Math.round(ree_bmr * activityLevel)
            // console.log('TDEE = ', tdee);

            if (goal == 'maintain') {
                var goa = tdee + 0
                // console.log('Maintain ', goa);
            }

            else if (goal == 'g_300') {

                var goa = tdee + 300
                // console.log('goal + 300', goa);
            }

            else if (goal == 'g_500') {

                var goa = tdee + 500
                // console.log('goal + 500', goa);
            }

            else if (goal == 'l_300') {

                var goa = tdee - 300
                // console.log('goal - 300', goa);
            }

            else {
                var goa = tdee - 500
                // console.log('goal - 500', goa);
            }

            document.getElementById("total_calorie").innerHTML = goa

            if (bmrType == 'meso_endo') {
                // console.log("meso endo");

                var protein = Math.round(goa * (35 / 100) / 4)
                // console.log('Pro', protein);
                document.getElementById("protein").value = protein

                var carbs = Math.round(goa * (45 / 100) / 4)
                // console.log('Carb', carbs);
                document.getElementById("carbs").value = carbs

                var fats = Math.round(goa * (20 / 100) / 9)
                // console.log('fat', fats);
                document.getElementById("fats").value = fats

            }
            else {
                console.log('ecto');

                var protein = Math.round(goa * (30 / 100) / 4)
                // console.log('Pro', protein);
                document.getElementById("protein").value = protein

                var carbs = Math.round(goa * (50 / 100) / 4)
                // console.log('Carb', carbs);
                document.getElementById("carbs").value = carbs

                var fats = Math.round(goa * (20 / 100) / 9)
                // console.log('fat', fats);
                document.getElementById("fats").value = fats
            }

            // for 4 Meals 
            var m_4_p = Math.round(protein / 4)
            document.getElementById("prot").innerHTML = m_4_p
            var m_4_c = Math.round(carbs / 4)
            document.getElementById("carb").innerHTML = m_4_c
            var m_4_f = Math.round(fats / 4)
            document.getElementById("fat").innerHTML = m_4_f

            // for 5 Meals 
            var m_5_p = Math.round(protein / 5)
            document.getElementById("prot5").innerHTML = m_5_p 
            var m_5_c = Math.round(carbs / 5)
            document.getElementById("carb5").innerHTML = m_5_c
            var m_5_f = Math.round(fats / 5)
            document.getElementById("fat5").innerHTML = m_5_f

            // for 6 Meals 
            var m_6_p = Math.round(protein / 6)
            document.getElementById("prot6").innerHTML = m_6_p
            var m_6_c = Math.round(carbs / 6)
            document.getElementById("carb6").innerHTML = m_6_c
            var m_6_f = Math.round(fats / 6)
            document.getElementById("fat6").innerHTML = m_6_f

        }
    }

    else {

        document.getElementById("msg").innerHTML = "Please fill out all fields."
        document.getElementById("results").style.display = "none";

    }


}


