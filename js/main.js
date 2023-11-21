let ourTeam = [
{
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg"
},

{
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg"
},

{
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-goldon-office-manager.jpg"
},

{
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg"
},

{
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg"
},

{
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg"
}
]

console.log(ourTeam);

for(let i = 0; i < ourTeam.length; i++){
    console.log("Nome:", ourTeam[i].nome);
    console.log("Ruolo:", ourTeam[i].ruolo);
    console.log("foto:", ourTeam[i].foto);
    console.log("");
}