"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function DropdownFilter({ className = '', categories }) {
    const [selectedCategory, setSelectedCategory] = useState("Tous");
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // Add event listener when dropdown is open
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleClick = (category: any) => {
        setSelectedCategory(category.name);
        setIsOpen(false);
    }

    return (
        <div className={className} ref={dropdownRef}>
            <div className="relative">
                {/*Dropdown button*/}
                <button onClick={() => setIsOpen(!isOpen)} className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-between cursor-pointer">
                    <span className="font-semibold text-gray-800">{selectedCategory}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {/*Dropdown menu*/}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-50 overflow-hidden">
                        {categories.map((category: any) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => handleClick(category)}
                                    className="cursor-pointer w-full px-4 py-3 flex items-center gap-3 hover:bg-red-50 transition-colors text-left border-b border-gray-100 last:border-b-0"
                                >
                                    {Icon && (
                                        <div className="w-8 h-8 flex items-center justify-center bg-red-200 rounded-full shrink-0">
                                            <Icon className="w-4 h-4 text-[#E63946]" />
                                        </div>
                                    )}
                                    <span className="text-gray-800 text-sm font-medium">
                                        {category.name}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}