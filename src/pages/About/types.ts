import {
    go,
    python,
    laravel,
    postgres,
    mysql,
    redis,
    node,
    javaScript,
    typescript,
    react,
    java, swift, reactNative, flutter, kotlin, jira, figma, adobe
} from "../../common/technologiesImg";

interface Technology {
    name: string;
    icon: string;
}

export type Category = 'backend' | 'frontend' | 'mobile' | 'management';

export type TechnologiesMap = Record<Category, Technology[]>;

export const categories: Array<{key: Category; label: string}> = [
    { key: 'backend', label: 'Back-End' },
    { key: 'frontend', label: 'Front-End' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'management', label: 'Design' }
];

export const technologies: TechnologiesMap = {
    backend: [
        { name: 'Go', icon: go },
        { name: 'Python', icon: python },
        { name: 'PHP', icon: laravel },
        { name: 'PostgreSQL', icon: postgres },
        { name: 'MySQL', icon: mysql },
        { name: 'Redis', icon: redis },
        { name: 'Node.js', icon: node },
        { name: 'Java', icon: java }
    ],
    frontend: [
        { name: 'React', icon: react },
        { name: 'TypeScript', icon: typescript },
        { name: 'JavaScript', icon: javaScript }
    ],
    mobile: [
        { name: 'Swift', icon: swift },
        { name: 'React Native', icon: reactNative },
        { name: 'Flutter', icon: flutter },
        { name: 'Kotlin', icon: kotlin },
    ],
    management: [
        { name: 'Jira', icon: jira },
        { name: 'Figma', icon: figma },
        { name: 'Adobe XD', icon: adobe }

    ]
};