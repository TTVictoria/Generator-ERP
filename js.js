

  function generate() {
    const company = document.getElementById("companyName").value;
    const industry = document.getElementById("industry").value;
    const users = document.getElementById("users").value;

    const finance = document.getElementById("finance").checked ? "✔ Finanzbuchhaltung / Fibu\n" : "";
    const order = document.getElementById("order").checked ? "✔ Auftragsbearbeitung / Verkauf\n" : "";
    const purchase = document.getElementById("purchase").checked ? "✔ Einkauf & Lieferantenverwaltung\n" : "";
    const inventory = document.getElementById("inventory").checked ? "✔ Lager & Logistik\n" : "";
    const production = document.getElementById("production").checked ? "✔ Fertigung / Produktion\n" : "";
    const crm = document.getElementById("crm").checked ? "✔ CRM / Kundenmanagement\n" : "";
    const ecom = document.getElementById("ecom").checked ? "✔ E-Commerce / Webshop-Anbindung\n" : "";

    const integration = document.getElementById("integration").value;
    const hosting = document.getElementById("hosting").value;
    const budget = document.getElementById("budget").value;
    const startDate = document.getElementById("startDate").value;

    const output = `🛠️ Lastenheft für die ERP-Auswahl (Schrempp EDV / VARIO)

📌 Unternehmensinformationen
- Firmenname: ${company}
- Branche: ${industry}
- Benutzeranzahl: ${users}

✅ Gewünschte Module:
${finance}${order}${purchase}${inventory}${production}${crm}${ecom}

🔌 Technische Anforderungen:
- Schnittstellen / Integrationen: ${integration}
- Bevorzugte Bereitstellung: ${hosting}

💶 Budget: ${budget}
📅 Gewünschter Projektstart: ${startDate}

➡️ Dieses Lastenheft dient als Grundlage für die Angebotserstellung und die Projektplanung mit der Schrempp EDV GmbH (SIVAS ERP).
`;

    document.getElementById("result").value = output;
  }

function download() {
  const text = document.getElementById('result').value;
  const lines = text.split('\n').map(line => [line]); // each line is in a separate cell

  const worksheet = XLSX.utils.aoa_to_sheet(lines);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Lastenheft");

  XLSX.writeFile(workbook, "ERP-Lastenheft.xlsx");
}

 



 document.addEventListener('contextmenu', event => event.preventDefault());

  document.addEventListener('copy', function(e) {
    e.preventDefault();
    return false;
  }); /* disabling copying, blocking Ctrl+C / CMD+C  */

/* progress */
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  document.querySelector('.progress-bar').style.width = scrolled + '%';
});




function toggleOtherInput() {
  const select = document.getElementById('industry');
  const otherInput = document.getElementById('other-industry-container');
  
  if (select.value === 'Sonstige') {
    otherInput.style.display = 'block';
  } else {
    otherInput.style.display = 'none';
  }
}






function generatePDF() {
  const text = document.getElementById('result').value;
  const doc = new window.jsPDFInstance();

  const marginLeft = 10;
  const marginTop = 40;
  const usableWidth = 190;

  const splitText = doc.splitTextToSize(text, usableWidth);
}
 