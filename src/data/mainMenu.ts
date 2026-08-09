interface Menus {
    id:number
    name : string,
    href : string,
    children? : []
}


const mainMenus : Menus[] = [
    {id : 1,name : 'Home' , href : '/' },
    {id : 2,name : 'Salons' , href : '/salons'},
    {id : 3,name : 'Services' , href : '/services'},
    {id : 4,name : 'Pricing' , href : '/Pricing'},
    {id : 5,name : 'How It Works' , href : '/how-it-works'},
    {id : 7,name : 'Faq' , href : '/FAQ'},
    {id : 6,name : 'Contact' , href : '/contact'},
];


export default mainMenus;