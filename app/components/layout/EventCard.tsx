type Event = {
    image: string;
    name: string;
    month: string;
    day: string | number;
    category: string;
    description: string;
    place: string;
    time: string;
};

export function EventCard({ event }: { event: Event }) {
    return (
        <div className="border-2 border-gray-300 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row p-6 gap-10">
                <div className="relative w-full sm:w-55 h-55 shrink-0 rounded-lg">
                    <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-0 left-0 bg-[#E63946] text-white rounded-lg font-bold overflow-hidden shadow-lg">
                        <div className="px-4 py-2 text-center">
                            <div className="text-sm uppercase">{event.month}</div>
                            <div className="text-4xl font-extrabold leading-none">{event.day}</div>
                        </div>
                    </div>
                </div>
                {/* Content Section */}
                <div className="flex flex-col justify-between">
                    <div>
                        {/* Title */}
                        <h3 className="text-4xl font-bold mb-2">
                            {event.name}
                        </h3>

                        {/* Category */}
                        <p className="text-sm font-semibold mb-3">
                            {event.category}
                        </p>

                        {/* Description */}
                        <p className="text-lg mb-4">
                            {event.description}
                        </p>
                    </div>

                    {/* Location and Time */}
                    <div className="flex flex-wrap gap-4">
                        <span>
                            <span className="font-bold">Place:</span> {event.place}
                        </span>
                        <span>
                            <span className="font-bold">Time:</span> {event.time}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}