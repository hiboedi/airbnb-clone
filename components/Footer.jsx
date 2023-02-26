import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 px-20  md:px-32 py-14 gap-10 bg-slate-100">
      <div className="space-y-4 text-sm text-gray-500">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>Newsrom</p>
        <p>Investor</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-sm text-gray-500">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not real site</p>
        <p>Its prety awesome clone</p>
        <p>Build by Boedi</p>
        <p>On february 26</p>
      </div>
      <div className="space-y-4 text-sm text-gray-500">
        <h5 className="font-bold">HOST</h5>
        <p>Boedi</p>
        <p>Present</p>
        <p>Mistake Maker</p>
        <p>An ordinay guy</p>
        <p>With extraordinary dream</p>
      </div>
      <div className="space-y-4 text-sm text-gray-500">
        <h5 className="font-bold">SUPPORT</h5>
        <p>@hi.boedi8 on medium patform</p>
        <p>@Boedi420 on twitter</p>
        <p>hi.boedi on GitHub</p>
        <p>hi.boedi7@gmail.com</p>
        <p>Bandung, West Java</p>
      </div>
    </div>
  );
}

export default Footer;
