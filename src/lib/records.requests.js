import { collection, getDocs, where, query, doc, getDoc, writeBatch, increment } from 'firebase/firestore';
import { db } from './config';

const recordsRef = collection(db, "items");

export const getTypes = async (type) => {
    const q = type
    ? query(recordsRef, where('type', '==', type))
    : recordsRef;
    let records = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        records = [...records, {...doc.data(), id: doc.id}];
    });
    return records;
}

//Funciona igual que getTypes pero en este caso se filtra por el valor de genre.
export const getRecords = async (genre) => {
    const q = genre
    ? query(recordsRef, where('genre', '==', genre))
    : recordsRef;
    let records = [];
    const querySnapshot = await getDocs(q);    
    querySnapshot.forEach((doc) => {
        records = [...records, { ...doc.data(), id: doc.id}];        
});

return records;   
};


// Lee un record especídifo de la db

export const getRecord = async (id) => {
    const document = doc(db, "items", id);
    const docSnap = await getDoc(document);

    if(docSnap.exists()) return { id: docSnap.id, ...docSnap.data()};
    return null;
}

//Actualiza un item de la db específico 
export const updateRecord = async (id, item) => {
    const newRecord = await updateDoc(doc(db, "items", id), item);
    return
};

//Elimina un item específico de la db

export const deleteRecord = async (id) => {
    return await deleteDoc(doc(db, "items", id));
};

//Batch - Actualiza los stocks en la d 
export const updateManyRecords = async ( items ) => {
    const batch = writeBatch(db);
    items.forEach((id, qty) => {
        batch.update(doc(db, "items", id), {
            stock: increment(-qty)
        })
    })
    batch.commit();
}