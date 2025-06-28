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
    html2canvas(document.getElementById("certificate")).then(canvas => {
      let link = document.createElement('a');
      link.download = 'certificate.png';
      link.href = canvas.toDataURL();
      link.click();
    });
  }
  