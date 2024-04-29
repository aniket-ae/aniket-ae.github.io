window.onload = function() {
  var sections = document.querySelectorAll('section');
  var toc = document.createElement('nav');
  toc.setAttribute('id', 'toc');

  sections.forEach(function(section, index) {
    var link = document.createElement('a');
    link.setAttribute('href', '#section' + (index + 1));
    link.textContent = section.querySelector('h2').textContent;
    toc.appendChild(link);
  });

  document.body.insertBefore(toc, document.body.firstChild);

  // Function to generate PDF
  function generatePDF() {
    var doc = new jsPDF();
    var sections = document.querySelectorAll('section');

    sections.forEach(function(section, index) {
      if (index > 0) {
        doc.addPage();
      }
      var title = section.querySelector('h2').textContent;
      var content = section.querySelector('p').textContent;
      doc.text(10, 10, title);
      doc.text(10, 20, content);
    });

    doc.save('chapter.pdf');
  }

  // Event listener for the print button
  var printButton = document.getElementById('print-button');
  printButton.addEventListener('click', function() {
    generatePDF();
  });
};
