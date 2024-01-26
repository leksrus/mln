'use client';
export default function Component() {
    return (
        <div className="bg-white w-72 shadow-md mx-auto rounded-xl p-4 transform transition-all hover:-translate-y-4 hover:shadow-xl">
            <p className="text-gray-600">
                <span className="text-lg font-bold text-indigo-500">“
                </span>
                To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                <span className="text-lg font-bold text-indigo-500">
                    ”
                </span>
            </p>
            <div className="flex items-center mt-4">
                <a href="#" className="relative block">
                    <img alt="profil" src="/images/person/1.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                </a>
                <div className="flex flex-col justify-between ml-2">
                    <span className="text-sm font-semibold text-indigo-500">
                        Jean Miguel
                    </span>
                    <span className="flex items-center text-xs">
                        User of Tail-Kit
                        <img src="/icons/rocket.svg" className="w-4 h-4 ml-2" />
                    </span>
                </div>
            </div>
        </div>
    )
};