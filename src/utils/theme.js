export const isDarkInLE = () => {
    const savedMode = localStorage.getItem('theme');
    return savedMode ? JSON.parse(savedMode) : null;
}

export const setThemeInLE = (mode) => {
    localStorage.setItem('theme', JSON.stringify(mode));
}