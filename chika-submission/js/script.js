function filter_MySkills(this_type) {
    const types = document.querySelectorAll(
        ".my-skill .my-skill-cards"
    );

    types.forEach((type_) => {
        const skillType = type_.getAttribute("types-skill");
        if (this_type === "all" || skillType === this_type) {
            type_.style.display = "block";
        } else {
            type_.style.display = "none";
        }
    });
}

function skillCards() {
    const types_ = [
        {
            name: "Front End Development",
            myskill:
                "<ul><li>HTML</li><li>CSS</li><li>Javascript</li><li>Framework</li><li>Library</li></ul>",
            this_type: "hard-skill",
        },
        {
            name: "Back End Development",
            myskill:
                "<ul><li>Php</li><li>Java</li><li>C++</li><li>Python</li><li>Node Js</li></li>",
            this_type: "hard-skill",
        },
        {
            name: "Database",
            myskill:
                "<ul><li>MySQL</li><li>SQLite</li><li>Microsoft SQL Server</li></ul>",
            this_type: "hard-skill",
        },
        {
            name: "Cloud Computing",
            myskill:
                "<ul><li>Microsoft Azure</li><li>Docker DevOps</li></ul>",
            this_type: "hard-skill",
        },
        {
            name: "Design",
            myskill:
                "<ul><li>Photoshop</li><li>Figma</li><li>CorelDraw</li><li>Canva</li></ul>",
            this_type: "hard-skill",
        },
        {
            name: "Editing Video",
            myskill:
                "<ul><li>Filmora</li><li>Adobe Premiere Pro</li><li>CapCut</li></ul>",
            this_type: "hard-skill",
        },
        {
            name: "",
            myskill:
                "<ul><li>Adaptability</li><li>Interpersonal skills</li><li>Communication</li><li>Team Work</li><li>Time Management</li><li>Self-Awareness</li><li>Problem-Solving</li><li>Storytelling</li><li>Critical Thinking</li></ul>",
            this_type: "soft-skill",
        },
    ];

    const skillCards = document.querySelector(".my-skill");
    skillCards.innerHTML = "";

    types_.forEach((i_type) => {
        const type = document.createElement("div");
        type.className = "my-skill-cards";
        type.setAttribute("types-skill", i_type.this_type);
        type.innerHTML = `
      <h3>${i_type.name}</h3>
      <p>${i_type.myskill}</p>`;

        skillCards.append(type);
    });
}

function eduTraining() {
    const edutras = [
        {
            major: "Informatics Engineering",
            institution: "State Polytechnic of Malang",
            year: "2019-2023",
        },
        {
            major: "Multimedia",
            institution: "State Vocational High School 2 Sukorejo",
            year: "2017-2019",
        },
        {
            major: "Microsoft Azure Data Fundamentals",
            institution: "Microsoft, Kartu Prakerja and Mereka",
            year: "2024",
        },
        {
            major: "Web Developer",
            institution:
                "Indonesian Professional Certification Authority",
            year: "2022",
        },
        {
            major: "Junior Web Developer",
            institution: "Ministry of Communication and Informatics",
            year: "2021",
        },
        {
            major: "Graphic Designer",
            institution:
                "Indonesian Professional Certification Authority",
            year: "2019",
        },
        {
            major: "Junior Graphic Designer",
            institution: "Ministry of Communication and Informatics",
            year: "2019",
        },
    ];

    const edutraCards = document.querySelector(".edutra");
    edutraCards.innerHTML = " ";

    edutras.forEach((edutras) => {
        const edutra = document.createElement("div");
        edutra.className = "my-edutra-cards";
        edutra.innerHTML = `
        <h3>${edutras.major}</h3>
        <p>${edutras.institution}</p>
        <p>${edutras.year}</p>`;

        edutraCards.appendChild(edutra);
    });
}
function myOrganization() {
    const organizas = [
        {
            organiz: "PR IPNU IPPNU LEMAHBANG",
            year: "2020 - Now",
            role: "Social Media Admin"
        },
        {
            organiz: "FORMADIKSI POLINEMA",
            year: "2019",
            role: "Divisi KOMINFO"
        },
        {
            organiz: "HMTI POLINEMA",
            year: "2019",
            role: "Anggota",
        },
    ];

    const organizasCards = document.querySelector(".organization");
    organizasCards.innerHTML = " ";

    organizas.forEach((organizas)=> {
        const organiza = document.createElement("div");
        organiza.className = "my-organization";
        organiza.innerHTML = `
        <div class="h2">${organizas.organiz}</div>
        <div class="p">${organizas.year}</div>
        <div class="p">${organizas.role}</div>
        `;

        organizasCards.appendChild(organiza);
    })
}
const mypros = [
    {
        my_pro: "assets/image/pro1.png",
        type_pro: "my-design",
        desc: "design",
    },
    {
        my_pro: "assets/image/pro2.png",
        type_pro: "my-design",
        desc: "design",
    },
    {
        my_pro: "assets/image/pro3.png",
        type_pro: "my-design",
        desc: "design",
    },
    {
        my_pro: "assets/image/pro4.jpg",
        type_pro: "my-design",
        desc: "design",
    },
    {
        my_pro: "assets/image/pro5.jpg",
        type_pro: "my-design",
        desc: "design",
    },
    {
        my_pro: "assets/image/pro6.jpg",
        type_pro: "my-design",
        desc: "design",
    },
    {
        my_pro: "assets/image/pro7.jpg",
        type_pro: "my-design",
        desc: "design",
    },
    {
        my_pro: "assets/image/pro8.jpg",
        type_pro: "my-design",
        desc: "design",
    },
    {
        my_pro: "assets/image/pro9.jpg",
        type_pro: "my-design",
        desc: "design",
    },
    {
        my_pro: "assets/image/pro10.jpg",
        type_pro: "my-design",
        desc: "design",
    },
    {
        my_pro: "assets/image/pro11.jpg",
        type_pro: "my-design",
        desc: "design",
    },
    {
        my_pro: "assets/image/pro13.png",
        type_pro: "my-design",
        desc: "design",
    },
    {
        my_pro: "assets/image/pro14.png",
        type_pro: "my-design",
        desc: "design",
    },
    {
        my_pro: "assets/image/pro12.png",
        type_pro: "my-design",
        desc: "design",
    },
    {
        my_pro: "assets/image/pro14.webp",
        type_pro: "my-design",
        desc: "design",
    },
    {
        my_pro: "assets/image/ipnuippnu.png",
        type_pro: "my-design",
        desc: "design",
    },
    {
        my_pro: "assets/image/dev1.png",
        type_pro: "my-development",
        desc: "development",
    },
    {
        my_pro: "assets/image/dev2.png",
        type_pro: "my-development",
        desc: "development",
    },
    {
        my_pro: "assets/image/dev3.png",
        type_pro: "my-development",
        desc: "development",
    },
    {
        my_pro: "assets/image/photo1.jpg",
        type_pro: "my-photo",
        desc: "photo",
    },
    {
        my_pro: "assets/image/photo2.jpg",
        type_pro: "my-photo",
        desc: "photo",
    },
    {
        my_pro: "assets/image/photo3.jpg",
        type_pro: "my-photo",
        desc: "photo",
    },
    {
        my_pro: "assets/image/photo4.jpg",
        type_pro: "my-photo",
        desc: "photo",
    },
    {
        my_pro: "assets/image/photo5.jpg",
        type_pro: "my-photo",
        desc: "photo",
    },
    {
        my_pro: "assets/image/photo6.jpg",
        type_pro: "my-photo",
        desc: "photo",
    },
    {
        my_pro: "assets/image/photo9.jpg",
        type_pro: "my-photo",
        desc: "photo",
    },
];

function myPro(type_pro) {
    const myProfilter =
        type_pro === "all"
            ? mypros
            : mypros.filter((mypro) => mypro.type_pro === type_pro);
    const my_pro = document.getElementById("myproject");
    my_pro.innerHTML = "";

    myProfilter.forEach((my_pros) => {
        const div = document.createElement("div");
        div.className = "my-project";
        div.innerHTML = `<div class="my-pro" data-category = "${my_pros.type_pro}">
          <img src="${my_pros.my_pro}">
          <p>${my_pros.desc}</p></div>`;
        myproject.appendChild(div);
    });
}
document
    .getElementById("myPro")
    .addEventListener("change", function () {
        const typemyPro = this.value;
        myPro(typemyPro);
    });
myPro("all");
eduTraining();
myOrganization();
skillCards();
