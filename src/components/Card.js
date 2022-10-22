import React from "react";

const Card = ({ data }) => {
	return (
		<>
			{data.length > 0 ? (
				data.map((data, index) => {
					return (
						<div key={index} className="card-container">
							<h1 className="card-title">{data.nama_lengkap}</h1>
							<img
								className="card-picture"
								src="https://marketplace.canva.com/EAEeKH905XY/2/0/1600w/canva-yellow-and-black-gamer-grunge-twitch-profile-picture-Yf5RCMJroQI.jpg"
								alt="card"
							/>
							<div className="card-set">
								<div className="card-form">
									<p>Nama Lengkap</p>
									<p>Nama Panggilan</p>
									<p>Nomor Telepon</p>
									<p>ID Line</p>
									<p>Tanggal Lahir</p>
									<p>NIM</p>
									<p>Email</p>
									<p>Hobi</p>
								</div>
								<div className="card-data">
									<p>{`: ${data.nama_lengkap ? data.nama_lengkap : "-"}`}</p>
									<p>{`: ${
										data.nama_panggilan ? data.nama_panggilan : "-"
									}`}</p>
									<p>{`: ${data.nomor_telepon ? data.nomor_telepon : "-"}`}</p>
									<p>{`: ${data.id_line ? data.id_line : "-"}`}</p>
									<p>{`: ${data.tanggal_lahir ? data.tanggal_lahir : "-"}`}</p>
									<p>{`: ${data.nim ? data.nim : "-"}`}</p>
									<p>{`: ${data.email ? data.email : "-"}`}</p>
									<p>{`: ${data.hobi ? data.hobi : "-"}`}</p>
								</div>
							</div>
						</div>
					);
				})
			) : (
				<p className="not-found">Data tidak ditemukan!</p>
			)}
		</>
	);
};

export default Card;
