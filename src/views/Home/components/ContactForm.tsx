import { Button, Notification, toast } from '@/components/ui';
import { useState } from 'react';
import { BiPhone, BiSend, BiUser } from 'react-icons/bi';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const ContactForm = () => {
    const [formState, setFormState] = useState({
        fullname: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focused, setFocused] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            // await apiContactUs(formState); // Uncomment when connected
            setIsSubmitting(false);
            toast.push(
                <Notification title="Success" type="success">
                    Successfully submitted!
                </Notification>
            );
            setFormState({ fullname: '', email: '', message: '' });
        } catch (err: any) {
            setIsSubmitting(false);
            toast.push(
                <Notification title="Error" type="danger">
                    {err?.response?.data?.message || 'Something went wrong'}
                </Notification>
            );
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's get in touch!</h2>
                        <p className="text-gray-600 text-lg">
                            Got questions about GoGetWell.AI? Our team is here to help. Contact us for quick and friendly support.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <BiPhone className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-gray-600">Phone</p>
                                <a href="tel:+919811396858" className="text-gray-900 hover:text-primary transition-colors">
                                    +91 9811396858
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <CgMail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-gray-600">Email</p>
                                <a href="mailto:hello@gogetwell.ai" className="text-gray-900 hover:text-primary transition-colors">
                                    hello@gogetwell.ai
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <Link to="https://x.com/gogetwellai" target="_blank" className="bg-purple-100 p-3 rounded-lg hover:bg-purple-200 transition">
                                <BsTwitter className="w-6 h-6 text-primary" />
                            </Link>
                            <Link to="https://www.linkedin.com/company/gogetwellai/" target="_blank" className="bg-purple-100 p-3 rounded-lg hover:bg-purple-200 transition">
                                <BsLinkedin className="w-6 h-6 text-primary" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-50 rounded-2xl shadow-lg p-6 sm:p-10">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                            <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${focused === 'fullname' || formState.fullname ? 'text-primary' : 'text-gray-400'}`}>
                                <BiUser className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                value={formState.fullname}
                                onChange={handleChange}
                                onFocus={() => setFocused('fullname')}
                                onBlur={() => setFocused('')}
                                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                required
                            />
                        </div>

                        <div className="relative">
                            <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${focused === 'email' || formState.email ? 'text-primary' : 'text-gray-400'}`}>
                                <CgMail className="w-5 h-5" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formState.email}
                                onChange={handleChange}
                                onFocus={() => setFocused('email')}
                                onBlur={() => setFocused('')}
                                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                required
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formState.message}
                                onChange={handleChange}
                                onFocus={() => setFocused('message')}
                                onBlur={() => setFocused('')}
                                rows={4}
                                className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                required
                            />
                        </div>

                        <Button
                            loading={isSubmitting}
                            type="submit"
                            className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-2 shadow-md"
                        >
                            <span>Submit</span>
                            <BiSend className="w-5 h-5" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
