interface Menus {
    id:number
    name : string,
    href : string,
    children? : []
}


const mainMenus : Menus[] = [
    {id : 1,name : 'Home' , href : '/' },
    {id : 2,name : 'Salons' , href : '/salons'},
    {id : 3,name : 'Services' , href : '/Services'},
    {id : 4,name : 'Pricing' , href : '/Pricing'},
    {id : 5,name : 'About' , href : '/About'},
    {id : 6,name : 'Contact' , href : '/Contact'},
];


export default mainMenus;