import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { toast } from "react-toastify"
import { db } from "./firebase"


const consultaDB = collection(db, "productos")


export const getProducts = () => {

	const pedidoDB = getDocs(consultaDB)
	pedidoDB
		.then((res) => {
			res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
		
		})
		.catch((e) => {
			toast.error(e)
		})
		console.log(pedidoDB)
	return pedidoDB

}

export const getProductByCategory = (categoria) => {

	const customQuery = query(consultaDB, where("category", "==", categoria))
	const pedidoDB = getDocs(customQuery)

	pedidoDB
		.then((res) => {
		res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
	})
		.catch((e) => {
			toast.error(e)
		})

	return pedidoDB
}

export const getProductById = (id) => {
	const consProd = doc(consultaDB, id)
	const pedidoDB = getDoc(consProd)
   
	pedidoDB
      .then((res) => {
		  res.data()
      })
      .catch((e) => {
        toast.error(e)
      })

	  return pedidoDB
}


