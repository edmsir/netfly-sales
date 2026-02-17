// Utility function to generate static params for all reps
// This enables static site generation (SSG) for better performance

import { reps } from './reps';

export function generateRepStaticParams() {
    return reps.map((rep) => ({
        username: rep.username,
    }));
}

// Export for use in [username]/page.tsx
export { reps, generateRepStaticParams as generateStaticParams };
