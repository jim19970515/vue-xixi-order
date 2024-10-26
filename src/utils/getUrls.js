
export const getAssetsFile = (urlName) => {
    return new URL(`/src/assets/image/${urlName}`, import.meta.url).href;
};