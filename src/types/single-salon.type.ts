export default interface Data {
    id : string|number,
    status : string,
    rating:number,
    name : string,
    start_from_price:number,
    slug:string,
    service_count : number,
    video : string,
    address : string,
    ratings : number,
    city : string,
    state : string,
    image : string,
    phone : string,
    videp : string
    small_desc : string,
    desc : string,
    reviews_count : number,
    services : {
         id : string,
         name : string,
         duration : number,
         price : number,
         image : string,
         slug : string

    }[],
    categories : {
        name : string,
        id : number|string,
        slug : string
    }[],
    staffs : {
      name : string,
      id : number|string,
      image : string,
      job_title : string,
      social_media : {
        tiktok:string,
        whatsapp: string,
        instagram: string
      }
  }[],
    reviews : {
        id:string|number,
        rating : number,
        review : string,
        date : string,
        user : string,
        image : string
    }[],
    faqs : {
      question : string,
      answer : string
    }[],
    coordinates : {
      lan : string,
      dan : string
    },
    benefits : {
       name : string
    }[],
    opening_hours : {
      day : string,
      hours : string
    }[],
     percentage : {
        five_star: number,
        four_star: number,
        tree_star: number,
        two_star: number,
        one_star: number
    }
  }