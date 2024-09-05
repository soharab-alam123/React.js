import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-white py-10">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h6 className="font-semibold mb-4">Company</h6>
                            <ul>
                                <li><a href="#" className="hover:underline">About</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                                <li><a href="#" className="hover:underline">Team</a></li>
                                <li><a href="#" className="hover:underline">Swiggy One</a></li>
                                <li><a href="#" className="hover:underline">Swiggy Instamart</a></li>
                                <li><a href="#" className="hover:underline">Swiggy Genie</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-semibold mb-4">Contact us</h6>
                            <ul>
                                <li><a href="#" className="hover:underline">Help & Support</a></li>
                                <li><a href="#" className="hover:underline">Partner with us</a></li>
                                <li><a href="#" className="hover:underline">Ride with us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-semibold mb-4">Legal</h6>
                            <ul>
                                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                <li><a href="#" className="hover:underline">Investor Relations</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-semibold mb-4">We deliver to:</h6>
                            <ul>
                                <li><a href="#" className="hover:underline">Bangalore</a></li>
                                <li><a href="#" className="hover:underline">Gurgaon</a></li>
                                <li><a href="#" className="hover:underline">Hyderabad</a></li>
                                <li><a href="#" className="hover:underline">Delhi</a></li>
                                <li><a href="#" className="hover:underline">Mumbai</a></li>
                                <li><a href="#" className="hover:underline">Pune</a></li>
                                <li><a href="#" className="hover:underline">+ 589 cities</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-between">
                        <div className="text-center sm:text-left">
                            <p>&copy; 2024 Bundl Technologies Pvt. Ltd</p>
                        </div>
                        <div className="flex mt-4 sm:mt-0">
                            <a href="#" className="mr-4 text-gray-400 hover:text-white">Download Android App</a>
                            <a href="#" className="text-gray-400 hover:text-white">Download iOS App</a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer