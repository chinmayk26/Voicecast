import React from "react";
import Cards from "../../components/Card/CardUI";
import { useEffect , useState } from "react";
import axios from 'axios'


const Audio_Book = () => {
	const[books , setBooks] = useState(null)
	const  getdata = async() => {
		await axios.get("http://localhost:5500/books").then((res) => setBooks(res.data)).catch(err => console.log(err))
		console.log(books[0].name)
	}
	useEffect( () => {
		// const fun=()=>{console.log("useEffect")
		getdata();},[]);

	
	console.log("render")

	return (
		<div className="container-fluid d-flex justify-content-center">
			<div className="row">
             <div className="col-lg-3">
			{
				books != null  ? books.map(book => <Cards Key={book._id} name={book.name}/>):<div></div>
			}
			</div>
			</div>
		</div>
	);
};

export default Audio_Book;
