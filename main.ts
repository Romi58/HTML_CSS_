import jsPDF from 'jspdf';

document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    if (username.trim() === '') return;

    // Generate resume content
    const resumeContent = `
        <h2>Resume of ${username}</h2>
        <p>This is the resume content for ${username}.</p>
    `;

    // Display resume content
    const resumeContainer = document.getElementById('resumeContainer');
    const resumeContentDiv = document.getElementById('resumeContent');
    if (resumeContainer && resumeContentDiv) {
        resumeContentDiv.innerHTML = resumeContent;
        resumeContainer.style.display = 'block';
    }

    // Generate unique URL
    const baseURL = window.location.origin;
    const uniqueURL = `${baseURL}/${username}/resume`;
    (document.getElementById('shareableLink') as HTMLInputElement).value = uniqueURL;
});

document.getElementById('downloadPDF')?.addEventListener('click', () => {
    const doc = new jsPDF();
    const resumeContent = (document.getElementById('resumeContent') as HTMLDivElement).innerText;
    doc.text(resumeContent, 10, 10);
    doc.save('resume.pdf');
});

document.getElementById('copyLink')?.addEventListener('click', () => {
    const link = (document.getElementById('shareableLink') as HTMLInputElement).value;
    navigator.clipboard.writeText(link)
        .then(() => alert('Link copied to clipboard!'))
        .catch(err => console.error('Failed to copy link: ', err));
});

