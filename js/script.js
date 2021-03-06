const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = [
    'blue',
    'orange',
    'purple'
];

{/* <div class="each-icon">

<i class="fas fa-cat"></i>
<div>
    Nome icona
</div>
</div> */}

// ---------------------------------------------Milestone 1--------------------------------------------------
// Partendo dalla seguente struttura dati , 
// mostriamo in pagina tutte le icone disponibili come da layout.
const container = $('.icons-container');
const printIconsInPage = printIcons(icons, container)


//FUNZIONI

// funzione printIcons per stampare nel container le icone
//
// iconToPrint --> array di oggetti; ogni oggetto è u'icona
// container --> oggetto jQuery che rapresenta l'elemento in cui stampare le icone
// return: void
function printIcons(iconToPrint, container) {
    
    iconToPrint.forEach((element) => {
        console.log(element)          
    
        const{name, family, prefix} = element;
        // console.log(element.name)
    
        const iconToPrint = `
        <div class="each-icon">
    
            <i class="${family} ${prefix}${name}"></i>
            <div>
                ${name}
            </div>
        </div>
        `;
    
        container.append(iconToPrint);
    })   
    
}

// per farlo servirà un ciclo FOR EACH





// Milestone 2
// Coloriamo le icone per tipo

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone