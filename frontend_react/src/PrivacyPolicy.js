import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Datenschutzerklärung</h1>

      <h2>1. Verantwortliche Stelle</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
        Bilal Yer<br />
        [Straße und Hausnummer]<br />
        [PLZ und Ort]<br />
        E-Mail: [Ihre E-Mail-Adresse]<br />
        Telefon: [Ihre Telefonnummer]
      </p>

      <h2>2. Server-Logfiles</h2>
      <p>
        Beim Besuch unserer Website werden durch den Provider automatisch Informationen in sogenannten Server-Logfiles erfasst, die Ihr Browser an uns übermittelt. Dies sind z.B.:
        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Browsertyp und -version</li>
          <li>Verwendetes Betriebssystem</li>
        </ul>
        Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt.
      </p>

      <h2>3. Cookies</h2>
      <p>
        Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern und Dienste wie Google Maps einzubinden. Diese Cookies werden nur nach Ihrer Einwilligung gesetzt.
      </p>

      <h3>Google Maps</h3>
      <p>
        Diese Website nutzt Google Maps. Wenn Sie die Seite aufrufen, die Google Maps einbettet, werden Nutzerdaten wie Ihre IP-Adresse an Google weitergegeben. 
        Weitere Informationen finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.
      </p>

      <h2>4. Kontaktformular</h2>
      <p>
        Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
      </p>

      <h2>5. E-Mail-Kommunikation</h2>
      <p>
        Wenn Sie uns per E-Mail kontaktieren, werden Ihre Daten zur Bearbeitung der Anfrage genutzt und gespeichert. Wir löschen diese Daten nach Abschluss Ihrer Anfrage.
      </p>

      <h2>6. Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch und Datenübertragbarkeit bezüglich Ihrer bei uns gespeicherten personenbezogenen Daten. Außerdem haben Sie das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren.
      </p>

      <h2>7. Löschfristen</h2>
      <p>
        Wir speichern Ihre Daten nur so lange, wie dies für die genannten Zwecke erforderlich ist. Die Logdaten werden nach [Dauer] gelöscht.
      </p>

      <h2>8. Änderungen der Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen. Bitte überprüfen Sie diese Erklärung regelmäßig.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
