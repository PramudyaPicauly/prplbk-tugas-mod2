import React, { useState } from "react";
import { dataAegis } from "./data";
import Card from "./components/Card";

function App() {
	const [dataAegisFiltered, setDataAegisFiltered] = useState([]);
	const [keyword, setKeyword] = useState([]);
	const [isSearching, setIsSearching] = useState(false);

	const keywordHandler = (e) => {
		setKeyword(e.target.value);
	};

	const searchHandler = (e) => {
		e.preventDefault();
		setIsSearching(true);
		setDataAegisFiltered(
			dataAegis.filter((data) =>
				data.nama_lengkap.toLowerCase().includes(keyword.toLowerCase())
			)
		);
	};

	return (
		<>
			<form className="form-container" onSubmit={searchHandler}>
				<input type="text" onChange={keywordHandler} />
				<button type="submit">Cari</button>
			</form>
			{isSearching && <Card data={dataAegisFiltered} />}
		</>
	);
}

export default App;
