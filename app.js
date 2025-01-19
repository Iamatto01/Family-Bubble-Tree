class ThemeToggler {
    constructor(toggleElement) {
        this.toggleElement = toggleElement;
        this.init();
    }

    init() {
        // Check localStorage for saved theme
        const isDarkMode = localStorage.getItem("theme") === "dark";
        document.body.classList.toggle("night", isDarkMode);
        this.toggleElement.checked = isDarkMode;

        this.toggleElement.addEventListener("change", () => this.toggleTheme());
    }

    toggleTheme() {
        const isDarkMode = this.toggleElement.checked;
        document.body.classList.toggle("night", isDarkMode);
        // Save theme preference to localStorage
        localStorage.setItem("theme", isDarkMode ? "dark" : "day");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector("#themeToggle");
    new ThemeToggler(themeToggle);
});





// Enhanced Family Tree Data Structure with 30+ members
const familyTreeData = {
    parents: [
        {
                name: "Mohd Jamal",
                birthday: "10 Aug 1967",
                image: "images/Abah.png",
        partner: {
                name: "Maimunah",
                birthday: "5 Apr 1967",
                image: "images/Emak.png",
            parents: [
               
                {
                    name: "Yusoff",
                    birthday: "Jan 1, 1938",
                    image: "images/Yusoff.jpg",
            partner :  {
                        name: "Zainab",
                        birthday: "Mar 10, 1940",
                        image: "images/Zainab.jpg"
                    },
                }   
            ],
            siblings: [
                {
                    name: "Ismail",
                    birthday: "Jun 5, 1970",
                    image: "images/aunt_mary.jpg",
                    children: [
                        {
                            name: "Aqil",
                            birthday: "Jul 15, 1995",
                            image: "images/cousin_anna.jpg"
                        },
                        {
                            name: "Cousin Mike",
                            birthday: "Mar 30, 1998",
                            image: "images/cousin_mike.jpg"
                        }
                    ]
                },
                
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Zainal Abidin", // Adds Mom as a sibling in Grandparent tree
                    birthday: "February 22, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
            ]
        },
            parents: [
                {
                    name: "Adi",
                    birthday: "Feb 20, 1942",
                    image: "images/Adi.png"
                },
                {
                    name: "Awang",
                    birthday: "Dec 15, 1939",
                    image: "images/Awang.png"
                }
            ],
            siblings: [
                {
                    name: "Uncle Bob",
                    birthday: "May 12, 1967",
                    image: "image/uncle_bob.jpg",
                    children: [
                        {
                            name: "Cousin Jake",
                            birthday: "Oct 10, 1993",
                            image: "images/cousin_jake.jpg"
                        },
                        {
                            name: "Cousin Lily",
                            birthday: "Dec 25, 2000",
                            image: "images/cousin_lily.jpg"
                        }
                    ]
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
                {
                    name: "Maimunah", // Adds Mom as a sibling in Grandparent tree
                    birthday: "Feb 14, 1968",
                    image: "images/Emak.jpg"
                },
            ]
        }
    ],
    children: [
        {
            name: "Mohd Muizzuddin",
            birthday: "December 3, 1992",
            image: "images/Along.png",
            partner : { name: "Farhana",
                birthday: "Dec 15, 1939",
                image: "images/Kfarhana.png"},
          
            children: [
                {
                    name: "Eliya Hana",
                    birthday: "November 15, 2018",
                    image: "images/Eliya.png",
                    
                },
                {
                    name: "Syifa Hana",
                    birthday: "June 14, 2020",
                    image: "images/Syifa.png",
                },
                {
                    name: "Faeq Mateen",
                    birthday: "January 27, 2023",
                    image: "images/Faeq.png",
                },
                
            ]
        },
        {
            name: "Nurul Fatihah",
            birthday: "February 22, 1994",
            image: "images/Kngah.png",
            partner : { name: "Faizal",
                birthday: "Dec 15, 1939",
                image: "images/Afaizal.png"},
          
            children: [
                {
                    name: "Nur Aliya Amani",
                    birthday: "June 1 , 2020",
                    image: "images/Amani.png",
                    
                },
                {
                    name: "Ahmad Aidan Arif",
                    birthday: "Mar 10, 2020",
                    image: "images/Aidan.png",
                },
                {
                    name: "Ahmad Aidan Ahza",
                    birthday: "April 7, 2023",
                    image: "images/Ahza.png",
                },
                
            ]
        }, 
        {  name: "Mohd Nasirruddin",
            birthday: "November 3, 1995",
            image: "images/Alang.png",
            partner : { name: "Anis",
                birthday: "November 1 1995, ",
                image: "images/Kanis.png"},
          
            children: [
                {
                    name: "Aaira Nafisa",
                    birthday: "June 19, 2020",
                    image: "images/Aaira.png",
                    
                },
                {
                    name: "Aariyan",
                    birthday: "October 10, 2023",
                    image: "images/Aariyan.png",
                },
               
                
            ]
        },
        {
            name: "Mohd Zahiruddin",
            birthday: "November 20, 1997",
            image: "images/Uteh.png",
            partner : { name: "Nur Aina Fatihah",
                birthday: "April 9, 1999",
                image: "images/Kaina.png"},
          
            children: [
                {
                    name: "Nur Nadra Wardina",
                    birthday: "November 1, 2024",
                    image: "images/Nadra.png",
                    
                },
               
            ]
        }, 
        {
            name: "Nurul Faizah",
            birthday: "November 3, 1999",
            image: "images/Kuda.png"
        },
        {
            name: "Muhammad Saifudin",
            birthday: "March 6, 2004",
            image: "images/Adin.png"
        },
        {
            name: "Nurul Farisha",
            birthday: "February 17, 2006",
            image: "images/Asya.png"
        }
    ]
};

// Render Family Tree with "Go Back" functionality
function renderFamilyTree(data, container, previousView = null) {
    // Clear existing content
    container.innerHTML = "";

    // "Go Back" Button
    if (previousView) {
        const backButton = document.createElement("button");
        backButton.textContent = "Go Back";
        backButton.classList.add("go-back");
        backButton.addEventListener("click", () => {
            renderFamilyTree(previousView.data, container, previousView.previousView);
        });
        container.appendChild(backButton);
    }

    // Render Parents
    if (data.parents && data.parents.length > 0) {
        const parentsContainer = document.createElement("div");
        parentsContainer.classList.add("family-level");

       // Inside the "Render Parents" section
data.parents.forEach(parent => {
    const parentBubble = document.createElement("div");
    parentBubble.classList.add("bubble");
    parentBubble.innerHTML = `
        <img src="${parent.image}" alt="${parent.name}">
        <span><strong>${parent.name}</strong></span>
        <span>${parent.birthday}</span>
    `;
    parentsContainer.appendChild(parentBubble);

    parentBubble.addEventListener("click", () => {
        renderFamilyTree({
            parents: parent.parents || [],
            children: parent.siblings || []
        }, container, { data, previousView });
    });

    // Render Partner Bubble
    if (parent.partner) {
        const partnerBubble = document.createElement("div");
        partnerBubble.classList.add("bubble");
        partnerBubble.innerHTML = `
            <img src="${parent.partner.image}" alt="${parent.partner.name}">
            <span><strong>${parent.partner.name}</strong></span>
            <span>${parent.partner.birthday}</span>
        `;
        parentsContainer.appendChild(partnerBubble);

        // Add click event for the partner
        partnerBubble.addEventListener("click", () => {
            renderFamilyTree({
                parents: parent.partner.parents || [],
                children: parent.partner.siblings || []
            }, container, { data, previousView });
        });
    }
});



        

        container.appendChild(parentsContainer);
    }

    // Render Children
    if (data.children && data.children.length > 0) {
        const childrenContainer = document.createElement("div");
        childrenContainer.classList.add("family-level");

        data.children.forEach(child => {
            const childBubble = document.createElement("div");
            childBubble.classList.add("bubble");
            childBubble.innerHTML = `
                <img src="${child.image}" alt="${child.name}">
                <span><strong>${child.name}</strong></span>
                <span>${child.birthday}</span>
            `;

            childBubble.addEventListener("click", () => {
                renderFamilyTree({
                    parents: [child], // Pass the current parents data
                    children: child.children || []
                }, container, { data, previousView });
                
            });

            childrenContainer.appendChild(childBubble);
        });

        container.appendChild(childrenContainer);
    }
}

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    const familyTreeContainer = document.getElementById("family-tree-container");
    if (familyTreeContainer) {
        familyTreeContainer.innerHTML = ""; // Clear any existing content
        renderFamilyTree(familyTreeData, familyTreeContainer);
    }
});
