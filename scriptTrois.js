let graphisme = [
    {
        image : "graphismeBox/flyer planche 11.jpg",
        nom : "Grandiose - Grandis et Ose",
        texte : "Comment la musique peut-elle aider les jeunes à renforcer leur confiance en eux ? Avec Ellynn Briquet, nous avons exploré cette question à travers un projet mêlant playlists digitales et objet de collection. Deux playlists, deux perspectives : le regard de soi et l’impact de la société. Chaque morceau a été soigneusement sélectionné pour inspirer, motiver et encourager à être soi-même, sans peur du jugement.Pour aller plus loin, nous avons conçu un livret et des pochettes uniques, alliant dessins et photographies, à l’image d’un journal intime musical. Un projet artistique et humain qui nous a permis d’explorer de nouvelles compétences et de sortir de nos zones de confort.",
        imageDeux : "graphismeBox/cd GRANDIOSE cover front and back final_Page_1.jpg",
        imageTrois :"graphismeBox/flyer planche 4.jpg"
    },
    {
        image : "graphismeBox/magazine breq.jpg",
        nom : "Bréquigny Sublimé",
        texte : "texte",
        imageDeux : "graphismeBox/cd GRANDIOSE cover front and back final_Page_1.jpg",
        imageTrois :"graphismeBox/flyer planche 4.jpg"
    },
    {
        image : "graphismeBox/appli mobile.jpg",
        nom : "Application de voyage",
        texte : "Ce projet consistait à créer une application mobile sur le thème du voyage. Application utilisée : Adobe XD",
        imageDeux : "graphismeBox/cd GRANDIOSE cover front and back final_Page_1.jpg",
        imageTrois :"graphismeBox/flyer planche 4.jpg"
    },
    {
        image : "graphismeBox/astronautique mockup.jpg",
        nom : "Affiche",
        texte : "texte",
        imageDeux : "graphismeBox/cd GRANDIOSE cover front and back final_Page_1.jpg",
        imageTrois :"graphismeBox/flyer planche 4.jpg"
    },
    {
        image : "graphismeBox/card.jpg",
        nom : "Bing Bang Circus",
        texte : "texte",
        imageDeux : "graphismeBox/cd GRANDIOSE cover front and back final_Page_1.jpg",
        imageTrois :"graphismeBox/flyer planche 4.jpg"
    },
    {
        image : "graphismeBox/book.jpg",
        nom : "Couverture de livre",
        texte : "Couvertures réalisées pour le livre intitulé Les désastreuses aventures des orphelins Baudelaire écrit par Lemony Snicket en 1999. Application utilisée : Illustrator",
        imageDeux : "graphismeBox/mockup livre 2.jpg"
    },
    {
        image : "graphismeBox/lino jpeg ver.jpg",
        nom : "Linogravure",
        texte : "texte",
        imageDeux : "graphismeBox/cd GRANDIOSE cover front and back final_Page_1.jpg",
        imageTrois :"graphismeBox/flyer planche 4.jpg"
    },
    {
        image : "graphismeBox/Lucile_Collage.jpg",
        nom : "Collage",
        texte : "texte",
        imageDeux : "graphismeBox/cd GRANDIOSE cover front and back final_Page_1.jpg",
        imageTrois :"graphismeBox/flyer planche 4.jpg"
    }
]

function creerCarte(graphisme){
    let projetTemplate = `
    <section class="projetPetit-format">
        <div class="principal">
            <img src="${graphisme.image}" alt="${graphisme.nom}" id="pictureOne"/>
            <h1 class="projetNom">${graphisme.nom}</h1>
        </div>

        <div class="informations hidden">
            <p class="informationTexte">${graphisme.texte}</p>
            <img src="${graphisme.imageDeux}" alt="${graphisme.nom}" id="pictureTwo"/>
            <img src="${graphisme.imageTrois}" alt="${graphisme.nom}" id="pictureThree"/>
        </div>
    </section>
    `;

    let projetGraphisme = document.createElement("div");
    projetGraphisme.innerHTML = projetTemplate;
    projetGraphisme.classList.add("projet-container", "petit-format");


    return projetGraphisme;
}

function ajouterListeners() {
    document.querySelectorAll(".projet-container").forEach(projet => {
        projet.addEventListener("click", function () {

            let isPetit = projet.classList.contains("petit-format");

            // Réinitialiser tous les projets
            document.querySelectorAll(".projet-container").forEach(p => {
                p.classList.remove("grand-format");
                p.classList.add("petit-format");

                // Masquer toutes les informations
                document.querySelectorAll(".projet-container").forEach(p => {
                const infos = p.querySelector(".informations");
                if (infos && infos.classList.contains("visible")) {
                    infos.classList.remove("visible");
                    // Si besoin, tu peux gérer la suppression complète après la transition avec setTimeout
                }
});

            });

            // Si on clique sur une carte en petit format, on l'agrandit et on affiche les infos
            if (isPetit) {
                projet.classList.remove("petit-format");
                projet.classList.add("grand-format");

                const infos = projet.querySelector(".informations");
                if (infos) infos.classList.add("visible");
            }
        });
    });
}



for (let i = 0; i < graphisme.length; i++) {
    let projet = creerCarte(graphisme[i]);
    document.querySelector("main").appendChild(projet);
}
ajouterListeners();

