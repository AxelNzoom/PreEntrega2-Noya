

    const products = [
        //manga
        {
            id:'1',
            name: 'Mushoku Tensei: Isekai Ittara Honki Dasu',
            price: 4600,
            category: 'manga',
            //img: './components/img/manga/manga-demon.png',
            stock: '8',
            descrip: 'Un joven se encierra en su casa después de sufrir una humillación pública, viviendo en aislamiento durante varios años debido a los traumas que esto le causó. Sin embargo, tras la muerte de sus padres y ser expulsado de su hogar por su actitud, se arrepiente de no haber hecho más con su vida. En ese momento, salva a tres estudiantes de secundaria de un accidente, pero muere en el proceso. Al abrir los ojos, descubre que ha renacido en un mundo de espadas y magia como Rudeus Greyrat. Decidido a vivir su nueva vida sin arrepentimientos, comienza un viaje en busca de un nuevo comienzo.'
        },
        {
            id:'2',
            name: 'Demon Slayer: Kimets no Yaiba',
            price: 5000,
            category: 'manga',
            //img: '',
            stock: '3',
            descrip: 'Tanjirou es el hijo mayor en una familia quien perdió a su padre. Un día, va de visita a otro pueblo para vender carbón, y termina quedándose a pasar la noche en la casa de un lugareño, ya que abunda el rumor de un demonio que ronda por las montañas por la noche. Cuando vuelve a casa al siguiente día, una tragedia lo estaba esperando.'
        },
        //manhwa
        {
            id:'3',
            name: 'Return to Player',
            price: 4000,
            category: 'manhwa',
            //img: '',
            stock: '18',
            descrip: 'Un día el mundo se convirtió en un juego. ¡Monstruos están apareciendo repentinamente y matando humanos, por otro lado, los humanos se han convertido en jugadores y deben cumplir misiones! A nuestro protagonista, Kim Sehan se le dió una segunda oportunidad después de la caída de la humanidad. ¿Será capaz de vencer al sistema que destruyó al mundo?'
        },
        {
            id:'4',
            name: 'Lector Omniciente',
            price: 4700,
            category: 'manhwa',
            //img: '',
            stock: '7',
            descrip: '"Este es un desarrollo que conozco". En el momento en que pensó eso, el mundo había sido destruido y se había desarrollado un nuevo universo. La nueva vida de un lector común comienza en el mundo de la novela, una novela que él solo había terminado.'
        },
        //manhua
        {
            id:'5',
            name: 'The god of war',
            price: 4200,
            category: 'manhua',
            //img: '',
            stock: '12',
            descrip: 'Una guerra desesperada de cuarenta años que ha extinguido tanto la esperanza como la felicidad. Jinwoon, un hombre que fue el dios de la batalla, regresó después de vivir dos vidas para revertir la batalla de la guerra perdida.'
        },
        {
            id:'6',
            name: 'Tales of Demons and Gods',
            price: 4500,
            category: 'manhua',
            //img: '',
            stock: '9',
            descrip: 'Nie Li, el más fuerte Espiritista Demoníaco, en su vida pasada estuvo en la cima del mundo marcial, sin embargo, perdió la vida durante la batalla con él Sabio Emperador y sus bestias, al morir fue devuelto al pasado cuando tenía 13 años gracias a la ayuda del Libro Temporal del Demonio Espiritual y aunque en este momento él es el más débil de su clase con la ayuda de los vastos conocimientos que acumuló de su vida anterior, se transformara en un guerrero formidable.'
        },
    ]

    export const getProducts = ()=>{

        return new Promise((resolve)=>{

            setTimeout(()=>{
                resolve(products)
            },500)
        })
}


export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}


export const getProductsByCategory = (categoryId)=>{

        return new Promise((resolve)=>{

            setTimeout( ()=>{
                resolve(products.filter( prod=>prod.category === categoryId))
            },500)
        })

}