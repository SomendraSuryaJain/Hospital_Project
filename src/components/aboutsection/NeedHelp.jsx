import React from "react";

const NeedHelp = () => {
    return (
        <section className="relative w-full">
            {/* Background Image */}
            <div className="relative bg-cover bg-center" style={{ backgroundImage: `url("")` }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black"></div>
                {/* bg-blue-900/80 */}

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 text-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Need help?</h2>
                            <p className="text-base sm:text-lg text-white leading-relaxed max-w-xl">
                                Id sed suspendisse massa elit morbi odio justo vitae pharetra.
                                Sed nullam sit est scelerisque tincidunt pellentesque felis.
                            </p>
                        </div>

                        {/* Right Content */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-8 lg:justify-end">
                            {/* Enquiries */}
                            <div>
                                <p className="text-white mb-2">For enquiries, please call</p>
                                <p className="text-2xl font-semibold">(406) 555-0120</p>
                            </div>

                            {/* Divider (visible on larger screens) */}
                            <div className="hidden sm:block h-16 w-px bg-white"></div>

                            {/* Appointments */}
                            <div>
                                <p className="text-white mb-2">For appointments</p>
                                <p className="text-2xl font-semibold">(406) 555-0120</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NeedHelp;