/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
*/

/*
0. Creo l'array
1. mostro i dati in console
2. mostro le stesse informazioni nel DOM
3. trasformo la stringa in immagine
4. creo html per ospitare i dati
5. mostro i dati ordinati nel DOM
*/


//creo array con i dati forniti
const employees = [
    { name: 'Wayne Barnett', role: 'Founder & CEO', photo: 'wayne-barnett-founder-ceo.jpg' },
    { name: 'Angela Caroll', role: 'Chief Editor', photo: 'angela-caroll-chief-editor.jpg' },
    { name: 'Walter Gordon', role: 'Office Manager', photo: 'walter-gordon-office-manager.jpg' },
    { name: 'Angela Lopez', role: 'Social Media Manager', photo: 'angela-lopez-social-media-manager.jpg' },
    { name: 'Scott Estrada', role: 'Developer', photo: 'scott-estrada-developer.jpg' },
    { name: 'Barbara Ramos', role: 'Graphic Designer', photo: 'barbara-ramos-graphic-designer.jpg' },
];

//stampo in conole i dati
for (let employee of employees) {
    console.log(`
    il nome è:                 ${employee.name} 
    il suo ruolo in azienda è: ${employee.role} 
    la sua foto è:             ${employee.photo}`)
}
