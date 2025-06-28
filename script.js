function generateCertificate() {
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let rawDate = document.getElementById("date").value;
    let dateParts = rawDate.split("-"); // [yyyy, mm, dd]
    let formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`; // dd/mm/yyyy

  
    document.getElementById("certName").innerText = name;
    document.getElementById("certCourse").innerText = `${course}`;
    document.getElementById("certDate").innerText = `   ${formattedDate}`;

  }
  
  function downloadCertificate() {
    const element = document.getElementById("certificate");
  
    const opt = {
      margin:       0,
      filename:     'certificate.pdf',
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { scale: 3, useCORS: true },
      jsPDF:        { unit: 'px', format: [1123, 794], orientation: 'landscape' }
    };
  
    html2pdf().set(opt).from(element).save();
  }
  
  
