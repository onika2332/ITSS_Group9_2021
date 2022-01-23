import cron from 'node-cron';
import md5 from 'md5';
import { db } from './firestore.js';
import { doc, getDocs, collection, Timestamp, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore/lite';

cron.schedule('0 0 * * *', async ()=>{
    var docRef = collection(db, 'money_db');
    const docSnap = await getDocs(docRef);
    docSnap.forEach((document) => {
        
        var docRef = doc(db, "money_db", `${document.id}`);
        
        document.data().plans.forEach(async (plan)=>{
            if (plan.expiredAt.seconds < Timestamp.now().seconds) {
                await updateDoc(docRef, {
                    transactions: arrayUnion({
                        id: md5(plan.amount.toString() + plan.desc),
                        amount: plan.amount,
                        description: plan.description,
                        type: plan.type,
                        updatedAt: plan.expiredAt
                    }),
                    plans: arrayRemove({
                        ...plan
                    })
                })
            }
        })
    });
})