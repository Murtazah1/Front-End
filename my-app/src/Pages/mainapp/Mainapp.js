import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/ Navbar';
import Languagetags from '../../Components/LanguageTags/Languagetags';
import VideoCallComponent from '../../Components/VideoCallComponent/VideoCallComponent';
import Room from '../../Components/VideoCallComponent/Room'
import Popup from '../../Components/Popup';
import CreateRoom from '../home/CreateRoom';
import Footer from '../../Components/Footer/footerFile';


export default function Mainapp() {
	const [roomID, setRoomID] = useState(null);

	return (
		<div className="Mainapp">
			{/**
				navbar
				languageTags
				videoInterface
			   */}
			<Navbar />
			<Languagetags items={["ENGLISH","SPANISH"]} />
			<VideoCallComponent/>
			{roomID != null && <Room roomID={roomID}/>}
			{roomID == null && <CreateRoom setRoomID={setRoomID}/>}
			<Popup msg="Would you like to send a friend request? " showPopup={true} />
			<Footer /> 
		</div>
	);
}
