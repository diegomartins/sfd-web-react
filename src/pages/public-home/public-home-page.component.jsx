import React from "react";
import "./public-home-page.styles.scss";
import PublicAnnouncements from "../../components/public-announcements/public-announcements.component";
import NextEvents from "../../components/next-events/next-events.component";

const PublicHomePage = () => (
    <div>
        <PublicAnnouncements />
        <NextEvents />
    </div>
);

export default PublicHomePage;
