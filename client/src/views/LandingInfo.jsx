import React from "react";
import styled from "styled-components";
import img1 from "../assets/IMG_0226_2.jpg";
import img2 from "../assets/IMG_0234.jpg";
import img3 from "../assets/IMG_0243.jpg";
import img4 from "../assets/IMG_0252.jpg";
import img5 from "../assets/IMG_0261.jpg";
import img6 from "../assets/IMG_0306.jpg";
import img7 from "../assets/IMG_0276.jpg";
import img8 from "../assets/IMG_0288.jpg";
import img9 from "../assets/IMG_0247.jpg";

const InfoGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: auto;
	justify-content: center ${"" /* width: 1000px; */} ${"" /* display: grid; */}
		${"" /* width: 1000px; */} ${"" /* width: 1400px; */}
		${"" /* justify-content: center; */} ${"" /* align-items: center; */}
		${
			"" /* margin: 0 auto;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); */
		};
`;
// flex flex-wrap m-auto justify-between gap-5

const ImgContainer = styled.img`
	${
		"" /* width: 240px;
	height: 240px;
	object-fit: cover; */
	}
`;

const LandingInfo = () => {
	return (
		<InfoGrid>
			<div className="flex bg-gray-500">
				<ImgContainer src={img1} className="flex-2 object-cover w-52 h-52" />
				<div className=" flex-1 bg-gray-300 w-52 ">test</div>
			</div>
			<div className="flex">
				<ImgContainer src={img2} className="flex-2 object-cover w-52 h-52" />
				<div className=" flex-1 bg-gray-300 w-52">test</div>
			</div>
			<div className="flex">
				<ImgContainer src={img3} className="flex-2 object-cover w-52 h-52" />
				<div className=" flex-1 bg-gray-300 w-52">test</div>
			</div>
			<div className="flex">
				<ImgContainer src={img4} className="flex-2 object-cover w-52 h-52" />
				<div className=" flex-1 bg-gray-300 w-52">test</div>
			</div>
			<div className="flex">
				<ImgContainer src={img5} className="flex-2 object-cover w-52 h-52" />
				<div className=" flex-1 bg-gray-300 w-52">test</div>
			</div>
			<div className="flex">
				<ImgContainer src={img6} className="flex-2 object-cover w-52 h-52" />
				<div className=" flex-1 bg-gray-300 w-52">test</div>
			</div>
			<div className="flex">
				<ImgContainer src={img7} className="flex-2 object-cover w-52 h-52" />
				<div className=" flex-1 bg-gray-300 w-52">test</div>
			</div>
			<div className="flex">
				<ImgContainer src={img8} className="flex-2 object-cover w-52 h-52" />
				<div className=" flex-1 bg-gray-300 w-52">test</div>
			</div>
			<div className="flex">
				<ImgContainer src={img9} className="flex-2 object-cover w-52 h-52" />
				<div className=" flex-1 bg-gray-300 w-52">test</div>
			</div>
		</InfoGrid>
	);
};
// <div className="grid grid-cols-3 grid-flow-row-dense">
// </div>

export default LandingInfo;
