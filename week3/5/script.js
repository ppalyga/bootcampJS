function getPage() {
    var url = window.location.href,
        page = /\?page=(\d+)/i,
        search = page.exec(url);
    return search !== null ? parseInt(search[1]) : null;
}