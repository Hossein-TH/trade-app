import React from 'react';
import DownloadHeader from "../Components/Download/Download-Header";
import DownloadApp from "../Components/Download/Download-App";
import DownloadDashboard from "../Components/Download/Download-Dashboard";
import DownloadScreenShot from "../Components/Download/Download-ScreenShot";
import DownloadFeatures from "../Components/Download/Download-Features";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const DownloadPage = () => {
    return (
        <>
            <Navbar color="#1d1f34"/>
            <DownloadHeader/>
            <DownloadApp/>
            <DownloadScreenShot/>
            <DownloadFeatures/>
            <DownloadDashboard/>
            <Footer color="#1d1f34"/>
        </>
    );
};

export default DownloadPage;
