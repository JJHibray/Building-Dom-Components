console.log("hello")

const students = [{
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

//   Student Components:


/*const createStudentComponent = (name, subject, info, score) => {
         return `
             <div class="student">
                 <h1 class="xx-large ${score}">${name}</h1>
                 <section class="bordered dashed section--padded">${subject}</section>
                 <aside>${info}</aside>
             </div>
         `
     }
    
     const studentContainer = document.querySelector("#container")
    
    
     for (let i = 0; i < students.length; i++) {
         const student = students[i]
         if (student.score >= 60) {
             studentContainer.innerHTML += createStudentComponent(
                 student.name,
                 student.subject,
                 student.info,
                 "passing"
             )
         } else {
             studentContainer.innerHTML += createStudentComponent(
                 student.name,
                 student.subject,
                 student.info,
                 "failing"
             )
         }
     }*/


// One Object to Rule them All:


// const createStudentComponent = (student) => {
//     if (student.score >= 60) {
//         status = "passing"

//     } else {
//         status = "failing"
//     };

//             return `
//                 <div class="student">
//                      <h1 class="xx-large ${status}">${student.name}</h1>
//                     <section class="bordered dashed section--padded">${student.subject}</section>
//                     <aside>${student.info}</aside>
//                 </div>
//                 `
// }

// const studentContainer = document.querySelector("#container")


// for (let i = 0; i < students.length; i++) {
//     const student = students[i]
//     studentContainer.innerHTML += createStudentComponent(students[i])
// }


// Comp of smaller components

// const h1 = (studentP) => {
//     if (studentP.score >=60) {
//     return  `<h1 class="xx-large passing">${studentP.name}</h1>`;
 
// } else { (studentP.score <=60)
//     return `<h1 class"xxlarge failing">${studentP.name}</h1>`;

//     }
// }

// const sect = (studentP) => {
//     return `<section class="bordered dashed section--padded">${studentP.subject}</section>`;
// }

// const aside = (studentP) => {
//     return `<aside>${studentP.info}</aside>`
// }

// const createStudentComponent = (student) => `
//     <div id="student">
//         ${h1(student.name)}
//         ${section(student.subject)}
//         ${aside(student.info)}
//     </div>
//  ` 
//  const studentContainer = document.querySelector("#container")

//-----------------------------------------------------------------------
// Generic 

const element = (type, studentInfo, classValue) => {
    return `<${type} class="${classValue}">${studentInfo}</${type}>`;

}



const createStudentComponent = (student) => {
    if (student.score >= 60) {
        return `
        <div id="student">
            ${element("h1", student.name, "xx-large passing")}
            ${element("section", student.subject, "bordered dashed section--padded")}
            ${element("aside", student.info, "pushRight")}
        </div>
        `
    } else {
        return `
        <div id="student">
            ${element("h1", student.name, "xx-large failing")}
            ${element("section", student.subject, "bordered dashed section--padded")}
            ${element("aside", student.info, "pushRight")}
        </div>
        `
    }
}

for (let i = 0; i < students.length; i++) {
    container.innerHTML += createStudentComponent(students[i]);
}

