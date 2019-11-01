import {CREATE_PRODUCT} from '../actions/types';
const initialState ={
    products :[
        {
            id: "123",
            title:"Lenovo Legion Y540",
            category: "Computers and multimedia",
            description: "Gamer Laptop i7 9th Generation",
            image:"http://www.digitaldreamsjaipur.com/wp-content/uploads/2019/07/Y530-3-600x338.jpg",
            swapWith: "Sony Vaio"
        },
        {
           id: 1,
           title: 'maison' ,
           description: 'maison aupres de la mer superficie: 1500m2',
           category: 'House and garden',
           swapWith:'private jet',
           image:'https://d1ez3020z2uu9b.cloudfront.net/imagecache/rental-homes-photos-spain/Original/23591/9582456-23591-Marbella-Villa_Crop_725_600.jpg'
        },
        {
            id: 2,
            title: 'chaussures' ,
            description: 'chaussures cuirs pointure 44',
            category: 'Clothing and well being',
            swapWith:'veste',
            image:'https://www.bonnegueule.fr/wp-content/uploads/2018/11/xIMG_4845-700x467.jpg.pagespeed.ic.tlH6JFVsFQ.jpg'
         },
         {
            id: 3,
            title: 'chevrolet camaro' ,
            description: 'voiture super sport v8, 450hp',
            category: 'Vehicles',
            swapWith:'kawazaki ninja',
            image:'http://www.clickheretesting.com/BestChevrolet/research/2019/camaro/images/mlp-img-top.jpg'
         },  {
            id: 4,
            title: 'table de jardin' ,
            description: 'table de jardin avec 4 chaises',
            category: 'House and garden',
            swapWith:'i phone 5',
            image:'https://s1.lmcdn.fr/multimedia/731500672854/7c46f58bd7bc3/produits/table-de-jardin-de-repas-naterial-niagara-rectangulaire-gris-de-6-a-8-personnes.jpg?$p=hi-w795'
         },
         {
            id: 5,
            title: 'pc gamer acer predator' ,
            description: 'pc i7, 16 go RAM',
            category: 'Computers and multimedia',
            swapWith:'golf 4',
            image:'https://cdn.vox-cdn.com/thumbor/zHYpJDzUeoYiYBLlKlovcvsdw84=/0x0:2040x1360/1200x675/filters:focal(924x655:1250x981)/cdn.vox-cdn.com/uploads/chorus_image/image/64716381/akrales_190709_3531_0071.0.jpg'
         },
    ]
}
const productReducer = (state=initialState, action) =>{
    switch(action.type){
        case CREATE_PRODUCT:

            return { 
                ...state,
                products:[...state.products ,action.payload]
            }
        default:
        return state
        
    }
    
}

export default productReducer