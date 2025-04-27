import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface LinkItem {
    text: string
    path: string
}

const links: LinkItem[] = [
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Terms of Service', path: '/terms-of-service' },
    { text: 'Pricing Policy', path: '/pricing-policy' },
    { text: 'Editor Policy', path: '/editor-policy' },
]

const MainFooter: React.FC = () => {
    return (
        <footer className="border-t border-gray-200 bg-white py-4">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 lg:px-12">
                {/* Copyright for all screen sizes */}
                <h1 className="text-sm text-black md:hidden text-center w-full">
                    ©{new Date().getFullYear()} gogetwell.ai
                </h1>
                <h1 className="text-xs text-black hidden md:block text-center w-full">
                    ©{new Date().getFullYear()} gogetwell.ai
                </h1>
                
                {/* Footer Links */}
                <ul className="mt-4 md:mt-0 flex gap-x-3 flex-wrap gap-y-3 mx-auto justify-center">
                    {links.map((item, i) => (
                        <li
                            key={i}
                            className="text-black hover:underline hover:text-blue-500 text-xs"
                        >
                            <Link
                                to={item.path}
                                className="focus:outline-none"
                                aria-label={`Go to ${item.text}`}
                            >
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Social Media Links */}
                <div className="flex items-center gap-4 md:gap-8 mt-4 md:mt-0 justify-center">
                    <Link
                        to="https://x.com/gogetwellai"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on Twitter"
                    >
                        <FaTwitter size={25} className="text-primary hover:text-blue-500 transition-colors" />
                    </Link>
                    <Link
                        to="https://www.linkedin.com/company/gogetwellai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on LinkedIn"
                    >
                        <FaLinkedinIn size={25} className="text-primary hover:text-blue-500 transition-colors" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter
