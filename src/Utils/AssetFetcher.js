import Utils from "./Utils"

const BASE_URL = window.location.href.indexOf('localhost') > 0 ? 'http://meetup-demo-app.s3-website-us-east-1.amazonaws.com' : '';

export const fetchAssets = () => {
    
    const headerAssetsPath = `${BASE_URL}/header`;
    // const footerAssetsPath = `${BASE_URL}/footer`;
    const ngFooterAssetsPath = `${BASE_URL}/angular_footer`; 

    try {
        // Header assets
        Utils.downloadComponentAssets(headerAssetsPath);

        // React footer assets
        // Utils.downloadComponentAssets(footerAssetsPath);

        // ngFooter assets
        Utils.downloadNGFooterAssets(ngFooterAssetsPath);
    } catch (e) {
        console.error("Somethings wrong!", e);
    }

}
