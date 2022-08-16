export interface Category {
    id?: string;
    title?: string;
    slug?: string;
}

export interface CourseViewModel {
    id: string;
    orgCode: string;
    crsCode: number;
    title: string;
    courseSummary: string;
    description: string;
}

export interface Course {
    id?: string;
    title?: string;
    slug?: string;
    description?: string;
    category?: string;
    duration?: number;
    steps?: {
        order?: number;
        title?: string;
        subtitle?: string;
        content?: string;
    }[];
    totalSteps?: number;
    updatedAt?: string;
    featured?: boolean;
    progress?: {
        currentStep?: number;
        completed?: number;
    };
}