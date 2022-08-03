const path = require('path');

function getMessageInitPage(req, res) {
    const viewsPath = path.join(__dirname, '..', 'views', 'users', 'message');

    res.render(viewsPath, {
        title: 'Dev Message Title List',
        heading: 'Steven',
        content: 'Be expert on MERN Stack'
    });
}

module.exports = {
    getMessageInitPage
};