const globalProps = { options: { api: 'https://api.cbd.int/api' } };

export const getOptions = () => new Promise(loadingIntervalOptions);

export const updateOptions = (options) => { globalProps.options = { ...globalProps.options, ...options }; };

export const initializeOptions = (options = globalProps.options) => { globalProps.options = options; };

// priavte

function loadingIntervalOptions(resolve, reject) {
  const timeOut = setTimeout(() => {
    clearInterval(getTimer());
    reject('Error loading api- globalProps.options not set via initializeApi');
  }, 5000);

  const timer = setInterval(() => {
    const { options } = globalProps;

    if (!options) return;

    const { api  } = options;

    clearInterval(getTimer());
    clearTimeout(getTimeOut());

    if (!api)      throw new Error('api: you must pass an \'api\' param too initializeApi');
    // eslint-disable-next-line consistent-return
    return resolve(Object.freeze(options));
  }, 100);

  function getTimer() { return timer; }
  function getTimeOut() { return timeOut; }
}
