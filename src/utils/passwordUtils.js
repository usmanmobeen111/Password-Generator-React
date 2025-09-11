// Function to calculate password strength based on various criteria
// Returns an integer score from 0 to 4 (0 = very weak, 4 = very strong)

export function calculatePasswordStrength(password) {
    if (!password || typeof password !== 'string') {
        return 0;
    }

    let score = 0;

    // Length check
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;

    // Character variety checks
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasPunct = /[!@#$%^&*()_+\-=[]{}|;:,.<>?]/.test(password);

    if (hasLower) score += 1;
    if (hasUpper) score += 1;
    if (hasDigit) score += 1;
    if (hasPunct) score += 1;

    // Cap at 4
    return Math.min(score, 4);
}
