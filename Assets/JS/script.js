const students = [
  {
    name: "Shoyo Hinata",
    class: "Fullstack A",
    score: 45,
  },
  {
    name: "Tobio Kageyama",
    class: "Backend B",
    score: 50,
  },
  {
    name: "Toru Oikawa",
    class: "Fullstack A",
    score: 80,
  },
  {
    name: "Tetsuro Kuroo",
    class: "Fullstack B",
    score: 87,
  },
  {
    name: "Kenma Kozume",
    class: "Backend A",
    score: 96,
  },
  {
    name: "Miya Atsumu",
    class: "Fullstack B",
    score: 75,
  },
  {
    name: "Miya Osamu",
    class: "Backend A",
    score: 85,
  },
  {
    name: "Shinsuke Kita",
    class: "Backend B",
    score: 95,
  },
  {
    name: "Kei Tsukishima",
    class: "Fullstack A",
    score: 89,
  },
  {
    name: "Kiyoko Shimizu",
    class: "Fullstack B",
    score: 93,
  },
];

const searchInput = document.getElementById("searchInput");
const studentTable = document.getElementById("studentTable"); 

function getScoreClass(score) {
    if (score >= 85){
        return "score-high";
    } else if (score > 70) {
        return "score-medium";
    } else {
        return "score-low";
    }
}

function renderTable(data) {
  const rows = data.map(
    (student, index) =>
        `<tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td><span class="kelas">${student.class}</span></td>
            <td><span class="score-badge ${getScoreClass(student.score)}">${student.score}</span></td>
        </tr>`,
  );
  studentTable.innerHTML = rows.join("");
}

function filterTable() {
    const keyword = searchInput.value.toLowerCase();

    const filteredStudent = students.filter(
        (student) => student.name.toLowerCase().includes(keyword)
    );

    renderTable(filteredStudent);
}

searchInput.addEventListener("input", filterTable);
renderTable(students);