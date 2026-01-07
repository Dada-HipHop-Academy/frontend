import React from 'react';
import { Play } from 'lucide-react';

const MasonryGallery = () => {
    const gallery = [
        // First row
        {
            type: 'grid',
            items: [
                { id: 1, thumbnail: "galerie1.png" },
                { id: 2, thumbnail: "galerie3.png" },
                { id: 3, thumbnail: "galerie2.png" },
                { id: 4, thumbnail: "galerie4.png" }
            ]
        },
        {
            type: 'video',
            id: 5,
            thumbnail: "video-galerie1.png",
            hasPlayButton: true
        },
        // Second row
        {
            type: 'video',
            id: 6,
            thumbnail: "galerie1.png",
            hasPlayButton: true
        },
        {
            type: 'grid',
            items: [
                { id: 7, thumbnail: "galerie1.png" },
                { id: 8, thumbnail: "galerie1.png" },
                { id: 9, thumbnail: "galerie1.png" },
                { id: 10, thumbnail: "galerie1.png" }
            ]
        },
        // Third row
        {
            type: 'grid',
            items: [
                { id: 11, thumbnail: "galerie1.png" },
                { id: 12, thumbnail: "galerie1.png" },
                { id: 13, thumbnail: "galerie1.png" },
                { id: 14, thumbnail: "galerie1.png" }
            ]
        },
        {
            type: 'video',
            id: 15,
            thumbnail: "galerie1.png",
            hasPlayButton: true
        }
    ];

    const renderGridSquare = (items: any) => (
        <div className="grid grid-cols-2 gap-4 aspect-square">
            {items.map((item: any) => (
                <div
                    key={item.id}
                    className="relative group overflow-hidden rounded-2xl cursor-pointer"
                >
                    <img
                        src={item.thumbnail}
                        alt={`Image ${item.id}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
                </div>
            ))}
        </div>
    );

    const renderVideo = (video: any) => (
        <div
            key={video.id}
            className="relative group overflow-hidden rounded-3xl cursor-pointer aspect-square"
        >
            <img
                src={video.thumbnail}
                alt={`Video ${video.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {video.hasPlayButton && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-cyan-400 rounded-full p-6 shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-10 h-10 text-white fill-white" />
                    </div>
                </div>
            )}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
        </div>
    );

    return (
        <div className="min-h-screen p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {gallery.map((item, index) => (
                        item.type === 'grid'
                            ? <div key={`grid-${index}`}>{renderGridSquare(item.items)}</div>
                            : renderVideo(item)
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MasonryGallery;