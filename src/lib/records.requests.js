const records = [
    {
        id:1,
        title:"Kind Of Blue",
        artist:"Miles Davis",
        genre:"Jazz",
        price:20,
        img:"https://upload.wikimedia.org/wikipedia/en/9/9c/MilesDavisKindofBlue.jpg",
        stock:20,
        type: "Vinyl",
        review:"Miles Davis' 'Kind of Blue' is a timeless jazz masterpiece that redefines the genre with its brilliant improvisation and soulful trumpet work. A must-listen for music lovers.",
    },
    {
        id:2,
        title:"A Love Supreme",
        artist:"John Coltrane",
        genre:"Jazz",
        price:25,
        img:"https://http2.mlstatic.com/D_NQ_NP_610148-MLA26247249384_102017-O.webp",
        stock:18,
        type: "Vinyl",
        review: "John Coltrane's 'A Love Supreme' is a transcendent jazz masterpiece, exploring spirituality and artistic brilliance through mesmerizing saxophone and captivating melodies. A timeless classic that continues to inspire and move listeners.",
    },
    {
        id:3,
        title:"The Queen Is Dead",
        artist:"The Smiths",
        genre:"Rock",
        price:17,
        img:"https://upload.wikimedia.org/wikipedia/en/e/ed/The-Queen-is-Dead-cover.png",
        stock:25,
        type: "Vinyl",
        review:"The Smiths' 'The Queen Is Dead': An iconic alternative rock masterpiece with Morrissey's evocative lyrics and Johnny Marr's unforgettable guitar riffs. A timeless gem that continues to captivate listeners.",
    },
    {
        id:4,
        title:"Zenyatta Mondatta",
        artist:"The Police",
        genre:"Rock",
        price:20,
        img:"https://upload.wikimedia.org/wikipedia/en/1/15/Police-album-zenyattamondatta.jpg",
        stock:5,
        type: "Vinyl",
        review:"The Police's 'Zenyatta Mondatta': A timeless blend of new wave and rock, led by Sting's distinctive vocals and backed by infectious melodies. An influential record that cements The Police's place in music history.",
    },
    {
        id:5,
        title:"1999",
        artist:"Prince",
        genre:"Pop",
        price:30,
        img:"https://upload.wikimedia.org/wikipedia/en/9/9c/Prince_-1999.jpg",
        stock:24,
        type: "Vinyl",
        review:"Prince's '1999': A genre-blending masterpiece with electrifying vocals and infectious grooves. A trailblazing album that shaped modern pop music.",
    },
    {
        id:6,
        title:"Endless Summer Vacation",
        artist:"Miley Cyrus",
        genre:"Pop",
        price:10,
        img:"https://m.media-amazon.com/images/I/31WmKkRakeL._SX300_SY300_QL70_FMwebp_.jpg",
        stock:45,
        type: "Cd",
        review:"Miley Cyrus' 'Endless Summer Vacation': A vibrant pop album filled with catchy tunes and carefree vibes. The perfect soundtrack for unforgettable summer days.",
    },
    {
        id:7,
        title:"After The Rain",
        artist:"Muddy Waters",
        genre:"Blues",
        price:16,
        img:"https://upload.wikimedia.org/wikipedia/en/3/33/Muddy_Waters_After_the_Rain.jpg",
        stock:11,
        type: "Vinyl",
        review:"Muddy Waters' 'After the Rain': A blues masterpiece with soulful vocals and exceptional guitar work. A must-listen for blues enthusiasts, capturing the essence of the genre.",
    },
    {
        id:8,
        title:"Riding With The King",
        artist:"B.B. King & Eric Clapton",
        genre:"Blues",
        price:7,
        img:"https://upload.wikimedia.org/wikipedia/en/f/f6/Claptonridingwiththeking.jpg",
        stock:3,
        type: "Cd",
        review:"BB King's 'Riding with the King': A legendary blues collaboration with Eric Clapton. Soulful vocals and mesmerizing guitar work make this album a blues classic.",
    },
    {
        id:9,
        title:"What's Going On",
        artist:"Marvin Gaye",
        genre:"Funk-Soul",
        price:25,
        img:"https://upload.wikimedia.org/wikipedia/en/8/84/MarvinGayeWhat%27sGoingOnalbumcover.jpg",
        stock:3,
        type: "Vinyl",
        review: "Marvin Gaye's 'What's Going On': A timeless soulful album with socially conscious lyrics that continue to inspire and resonate with listeners. A true classic that transcends generations.",
    },
    {
        id:10,
        title:"Live At The Apollo",
        artist:"James Brown",
        genre:"Funk-Soul",
        price:45,
        img:"https://upload.wikimedia.org/wikipedia/en/5/5a/James_Brown-Live_at_the_Apollo_%28album_cover%29.jpg",
        stock:2,
        type: "Vinyl",
        review: "James Brown's 'Live at the Apollo': A mesmerizing live album showcasing his unmatched showmanship and electrifying voice. A landmark recording that solidified his title as the Godfather of Soul.",
    },
    {
        id:11,
        title:"Modern Clix",
        artist:"Charlie García",
        genre:"Argentine Rock",
        price:12,
        img:"https://upload.wikimedia.org/wikipedia/commons/8/8e/Clics-modernos-charly-garcia-front.jpg",
        stock:2,
        type: "Vinyl",
        review:"Charlie García's 'Modern Clix': A groundbreaking Argentine rock album that showcases innovative songwriting and unique vocals. A timeless masterpiece that defines an era in music history.",
    },
    {
        id:12,
        title:"Pelusón of Milk",
        artist:"Luis Alberto Spinetta",
        genre:"Argentine Rock",
        price:5,
        img:"https://www.cmtv.com.ar/tapas-cd/spinetapelu.webp",
        stock:2,
        type: "Cd",
        review:"Luis Alberto Spinetta's 'Pelusón of Milk': An introspective Argentine rock album with soulful vocals and evocative lyrics. A timeless masterpiece that connects deeply with listeners.",
    },
]

import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from './config';

// Toma el parámetro typeId y devuelve una lista de registros filtrados con respecto al tipo especificado.
// "typeId" puede ser Vinyl o Cd, si typeId tiene un valor la función filtra los registros por ese tipo. 
// Si es nulo o no se proporciona la función devuelve todos los registros.
// Utiliza filter para filtrar los los registros según lo especificado en typeId. 
// setTimeout se utiliza para simular una llamada asíncrona.

const recordsRef = collection(db, "items");


export const getTypes = (typeId) => {
    const filteredRecords = typeId
    ? records.filter((record) => record.type.toLowerCase() === typeId.toLowerCase())
    : records;

    return new Promise((res) => {
        setTimeout(() => {
            res(filteredRecords);            
        }, 2000);
    });
};

//Funciona igual que getTypes pero en este caso se filtra por el valor de genre.
// export const getRecords = (genreId) => {
//     const filteredRecords = genreId
//     ? records.filter((record) => record.genre.toLowerCase() === genreId.toLowerCase())
//     : records;

//     return new Promise((res) => {
//         setTimeout(() => {
//             res(filteredRecords);            
//         }, 2000);
//     });
// };

export const getRecords = async (id) => {
    let records = [];
    const querySnapshot = await getDocs(recordsRef);    
    querySnapshot.forEach((doc) => {
        records = [...records, { ...doc.data(), id: doc.id}];        
});

return records;   
};

// Toma el parámetro recordId y lo busca en el array "records".
// Utiliza "find" para buscar el registro en el array "records" y compara record con record.id para encontrar el registro
// cuyo ID coicide con el de recordId.
  
export const getRecord = (recordId) => {
    const record = records.find((record) => record.id === parseInt(recordId));
    return new Promise((res)=>{
        setTimeout(()=>{
            res(record)
        },2000)
    })
};