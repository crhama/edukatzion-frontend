export interface Category
{
    id?: string;
    title?: string;
    slug?: string;
}

export interface Course
{
    id?: string;
    title?: string;
    slug?: string;
    description?: string;
    category?: string;
    duration?: number;
    steps?: CourseStepViewModel[];
    totalSteps?: number;
    updatedAt?: string;
    featured?: boolean;
    progress?: {
        currentStep?: number;
        completed?: number;
    };
}

export interface CategoryViewModel
{
    id?: string;
    title?: string;
    slug?: string;
}

export interface CourseDetailsViewModel
{
    id?: string;
    title?: string;
    slug?: string;
    description?: string;
    category?: string;
    duration?: number;
    steps?: CourseStepViewModel[];
    totalSteps?: number;
    updatedAt?: string;
    featured?: boolean;
    progress?: {
        currentStep?: number;
        completed?: number;
    };
}

export interface CourseStepViewModel {
    order?: number;
    title?: string;
    subtitle?: string;
    content?: string;
}
