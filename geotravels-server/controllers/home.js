import path from 'path';

const home = (req, res) => {
    const __dirname = path.resolve(path.dirname(''));
    return res.sendFile(path.join(`${__dirname}/views/index.html`));
};
export default { getHome: home }