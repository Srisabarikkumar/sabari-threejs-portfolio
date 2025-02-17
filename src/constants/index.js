export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Work',
        href: '#work',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    }
];

export const resume = "/assets/Srisabari-resume.pdf";

export const myProjects = [
    {
        title: 'Job Portal - Job Search Platform',
        desc: 'Job Portal is a cutting-edge digital marketplace that seamlessly connects talented professionals ' +
            'with their ideal career opportunities. This platform provides a user-friendly interface and offers a ' +
            'sophisticated yet intuitive experience.',
        subdesc:
            'Built with Reactjs, Tailwind CSS, node.js, redux and mongodb. Job Portal uses email notification ' +
            'system that lets users to get instant notifications regarding jobs, application tracking and much more.',
        href: 'https://job-portalapp-mern.netlify.app/',
        texture: '/textures/project/jobportal-app.mp4',
        logo: '/assets/job_portal.webp',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Redux',
                path: '/assets/redux.svg',
            },
            {
                id: 4,
                name: 'Nodejs',
                path: '/assets/nodejs.svg',
            },
            {
                id: 5,
                name: 'MongoDB',
                path: '/assets/mongodb.svg',
            },
        ],
    },
    {
        title: 'Chat App - Real-time Chat Application',
        desc: 'Chat App is a modern, feature-rich messaging platform designed for seamless real-time communication ' +
            'across devices. It combines powerful functionality with an intuitive interface to help ' +
            'users stay connected effortlessly.',
        subdesc:
            'Built with MERN stack, Tailwind CSS, Zustand and socketio. Through Chat App ' +
            'users can share images to others, and it enhances user experience by providing ' +
            'various UI themes.',
        href: 'https://chat-app-mern-d2k2.onrender.com',
        texture: '/textures/project/chat-app.mp4',
        logo: '/assets/chat1.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Zustand',
                path: '/assets/zustand.svg',
            },
            {
                id: 4,
                name: 'Nodejs',
                path: '/assets/nodejs.svg',
            },
            {
                id: 5,
                name: 'MongoDB',
                path: '/assets/mongodb.svg',
            },
            {
                id: 5,
                name: 'Socketio',
                path: '/assets/socket-io.svg',
            },
        ],
    },
    {
        title: 'Redux Cart - Online Shopping Platform',
        desc: 'Redux Cart is a robust, user-friendly digital marketplace that transforms online' +
            ' shopping into a seamless and enjoyable experience. It offers a wide range of electronic ' +
            'gadgets and accessories, with a focus on providing a better user experience for users.',
        subdesc: "Built using reactjs, tailwind css, redux for state management. Redux Cart provides a smooth and intuitive " +
            "interface for users to browse and purchase products, manage their cart, and checkout easily.",
        href: 'https://react-redux-assnapp.netlify.app/',
        texture: '/textures/project/redux-cart.mp4',
        logo: '/assets/cart.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Redux',
                path: '/assets/redux.svg',
            },
        ],
    },
    {
        title: 'Image Gallery - Image Gallery Application',
        desc: 'Image Gallery App is a modern, high-performance platform for showcasing and managing ' +
            'digital imagery with advanced features and an elegant user interface. It leverages Next.js\'s ' +
            'powerful image optimization capabilities to deliver a superior visual experience.',
        subdesc:
            'Built with Next.js, Bootstrap, TypeScript and Unsplash API. Next.js Image Gallery app shows the various ways ' +
            'to use Next.js features like image optimization, server-side rendering, static generation, dynamic ' +
            'and ISR fetching.',
        href: 'https://nextjs-13-4-image-gallery.vercel.app/',
        texture: '/textures/project/image-app.mp4',
        logo: '/assets/img-gallery.webp',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Bootstrap',
                path: 'assets/bootstrap.svg',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
        ],
    }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.65 : isMobile ? 0.7 : isTablet ? 0.75 : 0.9,
        deskPosition: isMobile ? [0, -3, 0] : [0, -4, 0],
        cubePosition: isSmall ? [3, -6, 0] : isMobile ? [5, -5, 0] : isTablet ? [7, -6, 0] : [9, -5.5, 2],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [4.5, 3, 3] : isTablet ? [6, 4, 3] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 7, 0] : isTablet ? [-14, 10, 0] : [-23, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-7, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Wipro',
        pos: 'Project Engineer',
        duration: '2021 - 2024',
        title: "Coordinated with cross-functional teams, to ensure timely completion of tasks and meeting " +
            "project deadlines, and have demonstrated technical excellence through working as per the project requirements" +
            " and following best practices in all deliverables.",
        icon: 'https://companieslogo.com/img/orig/WIT-1453b096.png?t=1720244494',
        animation: 'salute',
    }
];

export const certifications = [
    {
        id: 1,
        name: 'DP-900, Microsoft Azure Data Fundamentals',
        org: 'Microsoft',
        duration: '2023',
        title: 'Successfully completed a DP-900 certification from Microsoft. ' +
            'It is a foundational course that covers the fundamentals of Microsoft Azure, ' +
            'including cloud computing, storage, networking, and security. It provides a deep understanding of ' +
            'the Azure platform and its services, enabling users to develop and deploy cloud-based solutions.',
        icon: 'https://cdn-icons-png.flaticon.com/512/732/732221.png',
        animation: 'clapping'
    },
    {
        id: 2,
        name: 'Zen Class Fullstack Developer Program',
        org: 'Guvi Geeks Network, IIT Madras',
        duration: '2024',
        title: 'Successfully completed a MERN fullstack developer certification from Guvi Geeks Network, IIT Madras. ' +
            'I am a certified MERN Stack developer and have worked on various real time projects.',
        icon: '/assets/guvi.webp',
        animation: 'victory',
    },
];

export const footerSocialLinks = [
    {
        id: 1,
        icon: "assets/github.svg",
        href: "https://github.com/srisabarikkumar",
        alt: "github"
    },
    {
        id: 2,
        icon: "assets/linkedin.png",
        href: "https://www.linkedin.com/in/srisabarikkumar-m-708b431a9/",
        alt: "linkedin"
    },
    {
        id: 3,
        icon: "https://img.icons8.com/ios_filled/512/FFFFFF/gmail-new.png",
        href: "mailto:srisabarikkumar@gmail.com",
        alt: "gmail"
    }
];