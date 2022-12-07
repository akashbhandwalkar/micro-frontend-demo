import axios from 'axios';
class Utils {
  static downloadComponentAssets = componentAssetsPath => {
    const ASSETS_FILE_NAME = 'asset-manifest.json';
    const assetURL = `${componentAssetsPath}/${ASSETS_FILE_NAME}`;
    let fetched = false;

    return axios
      .get(assetURL)
      .then(({ data }) => {
        if (data) {
          const { entrypoints } = data;
          console.log(entrypoints);

          entrypoints.forEach(filteredAsset => {
            if (filteredAsset.indexOf('/css') > 0) {
              this.includeStyle(`${componentAssetsPath}/${filteredAsset}`);
            } else {
              this.includeScript(`${componentAssetsPath}/${filteredAsset}`, false);
            }
          });

          fetched = true;
        }

        return fetched;
      })
      .catch(error => {
        console.error(`Unable to fetch assets from ${assetURL}. Reason - ${error}`);
        return fetched;
      });
  };

  static downloadNGFooterAssets = (componentAssetsPath) => {
    this.includeStyle(`${componentAssetsPath}/styles.css`);
    this.includeScript(`${componentAssetsPath}/runtime.js`);
    this.includeScript(`${componentAssetsPath}/polyfills.js`);
    this.includeScript(`${componentAssetsPath}/main.js`);
  };

  static includeScript = (assetPath, defer = true) => {
    const script = document.createElement('script');
    script.src = assetPath;
    script.defer = defer;

    document.body.appendChild(script);
  }

  static includeStyle = (assetPath) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = assetPath;

    document.head.appendChild(link);
  }
}

export default Utils;
