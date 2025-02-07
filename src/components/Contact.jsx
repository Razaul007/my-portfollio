import React from "react";
const Contact = () => {
    return (
        <section id="contact" className="py-12 bg-base-200">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600">
                    I am always open to new opportunities and collaborations. Feel free to reach out to me through the following channels:
                </p>
                <div className="mt-6 space-y-4">
                    <p className="text-lg">
                        📧 <span className="font-medium text-primary">Email:</span> <a href="mailto:razafulalam05@gmail.com" className="text-blue-500 hover:underline">razaulalam05@gmail.com</a>
                    </p>
                    <p className="text-lg">
                        📞 <span className="font-medium text-primary">Phone:</span> <span>+8801712067255</span>
                    </p>
                    <p className="text-lg">
                        💬 <span className="font-medium text-primary">WhatsApp:</span> <span>+8801911538213</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
