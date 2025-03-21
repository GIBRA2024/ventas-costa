function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Ventas Costa Cervalle
TEL:+57 3118815967
EMAIL;TYPE=WORK: ventascosta@cervalle.com
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
