let studentTable = document.getElementById('studentTable');
let studenList = [];

function addStudent() {
    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;
    let math = parseFloat(document.getElementById('math').value);
    let physics = parseFloat(document.getElementById('physics').value);
    let chemistry = parseFloat(document.getElementById('chemistry').value);

    if (!name || !dob || isNaN(math) || isNaN(physics) || isNaN(chemistry)) {
        alert('Vui lòng điền đầy đủ thông tin hợp lệ.');
        return;
    }

    let newStudent = {
        name: name,
        dob: dob,
        math: math,
        physics: physics,
        chemistry: chemistry,

    };
    studenList.push(newStudent);
    displayTable(false);
    
}

function calculateAverage() {
    for (let i = 0; i < studenList.length; i++) {
        const student = studenList[i];
        console.log(student);

        let avg = (student.math + student.physics + student.chemistry) / 3;
        student.avg = avg;

    }

    displayTable(true);
    
}

function determineRank() {
    let rank;
   
    for (let i = 0; i < studenList.length; i++) {
       
        const student = studenList[i];
        console.log(student);
        if (student.avg >= 8.0) {
            rank = "Giỏi";
        } else if (student.avg >= 6.5) {
            rank = "Khá";
        }
        else if (student.avg >= 5.0) {
            rank = "Trung Bình";
        }
        else if (student.avg < 5.0) {
            rank = "Yếu";
        }
        student.rank = rank;
        displayTable(false,true);
        determineExcellence();
      
    }

}

function determineExcellence() {
    const rows = studentTable.rows;

    for (let i = 0; i < rows.length; i++) {
        const average = parseFloat(rows[i].cells[5].innerHTML);
        if (!isNaN(average) && average >= 8.0) {
            rows[i].cells[6].innerHTML = 'Giỏi';
            rows[i].classList.add('excellent');
        } else {
            rows[i].cells[6].innerHTML = '';
            rows[i].classList.remove('excellent');
        }
    }
}

function displayTable(isAverage, isRank) {
    studentTable.innerHTML = "";
    
    for (let i = 0; i < studenList.length; i++) {
        const student = studenList[i];
        console.log(student);


        let row = studentTable.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);

        cell1.innerHTML = student.name;
        cell2.innerHTML = student.dob;
        cell3.innerHTML = student.math;
        cell4.innerHTML = student.physics;
        cell5.innerHTML = student.chemistry;
        if (student.avg != undefined && isAverage) {
            cell6.innerHTML = student.avg;
        }
        if (student.rank != undefined && isRank) {
            cell7.innerHTML = student.rank;
            if (student.avg != undefined) {
                cell6.innerHTML = student.avg;
        }

    }
}
}