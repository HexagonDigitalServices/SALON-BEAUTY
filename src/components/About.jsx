import React from 'react';
import { FiScissors, FiUser, FiHeart, FiAward } from 'react-icons/fi';
import { GiLipstick } from 'react-icons/gi';
import imgabout from '../assets/imgabout.avif'

const features = [
    {
        icon: <FiScissors className="w-8 h-8" />,
        title: "Expert Stylists",
        desc: "Certified professionals with artistic vision"
    },
    {
        icon: <GiLipstick className="w-8 h-8" />,
        title: "Premium Products",
        desc: "Luxury brands for ultimate beauty experience"
    },
    {
        icon: <FiUser className="w-8 h-8" />,
        title: "Custom Care",
        desc: "Personalized beauty solutions for you"
    },
    {
        icon: <FiHeart className="w-8 h-8" />,
        title: "Passionate Team",
        desc: "Dedicated to enhancing your natural beauty"
    }
];