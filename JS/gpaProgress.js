// Helper to read theme gradient colors dynamically
function getGradientColors() {
    const styles = getComputedStyle(document.documentElement);
    return [
        styles.getPropertyValue("--color-purple").trim(),
        styles.getPropertyValue("--color-navy-light").trim(),
        styles.getPropertyValue("--color-grey-5").trim(),
    ];
}

// Initialize and animate GPA progress circle
function initGPA() {
    const gpa = 3.85;
    const maxGPA = 4;
    const percentage = (gpa / maxGPA) * 100;
    const progressCircle = document.getElementById("progress-circle");
    const gpaText = document.getElementById("gpa-text");

    if (!progressCircle || !gpaText) return;

    let currentPercentage = 0;
    const duration = 2000; // total animation time
    const interval = 6;    // frame update interval
    const step = (percentage / duration) * interval;

    const gradientColors = getGradientColors();

    const updateProgress = () => {
        currentPercentage += step;
        if (currentPercentage >= percentage) {
            currentPercentage = percentage;
            clearInterval(progressInterval);
        }

        progressCircle.style.background = `conic-gradient(
      ${gradientColors[0]} 0%, 
      ${gradientColors[1]} ${currentPercentage}%, 
      ${gradientColors[2]} ${currentPercentage}% 100%)`;

        gpaText.innerText = ((currentPercentage / 100) * maxGPA).toFixed(2);
    };

    let progressInterval;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    progressInterval = setInterval(updateProgress, interval);
                    observer.unobserve(progressCircle);
                }
            });
        },
        { threshold: 0.1 }
    );

    observer.observe(progressCircle);
}
