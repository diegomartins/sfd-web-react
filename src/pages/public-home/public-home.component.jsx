import React from "react";
import "./public-home.styles.scss";
import PublicAnnouncements from "../../components/public-announcements/public-announcements.component";
import NextEvents from "../../components/next-events/next-events.component";

const PublicHome = () => (
    <div>
        <PublicAnnouncements />
        <NextEvents />
    </div>
);

export default PublicHome;
