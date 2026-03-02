import React from 'react';

const ContactSection = () => {
    return (
        <div className="relative w-full">
            {/* h-[50vh] = Screen ki height ka exactly 50% 
          flex items-center justify-center = Text ko bilkul beech mein lane ke liye*/}
            <section className="bg-red-200 h-[50vh] w-full flex items-center px-4">
                <div className="ml-30">
                    {/* Responsive Heading: Mobile par chota, Desktop par bada */}
                    <h1 className="text-black text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight">Contact
                    </h1>
                </div>
            </section>
        </div>
    );
};

export default ContactSection;