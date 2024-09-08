"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var jspdf_1 = __importDefault(require("jspdf"));
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    if (username.trim() === '')
        return;
    // Generate resume content
    var resumeContent = "\n        <h2>Resume of ".concat(username, "</h2>\n        <p>This is the resume content for ").concat(username, ".</p>\n    ");
    // Display resume content
    var resumeContainer = document.getElementById('resumeContainer');
    var resumeContentDiv = document.getElementById('resumeContent');
    if (resumeContainer && resumeContentDiv) {
        resumeContentDiv.innerHTML = resumeContent;
        resumeContainer.style.display = 'block';
    }
    // Generate unique URL
    var baseURL = window.location.origin;
    var uniqueURL = "".concat(baseURL, "/").concat(username, "/resume");
    document.getElementById('shareableLink').value = uniqueURL;
});
(_b = document.getElementById('downloadPDF')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var doc = new jspdf_1.default();
    var resumeContent = document.getElementById('resumeContent').innerText;
    doc.text(resumeContent, 10, 10);
    doc.save('resume.pdf');
});
(_c = document.getElementById('copyLink')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var link = document.getElementById('shareableLink').value;
    navigator.clipboard.writeText(link)
        .then(function () { return alert('Link copied to clipboard!'); })
        .catch(function (err) { return console.error('Failed to copy link: ', err); });
});
