import React from "react";
import { ChevronUp } from "lucide-react";
import { FaHospitalSymbol } from "react-icons/fa";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-gray-100 text-gray-700">

            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Column 1 - Logo & Address */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl"><FaHospitalSymbol /></div>
                        <div>
                            <h2 className="font-semibold text-lg">GENERAL</h2>
                            <p className="text-sm -mt-1">HOSPITAL</p>
                        </div>
                    </div>

                    <p className="mb-4">4321 Gorakhpur in Uttar Pradesh,<br />India 203205.</p>
                    <p>(406) 555-0120</p>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="font-semibold mb-4 tracking-wide">PATIENT INFORMATION</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-blue-600 cursor-pointer">Find a Doctor</li>
                        <li className="hover:text-blue-600 cursor-pointer">Health Library</li>
                        <li className="hover:text-blue-600 cursor-pointer">Clinical Trials</li>
                        <li className="hover:text-blue-600 cursor-pointer">Newsroom</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="font-semibold mb-4 tracking-wide">RESEARCH & EDUCATION</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-blue-600 cursor-pointer">School of Medicine</li>
                        <li className="hover:text-blue-600 cursor-pointer">Medical Education</li>
                        <li className="hover:text-blue-600 cursor-pointer">Research</li>
                        <li className="hover:text-blue-600 cursor-pointer">School of Nursing</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h3 className="font-semibold mb-4 tracking-wide">FOR HEALTH PROFESSIONALS</h3>
                    <ul className="space-y-2">
                        <li className="hover:text-blue-600 cursor-pointer">Transfer a patient</li>
                        <li className="hover:text-blue-600 cursor-pointer">Mount Sinai Connect</li>
                        <li className="hover:text-blue-600 cursor-pointer">Refer a Patient</li>
                        <li className="hover:text-blue-600 cursor-pointer">Nursing</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-300">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

                    <p>© 2026 General Hospital</p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-blue-600">Privacy Policy</a>

                        <button onClick={scrollToTop}
                            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"><ChevronUp size={18} />
                        </button>
                    </div>

                </div>
            </div>

        </footer>
    );
};

export default Footer;